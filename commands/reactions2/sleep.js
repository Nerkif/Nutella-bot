const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'sleep',
    aliases: ["Sleep", "SLEEP", "спать", "Спать"],
    category: "Реакции",
    description: "Уйти спать",
    example: "`+sleep`",
    cooldown: 3,
    async execute (message, args) {
let links = ["https://media.discordapp.net/attachments/773984556818497616/896064595003867196/1546709211_orig.gif?width=1042&height=582", "https://media.discordapp.net/attachments/773984556818497616/896064595112902666/anime-sleep-60.gif", "https://media.discordapp.net/attachments/773984556818497616/896064590239125584/anime-sleep-23.gif?width=961&height=582",
"https://media.discordapp.net/attachments/773984556818497616/896064757780594688/anime-sleepy.gif"]
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> отправился(-ась) спать 😴`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}