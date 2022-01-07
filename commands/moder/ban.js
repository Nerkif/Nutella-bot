const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { yes, no } = require('../../emoji.json')
const db = require('quick.db')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'ban',
    aliases: ['ban'],
    example: "`!ban [@пользователь] [причина]`",
    category: "Модерация",
    description: "Бан",
    cooldown: 3,
  async execute (message, args) {
        let economy = db.fetch(`moder_${message.guild.id}`)
            if(economy === 1) return true;
    let noperm = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} У вас недостаточно полномочий, чтобы кого-то забанить`)
    let targets = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Пожалуйста, укажите пользователя!`)
    
    let role = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Пожалуйста, укажите причину!`)
    let hight = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} Участник выше вас`)
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(noperm)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return
    
    if(!args[0]) return message.channel.send({embeds: [role]});
    
    if(!target) return message.channel.send({embeds: [targets]});
    
    if(target.roles.highest.position >= message.member.roles.highest.position || message.author.id !== message.guild.owner.id) {
      return message.channel.send({embeds: [hight]});
    }
    
    if(target.id === message.author.id) return
    
    if(target.bannable) {
      let embed = new MessageEmbed()
      .setColor(success)
      .setDescription(`Забанен: \`${target}\`\nПричина: \`${reason || "Причина не указана"}\``)
      
      message.channel.send({embeds: [embed]});
      
      target.ban()
      
      message.delete()
      
    } else {
      return
    }
    return
  }
};