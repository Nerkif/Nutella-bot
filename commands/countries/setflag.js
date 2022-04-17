const { MessageEmbed, MessageMentions } = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err, default_prefix, default_value } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(`title_${message.guild.id}`)) // У вас уже есть страна

// let title = db.get(`title_${message.guild.id}`)
module.exports = {
    name: 'flag',
    aliases: ["set-flag", "sflag", "flag-set", "flags"],
    category: "Страны и Государства",
    description: "Создать свою страну",
    example: "`+create-country`",
    async execute (message, args) {
    let user = message.author;
    /* Цена предметов */
    const flag1 = 1500;
    const flag2 = 1500;
    const flag3 = 1500;
    const flag4 = 1500;

    const yes = args[0]
    const fetchMoney = db.fetch(`money_${message.guild.id}-${user}`)

    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = default_value
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let embed1 = new MessageEmbed()
        .setColor(err)
        .setTitle('Nutella | Страны и Государства')
        .setImage(`https://images-ext-2.discordapp.net/external/x1Qv3lj1YHODzGrE0ql70gjcsurePt4Ii1utkmvdUfg/%3Fwidth%3D925%26height%3D634/https/media.discordapp.net/attachments/950460024256335882/952147422916775976/Frame_1.png`)
        .setDescription(`${user}, здесь вы можете выбрать
Флаг для своей страны !
Предпросмотр:
1. Флаг Сербии
2. Флаг России
3. Флаг Рима
4. Греческий флаг`)
       .setFooter(`${prefix}flag [цифра]`)
    if(!args[0]) return message.channel.send({embeds: [embed1]})
    let flg1 = `https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Supposed_Flag_of_the_House_of_Crnojevic.svg/1200px-Supposed_Flag_of_the_House_of_Crnojevic.svg.png`;
    let flg2 = `https://vsevybory.ru/wp-content/uploads/2017/08/f8.jpg`;
    let flg3 = `https://ic.pics.livejournal.com/sergey_v_fomin/72076302/1735180/1735180_original.jpg`;
    let flg4 = `https://i.redd.it/5w0mn3e0are01.png`;
    var itemname = yes.toLowerCase();

    if(itemname === "1") {
        if(fetchMoney >= flag1) {
            db.subtract(`money_${message.guild.id}-${user}`, flag1) // снимает с баланса
            db.delete(`flag_${message.guild.id}-${user}`)
            db.set(`flag_${message.guild.id}-${user}`, flg1)

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Установка флага")
                .setColor(color)
                .setDescription('Вы успешно установили флаг Сербии !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            return;
        }
        else if(fetchMoney < flag1) {
            Ansr = flag1 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обновить флаг! Стоимость обновления: \`1500\`${value}`)
            return;
        }

    }

    if(itemname === "2") {
        if(fetchMoney >= flag2) {
            db.subtract(`money_${message.guild.id}-${user}`, flag2) // снимает с баланса
            db.delete(`flag_${message.guild.id}-${user}`)
            db.set(`flag_${message.guild.id}-${user}`, flg2)

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Установка флага")
                .setColor(color)
                .setDescription('Вы успешно установили флаг России !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            return;
        }
        else if(fetchMoney < flag2) {
            Ansr = flag2 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обновить флаг! Стоимость обновления: \`1500\`${value}`)
            return;
        }

    }
    if(itemname === "3") {
        if(fetchMoney >= flag3) {
            db.subtract(`money_${message.guild.id}-${user}`, flag3) // снимает с баланса
            db.delete(`flag_${message.guild.id}-${user}`)
            db.set(`flag_${message.guild.id}-${user}`, flg3)

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Установка флага")
                .setColor(color)
                .setDescription('Вы успешно установили флаг Рима !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            return;
        }
        else if(fetchMoney < flag3) {
            Ansr = flag3 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обновить флаг! Стоимость обновления: \`1500\`${value}`)
            return;
        }

    }
    if(itemname === "4") {
        if(fetchMoney >= flag4) {
            db.subtract(`money_${message.guild.id}-${user}`, flag4) // снимает с баланса
            db.delete(`flag_${message.guild.id}-${user}`)
            db.set(`flag_${message.guild.id}-${user}`, flg4)

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Установка флага")
                .setColor(color)
                .setDescription('Вы успешно установили Греческий флаг !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            return;
        }
        else if(fetchMoney < flag4) {
            Ansr = flag4 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обновить флаг! Стоимость обновления: \`1500\`${value}`)
            return;
        }

    }
}}