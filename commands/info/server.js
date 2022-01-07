const { MessageEmbed } = require('discord.js');
const moment = require("moment");
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color } = require('./../../config.json')

module.exports = {
    name: 'server',
    aliases: ["serv", "guild", "сервер"],
    category: "Информация",
    description: "О сервере",  
    example: "`+server`",
    cooldown: 3,
    async execute (message, args) {
    const mention = message.member;
    let servericon = message.guild.iconURL;
    let verifLevels = {
      NONE: "Нет",
      LOW: "Низкий",
      MEDIUM: "Средний",
      HIGH: "Высокий",
      VERY_HIGH: "Очень высокий",
    };
    const serverembed = new MessageEmbed()
      .setAuthor(`${message.guild.name}`, message.guild.iconURL())
      .setThumbnail(servericon)
      .addField(
        `**Основная Информация ${iconuser}**`,
        `Всего участников: \`${message.guild.memberCount}\` \nЛюдей: \`${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        }\` \nБотов: \`${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }\``
      )
      .addField(
        `Обзор ${chann}`,
        `Всего каналов: \`${
          message.guild.channels.cache.size
        }\` \nТекстовых каналов: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size
        }\` \nГолосовых каналов: \`${
          message.guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size
        }\` \nВсего Ролей: \`${
          message.guild.roles.cache.size
        }\` \nВсего Смайликов: \`${message.guild.emojis.cache.size}\``
      )
      .addField(
        `Дополнительная информация 🔍`,
        `Вы зашли: \n\`${mention.joinedAt.toLocaleString()
        }\` \nСервер создан: \n\`${message.guild.createdAt.toLocaleString()}\`\nУровень верификации: \`${
          verifLevels[message.guild.verificationLevel]
        }\``
      )
      .setThumbnail(message.guild.iconURL())
      .setFooter(`ID: ${message.guild.id}`, message.guild.iconURL())
      .setColor(color)
      .setTimestamp();

    message.channel.send({ embeds: [serverembed] });
  },
};