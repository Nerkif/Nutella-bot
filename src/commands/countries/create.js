const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(`title_${message.guild.id}`)) // У вас уже есть страна

// let title = db.get(`title_${message.guild.id}`)
module.exports = {
    name: 'create-country',
    aliases: ["ccountry", "createc", "country-create"],
    category: "Страны и Государства",
    description: "Создать свою страну",
    example: "`+create-country`",
    async execute (message, args) {
        let user = message.author;
        let title = args.join(' ');

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | У вас уже есть страна !`)
        if (db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let embed = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | Вы не указали название новой страны !`)
        if (!title) return message.channel.send({embeds: [embed]})
        let embed1 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | Укажите название страны больше 3-х символов`)
        if(title.length < 3) return message.channel.send({embeds: [embed1]})
        let embed3 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | Укажите название страны не более 12-х символов`)
        if(title.length > 12) return message.channel.send({embeds: [embed3]})

        let done = new MessageEmbed()
            .setColor(color)
            .setTitle('Nutella | Создание страны')
            .setDescription(`${yes} | Вы успешно создали свою страну !`)
            .addField(`Владелец`, `${user}`)
            .addField(`Страна`, `${title}`)
        message.channel.send({embeds: [done]})
        db.set(`title_${message.guild.id}-${user}`, title)
    }}


