const { MessageEmbed, Permissions } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
const { yes, no } = require('../../emoji.json')
const { err, color, success } = require('../../config.json')
module.exports = {
    name: 'unwarn',
    aliases: ['uw', "rw"],
    category: "Модерация",
    example: "`unwarn [@пользователь]`",
    description: "Удалить предупреждения участника",
    cooldown: 3,
    async execute (message, args) {
      let economy = db.fetch(`moder_${message.guild.id}`)
      let user = message.mentions.members.first() || message.author || message.guild.members.cache.get(userArgs[0]);
      let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);
      if (user === message.member) return message.channel.send("**Вы не можете использовать команду на себе!**")
      if(economy === 1) return true;

    let noperms = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ У вас недостаточно прав`)
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)){
      return message.channel.send({embeds: [noperms]});
    }

    let targets = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ Пожалуйста, укажите пользователя!`)
      if (!user) {
      return message.channel.send({embeds: [targets]});
    }
    
    let roles = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ Пожалуйста, укажите причину!`)

    let nul = new MessageEmbed()
    .setColor(err)
    .setDescription(`${no}︱ У этого пользователя: \`0\` предупреждений`)
    if (warnings === null) {
      return message.channel.send({embeds: [nul]});
    }

    if (message.mentions.users.first().bot) {
      return
    }

    if (message.author.id === user.id) {
      return
    }

    let embed = new MessageEmbed()
      //.setAuthor(message.mentions.users.first().tag, message.mentions.users.first().displayAvatarURL({ format: 'jpg' }))
      .setTitle("Nutella | Модерация")
      .setColor(color)
      .setDescription(`Предупреждения ${message.mentions.users.first().username} сброшены!`);
    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(`${message.mentions.members.first()}, ваши предупреждения сброшены с сервера ${message.guild.name}\nСнял предупреждения: ${message.author.username}`);
    await message.channel.send({embeds: [embed]}
    );
  }
};
