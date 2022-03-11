const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'num-nutella',
    aliases: ["nutella-num", "num-nut", "nut-num"],
    category: "Реакции",
    description: "Съесть Нутеллу",
    example: "`+num-nut`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
 request.get(`https://g.tenor.com/v1/search?q=${"num-nutella"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
    const answer2 = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> съел(-а) Нутеллу..`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer2]})
})}}