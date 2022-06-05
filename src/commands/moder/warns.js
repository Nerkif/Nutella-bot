const db = require("quick.db");
const Discord = require("discord.js");
const { err, color, success } = require('../../config.json')
const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'warns',
    aliases: ['warning', "варны"],
    category: "Модерация",
    example: "`!warns [@пользователь]`",
    description: "Посмотреть предупреждения участника",
    cooldown: 3,
  async execute (message, args) {
    let economy = db.fetch(`moder_${message.guild.id}`)
    if(economy === 1) return true;
    const user = message.mentions.members.first() || message.author || message.guild.members.cache.get(userArgs[0]);

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;
  let embed = new MessageEmbed()
  .setAuthor(message.member.user.tag, message.member.user.displayAvatarURL({ format: 'jpg' }))
  .setColor(color)
  .setDescription(`У пользователя ${user}\nВсего предупреждений: \`${warnings}\``);
  message.channel.send({embeds: [embed]})
  }
};
