const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'wholesbian',
    aliases: ["wholes", "wholesbi"],
    category: "Fun",
    description: "Узнать на сколько % участник лесбиянка",
    example: "`+wholesbian`",
    cooldown: 3,
    async execute (message, args) {

let Member =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]) ||
message.member;

let Result = Math.floor(Math.random() * 101);

let embed = new MessageEmbed()
.setColor('RANDOM')
.setTitle(`Кто же лесбиянка ?`)
.setDescription(`${Member.user.username} является лесбиянкой на ${Result}% 🏳️‍🌈`)
.setFooter(`Запросил ${message.author.username}`)
.setTimestamp();

message.channel.send({embeds: [embed]})
    }}