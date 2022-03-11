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
      • Серверов: ${message.client.guilds.cache.size}
      • Пользователей: ${message.client.users.cache.size }
      • Команд: ${message.client.commands.size}
      • Каналов: ${message.client.channels.cache.size }
    `;
    const host = stripIndent`
    • Пинг: ${Math.round(message.client.ws.ping)}ms
    • RAM: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} МБ
    • DiscordJS: v13.3.1
    • NodeJS: ${process.version }
    • Бот создан: 20 декабря 2021 г.
    `;
        const embed = new Discord.MessageEmbed()
          .setDescription(`**Nutella | Статистика ${nut}**`)
          .setTimestamp()
          .setColor(color)
          .addField(`» ${dev} | Разработчик`, `ʟᴇʀᴍᴏɴᴛᴏᴠ#9045`)
          .addField(`» ${iconuser} | Информация`, `\`\`\`${Stats}\`\`\``)
          .addField('» ⚙️ | Система', `\`\`\`${host}\`\`\``)
          .addField(`» Прочее:`, `[Support сервер](https://discord.gg/5d8EedyH3r)\n[Пригласить](https://discord.com/api/oauth2/authorize?client_id=922575844902334494&permissions=1524109764855&scope=bot%20applications.commands)`)
          .setFooter(`Nutella | Статистика`, message.author.avatarURL())
        message.reply({ embeds: [embed] });
}}