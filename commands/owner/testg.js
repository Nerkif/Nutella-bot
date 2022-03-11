const { MessageEmbed } = require('discord.js')
const { err, color, success } = require('../../config.json')
const request = require('request')

module.exports = { 
    name: 'testg',
    category: "Реакции",
    description: "",
    cooldown: 3,
  async execute(message, args) {
  	request.get(`https://g.tenor.com/v1/search?q=${"hug-gifs"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
  // тут обработка ответа
  let embed = new MessageEmbed()
      .setTitle(`Nutella | Реакции`)
      .setDescription(`Реакция`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [embed] });
})}}