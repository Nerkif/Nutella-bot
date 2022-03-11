const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(args[0])) // Премиум есть
module.exports = {
    name: 'gpru',
    aliases: ["gprem-un", "get-premium-unlim", "add-prem-un", "get-prem-un"],
    category: "Премиум",
    description: "Выдать бесконечный пермиум",
    example: "`+gpru`",
    /* if (!db.get(message.author.id)) return message.channel.send({embeds: [embed2]})
Эта строка вернет сообщение если премиума нет */
    async execute (message, args) {
        let member
        if(message.mentions.users.first()) member = message.mentions.users.first().id
        else member = args[0] // Берём либо айди, либо айди из ника
        let noperms = new MessageEmbed()
            .setTitle(`Nutella | Ошибка`)
            .setColor(color)
            .setDescription(`${no} | Эта команда только для владельца бота!`)
        if (message.author.id != '720252938802561105') return message.channel.send({embeds: [noperms]});

        let embed = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | Укажите ник/айди того, кому будет выдан премиум`)

        if (!member) return message.channel.send({embeds: [embed]})

        let done = new MessageEmbed()
            .setColor(color)
            .setTitle('Nutella | Премиум')
            .setDescription(`${yes} | Премиум был успешно выдан!`)
            .addField(`Ник/Айди`, `<@${args[0]}>`)
        message.channel.send({embeds: [done]})
        db.set(member, {
            nick: member,
            time: 'бесконечный'
        })
    }}


