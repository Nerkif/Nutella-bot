const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'hug',
    aliases: ["Обнять"],
    category: "Реакции",
    description: "Обнять",
    example: "`+hug`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
      let links = ["https://media.discordapp.net/attachments/773984556818497616/896050923196006400/original.gif", "https://media.discordapp.net/attachments/773984556818497616/896051037029433394/GwTMo.gif", "https://media.discordapp.net/attachments/773984556818497616/896052029238173736/446ffbd565889a044b33a0005b2e376589e02ac9_hq.gif",
      "https://media.discordapp.net/attachments/773984556818497616/896052028760023040/184674.gif", "https://media.discordapp.net/attachments/773984556818497616/896052028801957888/original.gif", "https://media.discordapp.net/attachments/773984556818497616/896052025954013204/hug-anime-hug.gif", "https://media.discordapp.net/attachments/773984556818497616/896052023361945640/hug-anime.gif",
      "https://media.discordapp.net/attachments/773984556818497616/896052022606979132/tackle-hug-couple.gif", "https://media.discordapp.net/attachments/773984556818497616/896052020656615515/hug-hugs.gif", "https://media.discordapp.net/attachments/773984556818497616/896052020010680401/anime-couple-anime-winter.gif",
      "https://media.discordapp.net/attachments/773984556818497616/898891712334823464/hug_002.gif",
      "https://media.discordapp.net/attachments/773984556818497616/898891710694850590/hug_053.gif",
      "https://media.discordapp.net/attachments/773984556818497616/898891703598059530/hug_073.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> обнял(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
 