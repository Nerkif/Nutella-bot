const { Discord, MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'addemoji',
    aliases: ["add-emoji", "add emoji"],
    category: "Fun",
    description: "Украсть эмодзи", 
    example: "`+addemoji`",
    cooldown: 3, 
    async execute (message, args) {

        let noperms = new MessageEmbed()
    .setTitle(`Ошибка`)
    .setColor("ded309")
    .setDescription(`❌ | У вас недостаточно прав`)

        if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_GUILD)) 
        return message.channel.send({embeds: [noperms]})
    	if (!args.length)
    		return message.channel.send('Пожалуйста, укажите несколько смайликов для добавления их на сервер')

    	for (const emojis of args) {
    		const getEmoji = Discord.parseEmoji(emojis);

    		if (getEmoji.id) {
    			const emojiExt = getEmoji.animated ? '.gif' : '.png';
    			const emojiURL = `https://cdn.discordapp.com/emojis/${getEmoji.id + emojiExt}`;
    			message.guild.emojis
    			  .create(emojiURL, getEmoji.name)
    			  .then( (emoji) =>
    			  	message.channel.send(`Успешно добавлено: ${emoji.name} на ваш сервер!`)
    			  	);
    			}
    		}
    	},
    };