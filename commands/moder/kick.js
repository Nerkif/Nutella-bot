const { MessageEmbed } = require("discord.js")
const moment = require('moment')
const Discord = require("discord.js");
const { yes, no } = require('../../emoji.json')
const db = require('quick.db')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'kick',
    aliases: ['kick'],
    example: "`!kick [@пользователь] [причина]`",
    category: "Модерация",
    description: "Кик",
    cooldown: 3,
  async execute (message, args) {
    let economy = db.fetch(`moder_${message.guild.id}`)
            if(economy === 1) return true;
    let noperms = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} У вас недостаточно прав`)
    let targets = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Пожалуйста, укажите пользователя!`)
    
    let role = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Пожалуйста, укажите причину!`)
    let hight = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Участник выше вас`)
    if (!message.member.hasPermission("KICK_MEMBERS")){
   return message.channel.send(noperms)
   }
const mentionedMember = message.mentions.members.first();
const reason = args.slice(1).join(" ")
          if (!mentionedMember) return message.channel.send({embeds: [targets]});
        if (!mentionedMember) return
        if (mentionedMember.id === message.author.id) return
        if (mentionedMember.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.owner.id) {
            return message.channel.send({embeds: [hight]});
        }
        if (mentionedMember.kickable) {
            const embed = new MessageEmbed()
            .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            .setThumbnail(mentionedMember.user.displayAvatarURL({dynamic: true}))
            .setColor(success)
            .setDescription(`Кикнут: ${mentionedMember.user.username}\nПричина: ${reason || "Причина не указана"}
            `)
        message.channel.send({embeds: [embed]})
        mentionedMember.kick()
        } else {
            return
        }
        return;
    }
}