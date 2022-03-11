const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'cry',
    aliases: ["cry", "плакать", "плачь"],
    category: "Реакции",
    description: "Заплакать",
    example: "`+cry`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
let links = ["https://media.discordapp.net/attachments/773984556818497616/896048469901443103/cry1.gif", "https://media.discordapp.net/attachments/773984556818497616/896048610632957993/cry2.gif", "https://media.discordapp.net/attachments/773984556818497616/896048705550045224/cry3.gif",
"https://media.discordapp.net/attachments/773984556818497616/896048723044483083/cry4.gif"]
if (message.mentions.users.first()) {
      const answer = new MessageEmbed() 
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> расплакался(-ась) из-за <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> расплакался(-ась)`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}
} //Если есть пользователь выполнить 1 код. Если нет, то первый