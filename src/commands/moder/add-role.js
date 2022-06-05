const { MessageEmbed, Permissions } = require('discord.js');
const db = require('quick.db');
const { no, yes } = require('../../emoji.json');

module.exports = {
    name: 'addrole',
    aliases: ["ar"],
    category: "Модерация",
    description: "Выдать роль",  
    example: "`+ar`",
    cooldown: 3,
    async execute (message, args) {
    let noperms = new MessageEmbed()
    .setTitle(`Произошла ошибка!`)
    .setColor("RED")
    .setDescription(`${no} | У меня недостаточно прав - Управление ролями`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Произошла ошибка!`)
    .setColor("RED")
    .setDescription(`${no} | У вас недостаточно прав - Управление ролями`)

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_ROLES)) 
  return message.channel.send({embeds: [noperms2]}) 

        if (!args[0]) return message.channel.send("**Введите роль!**")

        let rMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!rMember) return message.channel.send("**Введите ник пользователя!**");
        if (rMember.roles.highest.comparePositionTo(message.guild.me.roles.highest) >= 0) return message.channel.send('**Невозможно добавить роль этому пользователю!**')

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]) || message.guild.roles.cache.find(rp => rp.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        if (!args[1]) return message.channel.send("**Введите роль!**")

        if (!role) return message.channel.send("**Я не смог найти эту роль!**")

        if (role.managed) return message.channel.send("**Невозможно добавить эту роль этому пользователю!**")
        if (message.guild.me.roles.highest.comparePositionTo(role) <= 0) return message.channel.send('**Роль выше моей, поэтому я не могу добавить её Пользователю!**')

        if (rMember.roles.cache.has(role.id)) return message.channel.send("**У Пользователя Уже Есть Роль!**")
        if (!rMember.roles.cache.has(role.id)) await rMember.roles.add(role.id);
        var sembed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(message.guild.name, message.guild.iconURL())
            .setDescription(`Роль была добавлена ${rMember.user.username} ${yes}`)
        message.channel.send({embeds: [sembed]})
    }
}