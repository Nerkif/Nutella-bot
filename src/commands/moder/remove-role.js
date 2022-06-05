const { MessageEmbed, Permissions } = require('discord.js');
const db = require('quick.db');
const { no, yes } = require('../../emoji.json');

module.exports = {
    name: 'delrole',
    aliases: ["dr"],
    category: "Модерация",
    description: "Снять роль",  
    example: "`+dr`",
    cooldown: 3,
    async execute (message, args) {

    let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor("ded309")
    .setDescription(`${no} | У меня недостаточно прав - Управление ролями`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor("ded309")
    .setDescription(`${no} | У вас недостаточно прав - Управление ролями`)

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) 
  return message.channel.send({embeds: [noperms2]}) 
        
        if (!args[0]) return message.channel.send("**Введите пользователя**")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("**Я не смогу найти этого пользователя**");

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("**Введите роль!**");

        if (!role) return message.channel.send("**Я не смог найти эту роль**");

        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Невозможно удалить роль у этого пользователя! - Его роль выше моей роли**')
        if (message.guild.me.roles.highest.comparePositionTo(role) < 0) return message.channel.send('**Роль выше моей, поэтому я не могу удалить её Пользователю!**')
        if (role.managed) return message.channel.send("**Невозможно удалить эту роль у этого Пользователя!**")

        if (!rMember.roles.cache.has(role.id)) return message.channel.send("**У Пользователя нет данной роли!**")
        if (rMember.roles.cache.has(role.id)) await (rMember.roles.remove(role.id));

        const sembed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`Роль была удалена у ${rMember.user.username} ${yes}`)
        message.channel.send({embeds: [sembed]})
    }
}