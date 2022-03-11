const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const date = require('date-and-time');
const { yes, no } = require('../../emoji.json')
const { color, success } = require('../../config.json')
module.exports = {
    name: 'fbug',
    aliases: ["obug"],
  async execute (message, args) {
    if(message.author.id !== "720252938802561105") return
    const messageID = args[0]
    const reponsebug = args.slice(1).join(' ')

    let embed1 = new MessageEmbed()
    .setColor("RED")
    .setTitle("Ошибка")
    .setDescription(`${no} Укажите айди сообщения`)

    let embed2 = new MessageEmbed()
    .setColor("RED")
    .setTitle("Ошибка")
    .setDescription(`${no} Вы забыли ответить на баг`)

    if(!messageID) return message.channel.send({embeds: [embed1]})
   	if(!reponsebug) return message.channel.send({embeds: [embed2]})
   		
    const channel = message.guild.channels.cache.get("940119202734419978");
    const bugembed = await channel.messages.fetch(messageID)
    const data = bugembed.embeds[0];
    const guilds = bugembed.guild

    if(data.image){
    let embed = new MessageEmbed()
       .setAuthor(`Nutella | Баг-Репорт`)
       .addField('❯ Автор', data.fields[0].value, data.fields[0].inline)
       .addField('❯ Контент', data.fields[1].value, data.fields[1].inline)
       .addField('❯ От Разработчика:', `>>> ${reponsebug}`)
       .setColor(success)
       .setImage(data.image.url)
       .setFooter("Спасибо за помощь!")
       .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
       .setTimestamp();

       message.delete()
       bugembed.edit({embeds: [embed]})
       bugembed.reactions.removeAll()
    }else{
    let embed = new MessageEmbed()
       .setAuthor(`Nutella | Баг-Репорт`)
       .addField('❯ Автор', data.fields[0].value, data.fields[0].inline)
       .addField('❯ Контент', data.fields[1].value, data.fields[1].inline)
       .addField('❯ От Разработчика:', `>>> ${reponsebug}`)
       .setColor(success)
       .setFooter("Спасибо за помощь!")
       .setThumbnail(message.author.displayAvatarURL({ format: 'png' }))
       .setTimestamp();

       message.delete()
       bugembed.edit({embeds: [embed]})
       bugembed.reactions.removeAll()
   }
  }
}
