const { MessageEmbed, Permissions } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
const { yes, no } = require('../../emoji.json')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'warn',
    aliases: ['warn', "варн"],
    example: "`!warn [@пользователь] [причина]`",
    category: "Модерация",
    description: "Выдать предупреждение участнику",
    cooldown: 3,
  async execute (message, args) {
    let economy = db.fetch(`moder_${message.guild.id}`)
    if(economy === 1) return true;

        let userArray = message.content.split(" ");
        let userArgs = userArray.slice(1);
        const reason = args.slice(1).join(" ");
        let user = message.mentions.members.first() || message.guild.members.cache.get(userArgs[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === userArgs.slice(0).join(" ") || x.user.username === userArgs[0])
        if (user === message.member) return message.channel.send("**Вы не можете выдать себе мут!**")

    let noperms = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ У вас недостаточно прав - Управление сервером`)
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){
      return message.channel.send({embeds: [noperms]})
    }

    let targets = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ Вы не указали пользователя!`)
      if (!user) {
      return message.channel.send({embeds: [targets]});
    }
    
    let roles = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ Вы не указали причину!`)
      if (!reason) {
      return message.channel.send({embeds: [roles]});
    }
    
    if (user.user.bot) {
      return message.reply(`Нельзя взаимодействовать с ботами!`)
    }

    if (message.author.id === user.id) {
      return
    }

    if (user.id === message.guild.ownerId) {
      return
    }

    let embed = new MessageEmbed()
    .setTitle("Nutella | Модерация")
    .setDescription(`${yes} | Вы выдали предупреждение ${user}!\nПричина: **${reason}**`);
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(`Вы были предупреждены на сервере ${message.guild.name} по причине: ${reason}`);
      await message.channel.send({embeds: [embed]});
    } 
      else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);

      let embed2 = new MessageEmbed()
      .setTitle(`Nutella | Модерация`)
      .setDescription(`Доброго времени суток, ${user}!
На сервере ${message.guild.name} вам выдали предупреждение за ${reason}`)
      .setColor(color)
      .setTimestamp()
      user.send({embeds: [embed2]});
      await message.channel.send({embeds: [embed]});
      
      message.delete
      
    }
  }
};
