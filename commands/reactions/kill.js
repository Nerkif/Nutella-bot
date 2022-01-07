const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kill',
    aliases: ["kil", "килл", "убить"],
    category: "Реакции",
    description: "Убить",
    example: "`+kill`",
    cooldown: 3, 
    async execute (message, args) {
      if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
          let links = ["https://media.discordapp.net/attachments/773984556818497616/896054260922454046/akame-sheele-extase.gif", "https://media.discordapp.net/attachments/773984556818497616/896054261190914058/killing-anime-girl.gif", "https://media.discordapp.net/attachments/773984556818497616/896054264198225952/akame-ga-kill-anime.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896054264365985852/kill-la-kill-anime.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> убил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}