const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'offend',
    aliases: ["ofend", "обидиться", "обидится", "обида"],
    category: "Реакции",
    description: "Обидиться",
    example: "`+offend`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
let links = ["https://media.discordapp.net/attachments/773984556818497616/896066763593228398/66bb06bad6657e38ffb993162bfe62c251d8879e_hq.gif", "https://media.discordapp.net/attachments/773984556818497616/896066763647762462/16157631085f199dfab69d0fd30980db6efe955cr1-540-304_hq.gif"]
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> обиделся(-ась) на <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> обиделся(-ась)`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}
} //Если есть пользователь выполнить 1 код. Если нет, то первый
