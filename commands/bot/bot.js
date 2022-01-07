const { version } = require("discord.js");
const moment = require("moment");
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
require("moment-duration-format");
const Discord = require("discord.js");
const { promisify } = require("util");
const { no, yes, iconuser, chann, dev, nut } = require('../../emoji.json');
const { color } = require('./../../config.json')
const readdir = promisify(require("fs").readdir);

module.exports = {
    name: 'bot',
    aliases: ["stats", "bot-info", "info-bot"],
    category: "Информация",
    description: "О боте",  
    example: "`+bot`",
    cooldown: 3,
    async execute (message, args) {
      const Stats = stripIndent`
      Каналов: ${message.client.channels.cache.size }
      Участников: ${message.client.users.cache.size }
    `;
    const host = stripIndent`
      Пинг: ${Math.round(message.client.ws.ping)}ms
      RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} МБ
      DiscordJS: v13.3.1
      NodeJS: ${process.version }
    `;
        const embed = new Discord.MessageEmbed()
          .setDescription(`**Nutella | Информация ${nut}**`)
          .setTimestamp()
          .setColor(color)
          .addField('❯ Информация', `\`\`\`${Stats}\`\`\``)
          .addField('❯ Хостинг', `\`\`\`${host}\`\`\``)
          .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
        message.channel.send({ embeds: [embed] });
}}