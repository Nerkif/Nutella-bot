const { MessageEmbed } = require('discord.js');
const { color } = require('../../config.json');
const { no, yes } = require('../../emoji.json')
module.exports = {
    name: 'ping',
    aliases: ["пинг"],
    category: "Информация",
    description: "Задержка бота",
    example: "`!ping`",
    cooldown: 3,
    async execute (message, args) {
    
    let end = Date.now();
    
    let embed = new MessageEmbed()
    .setAuthor("ПОНГ!")
    .setDescription(`Nutella | Пинг: ${Math.round(message.client.ws.ping)}ms`)
    .setColor(color);
   message.channel.send({ embeds: [embed] })
  }
  /* async execute (message, args) {
       let start = Date.now();

     let pingEmbed = new MessageEmbed()
     .setDescription("Загрузка...")
     .setColor(color)
  
  message.channel.send({ embeds: [pingEmbed] }).then(m => {
    
    let end = Date.now();
    
    let embed = new MessageEmbed()
    .setAuthor("Задерж", message.author.avatarURL())
    .setDescription(`Nutella | Пинг: ${Math.round(message.client.ws.ping)}ms`)
    .setColor(color);
    m.edit({ embeds: [embed] }).catch(e => message.channel.send(e))
  })
    }}*/
    }