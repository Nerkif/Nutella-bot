const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'kissc',
    aliases: ["kiss-cheek", "cheek-kiss", "ckiss"],
    category: "Реакции",
    description: "Поцеловать в щёчку",
    example: "`+ckiss`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
        //if (message.author.id != '720252938802561105') return
        let links = ["http://pa1.narvii.com/7218/5ad866bdb061b95e4e8b612237cdb4e672e20237r1-600-600_00.gif", "https://media.discordapp.net/attachments/773984556818497616/896056723893280778/51fd180f0d0c3c5eb99057b4fc7482833591ede5r1-640-480_hq.gif", "https://media.discordapp.net/attachments/773984556818497616/896056720038715432/Anime-kissing-gifs-2-Album-on-Imgur.gif",
        "https://media.discordapp.net/attachments/773984556818497616/896056717173993492/5ad866bdb061b95e4e8b612237cdb4e672e20237r1-600-600_00.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> поцеловал(-а) в щёчку <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}
