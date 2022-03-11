const db = require('quick.db');
const { MessageEmbed, Permissions } = require('discord.js');
const { default_prefix, err, success, color } = require('./../../config.json')
const { no, yes } = require('../../emoji.json');

module.exports = {
        name: "setprefix",
        aliases: ['sp', 'prefix', 'префикс'],
        category: "Конфиг",
        description: "Установить префикс",
        usage: "sp [prefix]",
        cooldown: 3, 
    async execute (message, args) { 

    let noperms = new MessageEmbed()
    .setTitle(`Произошла ошибка!`)
    .setColor(err)
    .setDescription(`${no} | У меня недостаточно прав - Управление сервером`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.

  let noperms2 = new MessageEmbed()
    .setTitle(`Произошла ошибка!`)
    .setColor(err)
    .setDescription(`${no} | У вас недостаточно прав - Управление сервером`)

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) 
  return message.channel.send({embeds: [noperms2]}) 

    let embed = new MessageEmbed()
      .setTitle(`Произошла ошибка!`)
      .setColor(err)
      .setDescription(`${no} | Укажите префикс, который вы хотите установить`);
    
    let embed1 = new MessageEmbed()
      .setTitle(`Произошла ошибка!`)
      .setColor(err)
      .setDescription(`${no} | Вы не можете установить префикс двойным аргументом`);
    
    let embed2 = new MessageEmbed()
      .setTitle(`Произошла ошибка!`)
      .setColor(err)
      .setDescription(`${no} | Вы не можете отправить префикс более 3-х символов`);
    
    let seted = new MessageEmbed()
      .setTitle(`Nutella | Конфиг`)
      .setColor(color)
      .setDescription(`${yes} |  Префикс был обновлен на: \`${args[0]}\``);

    let reseted = new MessageEmbed()
      .setTitle(`Nutella | Конфиг`)
      .setColor(color)
      .setDescription(`${yes} | Префикс был обновлен на основной префикс бота`);
    
    if(!args[0]) {
      return message.channel.send({embeds: [embed]})} 
    
    if(args[1]) {
      return message.channel.send({embeds: [embed1]})}
    
    if(args[0].length > 3) {
      return message.channel.send({embeds: [embed2]})}
    
    if(args.join("") === default_prefix){
      db.delete(`prefix_${message.guild.id}`)
    
      await message.channel.send({embeds: [reseted]})
      return await message.guild.members.cache.get(message.client.user.id).setNickname(`Nutella`)
    }
    
    await db.set(`prefix_${message.guild.id}`, args[0])
    await message.guild.members.cache.get(message.client.user.id).setNickname(`[ ${args[0]} ] Nutella`)
  await message.channel.send({embeds: [seted]})
  }} 