const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'nom',
    aliases: ["num", 'Num', "Nom"],
    category: "Реакции",
    description: "Покормить",
    example: "`+nom`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
    
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896057647202189363/aihara-enju.gif", "https://media.discordapp.net/attachments/773984556818497616/896057644949839882/chomp-cute.gif", "https://media.discordapp.net/attachments/773984556818497616/896057642840109146/wataten-watashi-ni-tenshi-ga-maiorita.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> покормил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}