const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const date = require('date-and-time');
const { yes, no } = require('../../emoji.json')
const { color, success, default_value, err } = require('../../config.json')
module.exports = {
    name: "review",
    aliases: ["отзыв"],
    category: "Разное",
    example: "`s!review [1/5] [отзыв]`",
    description: "Отзыв",
    cooldown: 3,
  async execute (message, args) {
    const now = new Date();
    const time = date.addHours(now);
    let channel = '940119277296570419'
    const review = args.slice(1).join(' ');
    
            let embed2 = new MessageEmbed()
                .setTitle("Nutella | Ошибка")
                .setColor(err)
                .setDescription(`${no} Укажите номер корон [1/5]`);
            let embed3 = new MessageEmbed()
                .setTitle("Nutella | Ошибка")
                .setColor(err)
                .setDescription(`${no} Вы не написали отзыв!`);
    
            if (!args[0]) return message.channel.send({embeds: [embed2]})
    
            if(args[0] > 5) return message.channel.send({embeds: [embed2]})
            
            if(isNaN(args[0])) return message.channel.send({embeds: [embed2]})

            if (!review) return message.channel.send({embeds: [embed3]})
         
            let embed = new MessageEmbed()
                .setTitle(`Nutella | Отзыв`)
                .setColor(color)
                .addField('❯ Автор', `>>> ${message.member.user.tag}`)
                .addField(`❯ Сервер`, `${message.guild.name}`)
                .addField('❯ Комментарий', `>>> ${review}`)
                .setFooter("👑 1/5")
                .setThumbnail(message.author.displayAvatarURL({ format: 'png' }));
    
            if(args[0] == 2) embed.setFooter(`👑 2/5`)
            if(args[0] == 3) embed.setFooter(`👑 3/5`)
            if(args[0] == 4) embed.setFooter(`👑 4/5`)
            if(args[0] == 5) embed.setFooter(`👑 5/5`)

                
            let guild = "913874913704681472" 
            let users = message.client.guilds.cache.get(guild).members.cache.get(message.author.id)
            if(!users){
                const done = new MessageEmbed()
               .setTitle(`Nutella | Отзыв`)
               .setDescription(`${yes} | Спасибо большое за отзыв, мы вам благодарны!\nВаше сообщение представляется здесь - [Ссылка](https://discord.gg/6gvNMufHwU)`)
               .setColor(color)
                message.reply({embeds: [done]})
            } else{
            if(users.user.id === message.author.id){
            const done = new MessageEmbed()
               .setTitle(`Nutella | Отзыв`)
               .setDescription(`${yes} | Спасибо большое за отзыв, мы вам благодарны!\nВаше сообщение представляется здесь - <#${channel}>`)
               .setColor(color)
           message.reply({embeds: [done]})
            }}
            message.client.channels.cache.get(channel).send({embeds: [embed]})
            //message.delete()

        }
    }
