const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(args[0])) // Премиум есть
module.exports = {
    name: 'give-premium',
    aliases: ["gprem", "get-premium", "add-prem", "get-prem"],
    category: "Премиум",
    description: "Выдать пермиум",
    example: "`+gprem`",
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

        let embed1 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} Укажите длительность премиума`)
        if (!member) return message.channel.send({embeds: [embed]})
        if (!args[1]) return message.channel.send({embeds: [embed1]})

        let end_timestamp = new Date().getTime()
        args.slice(1, args.length).map(el => {
            if (el.endsWith('мин')) end_timestamp += (+el.slice(0, -3))*60*1000 // Добавление к дате минут
            if (el.endsWith('д')) end_timestamp += (+el.slice(0, -1))*24*60*60*1000 // Добавление к дате дней
            if (el.endsWith('мес')) end_timestamp += +(el.slice(0, -3))*30*24*60*60*1000  // Добавление к дате месяцев (30 дней)
            if (el.endsWith('г')) end_timestamp += +(el.slice(0, -1))*365*24*60*60*1000  // Добавление к дате годов (365 дней)
        })
        let done = new MessageEmbed()
            .setColor(color)
            .setTitle('Nutella | Премиум')
            .setDescription(`${yes} | Премиум был успешно выдан!`)
            .addField(`Ник/Айди`, `<@${args[0]}>`)
            .addField(`Время`, args.slice(1, args.length).join(' '))
        message.channel.send({embeds: [done]})
        db.set(member, {
            nick: member,
            time: args.slice(1, args.length).join(' '),
            timestamp: end_timestamp
        })
    }}