const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'smoke',
    aliases: ["smok", "закурить", "курить"],
    category: "Реакции",
    description: "Закурить сигарету",
    example: "`+smoke`",
    cooldown: 3,
    async execute (message, args) {
      //if (!message.mentions.users.first()) return //проверка, есть ли там пользователь
request.get(`https://g.tenor.com/v1/search?q=${"smoke"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> закурил(-а) с <@${message.mentions.users.first().id}>`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> прикурил(-а)`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer2]})
}})}
} //Если есть пользователь выполнить 1 код. Если нет, то первый
