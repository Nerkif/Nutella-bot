const { MessageEmbed, Permissions } = require('discord.js');
const db = require('quick.db');
const { no, yes } = require('../../emoji.json');
const { color, err, success } = require('./../../config.json')

module.exports = {
    name: 'ban',
    aliases: ["b", "banish"],
    category: "Модерация",
    description: "Забанить участника",
    example: "`+ban`",
    cooldown: 3,
    accessableby: "Administrator",
    async execute (message, args) {

    let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(err)
    .setDescription(`${no} | У меня недостаточно прав - Банить участников`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(err)
    .setDescription(`${no} | У вас недостаточно прав - Банить участников`)

  if (!message.member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) 
  return message.channel.send({embeds: [noperms2]}) 

  let embed5 = new MessageEmbed()
      .setTitle(`Произошла ошибка!`)
      .setColor(err)
      .setDescription(`${no} | Вы не указали пользователя которого хотите забанить !`);
            if(!args[0]) {
                return message.channel.send({embeds: [embed5]})} 
    
            let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            
            if (!banMember) return message.channel.send("**Пользователя нет на сервере**");
            
            if (banMember.user.bot) return message.channel.send("**Вы не можете забанить бота!**")
            if (banMember === message.member) return message.channel.send("**Вы не можете забанить себя!**")

            var reason = args.slice(1).join(" ");

            if (!banMember.bannable) return message.channel.send("**Не могу забанить этого пользователя**")
            try {
            banMember.send(`Вам выдали бан на сервере \`${message.guild.name}\`\nПричина - ${reason || "Без причины"}\nМодератор: ${message.member}`).then(() =>
                message.guild.members.ban(banMember, { days: 7, reason: reason })).catch(() => null)
            } catch {
                message.guild.members.ban(banMember, { days: 7, reason: reason })
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** был забанен за ${reason} ${yes}`)
            message.channel.send({embeds: [sembed]})
            } else {
                var sembed2 = new MessageEmbed()
                .setColor(color)
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** был забанен ${yes}`)
            message.channel.send({embeds: [sembed2]})
    }
        }
    }