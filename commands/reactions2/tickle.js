const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'tickle',
    aliases: ["tickle", "пощекотать", "щекотки"],
    category: "Реакции",
    description: "Щекотки",
    example: "`+tickle`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896066374462504990/tickle355e76.gif", "https://media.discordapp.net/attachments/773984556818497616/896066375607533578/ticlet548545.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898891173664530452/tickle_016.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898891174960562226/tickle_008.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898891172871819264/tickle_019.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> защекотал(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
 