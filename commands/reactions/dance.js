const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'dance',
    aliases: ["Потанцевать", "потанцевать", "dance"],
    category: "Реакции",
    description: "Потанцевать",
    example: "`+dance`",
    cooldown: 3,
    async execute (message, args) {
     let links = ["https://media.discordapp.net/attachments/773984556818497616/896049844723007508/c8affc613272df17c129773c64150e787b142021r1-500-281_hq.gif", "https://media.discordapp.net/attachments/773984556818497616/896049716113059890/original.gif", "https://media.discordapp.net/attachments/773984556818497616/896049534457745438/Dance_010.gif?width=1033&height=581",
     "https://media.discordapp.net/attachments/773984556818497616/898894409666547732/dance-nutella4925.gif?width=336&height=604",
     "https://media.discordapp.net/attachments/773984556818497616/898894404503363654/BlondThisBison-small.gif"]
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> танцует с <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> решил(-а) зажечь танцпол`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}
} //Если есть пользователь выполнить 1 код. Если нет, то первый
 