const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err } = require('./../../config.json');
const db = require('quick.db');
// if (db.get(args[0])) // Премиум есть
module.exports = {
    name: 'check-prem',
    aliases: ["cprem", "check-premium", "c-prem"],
    category: "Премиум",
    description: "Посмотреть список премиумов",
    example: "`+cprem`",
    /* if (!db.get(message.author.id)) return message.channel.send({embeds: [embed2]})
Эта строка вернет сообщение если премиума нет */
    async execute (message, args) {

        let noperms = new MessageEmbed()
            .setTitle(`Nutella | Ошибка`)
            .setColor(color)
            .setDescription(`${no} | Эта команда только для владельца бота!`)
        if (message.author.id != '720252938802561105') return message.channel.send({embeds: [noperms]});
        let prems = db.all().map(el => {
            const user = el.ID;
            const data = JSON.parse(el.data);
            const time = timeTo(data.timestamp);
            const osttime = (time.years ? time.years+'г ':'')+(time.months ? time.months+'мес ':'')+(time.days ? time.days+'д ':'')+(time.hours ? time.hours+'ч ':'')+(time.minutes ? time.minutes+'мин ':'')
            return `${yes} | ${user} | ${data.time} | ${osttime}`
        }).join('\n')
        let embed = new MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
            .setTitle("Nutella | Лист премиумов")
            .setDescription(prems)
            .setColor(color)
            .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        message.channel.send({embeds: [embed]})

    }
}
function timeTo(timestamp) {
    if (timestamp < new Date().getTime()) return { years: 0, months: 0, days: 0, hours: 0, minutes: 0 }
    let time = timestamp - new Date().getTime();
    let years = Math.floor(time / (1000*3600*24*365));
    time %= (1000*3600*24*365);
    let months = Math.floor(time / (1000*3600*24*30));
    time %= (1000*3600*24*30);
    let days = Math.floor(time / (1000*3600*24));
    time %= (1000*3600*24);
    let hours = Math.floor(time / (1000*3600));
    time %= (1000*3600);
    let minutes = Math.floor(time / (1000*60));
    return { years: years, months: months, days: days, hours: hours, minutes: minutes }
};