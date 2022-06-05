const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(`title_${message.guild.id}`)) // У вас уже есть страна

// let title = db.get(`title_${message.guild.id}`)
module.exports = {
    name: 'dc',
    aliases: ["fdc", "fdeletec"],
    category: "Страны и Государства",
    description: "Удалить страну другу",
    example: "`+delete-country`",
    async execute (message, args) {
        let embed = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | Эта команда доступна только Владельцу бота !`)
        if(message.author.id !== "720252938802561105") return message.channel.send({embeds: [embed]})
        let user = message.mentions.users.first();
        
        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | У этого пользователя нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let done = new MessageEmbed()
            .setColor(color)
            .setTitle('Nutella | Удаление страны')
            .setDescription(`${yes} | Вы успешно удалили страну ${user} !`)
        message.channel.send({embeds: [done]})
        db.delete(`title_${message.guild.id}-${user}`)
        db.delete(`sheeps_${message.guild.id}-${user}`)
        db.delete(`money_${message.guild.id}-${user}`)
        db.delete(`terr_${message.guild.id}-${user}`)
        db.delete(`memger_${message.guild.id}-${user}`)
        db.delete(`soldier_${message.guild.id}-${user}`)
        db.delete(`meat_${message.guild.id}-${user}`)
        db.delete(`wool_${message.guild.id}-${user}`)
        db.delete(`flag_${message.guild.id}-${user}`)
        db.delete(`horse_${message.guild.id}-${user}`)
    }
}