const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'sleep',
    aliases: ["Sleep", "SLEEP", "спать", "Спать"],
    category: "Реакции",
    description: "Уйти спать",
    example: "`+sleep`",
    cooldown: 3,
    async execute (message, args) {
request.get(`https://g.tenor.com/v1/search?q=${"sleep"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
    const answer2 = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> отправился(-ась) спать 😴`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer2]})
})}}