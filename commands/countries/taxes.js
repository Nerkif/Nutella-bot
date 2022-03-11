const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const ms = require("ms");
const { default_prefix, default_value, color, err, success } = require("../../config.json")
module.exports = {
    name: 'taxes',
    aliases: ["налоги", "Taxes", "Налоги"],
    category: "Страны и Государства",
    example: "`+taxes`",
    description: "Управление налогами",
    cooldown: 3,
    async execute (message, args) {
        let author1 = message.author;
        let user = message.author;
        let daily = await db.fetch(`daily_${message.guild.id}-${user}`);

        let bal = db.fetch(`money_${message.guild.id}-${user}`);
        if (bal === null) bal = 0;

        let limit = db.fetch(`limit_${message.guild.id}`)
        if(limit === null) limit = 0

        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null ) value = default_value

        let timeout = 86400000;
        let amount = Math.floor(Math.random() * 600);
        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        const pageMovingButtons1 = new MessageButton()
        .setCustomId(`accept`)
        .setLabel("")
        .setEmoji("✅")
        .setStyle("SECONDARY")
      var pageMovingButtons = new MessageActionRow()
      .addComponents(pageMovingButtons1)

    let embed3 = new MessageEmbed()
    .setColor(color)
    .setTitle('Управление налогами')
    .setDescription(`Как собирать налоги ?
Нажмите на \`✅\` чтобы собрать налоги`)
    .setThumbnail(img)

message.channel.send({components: [pageMovingButtons], embeds: [embed3]}).then(msg => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000, max: 1 });

      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "accept"){

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setTitle('Nutella | Ошибка')
                .setColor(err)
                .setDescription(`${no} Вы уже собирали налоги сегодня\n\nСобрать налоги снова можно будет через ${time}`);
            message.channel.send({embeds: [timeEmbed]})
        } else {
            db.add(`money_${message.guild.id}-${user}`, amount)
            let moneyEmbed = new MessageEmbed()
                .setTitle('Nutella | Налоги собраны')
                .setColor(success)
                .setDescription(`${yes} | Вы собрали налоги с граждан в размере: ${amount} ${value}\n\nНовый баланс: ${bal} ${value}`);
            message.channel.send({embeds: [moneyEmbed]})
            db.set(`daily_${message.guild.id}-${user}`, Date.now())
        }

      }})





    })
  		}
    }