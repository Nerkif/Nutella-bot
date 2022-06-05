const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const date = require('date-and-time');
const { yes, no } = require('../../emoji.json')
const { color, success, err } = require('../../config.json')
module.exports = {
    name: 'bug',
    aliases: ["bug-rep", "баг"],
    category: "Бот",
    example: "+bug [ошибка]",
    description: "Сообщить об ошибке",
    cooldown: 3,
  async execute (message, args) {
    let channel = "940119202734419978"
    
    if (message.attachments.size > 0) {
            const attachment = message.attachments.first();
            if (attachment.width) {
                let embed = new MessageEmbed()
               .setTitle(`Nutella | Баг-Репорт`)
               .addField('❯ Автор', `>>> ${message.member.user.tag}`)
               .setColor(color)
               .setFooter("Спасибо за оповещение ошибок!", message.member.user.displayAvatarURL({ format: 'png' }))
               .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
               .setTimestamp()
               .setImage(attachment.url)
               
            
        message.client.channels.cache.get(channel).send({embeds: [embed]})
          }
        }else{


  const suggestionQuery = args.join(" ");

  let embed1 = new MessageEmbed()
  .setTitle(`Nutella | Ошибка`)
  .setColor(err)
  .setDescription(`${no} | Вы не написали проблему бота`)
  if(!suggestionQuery) return message.channel.send({embeds: [embed1]})
  
  const embed = new MessageEmbed()
      
       .setTitle(`Nutella | Баг-Репорт`)
       .addField('❯ Автор', `>>> ${message.member.user.tag}`)
       .addField('❯ Контент', `>>> ${suggestionQuery}`)
       .setColor(color)
       .setFooter("Спасибо за ошибку", message.member.user.displayAvatarURL({ format: 'png' }))
       .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
       .setTimestamp();
       
            let guild = "913874913704681472" 
            let users = message.client.guilds.cache.get(guild).members.cache.get(message.author.id)
            let dm = new MessageEmbed()
            .setTitle("Nutella | Ошибка")
            .setColor(err)
            .setDescription(`${no} | Я не могу вам прислать личное сообещние`)
            if(!users){
                const done = new MessageEmbed()
               .setTitle("Nutella | Баг-Репорт")
               .setDescription(`${yes} | Спасибо за оповещение о проблеме!\nВаше сообщение представляется здесь, [Ссылка](https://discord.gg/5d8EedyH3r)`)
               .setColor(color)
                message.author.send({embeds: [done]}).catch(() => message.channel.send({embeds: [dm]}))
            }else{
            if(users.user.id === message.author.id){
            const done = new MessageEmbed()
               .setTitle("Nutella | Баг-Репорт")
               .setDescription(`${yes} | Спасибо за отзыв, мы очень благодарны вам!\nВаш отзыв представляется здесь, <#${channel}>`)
               .setColor(color)
            message.author.send({embeds: [done]}).catch(() => message.channel.send({embeds: [dm]}))
            }}
    message.delete()
    let msgEmbed = await message.client.channels.cache.get(channel).send({embeds: [embed]})
    }
  }
}