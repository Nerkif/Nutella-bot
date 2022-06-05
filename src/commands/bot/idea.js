const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { yes, no } = require('../../emoji.json')
const { color, success, err } = require('../../config.json')
module.exports = {
    name: 'idea',
    category: "Разное",
    example: "+idea [предложение]",
    description: "Предложить идею для бота",
    cooldown: 3,
  async execute (message, args) {
   
  let channel = '940119240608997397'

  const suggestion = args.join(" ");
  let embed1 = new MessageEmbed()
  .setTitle("Nutella | Ошибка")
  .setColor(err)
  .setDescription(`${no} | Вы не написали то, что хотите предложить`)
  if(!suggestion) return message.channel.send({embeds: [embed1]})

  const embed = new MessageEmbed()        
       .setTitle("Nutella | Предложения")
       .addField('❯ Автор', `>>> ${message.member.user.tag}`)
       .addField(`Сервер`, `${message.guild.name}`)
       .addField('❯ Предложение', `>>> ${suggestion}`)
       .setColor(color)
       .setFooter("Спасибо за идею!", message.member.user.displayAvatarURL({ format: 'png' }))
       .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
       .setTimestamp();

    let guild = "913874913704681472" 
    let users = message.client.guilds.cache.get(guild).members.cache.get(message.author.id)
    if(!users){
    const done = new MessageEmbed()
       .setTitle("Nutella | Предложения")
       .setDescription(`${yes} | Спасибо вам за идею, мы вам благодарны!\nВаше сообщение представляется здесь - [Ссылка](https://discord.gg/EWFVFD3jKU)`)
       .setColor(color)
   message.reply({embeds: [done]})
    }else{
    if(users.user.id === message.author.id){
        const done = new MessageEmbed()
            .setTitle("Nutella | Предложения")
            .setDescription(`${yes} | Спасибо вам за идею, мы вам благодарны!\nВаше сообщение представляется здесь - <#${channel}>`)
            .setColor(color)
        message.reply({embeds: [done]})
    }
}
    let msgEmbed = await message.client.channels.cache.get(channel).send({embeds: [embed]})
    
  }
}