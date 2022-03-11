const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'pat',
    aliases: ["pat", "погладить"],
    category: "Реакции",
    description: "Погладить",
    example: "`+pat`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896059614569828352/kanna-kamui-pat.gif", "https://media.discordapp.net/attachments/773984556818497616/896059612640473118/neet-anime.gif", "https://media.discordapp.net/attachments/773984556818497616/896059611927433246/umaru-frown.gif", "https://media.discordapp.net/attachments/773984556818497616/896059611298271252/pat-anime.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896059610623008808/anime-pat.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> погладил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
 