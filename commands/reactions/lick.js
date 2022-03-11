const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'lick',
    aliases: ["лизнуть", "Lick"],
    category: "Реакции",
    description: "Лизнуть",
    example: "`+lick`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
        //if (message.author.id != '720252938802561105') return
        let links = ["https://media.discordapp.net/attachments/773984556818497616/898894395682734121/lick-nutella3853.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898894401353445386/lick-nutella9355.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898894403383488512/lick-nutella44545.gif",
        "https://media.discordapp.net/attachments/773984556818497616/898894404687912970/Sk15iVlOf.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> лизнул(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
