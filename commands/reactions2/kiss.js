const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kiss',
    aliases: ["Поцеловать"],
    category: "Реакции",
    description: "Поцеловать",
    example: "`+kiss`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send(`Вы не можете взаимодействовать с собой этой командой!`) //нельзя взаимодействовать с собой
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896055762944659486/anime-couple.gif", "https://media.discordapp.net/attachments/773984556818497616/896055765301874758/love-anime.gif", "https://media.discordapp.net/attachments/773984556818497616/896055765545148476/kiss-anime.gif",
       "https://media.discordapp.net/attachments/773984556818497616/896055767008952350/kissing-anime.gif", "https://media.discordapp.net/attachments/773984556818497616/896055767667445830/FondEvergreenIcterinewarbler-size_restricted.gif", "https://media.discordapp.net/attachments/773984556818497616/896055771580756078/gif-anime-kisses-24.gif", "https://media.discordapp.net/attachments/773984556818497616/896055771433947197/43114b5842ebf66204d3d0cca3a4c5a5db5a8890r1-500-257_hq.gif",
       "https://media.discordapp.net/attachments/773984556818497616/898891704302714940/kiss_001.gif",
       "https://media.discordapp.net/attachments/773984556818497616/898891705460350986/kiss_045.gif",
       "https://media.discordapp.net/attachments/773984556818497616/898891712523558952/kiss_129.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`❤ <@${message.author.id}> поцеловал(-а) <@${message.mentions.users.first().id}> ❤`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
