const { MessageEmbed, Permissions } = require("discord.js");
const db = require('quick.db')
const { err, success, color, default_value } = require('../../config.json')
const { yes, no } = require('../../emoji.json')
module.exports = {
    name: 'setlimit',
    aliases: ["setlimite", "slimite", "slimit"],
    category: "Конфиг",
    example: "+setlimit [лимит]",
    description: "Обновить лимит сервера",
    cooldown: 3,
    async execute (message, args) {
   let noperms = new MessageEmbed()
    .setTitle(`Nutella | Ошибка`)
    .setColor(color)
    .setDescription(`${no} | У вас недостаточно прав - Управление сервером`)
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){
      return message.channel.send({embeds: [noperms]})}
      
      let value = db.fetch(`value_${message.guild.id}`)
      if (value === null ) value = default_value
    
      let embed1 = new MessageEmbed()
      .setTitle(`Nutella | Ошибка`)
      .setColor(err)
      .setDescription(`${no} | Укажите лимит`)
      
      if(!args[0]) {
      return message.channel.send({embeds: [embed1]})}
      
      let embed2 = new MessageEmbed()
      .setColor(err)
      .setTitle("Nutella | Ошибка")
      .setDescription(`${no} | Вы указали лимит больше чем 100 миллионов`)

      if(args[0] > 100000000) return message.channel.send({embeds: [embed2]})
      let embed6 = new MessageEmbed()
        .setTitle(`Nutella | Ошибка`)
        .setColor(err)
        .setDescription(`${no} | Ваша сумма - не число!`)

      if(isNaN(args[0])){
        return message.channel.send({embeds: [embed6]})}
      
      let embed3 = new MessageEmbed()
        .setTitle(`Nutella | Ошибка`)
        .setColor(err)
        .setDescription(`${no} | Вы не можете сделать лимит из отрицательных деньги`);

      if (args[0].includes('-')){
        return message.channel.send({embeds: [embed3]})}
      
      let nomoney = new MessageEmbed()
        .setTitle(`Nutella | Ошибка`)
        .setColor(err)
        .setDescription(`${no} | Укажите лимит больше 5000 ${value}`)
      
      if(5000 >= args[0]) return message.channel.send({embeds: [nomoney]})
      
      await db.set(`limit_${message.guild.id}`, args[0])
      let done = new MessageEmbed()
        .setTitle(`Nutella | Конфиг`)
        .setColor(color)
        .setDescription(`${yes} | Вы установили лимит сервера: \`${args[0]}\` ${value}`)
      message.channel.send({embeds: [done]})
    }}