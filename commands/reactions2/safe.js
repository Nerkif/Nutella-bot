const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'safe',
    aliases: ["спасти"],
    category: "Реакции",
    description: "Спасти",
    example: "`+safe`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
        //if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896063208807342080/195801.gif", "https://media.discordapp.net/attachments/773984556818497616/896063213878280192/V59k.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> спас(-ла) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}