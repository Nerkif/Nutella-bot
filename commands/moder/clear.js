const { MessageEmbed, Permissions } = require('discord.js');
const { color, no, yes, err, success } = require('./../../config.json')

module.exports = {
    name: 'clear',
    aliases: ["purge", "очистить"],
    category: "Модерация",
    description: "Очистить чат",  
    example: "`+clear`",
    cooldown: 3,
    async execute (message, args) {

    const target = message.mentions.members.first()
    if (message.deletable) {
        message.delete();
    }
    let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(err)
    .setDescription(`${no} | У меня недостаточно прав - Изменять сообщения`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor(err)
    .setDescription(`${no} | У вас недостаточно прав - Изменять сообщения`)

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) 
  return message.channel.send({embeds: [noperms2]}) 

    let count = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} | Это не число`)
    if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
        return message.channel.send({embeds: [count]})
    }

    
    let embed = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} | Ваше число перевышает лимит 100 сообщений`)
    if(args[0] > 100) return message.channel.send({embeds: [embed]}) 
    
    let deleteAmount;
    if (parseInt(args[0]) > 100) {
        deleteAmount = args[0];
    } else {
        deleteAmount = parseInt(args[0]);
    }
    
  if(message.mentions.users.size === 1){
    message.channel.messages.fetch({
    limit: 100
}).then((messages) => {
    let target = message.mentions.members.first();
    let embed1 = new MessageEmbed()
    .setColor(color)
    .setDescription(`${yes} | Удалено ${deleteAmount} сообщений`)// сообщений у ${target.user}
    const botMessages = [];
    messages.filter(m => m.author.id === target.id).forEach(msg => botMessages.push(msg))
    message.channel.bulkDelete(deleteAmount, botMessages).then(() => {
        message.channel.send({embeds: [embed1]});
    });
})}
      if(message.mentions.users.size === 0){
    message.channel.messages.fetch({
    limit: 100
}).then((messages) => {
    message.channel.bulkDelete(deleteAmount, true)
    let embed1 = new MessageEmbed()
    .setColor(color)
    .setDescription(`${yes} | Удалено ${deleteAmount} сообщений`)
     message.channel.send({embeds: [embed1]})
    .catch(err => message.channel.send(`${no} | Что-то пошло не так...`));
      })
  }
}
}