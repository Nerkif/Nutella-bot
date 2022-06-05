const { MessageEmbed, Permissions } = require('discord.js');
const db = require('quick.db');
const { color, success, err } = require('./../../config.json')
const { no, yes } = require('../../emoji.json');

module.exports = {
    name: 'say',
    description: 'Сказать от имени бота',
    usage: '!say [текст]',
    async execute (message, args) {
        let banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor("ded309")
    .setDescription(`${no} | У меня недостаточно прав - Управление сообщениями`)

  if (!message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) 
  return message.channel.send({embeds: [noperms]})  //.guild.me.
  
  let embed1 = new MessageEmbed()
      .setTitle(`Произошла ошибка!`)
      .setColor(err)
      .setDescription(`${no} | Вы не ввели текст или ввели его некорректно!`);
  if(!args[0]) {
      return message.reply({embeds: [embed1]})} 

  let noperms2 = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor("ded309")
    .setDescription(`${no} | У вас недостаточно прав - Управление сообщениями`)

  if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) 
  return message.channel.send({embeds: [noperms2]}) 
    

    let text = args.join(' ');
    await message.delete()
      message.channel.send(text)
        }
      } 