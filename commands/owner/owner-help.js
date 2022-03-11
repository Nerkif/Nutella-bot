const { MessageEmbed } = require('discord.js');
const { color } = require('../../config.json');
const { no, yes } = require('../../emoji.json')
module.exports = {
    name: 'fhelp',
    aliases: ["fh", "oh", "ohelp"],
    category: "Владелец",
    description: "Помощь по командам для владельца",
    example: "`!fh`",
    cooldown: 3,
    async execute (message, args) {

    if(message.author.id !== "720252938802561105") return
    let embed = new MessageEmbed()
    .setTitle(`Помощь: Владелец ${yes}`)
    .setDescription(`**Команды которые есть:**
fbug - ответить на Баг (нужно быть на сервере Support!)
reload - перезагрузить команду. Пример: +reload info server
`)
    .setColor(color);
   message.channel.send({ embeds: [embed] })
  }}