const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err, default_prefix, default_value } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
module.exports = {
    name: "leaderboard",
    aliases: ['lb'],
    category: 'Экономика',
    description: 'Показывает лидеры сервера',
    usage: '+leaderboard',
    async execute (message, args) {

    let del = db.all().filter(data => data.ID.startsWith(`title_${message.guild.id}`))
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = default_value
    let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';
      
    let money = db.all().filter(data => data.ID.startsWith(`title_${message.guild.id}-`)).sort((a, b) => b.data - a.data) 
    money.length = 12; let finalLb = ""; 
    let bank = db.all().filter(data => data.ID.startsWith(`soldier_${message.guild.id}-`)).sort((a, b) => b.data - a.data) 
    bank.length = 12; let finalbank = "";
    let life = db.all().filter(data => data.ID.startsWith(`memger_${message.guild.id}-`)).sort((a, b) => b.data - a.data) 
    life.length = 12; let finallife = "";
    let bal = db.all().filter(data => data.ID.startsWith(`money_${message.guild.id}-`)).sort((a, b) => b.data - a.data) 
    bal.length = 12; let finalbal = "";  
    
    for (var i in money){                         // <@${money[i].ID.slice(25)}>
      finalLb += `${money.indexOf(money[i])+1}. <@${money[i].ID.slice(27)}> - ${money[i].data} \n`;
 
    }
    for (var i in bank){                         
        finalbank += `${bank.indexOf(bank[i])+1}. ${bank[i].ID.slice(27)} - ${bank[i].data} \n`;
    
      }
      for (var i in life){                         
        finallife += `${life.indexOf(life[i])+1}. <${life[i].ID.slice(27)} - ${life[i].data} \n`;
      }
      for (var i in bal){                         
        finalbal += `${bal.indexOf(bal[i])+1}. <@${bal[i].ID.slice(27)} - ${bal[i].data} ${value} \n`;
    
      }

    if (!args.length) {
    let embed = new MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
        .setTitle("Nutella | Ошибка")
        .setDescription(`${no} | Команда введена неверно !`)
        .addField('Список стран:', `\`${prefix}lb -country\``)
        .addField('Лидеры по военной мощи:', `\`${prefix}lb -military\``)
        .addField('Лидеры по уровню жизни:', `\`${prefix}lb -life\``)
        .addField('Лидеры по финансовому уровню:', `\`${prefix}lb -money\``)
        .setColor(err)
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        message.channel.send({embeds: [embed]})
    
    } 
    const embed = new MessageEmbed()
      .setThumbnail(img)
      .setColor(color)
      .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
      .setTimestamp()  
    
    let noEmbed = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Нет лидеров`)
    
    if (args[0] === "-country"){
    if (!finalLb) {
            return message.channel.send({embeds: [noEmbed]})
    }
    embed.setDescription(finalLb)
    embed.setAuthor("Список стран")
    message.channel.send({embeds: [embed]})
    }
    if (args[0] === "-military"){
        if (!finalLb) {
                return message.channel.send({embeds: [noEmbed]})
        }
        embed.setDescription(finalbank)
        embed.setAuthor("Лидеры по военной мощи")
        message.channel.send({embeds: [embed]})
        }
    if (args[0] === "-life"){
          if (!finalLb) {
                  return message.channel.send({embeds: [noEmbed]})
          }
          embed.setDescription(finallife)
          embed.setAuthor("Лидеры по уровню жизни")
          message.channel.send({embeds: [embed]})
          }
    if (args[0] === "-money"){
            if (!finalLb) {
                    return message.channel.send({embeds: [noEmbed]})
            }
            embed.setDescription(finalbal)
            embed.setAuthor("Лидеры по финансовому уровню")
            message.channel.send({embeds: [embed]})
            }

        }
    }