const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'num-nutella',
    aliases: ["nutella-num", "num-nut", "nut-num"],
    category: "Реакции",
    description: "Съесть Нутеллу",
    example: "`+num-nut`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
let links = ["https://media.discordapp.net/attachments/773984556818497616/896058772085145610/623f7a6f42bc8aad384a9fd783cc592a2e5074d8_hq.gif", "https://media.discordapp.net/attachments/773984556818497616/896058769493078076/873981c799c41dbe5445bfc5ca36aba1.gif?width=582&height=582", "https://media.discordapp.net/attachments/773984556818497616/896058764422184980/nutella-drawing-35.gif?width=799&height=582"]
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> съел(-а) Нутеллу..`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}