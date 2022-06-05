const { MessageEmbed } = require("discord.js");
const db = require('quick.db')
const { no } = require('../../emoji.json')
const { color, default_value, default_prefix, err } = require('../../config.json')
const ms = require("ms");
module.exports = {
    name: 'mine',
    aliases: ["wm", "work-mine", "шахта"],
    category: "Страны и Государства",
    example: "+mine",
    description: "Спуститься работать в шахту",
    cooldown: 3,
    async execute (message, args) {
        let user = message.author;

      let country = new MessageEmbed()
            .setColor(err)
            .setTitle('Nutella | Ошибка')
            .setDescription(`${no} | У вас нет своей страны !`)
        if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [country]})

    let value = db.fetch(`value_${message.guild.id}`)
    if (value === null ) value = default_value

    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;

    let limit = db.fetch(`limit_${message.guild.id}`)
    if(limit === null) limit = 0

    let bal = db.fetch(`money_${message.guild.id}-${user}`);
    if (bal === null) bal = 0;

    let payment = Math.floor(Math.random() * 401)

        let timeout = 300000
        let author = await db.fetch(`work_${message.guild.id}-${user}`)
        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));
            let timeEmbed = new MessageEmbed()
                .setTitle("Ошибка")
                .setColor(err)
                .setDescription(`${no}︱ Вы уже работали недавно\n\nПопробуй еще раз через ${time} `)
            if (timeout) return  message.channel.send({embeds: [timeEmbed]})
        }else{
            let nolimit = new MessageEmbed()
                .setTitle("Nutella | Ошибка")
                .setColor(err)
                .setDescription(`${no}︱ Сервер не имеет лимит `);
            if(!limit) return message.channel.send({embeds: [nolimit]})

    let img = 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613676752_29-p-fon-dlya-prezentatsii-kuzbass-31.jpg'

    let embed = new MessageEmbed()
    .setTitle(`Nutella | Шахты`)
    .setColor(color)
    .setDescription(`Пожалуйста подождите !
Ведутся раскопки..
█▒▒▒▒▒▒▒▒▒`)
    message.channel.send({embeds: [embed]}).then(msg => {
    let embed1 = new MessageEmbed()
        .setTitle(`Nutella | Шахты`)
        .setColor(color)
        .setDescription(`Пожалуйста подождите !
10%
███▒▒▒▒▒▒▒`)
    msg.edit({embeds: [embed1]}).then(msg => {
      let embed2 = new MessageEmbed()
        .setTitle(`Nutella | Шахты`)
        .setColor(color)
        .setDescription(`Пожалуйста подождите !
30%
█████▒▒▒▒▒`)
    msg.edit({embeds: [embed2]}).then(msg => {
      let embed3 = new MessageEmbed()
        .setTitle(`Nutella | Шахты`)
        .setColor(color)
        .setDescription(`Пожалуйста подождите !
50%
███████▒▒▒`)
    msg.edit({embeds: [embed3]}).then(msg => {
      let embed4 = new MessageEmbed()
        .setTitle(`Nutella | Шахты`)
        .setColor(color)
        .setDescription(`Раскопки завершаются..
100%
██████████`)
        msg.edit({embeds: [embed4]}).then(msg => {
          let embed5 = new MessageEmbed()
        .setTitle(`Nutella | Шахты`)
        .setColor(color)
              .setThumbnail(img)
        .setDescription(`Вы завершили раскопки в шахте !
Ваша зарплата за сегодня: ${payment} ${value}`)
        msg.edit({embeds: [embed5]})
        db.add(`money_${message.guild.id}-${user}`, payment)
        db.set(`work_${message.guild.id}-${user}`, Date.now());
})
})
  })
  })
  })
  }}}