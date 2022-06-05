const db = require('quick.db')
const { color, success, err, default_value } = require('../../config.json')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { yes, no } = require('../../emoji.json')

module.exports = {
    name: "war",
    category: "Страны и Государства",
    description: "Начать войну против ботов",
    async execute(message, args) {
        let author1 = message.author;
        let user = message.author;

        let ter = db.fetch(`terr_${message.guild.id}-${user.id}`);
        if (ter === null) ter = 0;

        let bal = db.fetch(`money_${message.guild.id}-${user.id}`);
        if (bal === null) bal = 0;

        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null ) value = default_value

        let soldier = db.fetch(`soldier_${message.guild.id}-${user.id}`);
        if (soldier === null) soldier = 0;


        let payment = Math.floor(Math.random() * 401)
        var challenged = [`США`, `Османская Империя`, `Аргентина`, `Греция`, `Польша`, `Франция`, `Шотландия`,
`Троя`, `Фригия`, `Арвад`, `Финикия`, `Швейцария`, `Вавилония`, `Афины`, `Британская Империя`];
        let chall = Math.floor(Math.random() * challenged.length);
        let prot = chall[challenged];

        let winner = [
            author1,
            prot
        ]


        let winners = Math.floor(Math.random() * winner.length);
        let voins = Math.floor(Math.random() * 45); // войны теряем
        let terrs = Math.floor(Math.random() * 70); // территорию теряем
        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';
        let flg = db.fetch(`flag_${message.guild.id}-${user}`)
        if (flg === null) flg = `https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg`;

        let fon = [`https://i.yapx.ru/GjknQ.gif`, `https://i.gifer.com/CBHi.gif`, 
`https://steemitimages.com/p/2r8F9rTBenJQfQgENfxADE6EVYabczqmSF5KeWefV5WL9WFNhL2qwwE2cbxgtM8UJVw6pXtBQytqNRhsqNNsmeRKiwhyq4SBeiPzuUPFX1vb3yUjtMVRxkRTaLUywN6fo?format=match&mode=fit`,
`https://i.gifer.com/8bBz.gif`, `https://pa1.narvii.com/6563/d838573a40e0509c0e61d56f03207b9cb8c510d1_hq.gif`,
`https://i.gifer.com/OSlK.gif`, `http://j.gifs.com/yXldG7.gif`, `https://steamuserimages-a.akamaihd.net/ugc/969848689213613958/7B7298D8EC6535D548103132C126A20B2F9F1547/`]

        let voinsv = Math.floor(Math.random() * 42); // войны +
        let terrgf = Math.floor(Math.random() * 60); // территорию +
        let title = db.fetch(`title_${message.guild.id}-${user.id}`);

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user.id}`)) return message.channel.send({embeds: [embed2]})

        let embed6 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас должно быть минимум 2.000 ${value} чтобы начать войну !`)
        if (bal < 2000) return message.channel.send({embeds: [embed6]})

        let embed5 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас должно быть минимум 45 солдат в стране !`)
        if (soldier < 45) return message.channel.send({embeds: [embed5]})

        let embed7 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас должно быть минимум 45км территории в стране !`)
        if (ter < 45) return message.channel.send({embeds: [embed7]})

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
    .setDescription(`При победе над ${challenged[chall]},
Вы можете получить:
- Денег: от 0 до 400 ${value}
- Солдат: от 0 до 42 :gun:
- Территорию: от 0 до 60 км :earth_asia:

Что вы можете потерять:
- Солдат: от 0 до 22 :gun:
- Территорию: от 0 до 30 км :earth_asia:
`)
    .setThumbnail(img)
    .addField(`Вы`, `${title}`)
    .addField(`Противник`, `${challenged[chall]}`)

    let decline = new MessageEmbed()
    .setColor(err)
    .setTitle('Nutella | Война ⚔')
    .setDescription(`${no} | Вы отказались от войны`)   

message.channel.send({components: [pageMovingButtons], embeds: [embed3]}).then(msg => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 120000, max: 1 });

      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "accept"){

        if (winner[winners] == prot) {

            let embed6 = new MessageEmbed()
            .setTitle('Nutella | Поражение ⚔')
            .setThumbnail(flg)
            .setImage(fon[Math.floor(Math.random() * fon.length)])
            .setDescription(`В ходе сражения, вы потеряли ${voins} войнов !
${terrs} км территорий вашего государства было захвачено в ходе отступления !`)
            .setColor(color)
            .addField(`Вы`, `${title}`)
            .addField(`Противник`, `${challenged[chall]}`)
            .addField(`Выйграл`, `${challenged[chall]}`)
          message.channel.send({embeds: [embed6]})
          db.subtract(`soldier_${message.guild.id}-${user.id}`, voins)
          db.subtract(`terr_${message.guild.id}-${user.id}`, terrs)
    }
    else{
        if (winner[winners] == author1) {
        let embed7 = new MessageEmbed()
            .setTitle('Nutella | Победа ⚔')
            .setThumbnail(flg)
            .setImage(fon[Math.floor(Math.random() * fon.length)])
            .setDescription(`Перед сражением, ${voinsv} войнов противника присоединилсь
к вашему государству !
В ходе сражения, вы потеряли ${voins} войнов.
Получили: ${payment} ${value}
И ${terrgf} км территории государства !`)
            .setColor(color)
            .addField(`Вы`, `${title}`)
            .addField(`Противник`, `${challenged[chall]}`)
            .addField(`Выйграл`, `${winner[winners]}`)
        message.channel.send({embeds: [embed7]})
        db.add(`money_${message.guild.id}-${user.id}`, payment)
        db.subtract(`soldier_${message.guild.id}-${user.id}`, voins)
        db.add(`soldier_${message.guild.id}-${user.id}`, voinsv)
        db.add(`terr_${message.guild.id}-${user.id}`, terrgf)
        }

        if(x.customId == "delete"){
          msg.channel.send({embeds: [decline]})
        }

      }}})





    })
  		}
    }
