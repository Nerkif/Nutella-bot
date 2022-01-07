const { MessageEmbed } = require("discord.js");
const { no, yes } = require('../../emoji.json');
const { color } = require('../../config.json')
const db = require("quick.db");
module.exports = {
    name: "bugreport",
    aliases: ["bgr", "bug"],
    category: "Fun",
    example: "`!bugreport [неисправность]`",
    description: "Сообщить об неисправности",
    cooldown: 3,
  async execute (message, args) {
     const now = new Date();
         let user =
          message.mentions.members.first() ||
          message.guild.members.cache.get(args[0]) ||
          message.guild.members.cache.find(
            r =>
              r.user.username.toLowerCase() === args.join(" ").toLocaleLowerCase()
          ) ||
          message.guild.members.cache.find(
            r => r.displayName.toLowerCase() === args.join(" ").toLocaleLowerCase()
          ) ||
          message.member;
    let channel = 'channel_id'
    const suggestionQuery = args.join(' ');
  if(!suggestionQuery) return message.reply("Использование команды: \`bug описание проблемы\`");
  await message.delete()
  const embed = new MessageEmbed()   
        .setTitle("Nutella | Баг-Репорт")
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField("❯ Автор", `>>> ${message.member.user.tag}`, true)
        .addField("❯ Контент", `>>> ${suggestionQuery}`)
        .addField("❯ С сервера", message.guild.name)
        .setColor(color);
        message.client.channels.cache.get(channel).send({embeds: [embed]})
       
    const done = new MessageEmbed()
       .setDescription(`${yes} | <@${message.author.id}>, Ваше сообщение представляется здесь, <#${channel}>\n\nЗайдите на [Support](https://discord.gg/8a29sUcTGe) чтобы увидеть ответ`)
       .setColor("GREEN")
       .setFooter("Спасибо за помощь!")
       
    message.channel.send({embeds: [done]})
    
  }
}