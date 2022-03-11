const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'tea',
    aliases: ["Налить чай"],
    category: "Реакции",
    description: "Налить чай",
    example: "`+tea`",
    cooldown: 3,
    async execute (message, args) {
  let links = ["https://i.gifer.com/3f4u.gif", "https://media.discordapp.net/attachments/773984556818497616/896065848626798612/45646.gif", "https://media.discordapp.net/attachments/773984556818497616/896065841123168296/4545452199.gif", "https://media.discordapp.net/attachments/744583395157213217/896685857854079057/540x298_0xac120003_12072077001592314812.gif"]

if (message.mentions.users.first()) {
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> налил(-а) чай <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
} 
 else {
    const answer2 = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> налил(-а) себе чай`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer2]})
}}
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