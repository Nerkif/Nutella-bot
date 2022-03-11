const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'bite',
    aliases: ["кусь", "укусить"],
    category: "Реакции",
    description: "Укусить",
    example: "`+bite`",
    cooldown: 3, 
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**"); //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
          let links = ["https://images-ext-1.discordapp.net/external/0k9qN2AuqNB98kvGMoi0HSTaBAaivgUdMzZNIxWHhqM/https/media.tenor.com/images/887b65d101c12a3e39b2aee887adb93f/tenor.gif",
      "https://images-ext-1.discordapp.net/external/FV4uVV13OGg2n9LxUEYeSU9DvAW3BuDHCBvvS_-7zIE/https/media.tenor.com/images/3632813a0264ec1fc44525ff86cb1224/tenor.gif",
      "https://media.discordapp.net/attachments/773984556818497616/898881835239604265/bite34-nutella.gif",
      "https://media.discordapp.net/attachments/773984556818497616/898881840931307580/bite1-nutella.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> укусил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}