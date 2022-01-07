const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "ship",
        aliases: ['ships', 'шип', 'шипп'],
        category: "Fun",
        description: "Шипперить",
        usage: "ship [участник]",
        cooldown: 3, 
  async execute (message, args) {
    let ship = Math.floor(Math.random() * 100) + 1;

    let user = message.mentions.users.first();
    if (user == message.author.id) 
      return message.channel.send({ content: `Ты любишь себя более чем достаточно ❤` });
    let robber = message.author;

    if (!user) {
      return message.channel.send({
        content:
          "Убедитесь, что вы выбрали человека, которого хотите проверить!"
      });
    }

    let embed = new MessageEmbed()
      .setTimestamp(Date.now())
      .setTitle("Nutella | Шип 💕")
      .setDescription(
        `**${robber.username}** & **${user.username}** совместимы на ${ship}% 💕`
      )
      .setColor(`RANDOM`);
    message.channel.send({embeds: [embed]})
  }
}