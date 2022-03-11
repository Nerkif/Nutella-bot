const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'punch',
    aliases: ["punch", "удар", "ударить"],
    category: "Реакции",
    description: "Ударить",
    example: "`+punch`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896061478027800606/anime-smash.gif", "https://media.discordapp.net/attachments/773984556818497616/896061475494441040/anime-punch-anime.gif", "https://media.discordapp.net/attachments/773984556818497616/896061472998834216/double-punch-anime-double-punch.gif", "https://media.discordapp.net/attachments/773984556818497616/896061471950241913/anime-punch.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896061469110702140/rin243109-blue-exorcist.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> ударил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]}) // танцы: https://giffiles.alphacoders.com/763/76396.gif
  }}