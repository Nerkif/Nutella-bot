const Discord = require("discord.js");
const { MessageEmbed } = require('discord.js')
const { yes, no } = require('../../emoji.json')
const db = require('quick.db')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'unlock',
    aliases: ["открыть"],
    category: "Модерация",
    example: "`!unlock [#канал]`",
    description: "Открыть канал",
    cooldown: 3,
  async execute (message, args) {
    let economy = db.fetch(`moder_${message.guild.id}`)
            if(economy === 1) return true;
    let noperms = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no} У вас недостаточно прав`)
    if (!message.member.hasPermission("MANAGE_GUILD")){
   return message.channel.send({embeds: [noperms]})
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Канал обновлен")
   .setDescription(`${message.channel} был разблокирован`)
   .setColor(success);
   await message.channel.send({embeds: [embed]});
   message.delete();
  }}