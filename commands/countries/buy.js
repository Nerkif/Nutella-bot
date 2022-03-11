const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const { no } = require('../../emoji.json')
const { color, default_value, default_prefix, err } = require('../../config.json')
const ms = require("ms");
module.exports = {
    name: 'buy',
    aliases: ["cbuy", "купить"],
    category: "Страны и Государства",
    example: "+buy",
    description: "Купить что-то в магазине",
    cooldown: 3,
    async execute (message, args) {
        let user = message.author;

        let country = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | У вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [country]})
        /* Цена предметов */
        const memger = 65;
        const terr = 70;

        const items = new db.table('items')
        const yes = args[0]
        const fetchMoney = db.fetch(`money_${message.guild.id}-${user}`)

        if(!args[0]) return message.channel.send('Пожалуйста, введите товар. Введите \`+shop\`, чтобы получить список товаров.')
        var itemname = yes.toLowerCase();

        if(itemname === "1") {
            if(fetchMoney >= memger) {
                db.subtract(`money_${message.guild.id}-${user}`, memger) // снимает с баланса
                db.add(`memger_${message.guild.id}-${user}`, 12) // добавляет людей

                var ownbank = new MessageEmbed()
                    .setTitle("Nutella | Магазин")
                    .setColor(color)
                    .setDescription('К вам присоединились 12 жителей. Теперь они живут в вашей стране !')
                    .setFooter('Nutella | Страны и Государства')
                message.channel.send({embeds: [ownbank]})
                return;
            }
            else if(fetchMoney < memger) {
                Ansr = memger - fetchMoney
                message.channel.send(`Вам нужно ещё ${Ansr} $, чтобы нанять людей!`)
                return;
            }

        }
        const sheep = 4500;
        if(itemname === "2") {
            if(fetchMoney >= sheep) {
                db.subtract(`money_${message.guild.id}-${user}`, 4500) // снимает с баланса
                db.add(`sheeps_${message.guild.id}-${user}`, 2) // добавляет коров
                let sheep = db.fetch(`sheeps_${message.guild.id}-${user}`);

                var ownbank = new MessageEmbed()
                    .setTitle("Nutella | Магазин")
                    .setColor(color)
                    .setDescription(`Вы приобрели 2 овечки. Теперь у вас ${sheep} овец !`)
                    .setFooter('Nutella | Страны и Государства')
                message.channel.send({embeds: [ownbank]})
                return;
            }
            else if(fetchMoney < sheep) {
                Ansr = sheep - fetchMoney
                message.channel.send(`Вам нужно ещё ${Ansr} $, чтобы купить коров`)
                return;
            }

        }


    }}