const { MessageEmbed } = require('discord.js');
const db = require('quick.db')
const { color } = require('../../config.json')
const { no, owner, yes, prem } = require('../../emoji.json')
const { default_prefix, err, success } = require('../../config.json')

module.exports = {
    name: 'reload',
    async execute (message, args) {
    if(message.author.id !== "720252938802561105") return
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    if (!args[1]) return
      const commandName = args[1];
      const dir = args[0];
      if (!message.client.commands.has(commandName)) return
      delete require.cache[require.resolve(`../${dir}/${commandName}.js`)];
      
      message.client.commands.delete(commandName);
      const props = require(`../${dir}/${commandName}.js`);
      message.client.commands.set(commandName, props);
      let embed = new MessageEmbed()
      .setColor(success)
      .setTitle('Успех')
      .setDescription(`${yes} Команда \`${commandName}\` успешно была перезагружена`)
      message.channel.send({embeds: [embed]});
      
    }}


