const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const request = require('request')
module.exports = {
    name: 'dance',
    aliases: ["Потанцевать", "потанцевать", "dance"],
    category: "Реакции",
    description: "Потанцевать",
    example: "`+dance`",
    cooldown: 3,
    async execute (message, args) {
        request.get(`https://g.tenor.com/v1/search?q=${"dance-gifs"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> танцует с <@${message.mentions.users.first().id}>`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> решил(-а) зажечь танцпол`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer2]})
}})}
} //Если есть пользователь выполнить 1 код. Если нет, то первый
 