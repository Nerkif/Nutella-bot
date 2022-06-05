 const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'support',
    aliases: ["Support", "supp"],
    category: "info",
    description: "Support сервер бота",
    example: "`+invite`",
    cooldown: 3,
    async execute (message, args) {
      let embed = new MessageEmbed()
      .setColor('GREEN')
      .setTitle('**Nutella | Support**')
      .setDescription(`[Support сервер](https://discord.gg/5d8EedyH3r)`)
      .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL())
      message.reply({ embeds: [embed] });
    }}