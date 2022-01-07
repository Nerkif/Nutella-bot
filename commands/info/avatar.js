const Discord = require("discord.js")

module.exports = {
    name: 'avatar',
    aliases: ["Аватар"],
    category: "info",
    description: "Аватар пользователя",
    example: "`+avatar`",
    cooldown: 3,
    async execute (message, args) {

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(' ') || x.user.username === args[0]) || message.member;

        if (!member.user.avatarURL) return message.channel.send(`У этого пользователя нет аватара`);

        const avatar = new Discord.MessageEmbed()
			.setTitle(`Аватар ${member.user.username}`)
            .setColor("#ff0051")
            .setImage(member.user.avatarURL())
            .setColor(member.displayHexColor)
            .setImage(member.user.displayAvatarURL({size: 4096, dynamic: true}))
            .setURL(member.user.avatarURL())
        message.channel.send({embeds: [avatar]})
            // права 
            .catch(() => message.channel.send('**ОШИБКА:** Нету разрешения `встраивать ссылки` '));

    }

};