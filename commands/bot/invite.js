const { MessageEmbed } = require('discord.js');
const { no, yes } = require('../../emoji.json');
const { color, success, err } = require('../../config.json')
module.exports = {
    name: 'invite',
    aliases: ["Пригласить бота"],
    category: "Fun",
    description: "Пригласить бота",
    example: "`+invite`",
    cooldown: 3,
    async execute (message, args) {
      let embed = new MessageEmbed()
      .setColor(color)
      .setTitle('**Приглашение бота**')
      .setDescription(`[Нажмите, чтобы пригласить](https://discord.com/api/oauth2/authorize?client_id=922575844902334494&permissions=1524109764855&scope=bot%20applications.commands)`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
      message.reply({embeds: [embed]})
    }}