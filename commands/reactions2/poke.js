const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'poke',
    aliases: ["Тыкнуть", "Poke", "тык", "тыкнуть", "Тык"],
    category: "Реакции",
    description: "Тыкнуть",
    example: "`+poke`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896060507390353438/anime-poke.gif", "https://media.discordapp.net/attachments/773984556818497616/896060504320114708/poke-anime.gif", "https://media.discordapp.net/attachments/773984556818497616/896060501413470278/poke-nene.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896060499932905572/mimi-and-neko-cute.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> тыкнул(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}