const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'sb',
    aliases: ["sb"],
    category: "Реакции",
    description: "Ударить по жопе", 
    example: "`+sb`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
        
        let links = ["https://media.discordapp.net/attachments/833398759903854693/896830453326180402/sb453535.gif",
      "https://media.discordapp.net/attachments/833398759903854693/896830451031883866/sb4545844000.gif",
      "https://media.tenor.co/videos/4b637afdfee44b81fe9cc8094769cc76/mp4",
      "https://media.tenor.co/videos/6625f3ca32f166dc59a7563a2dd2d6f5/mp4",
      "https://media.tenor.co/videos/9a4c2398a1db7ea3c9f9b8358eaaa71a/mp4",
      "https://media.tenor.co/videos/e41c0f37d0623f27f63526b28c72405b/mp4",
      "https://media.tenor.co/videos/68bcfd8f2b2e6b8fa81e68e4ffe9bfe3/mp4"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> шлёпнул(-а) <@${message.mentions.users.first().id}> по жопе :underage:`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}