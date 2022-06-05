const db = require('quick.db')
const { color, success, err, default_value, default_prefix } = require('../../config.json')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { yes, no } = require('../../emoji.json')
const ms = require("ms");

module.exports = {
    name: "strain", 
    aliases: ["train-soldiers", "tsoldiers", "soldiers-train"],
    category: "Страны и Государства",
    description: "Обучить солдат",
    async execute(message, args) {
        let user = message.author;
        let limit = db.fetch(`limit_${message.guild.id}`)
        if(limit === null) limit = 0

        let country = new MessageEmbed()
        .setColor(err)
        .setTitle('Nutella | Ошибка')
        .setDescription(`${no} | У вас нет своей страны !`)
    if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [country]})

        let timeout = 300000
        let author = await db.fetch(`work_${message.guild.id}-${user}`)
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            let timeEmbed = new MessageEmbed()
                .setTitle("Nutella | Ошибка")
                .setColor(err)
                .setDescription(`${no}︱ Вы уже использовали команду недавно\n\nПопробуй еще раз через ${time}`)
            if (timeout) return  message.channel.send({embeds: [timeEmbed]})
        }else{
            let nolimit = new MessageEmbed()
                .setTitle("Nutella | Ошибка")
                .setColor(err)
                .setDescription(`${no}︱ Сервер не имеет лимит `);
            if(!limit) return message.channel.send({embeds: [nolimit]})
    /* Цена предметов */
    const soldier1 = 35;
    const soldier2 = 65;
    const soldier3 = 142

    const yes = args[0]
    const fetchMoney = db.fetch(`money_${message.guild.id}-${user}`)

    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = default_value
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    let embed1 = new MessageEmbed()
        .setColor(err)
        .setTitle('Nutella | Обучение солдат')
        .setDescription(`Стоимость обучения:
1. 12 солдат = 35 ${value}
2. 28 солдат = 65 ${value}
3. 60 солдат = 142 ${value}`)
       .setFooter(`${prefix}strain [цифра]`)
    if(!args[0]) return message.channel.send({embeds: [embed1]})

    var itemname = yes.toLowerCase();

    if(itemname === "1") {
        if(fetchMoney >= soldier1) {
            db.subtract(`money_${message.guild.id}-${user}`, soldier1) // снимает с баланса
            db.add(`soldier_${message.guild.id}-${user}`, 12) // добавляет людей

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Обучение солдат")
                .setColor(color)
                .setDescription('Вы обучили 12 солдат. Теперь они готовы воевать за вас !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            return;
        }
        else if(fetchMoney < soldier1) {
            Ansr = soldier1 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обучить солдат! Стоимость обучения: \`35\`${value}`)
            db.set(`work_${message.guild.id}-${user}`, Date.now());
            return;
        }

    }

    if(itemname === "2") {
        if(fetchMoney >= soldier2) {
            db.subtract(`money_${message.guild.id}-${user}`, soldier2) // снимает с баланса
            db.add(`soldier_${message.guild.id}-${user}`, 28) // добавляет людей

            let owngun = new MessageEmbed()
                .setTitle("Nutella | Обучение солдат")
                .setColor(color)
                .setDescription('Вы обучили 28 солдат. Теперь они готовы воевать за вас !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [owngun]})
            db.set(`work_${message.guild.id}-${user}`, Date.now());
            return
        }
        else if(fetchMoney < soldier2) {
            Ansr = soldier2 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обучить солдат! Стоимость обучения: \`65\`${value}`)
        }

    }
    if(itemname === "3") {
        if(fetchMoney >= soldier3) {
            db.subtract(`money_${message.guild.id}-${user}`, soldier3) // снимает с баланса
            db.add(`soldier_${message.guild.id}-${user}`, 60) // добавляет людей

            var ownbank = new MessageEmbed()
                .setTitle("Nutella | Обучение солдат")
                .setColor(color)
                .setDescription('Вы обучили 60 солдат. Теперь они готовы воевать за вас !')
                .setFooter('Nutella | Страны и Государства')
            message.channel.send({embeds: [ownbank]})
            db.set(`work_${message.guild.id}-${user}`, Date.now());
            return;
        }
        else if(fetchMoney < soldier3) {
            Ansr = soldier3 - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы обучить солдат! Стоимость обучения: \`142\`${value}`)
            return;
        }

    }
}}}