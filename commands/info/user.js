const { MessageEmbed } = require('discord.js');
const { no, yes, online, offline, idle, dnd, iconuser } = require('../../emoji.json');
const moment = require("moment");
const { color } = require('./../../config.json')
module.exports = {
    name: 'user',
    aliases: ["Nutella | Информация о пользователе"],
    category: "Fun",
    description: "Информация о участнике",
    example: "`+server`",
    cooldown: 3, 
    async execute (message, args) {
    const statuses = {
  online: `Онлайн | ${online}`,
  idle: `Неактивен | ${idle}`,
  dnd: `Не беспокоить | ${dnd}`,
  offline: `Оффлайн | ${offline}`
};
let mbr = message.mentions.members.first() || message.member; //Если есть упомянание, то mbr = тот кого упомянули, если нету то автору сообщения.
      if (mbr){ //Если всё ок.
      const mention = message.member;
      let embed = new MessageEmbed() //Создаём эмбе
      .setColor(color)
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setTitle(`**Информация о пользователе ${iconuser}**`) //Устанавливаем заголовок
      //.setDescription(mbr.user.tag) //Описание - тег юзера.
      .addField("» 🔸 Пользователь:",  mbr.user.tag) //Первое поле - айди автора.
      .addField("» 🔹 ID:",  mbr.user.id) //Первое поле - айди автора.
      .addField("» 🔸 Статус:",  statuses[mbr.presence.status])
      .addField("» 🔹 Никнейм:",  mbr.nickname !== null ? mbr.nickname : "Не имеется") //Второе поле - никнейм (НЕ ПУТАТЬ С НИКОМ И ТЕГОМ)!
      .addField("» 🔸 Присоединился к серверу:", `\`${mention.joinedAt.toLocaleString()}\``) 
      .addField("» 🔹 Аккаунт создан:", `\`${mention.user.createdAt.toLocaleString()}\``) 
      .setFooter("© Nutella. Все права защищены 2021") //Футер
      message.channel.send({embeds: [embed]})
    }}
  }