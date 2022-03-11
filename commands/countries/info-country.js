const { MessageEmbed, MessageMentions, MessageButton, MessageActionRow} = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err, default_value } = require('./../../config.json');
const db = require('quick.db');
const ms = require('ms');

module.exports = {
    name: 'info-country',
    aliases: ["icountry", "infoc", "country-info", "bal", "balance", "profile", "prof", "info"],
    category: "Страны и Государства",
    description: "Информация о стране",
    example: "`+infoc`",
    cooldown: 3,
    async execute (message, args) {
        let user = message.mentions.users.first() || message.author;
        let title = db.fetch(`title_${message.guild.id}-${user}`);
        //console.log(db.all())

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';
        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null ) value = default_value
        let bal = db.fetch(`money_${message.guild.id}-${user}`);
        if (bal === null) bal = 0;
        let ter = db.fetch(`terr_${message.guild.id}-${user}`);
        if (ter === null) ter = 0;
        let memder = db.fetch(`memger_${message.guild.id}-${user}`);
        if (memder === null) memder = 0;
        let soldier = db.fetch(`soldier_${message.guild.id}-${user}`);
        if (soldier === null) soldier = 0;

        let moneyEmbed = new MessageEmbed()
            .setTitle(`Nutella | Страны и Государства`)
            .setColor(color)
            .setThumbnail(img)
            .setTimestamp()
            .addField(`Страна`, `${title}`)
            .addField(`Владелец`, `${user}`)
            .setFooter(`Страница 1/2`)

        let other = new MessageEmbed()
            .setTitle(`Nutella | Страны и Государства`)
            .setColor(color)
            .setThumbnail(img)
            .setTimestamp()
            .addField(`Казна`, `${bal} ${value}`, true)
            .addField(`Территория`, `${ter} км`, true)
            .addField(`Жителей`, `${memder}`, true)
            .addField(`Солдат`, `${soldier}`, true)
            .setFooter(`Страница 2/2`)

        const pageMovingButtons1 = new MessageButton()
            .setCustomId(`forward_button_embed`)
            .setLabel("")
            .setEmoji("⏩")
            .setStyle("SECONDARY")
        const pageMovingButtons3 = new MessageButton()
            .setCustomId(`delete`)
            .setLabel("")
            .setEmoji("❌")
            .setStyle("SECONDARY")
        const pageMovingButtons2 = new MessageButton()
            .setCustomId(`back_button_embed`)
            .setLabel("")
            .setEmoji("⏪")
            .setStyle("SECONDARY")
        var pageMovingButtons = new MessageActionRow()
            .addComponents(pageMovingButtons2, pageMovingButtons3, pageMovingButtons1)
        var currentPage = 0;
        let pages = [moneyEmbed, other]
        return message.channel.send({ components: [pageMovingButtons], embeds: [pages[0]] }).then((msg) => {
            const firstPageFilter = btn => btn.user.id === message.author.id;

            const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000 });

            collector.on('collect', async x => {
                x.deferUpdate();
                if(x.customId == "back_button_embed"){
                    if(currentPage - 1 < 0){
                        currentPage = pages.length - 1
                    } else{
                        currentPage -= 1;
                    }
                } else if(x.customId == "forward_button_embed"){
                    if(currentPage + 1 == pages.length){
                        currentPage = 0;
                    } else{
                        currentPage += 1;
                    }
                }
                if(x.customId == "back_button_embed" || x.customId == "forward_button_embed"){
                    msg.edit({embeds: [pages[currentPage]], components: [pageMovingButtons]});
                }

                if(x.customId == "delete"){
                    msg.delete()
                }

            })
        })

    }}