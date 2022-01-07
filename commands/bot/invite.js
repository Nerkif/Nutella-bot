const { MessageEmbed } = require('discord.js');
const { no, yes, color } = require('../../emoji.json');
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
      .setDescription(`[Нажмите, чтобы пригласить](invite_link)`)
      message.channel.send({embeds: [embed]})
    }}