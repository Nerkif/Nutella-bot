const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const ms = require("ms");
const { default_prefix, default_value, color } = require("../../config.json")
module.exports = {
    name: 'storage',
    aliases: ["stor", "хранилище", "запасы", "склад"],
    category: "Страны и Государства",
    example: "`+storage`",
    description: "Хранилище государства",
    cooldown: 3,
    async execute (message, args) {
    let user = message.author
    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = `${default_value}`
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    let sheep = db.fetch(`sheeps_${message.guild.id}-${user}`)
    if(sheep === null) sheep = 0;

    let wool = db.fetch(`wool_${message.guild.id}-${user}`)
    if(wool === null) wool = 0;

    let meat = db.fetch(`meat_${message.guild.id}-${user}`)
    if(meat === null) meat = 0;

    let horse = db.fetch(`horse_${message.guild.id}-${user}`)
    if(horse === null) horse = 0;

    let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(`Хранилище | Запасы`)
    .addField(`> Мясо`, `>>> ${meat}`, true)
    .addField(`> Шерсть`, `>>> ${wool}`, true)
    .setFooter(`Страны и Государства`, message.author.avatarURL({ dynamic: true, size: 2048 }))
    
    const embeds = new MessageEmbed()
    .setTitle(`Хранилище | Разное`)
    .setColor(color)
    .addField(`> Овец`, `>>> ${sheep}`, true)
    .addField(`> Лошадей`, `>>> ${horse}`, true)
    .setFooter(`Страны и Государства`, message.author.avatarURL({ dynamic: true, size: 2048 }))
    
    
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
    var pages = [embed, embeds]
    return message.channel.send({ components: [pageMovingButtons], embeds: [pages[0]] }).then((msg) => {
      const filters = (btn) => btn.user.id === message.author.id;
      let collect = msg.createMessageComponentCollector({ filter: filters, time: 30000});
      
      collect.on('collect', async x => {
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