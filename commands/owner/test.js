const Discord = require("discord.js");
const { yes, no, nut } = require('../../emoji.json')
const fs = require("fs");
const { color } = require('../../config.json')

module.exports = { 
    name: 'test',
    category: "fun",
    description: "Доступ закрыт",
    example: "`+test`",
    cooldown: 3,
  async execute (message, args, reaction, user) {
    if (message.author.id != '720252938802561105') return
    const chx = ""
        let embed = new Discord.MessageEmbed() // <@&915152891289927680>    •
        .setTitle(`Обноевление v0.0.2b!`) // :tada:
        .setColor(color)
        .setDescription(`
>>> Что было добавлено в новом обновлении ? :tada:
• Исправлен баг с командой \`kick\`
• Мы исправили работу команды \`warn\`
• И была доработана система.

Больше команд в обновлении v0.0.5b !
Что ожидать ?
Массовое улучшение категорий: Модерация, Конфиг
И многое другое.
`)
        .setFooter(`Nutella Support`)
message.channel.send({embeds: [embed]}).then(m => {
  m.react(`${yes}`);
});
    message.delete() 
  }}