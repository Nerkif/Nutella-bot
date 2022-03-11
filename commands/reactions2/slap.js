const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'slap',
    aliases: ["slap", "лещь", "леща"],
    category: "Реакции",
    description: "Дать пощёчину",
    example: "`+slap`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/896063968169304094/73e.gif", "https://media.discordapp.net/attachments/773984556818497616/896063965514309663/when-you-cant-accept-reality-slap.gif", "https://media.discordapp.net/attachments/773984556818497616/896063965149405205/4e9ea150354ad3159339b202cbc6cad9.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896063964948070400/slap-.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> дал(-а) пощёчину <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]}) // танцы: https://giffiles.alphacoders.com/763/76396.gif
  }}