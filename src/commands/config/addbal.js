const { MessageEmbed, Permissions } = require("discord.js");
const db = require("quick.db");
const { err, success, color, default_value } = require('../../config.json')
const { yes, no } = require('../../emoji.json')
module.exports = {
    name: "add-bal",
    aliases: ["addm", "add-money", "addbal", "bal-add"],
    category: "Экономика",
    example: "add-bal [@пользователь] [сумма]`",
    description: "Выдать деньги",
  async execute (message, args) {

    let user =
          message.mentions.members.first() ||
          message.guild.members.cache.get(args[0])
    
   let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(color)
    .setDescription(`${no} | У вас недостаточно прав - Управление сервером.`)
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){
      return message.channel.send({embeds: [noperms]})}
      const ping = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Укажите пользователя !`)
        //if (!args[0]) return message.channel.send({ embeds: [ping] })
        if (!user){
          return message.channel.send({ embeds: [ping] })}
      const amounts = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Укажите сумму !`)
        if(!args[0]) {
          return message.channel.send({embeds: [embed]})}

      let country = new MessageEmbed()
        .setColor(err)
        .setTitle('Nutella | Ошибка')
        .setDescription(`${no} | У пользователя ${user} нет страны !`)
    if (!db.get(`title_${message.guild.id}-${user}`)) return message.channel.send({embeds: [country]})

        let money = parseInt(args[1]);

        const noamount = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Ваша сумма - не число`)
        const limits = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Ваш баланс превышает лимит сервера`)
        const number = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Ваше число перевышает лимит сервера`)
        const bot = new MessageEmbed()
        .setTitle("Nutella | Ошибка")
        .setColor(err)
        .setDescription(`${no} | Боты не имеют баланс !`)
        let limit = db.fetch(`limit_${message.guild.id}`)
        if (!args[0]) return message.channel.send({ embeds: [ping] })

        if(user.bot === true) return message.channel.send({ embeds: [bot] })
    
        let value = db.fetch(`value_${message.guild.id}`)
        if (value === null ) value = `${default_value}`
        if (!money){
          return message.channel.send({ embeds: [amounts] })}
    
        if (isNaN(args[1])){
          return  message.channel.send({ embeds: [noamount] });}
    
        if (args[1].includes("-")){
          return message.channel.send({ embeds: [noamount] })}
        
        if(money >= limit){
          return message.channel.send({ embeds: [number] })}
        
        let bal = db.fetch(`money_${message.guild.id}-${user}`)
        if(bal === null) bal = 0
        if(bal + money >= limit) return message.channel.send({ embeds: [limits] })

    
        let moneyEmbed = new MessageEmbed()
            .setTitle('Nutella | Конфиг')
            .setColor(color)
            .setDescription(`Вы успешно добавили ${money} ${value} участнику ${user} !`);
        message.channel.send({ embeds: [moneyEmbed] })
        db.add(`money_${message.guild.id}-${user}`, money)
    }
}