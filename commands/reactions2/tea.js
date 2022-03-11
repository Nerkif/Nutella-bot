const { MessageEmbed } = require('discord.js');
const { color } = require('./../../config.json')
const { no, yes, nut } = require('../../emoji.json');
const request = require('request')
module.exports = {
    name: 'tea',
    aliases: ["Налить чай"],
    category: "Реакции",
    description: "Налить чай",
    example: "`+tea`",
    cooldown: 3,
    async execute (message, args) {
  request.get(`https://g.tenor.com/v1/search?q=${"tea"}&key=${"K8YTIPE640UW"}&limit=${"60"}`, (err, res, body)=> {
  if (err) {
    return console.error('Загрузка не удалась:', err);
  }
if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> налил(-а) чай <@${message.mentions.users.first().id}>`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor(color)
      .setDescription(`<@${message.author.id}> налил(-а) себе чай`)
      .setImage(JSON.parse(body).results[Math.floor(Math.random() * JSON.parse(body).results.length)].media[0].gif.url)
      message.reply({embeds: [answer2]})
}})}
} //Если есть пользователь выполнить 1 код. Если нет, то первый

/*
MANAGE_MESSAGES это управлять сообщениями

Все права на англ:

CREATE_INSTANT_INVITE (create invitations to the guild)
KICK_MEMBERS
BAN_MEMBERS
ADMINISTRATOR (implicitly has all permissions, and bypasses all channel overwrites)
MANAGE_CHANNELS (edit and reorder channels)
MANAGE_GUILD (edit the guild information, region, etc.)
ADD_REACTIONS (add new reactions to messages)
VIEW_AUDIT_LOG
PRIORITY_SPEAKER
STREAM
VIEW_CHANNEL
SEND_MESSAGES
SEND_TTS_MESSAGES
MANAGE_MESSAGES (delete messages and reactions)
EMBED_LINKS (links posted will have a preview embedded)
ATTACH_FILES
READ_MESSAGE_HISTORY (view messages that were posted prior to opening Discord)
MENTION_EVERYONE
USE_EXTERNAL_EMOJIS (use emojis from different guilds)
VIEW_GUILD_INSIGHTS
CONNECT (connect to a voice channel)
SPEAK (speak in a voice channel)
MUTE_MEMBERS (mute members across all voice channels)
DEAFEN_MEMBERS (deafen members across all voice channels)
MOVE_MEMBERS (move members between voice channels)
USE_VAD (use voice activity detection)
CHANGE_NICKNAME
MANAGE_NICKNAMES (change other members' nicknames)
MANAGE_ROLES
MANAGE_WEBHOOKS
MANAGE_EMOJIS_AND_STICKERS
USE_APPLICATION_COMMANDS
REQUEST_TO_SPEAK
MANAGE_THREADS
USE_PUBLIC_THREADS
USE_PRIVATE_THREADS
USE_EXTERNAL_STICKERS (use stickers from different guilds)
*/