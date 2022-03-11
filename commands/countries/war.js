const db = require('quick.db')
const { color, success, err, default_value } = require('../../config.json')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { yes, no } = require('../../emoji.json')

module.exports = {
    name: "war",
    category: "Страны и Государства",
    description: "Начать войну",
    async execute(message, args) {
        let author1 = message.author;
        let user = message.author;

        let ter = db.fetch(`terr_${message.guild.id}-${user}`);
        if (ter === null) ter = 0;

        let bal = db.fetch(`money_${message.guild.id}-${user}`);
        if (bal === null) bal = 0;

        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null ) value = default_value

        let soldier = db.fetch(`soldier_${message.guild.id}-${user}`);
        if (soldier === null) soldier = 0;


        let payment = Math.floor(Math.random() * 401)
        var challenged = [`США`, `Османская Империя`, `Аргентина`, `Греция`, `Польша`, `Франция`, `Шотландия`,
`Троя`, `Фригия`, `Арвад`, `Финикия`, `Римская Империя`, `Вавилония`, `Афины`];
        let chall = Math.floor(Math.random() * challenged.length);
        let prot = chall[challenged];

        let winner = [
            author1,
            prot
        ]


        let winners = Math.floor(Math.random() * winner.length);
        let voins = Math.floor(Math.random() * 22);
        let terrs = Math.floor(Math.random() * 30);
        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';

        let voinsv = Math.floor(Math.random() * 42);
        let terrgf = Math.floor(Math.random() * 60);

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let embed6 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас должно быть минимум 2.500 ${value} чтобы начать войну !`)
        if (bal < 2500) return message.channel.send({embeds: [embed6]})

        let embed5 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас должно быть минимум 25 солдат в стране !`)
        if (soldier < 25) return message.channel.send({embeds: [embed5]})

        const pageMovingButtons1 = new MessageButton()
        .setCustomId(`accept`)
        .setLabel("")
        .setEmoji("⚔")
        .setStyle("SECONDARY")
        const pageMovingButtons3 = new MessageButton()
         .setCustomId(`delete`)
         .setLabel("")
         .setEmoji("❌")
         .setStyle("SECONDARY")
      var pageMovingButtons = new MessageActionRow()
      .addComponents(pageMovingButtons1, pageMovingButtons3)

    let embed3 = new MessageEmbed()
    .setColor(color)
    .setTitle('Nutella | Война ⚔')
    .setDescription(`Что вы можете получить ?
Денег - от 0 до 400
Солдат - от 0 до 42
Территорию - от 0 до 60 км.

Что вы можете потерять ?
Солдат - от 0 до 22
Территорию - от 0 до 30 км.
`)
    .setThumbnail(img)
    .addField(`Ваша страна`, `${author1}`)
    .addField(`Противник`, `${challenged[chall]}`)

    let decline = new MessageEmbed()
    .setColor(err)
    .setTitle('Nutella | Война ⚔')
    .setDescription(`${no} | Вы отказались от войны`)   

message.channel.send({components: [pageMovingButtons], embeds: [embed3]}).then(msg => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000, max: 1 });

      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "accept"){

        if (winner[winners] == prot) {

            let embed6 = new MessageEmbed()
            .setTitle('Nutella | Поражение ⚔')
            .setThumbnail(img)
            .setDescription(`В ходе сражения, вы потеряли ${voins} войнов !
${terrs} км территорий вашего государства было захвачено !`)
            .setColor(color)
            .addField(`Ваша страна`, `${author1}`)
            .addField(`Противник`, `${challenged[chall]}`)
            .addField(`Выйграл`, `${challenged[chall]}`)
          message.channel.send({embeds: [embed6]})
          db.subtract(`soldier_${message.guild.id}-${user}`, voins)
          db.subtract(`terr_${message.guild.id}-${user}`, terrs)
    }
    else{
        if (winner[winners] == author1) {
        let embed7 = new MessageEmbed()
            .setTitle('Nutella | Победа ⚔')
            .setThumbnail(img)
            .setDescription(`Перед сражением, ${voinsv} войнов противника присоединилсь
к вашему государству !
В ходе сражения, вы потеряли ${voins} войнов.
Получили: ${payment} ${value}
И ${terrgf} км территории государства !`)
            .setColor(color)
            .addField(`Ваша страна`, `${author1}`)
            .addField(`Противник`, `${challenged[chall]}`)
            .addField(`Выйграл`, `${winner[winners]}`)
        message.channel.send({embeds: [embed7]})
        db.add(`money_${message.guild.id}-${user}`, payment)
        db.subtract(`soldier_${message.guild.id}-${user}`, voins)
        db.add(`soldier_${message.guild.id}-${user}`, voinsv)
        db.add(`terr_${message.guild.id}-${user}`, terrgf)
        }

        if(x.customId == "delete"){
          msg.channel.send({embeds: [decline]})
        }

      }}})





    })
  		}
    }
