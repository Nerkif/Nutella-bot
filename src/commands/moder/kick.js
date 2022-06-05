const { MessageEmbed, Permissions } = require('discord.js');
const db = require('quick.db');
const { no, yes } = require('../../emoji.json');
const { color } = require('./../../config.json')
module.exports = {
    name: 'kick',
    aliases: ["kick", "кик"],
    category: "Модерация",
    description: "Выгнать участника",
    example: "`+kick`",
    cooldown: 3,
    accessableby: "Administrator",
    async execute (message, args) {
    let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(color)
    .setDescription(`${no} | У меня недостаточно прав - Выгонять участников`)
  if (!message.guild.me.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(color)
    .setDescription(`${no} | У вас недостаточно прав - Выгонять участников`)
  if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) 
  return message.channel.send({embeds: [noperms2]}) 

    let target = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!args[0]) return message.channel.send("**Введите пользователя которого хотите кикнуть!**");
    if (!target) return message.channel.send("**Пользователя нет на сервере**");
    if (!target.kicknable) return message.channel.send("**Не могу кикнуть этого пользователя**")
    if (target.user.bot) return message.channel.send("**Вы не можете кикнуть бота!**");
    if (!target) {
      return message.channel.send(
        `**${message.author.username}**, Пожалуйста, укажите человека, которого вы хотите кикнуть`);
      }

    if (target.id === message.guild.ownerId) {
      return message.channel.send("Вы не можете кикнуть Владельца сервера!");
    }

    if (target.id === message.author.id) {
      return message.channel.send(
        `**${message.author.username}**, вы не можете кикнуть себя`);
      }

    let reason = args.slice(1).join(" ");
    if (!reason) reason = "Без причины";

    const embed = new MessageEmbed()
      .setTitle("Nutella | Модерация")
      .setColor(color)
      .setThumbnail(target.user.displayAvatarURL)
      .setDescription(
        `**Кикнут участник** \nКикнут: ${target} \nПричина: ${reason} \nМодератор: ${message.member}`)

      .setTimestamp();

    message.channel.send({embeds: [embed]});

    target.kick(args[0]);

    target.send(`${yes} | Вас выгнали с сервера \`${message.guild.name}\`\nПричина кика: ${reason}\nМодератор: ${message.member}`);

  },

};






