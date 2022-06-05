const db = require('quick.db')
const { MessageEmbed, Collection } = require('discord.js')
const { default_prefix, color, err } = require('../config.json')
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const talkedRecently = new Map();
const now = new Date();
module.exports = async (client, message) => {

    if (!message.guild) return;
    if (message.author.bot) return;
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    
    
    const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`);
    if (!prefixRegex.test(message.content)) return;
    

    const [, matchedPrefix] = message.content.match(prefixRegex);

    const p = matchedPrefix.length;
    const args = message.content.slice(p).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 1) * 1000;
    if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      let embed = new MessageEmbed()
      .setTitle(`Ошибка`)
      .setColor(err)
      .setDescription(`Подождите ${timeLeft.toFixed(1)}с\n Перед тем как использывать команду - \`${command.name}\``)
      return message.channel.send({ embeds: [embed] });
    }
  }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
    let embed = new MessageEmbed()
      .setTitle(`Ошибка`)
      .setColor(err)
      .setDescription(`При выполнении этой команды произошла ошибка`)
    message.channel.send({ embeds: [embed] }).catch(console.error);
  }
} 