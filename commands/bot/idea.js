const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { no, yes } = require('../../emoji.json');
module.exports = {
    name: 'idea',
    category: "Fun",
    example: "`!idea [предложение]`",
    description: "Предложения", 
    cooldown: 3,
  async execute (message, args) {
   
  let channel = '913894635217223781' 
  
  const suggestionQuery = args.join(" ");
  if(!suggestionQuery) return message.reply("Напишите то, что хотите предложить для Бота");
  await message.delete()
      const now = new Date();
  const embed = new MessageEmbed()   
       .setTitle(`> Nutella | Идеи`)
       .setThumbnail(message.guild.iconURL({ dynamic: true }))
       .addField('❯ Автор', `>>> ${message.member.user.tag}`, true)
       .addField('❯ Контент', `>>> ${suggestionQuery}`)
       .setColor("ORANGE")
       .setFooter("Спасибо за идею", message.member.user.displayAvatarURL({ format: 'png' }))
       .setTimestamp();
       
    const done = new MessageEmbed()
       .setDescription(`${yes} | <@${message.author.id}>, Ваше сообщение представляется здесь, <#${channel}>\n\nЗайдите на [Support](https://discord.gg/8a29sUcTGe) чтобы увидеть ответ`)
       .setColor("GREEN")
       .setFooter("Спасибо за помощь!")
       
    message.channel.send({embeds: [done]})
    
    let msgEmbed = await message.client.channels.cache.get(channel).send({embeds: [embed]})
  }
}
/*
client.on('guildCreate', guild => {
    console.log('Бота добавили на новый сервер: '+guild.name) 
})*/