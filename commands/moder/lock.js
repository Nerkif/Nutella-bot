const Discord = require("discord.js");
const { MessageEmbed, Permissions } = require('discord.js')
const { yes, no } = require('../../emoji.json')
const db = require('quick.db')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'lock',
    aliases: ['lock', "закрыть"],
    category: "Модерация",
    example: "`!lock [#канал]`",
    description: "Закрыть канал",
    cooldown: 3,
  async execute (message, args) {

    let noperms = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} У вас недостаточно прав`)
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){   
    return message.channel.send(noperms)
   }
   const role = message.guild.roles.cache.get("") 
   message.channel.overwritePermissions([
  {
     id: role,
     deny: ['SEND_MESSAGES'],
  },
]);

   const embed = new MessageEmbed()
   .setTitle("Канал обновлен")
   .setDescription(`${message.channel} был заблокирован`)
   .setColor(success);
   await message.channel.send({embeds: [embed]});
   message.delete();
  }}