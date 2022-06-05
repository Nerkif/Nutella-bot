const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const Discord = require("discord.js");
const db = require('quick.db')
const { farms, time, created, comp } = require('../../emoji.json')
const ms = require("ms");
const { default_prefix, default_value, color } = require("../../config.json")
module.exports = {
    name: 'shop',
    aliases: ["market", "рынок", "магазин"],
    category: "Страны и Государства",
    example: "`shop`",
    description: "Магазин",
    cooldown: 3,
    async execute (message, args) {
    let user = message.author
    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = `${default_value}`

    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    let embed = new MessageEmbed()
    .setColor(color)
    .setTitle(`Государство`)
    .addField(`> 1. Жители`, `>>> 12 жителей\nЦена 65 ${value}`, true)
    .setFooter(`${prefix}buy [цифра]`, message.author.avatarURL({ dynamic: true, size: 2048 }))
    
    const embeds = new MessageEmbed()
    .setTitle(`Разное`)
    .setColor(color)
    .addField(`> 2. Овцы`, `>>> 2 овечки \nЦена 4500 ${value}`, true)
    .setFooter(`${prefix}buy [цифра]`, message.author.avatarURL({ dynamic: true, size: 2048 }))
    
    
    
    
    const pageMovingButtons1 = new MessageButton()
    .setCustomId(`forward_button_embed`)
    .setLabel("")
    .setEmoji("⏩")
    .setStyle("SUCCESS")
    const pageMovingButtons3 = new MessageButton()
    .setCustomId(`delete`)
    .setLabel("")
    .setEmoji("❌")
    .setStyle("DANGER")
    const pageMovingButtons2 = new MessageButton()
    .setCustomId(`back_button_embed`)
    .setLabel("")
    .setEmoji("⏪")
    .setStyle("SUCCESS")
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