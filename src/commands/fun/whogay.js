const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'whogay',
    aliases: ["gay"],
    category: "Fun",
    description: "Узнать на сколько % участник гей",
    example: "`+whogay`",
    cooldown: 3,
    async execute (message, args) {

let Member =
message.mentions.members.first() ||
message.guild.members.cache.get(args[0]) ||
message.member;

let Result = Math.floor(Math.random() * 101);

let embed = new MessageEmbed()
.setColor('GREEN')
.setTitle(`Гей машина`)
.setDescription(`${Member.user.username} является геем на ${Result}% 🏳️‍🌈`)
.setFooter(`Запросил ${message.author.username}`)
.setTimestamp();

message.channel.send({embeds: [embed]})
    }}