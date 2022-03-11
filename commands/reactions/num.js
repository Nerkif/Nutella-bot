const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'nom',
    aliases: ["num", 'Num', "Nom"],
    category: "Реакции",
    description: "Покормить",
    example: "`+nom`",
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
        //if (message.author.id != '720252938802561105') return
        request.get(`https://g.tenor.com/v1/search?q=${"feeds"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
      const answer = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> покормил(-а) <@${message.mentions.users.first().id}>`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer]})
  })}}