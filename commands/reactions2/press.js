const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'press',
    aliases: ["pres", "прижать"],
    category: "Реакции",
    description: "Прижать",
    example: "`+press`",
    cooldown: 3,
    async execute (message, args) {
      if (!message.mentions.users.first()) return message.channel.send("**Укажите пользователя**");//проверка, есть ли там пользователь
        if (message.mentions.users.first().id == message.author.id) return message.channel.send("**Нельзя применять команду к себе!**");//нельзя взаимодействовать с собой
       // if (message.author.id != '720252938802561105') return
        let links = ["https://images-ext-1.discordapp.net/external/IgmdOZa4iPC4Tuxp7XhtWfNzYXKw2cS84NQG7rSqnL0/https/c.tenor.com/gn-o0r4eqF4AAAAC/yui-komori-ayato-sakamaki.gif",
        "https://images-ext-2.discordapp.net/external/6I3TBvcPNHz5Hm5Kw-cvI1DLHB8MWESyrXeEtssNgiM/https/c.tenor.com/Mwwt3HkiT74AAAAC/anime-pushed-down.gif",
        "https://images-ext-2.discordapp.net/external/V-mSzLUxSvoLD8geEVUVkEjaJcxgpJylqO_dBdFMZTU/https/c.tenor.com/XIHeW65AqIwAAAAC/kanna-pin.gif",
        "https://images-ext-2.discordapp.net/external/NLG12RinShTXhlJh7rBGAHAKtPgkd3-jkO9YyqBJzEs/https/c.tenor.com/FfdLAadTXIEAAAAd/my-little-monster-anime.gif",
        "https://images-ext-2.discordapp.net/external/xvdWGb0HtFs_8vKdtDVoK1LDFlttHyLP_oYFLz6a5ws/https/c.tenor.com/KWDoz37T5zQAAAAC/kiss-pin.gif"]
      const answer = new MessageEmbed()
      .setColor("#ff0051")
      .setDescription(`<@${message.author.id}> прижал(-а) <@${message.mentions.users.first().id}>`)
      .setImage(links[Math.floor(Math.random() * links.length)])
      message.channel.send({embeds: [answer]})
  }}