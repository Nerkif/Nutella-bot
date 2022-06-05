const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'bite',
    aliases: ["кусь", "укусить"],
    category: "Реакции",
    description: "Укусить",
    example: "`+bite`",
    cooldown: 3, 
    async execute (message, args) {
      const embed = new MessageEmbed()
      .setTitle(`Nutella | Реакции ${nut}`)
      .setColor(color)
      .setDescription(`<@${message.author.id}>, вы не ввели пользователя!`)
      if(!args[0]) {
      return message.reply({embeds: [embed]})} 

      if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return //нельзя взаимодействовать с собой
        request.get(`https://g.tenor.com/v1/search?q=${"bite-gifs"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
      const answer = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> укусил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer]})
  })}}