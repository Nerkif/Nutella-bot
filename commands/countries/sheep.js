const db = require('quick.db');
const Discord = require('discord.js');
const { yes, no } = require('../../emoji.json')
const { MessageEmbed } = require('discord.js')
const ms = require("ms");
const { default_value, err, success, color, default_prefix } = require('../../config.json')
module.exports = {
    name: "sheeps",
    aliases: ["sheep", "овцы", "animals"],
    example: "`sheeps harvest`",
    category: "Страны и Государства",
    description: "Собрать или продать шерсть с овец",
  async execute (message, args) {
        let user = message.author;
        let sheep = db.fetch(`sheeps_${message.guild.id}-${user}`)
        let prefix = db.fetch(`prefix_${message.guild.id}`)
        if(prefix === null) prefix = default_prefix;
        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null) value = `${default_value}`

        let author = await db.fetch(`sheep_${message.guild.id}-${user}`)
        let timeout = db.fetch(`stime_${message.guild.id}-${user}`)
        let img = 'https://iphone.giveawayoftheday.com/wp-content/plugins/gotd_appstore_plugin/images/2014/07/551590221_app_icon_big_1441387001.jpg';
        let elm = args.join(" ");
        
        let noanimal = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | У вас нет овец!`)
        if (sheep === null) return message.channel.send({embeds: [noanimal]})
        
        if (!elm) {
          let embed = new MessageEmbed()
        .setTitle("Страны и Государства")
        .setDescription(`${no} | Команда введена неверно !`)
        .addField('Попробуйте:', `\`${prefix}sheeps -harvest | -sell\``)
        .setColor(err)
        .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
        message.channel.send({embeds: [embed]})
        }
    if(elm === "-harvest"){
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            let timeEmbed = new MessageEmbed()
                .setTitle('Nutella | Ошибка')
                .setColor(err)
                .setDescription(`${no} | Недавно вы уже собирали шерсть !\n\nПопробуйте еще раз через ${time}`);
          message.channel.send({embeds: [timeEmbed]})
    } else{
      let time = 7200000
      let meat = Math.floor(Math.random() * 8);
      let wool = 4
      let embed1 = new MessageEmbed()
                .setTitle('Страны и Государства')
                .setColor(color)
                .setThumbnail(img)
                .setDescription(`Вы собрали всю шерсть с овец
**И получили:**
${wool} кг шерсти :sheep:
И ${meat} кг мяса :cut_of_meat:`)
                message.channel.send({embeds: [embed1]})

            db.add(`wool_${message.guild.id}-${user}`, wool)
            db.add(`meat_${message.guild.id}-${user}`, meat)
            db.set(`stime_${message.guild.id}-${user}`, time)
    }}
    
    if(elm === "-sell"){
      let wool = db.fetch(`wool_${message.guild.id}-${user}`)
      let amount = 700
      let nowool = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | У вас недостаточно шерсти для продажи`)
      if(wool < 1) return message.channel.send({embeds: [nowool]})
      if(wool >= 1){
        let embed = new MessageEmbed()
        .setTitle("Страны и Государства")
        .setColor(color)
        .setThumbnail(img)
        .setDescription(`${yes} Вы продали 1кг шерсти\nПолучили: ${amount} ${value}`)
        db.add(`money_${message.guild.id}-${user}`, amount)
        message.channel.send({embeds: [embed]})
      }
    }
        }}