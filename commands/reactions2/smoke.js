const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'smoke',
    aliases: ["smok", "закурить", "курить"],
    category: "Реакции",
    description: "Закурить сигарету",
    example: "`+smoke`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
let links = ["https://media.discordapp.net/attachments/773984556818497616/898889944964141076/tumblr_orcpabAWTV1sqhf08o1_500.gif",
"https://media.discordapp.net/attachments/773984556818497616/898889942430810142/104b9ea0f2dea93d9374b092b82e1256.gif",
"https://media.discordapp.net/attachments/773984556818497616/898889941176700968/SphericalDependentHalibut-small.gif",
"https://media.discordapp.net/attachments/773984556818497616/898889935422103603/tumblr_owayv78WNu1vbfbhho1_500.gif"]
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> закурил(-а) с <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> прикурил(-а)`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}
} //Если есть пользователь выполнить 1 код. Если нет, то первый
