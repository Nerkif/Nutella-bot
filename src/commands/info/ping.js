const { MessageEmbed } = require('discord.js');
const { color } = require('../../config.json');
const { no, yes } = require('../../emoji.json')
module.exports = {
    name: 'ping',
    aliases: ["пинг"],
    category: "Информация",
    description: "Задержка бота",
    example: "`!ping`",
    cooldown: 3,
    async execute (message, args) {
    
    let end = Date.now();
    
    let embed = new MessageEmbed()
    .setAuthor("Nutella | Пинг")
    .setDescription(`ПОНГ! ${Math.round(message.client.ws.ping)}ms`)
    .setColor(color);
   message.reply({ embeds: [embed] })
  }
    }