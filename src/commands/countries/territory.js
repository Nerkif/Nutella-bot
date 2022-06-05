const { MessageEmbed, MessageMentions, MessageButton, MessageActionRow} = require('discord.js');
const fs = require('fs')
const path = require('path')
const { no, yes, iconuser, chann } = require('../../emoji.json');
const { color, err, default_prefix, default_value } = require('../../config.json');
const db = require('quick.db');
const ms = require('ms');
// if (db.get(`title_${message.guild.id}`)) // У вас уже есть страна

// let title = db.get(`title_${message.guild.id}`)
module.exports = {
    name: 'terr',
    aliases: ["territory", "teritory", "территория", "терр"],
    category: "Страны и Государства",
    description: "Аннексировать территорию государству",
    example: "`+terr`",
    cooldown: 3,
    async execute (message, args) {
    let user = message.author;
    // цены
    let oneg = 350;
    let twog = 800;
    let threeg = 1700;
    let fourg = 5500;

    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = default_value
    let fetchMoney = db.fetch(`money_${message.guild.id}-${user}`);

    let embed4 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | ${user}, у вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed4]})

    let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';

    const pageMovingButtons1 = new MessageButton()
    .setCustomId(`one`)
    .setLabel("")
    .setEmoji("1⃣")
    .setStyle("SECONDARY")
    const pageMovingButtons2 = new MessageButton()
    .setCustomId(`two`)
    .setLabel("")
    .setEmoji("2⃣")
    .setStyle("SECONDARY")
    const pageMovingButtons3 = new MessageButton()
    .setCustomId(`three`)
    .setLabel("")
    .setEmoji("3⃣")
    .setStyle("SECONDARY")
    const pageMovingButtons4 = new MessageButton()
    .setCustomId(`four`)
    .setLabel("")
    .setEmoji("4⃣")
    .setStyle("SECONDARY")
    var pageMovingButtons = new MessageActionRow()
    .addComponents(pageMovingButtons1, pageMovingButtons2, pageMovingButtons3, pageMovingButtons4)

    let embed3 = new MessageEmbed()
    .setColor(color)
    .setTitle(`Страны и Государства`)
    .setThumbnail(img)
    .setDescription(`**Аннексирование территории**
1 ❯ 45 км = 350 ${value}
2 ❯ 105 км = 800 ${value}
3 ❯ 200 км = 1.700 ${value}
4 ❯ 500 км = 5.500 ${value}`)

    let one = new MessageEmbed()
    .setColor(color)
    .setThumbnail(img)
    .setTitle(`Страны и Государства`)
    .addField(`Вы приобрели`, `45 км территории !`)
    .addField(`С казны вычли`, `350 ${value}`)

    let two = new MessageEmbed()
    .setColor(color)
    .setThumbnail(img)
    .setTitle(`Страны и Государства`)
    .addField(`Вы приобрели`, `105 км территории !`)
    .addField(`С казны вычли`, `800 ${value}`)

    let three = new MessageEmbed()
    .setColor(color)
    .setThumbnail(img)
    .setTitle(`Страны и Государства`)
    .addField(`Вы приобрели`, `200 км территории !`)
    .addField(`С казны вычли`, `1.700 ${value}`)

    let four = new MessageEmbed()
    .setColor(color)
    .setThumbnail(img)
    .setTitle(`Страны и Государства`)
    .addField(`Вы приобрели`, `500 км территории !`)
    .addField(`С казны вычли`, `5.500 ${value}`)

message.channel.send({components: [pageMovingButtons], embeds: [embed3]}).then(msg => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000, max: 1 });

      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "one"){
        if(fetchMoney >= oneg) {
          db.subtract(`money_${message.guild.id}-${user}`, oneg) // снимает с баланса
          db.add(`terr_${message.guild.id}-${user}`, 45) // добавляет территорию
          msg.channel.send({embeds: [one]})
          return;
      }
      else if(fetchMoney < oneg) {
          Ansr = oneg - fetchMoney
          message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы аннексировать территорию!`)
          return;
      }
        }
        if(x.customId == "two"){
          if(fetchMoney >= twog) {
            db.subtract(`money_${message.guild.id}-${user}`, twog) // снимает с баланса
            db.add(`terr_${message.guild.id}-${user}`, 105) // добавляет территорию
            msg.channel.send({embeds: [two]})
            return;
        }
        else if(fetchMoney < twog) {
            Ansr = twog - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы аннексировать территорию!`)
            return;
        }
          }
          if(x.customId == "three"){
            if(fetchMoney >= threeg) {
              db.subtract(`money_${message.guild.id}-${user}`, threeg) // снимает с баланса
              db.add(`terr_${message.guild.id}-${user}`, 200) // добавляет территорию
              msg.channel.send({embeds: [three]})
              return;
          }
          else if(fetchMoney < threeg) {
              Ansr = threeg - fetchMoney
              message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы аннексировать территорию!`)
              return;
          }
            }

        if(x.customId == "four"){
          if(fetchMoney >= fourg) {
            db.subtract(`money_${message.guild.id}-${user}`,fourg) // снимает с баланса
            db.add(`terr_${message.guild.id}-${user}`, 500) // добавляет территорию
            msg.channel.send({embeds: [four]})
            return;
        }
        else if(fetchMoney < fourg) {
            Ansr = fourg - fetchMoney
            message.channel.send(`Вам нужно ещё ${Ansr} ${value} чтобы аннексировать территорию!`)
            return;
        }
          }
        }

      )
    })
  		}
    }
