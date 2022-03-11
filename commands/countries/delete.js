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
    name: 'delete-country',
    aliases: ["dcountry", "deletec", "country-delete"],
    category: "Страны и Государства",
    description: "Удалить свою страну",
    example: "`+delete-country`",
    async execute (message, args) {
        let user = message.author;
        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';

        let embed2 = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | У вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [embed2]})

        let title = db.get(`title_${message.guild.id}-${user}`)

        const pageMovingButtons1 = new MessageButton()
        .setCustomId(`accept`)
        .setLabel("")
        .setEmoji("✅")
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
    .setTitle('Nutella | Удаление страны')
    .setDescription(`Вы действительно хотите удалить свою страну ?`)
    .setThumbnail(img)

message.channel.send({components: [pageMovingButtons], embeds: [embed3]}).then(msg => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000, max: 1 });

      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "accept"){

        let done = new MessageEmbed()
            .setColor(color)
            .setTitle('Nutella | Удаление страны')
            .setDescription(`${yes} | Вы успешно удалили свою страну !`)
        message.channel.send({embeds: [done]})
        db.delete(`title_${message.guild.id}-${user}`)
        db.delete(`sheeps_${message.guild.id}-${user}`)
        db.delete(`money_${message.guild.id}-${user}`)
        db.delete(`terr_${message.guild.id}-${user}`)
        db.delete(`memger_${message.guild.id}-${user}`)
        db.delete(`soldier_${message.guild.id}-${user}`)
        db.delete(`meat_${message.guild.id}-${user}`)
        db.delete(`wool_${message.guild.id}-${user}`)
        }

        if(x.customId == "delete"){
            msg.delete()
        
        }})
    })}}