const Discord = require("discord.js");
const { readdirSync } = require('fs')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const db = require('quick.db')
const { no, yes, diamond, orange, blue, nut } = require('../../emoji.json')
const { default_prefix, color } = require('../../config.json')
module.exports = {
    name: 'help',
    aliases: ["h", "помощь"],
    category: "Информация",
    description: "Помощь",
    example: "+help",
    cooldown: 3,
    async execute (message, args) {
    let prefix = db.fetch(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix;
    const { commands } = message.client;   
      
    const commands0 = readdirSync("./commands/info").filter(f => f.endsWith(".js"));
    let info = "";
    for (let i = 0; i < commands0.length; i++){
      let file = require(`../../commands/info/${commands0[i]}`);
      let name = file.name || commands0[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      info += `${orange} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) info += `${prem} | ${prefix}${name} - ${description}\n`
    }      
    const commands1 = readdirSync("./commands/reactions").filter(f => f.endsWith(".js"));
    let reactions = "";
    for (let i = 0; i < commands1.length; i++){
      let file = require(`../../commands/reactions/${commands1[i]}`);
      let name = file.name || commands1[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      reactions += `${blue} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) reactions += `${prem} | ${prefix}${name} - ${description}\n`
    } 
    const commands2 = readdirSync("./commands/reactions2").filter(f => f.endsWith(".js"));
    let reactions2 = "";
    for (let i = 0; i < commands2.length; i++){
      let file = require(`../../commands/reactions2/${commands2[i]}`);
      let name = file.name || commands2[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      reactions2 += `${orange} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) reactions2 += `${prem} | ${prefix}${name} - ${description}\n`
      
    }     
    const commands3 = readdirSync("./commands/fun").filter(f => f.endsWith(".js"));
    let fun = "";
    for (let i = 0; i < commands3.length; i++){
      let file = require(`../../commands/fun/${commands3[i]}`);
      let name = file.name || commands3[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      fun += `${blue} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) fun += `${prem} | ${prefix}${name} - ${description}\n`
      
    }
    const commands4 = readdirSync("./commands/moder").filter(f => f.endsWith(".js"));
    let moder = "";
    for (let i = 0; i < commands4.length; i++){
      let file = require(`../../commands/moder/${commands4[i]}`);
      let name = file.name || commands4[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      moder += `${orange} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) moder += `${prem} | ${prefix}${name} - ${description}\n`
    }
    const commands5 = readdirSync("./commands/bot").filter(f => f.endsWith(".js"));
    let bot = "";
    for (let i = 0; i < commands5.length; i++){
      let file = require(`../../commands/bot/${commands5[i]}`);
      let name = file.name || commands5[i].split(".")[0];
      let description = file.description || "Нет описания команды";
      bot += `${orange} | ${prefix}${name} - ${description}\n`;
      if(file.premium === true) bot += `${prem} | ${prefix}${name} - ${description}\n`
      
    }
    if (!args[0]) {
    const embed = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Информации 📁`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n1-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(info)
    const embed1 = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Реакции#1 ❤`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n2-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(reactions)
    const embed2 = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Реакции#2 ❤`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n3-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(reactions2)
    const embed3 = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Развлечений ⏳`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n4-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(fun)
    const embed4 = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Модерации 📌`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n5-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(moder)
    const embed5 = new MessageEmbed()
      .setColor(color)
      .setAuthor(`Команды: Бот`, message.client.user.displayAvatarURL({ dynamic: true }))
      .setFooter(`${prefix}help [команда]\n6-я страница`, message.author.displayAvatarURL({ dynamic: true }))
      .setDescription(bot)
      
    let pages = [embed, embed1, embed2, embed3, embed4, embed5]
    const pageMovingButtons1 = new MessageButton()
    .setCustomId(`forward_button_embed`)
    .setLabel("")
    .setEmoji(">")
    .setStyle("SUCCESS")
    const pageMovingButtons3 = new MessageButton()
    .setCustomId(`delete`)
    .setLabel("")
    .setEmoji(`❌`)
    .setStyle("DANGER")
    const pageMovingButtons2 = new MessageButton()
    .setCustomId(`back_button_embed`)
    .setLabel("")
    .setEmoji("<")
    .setStyle("SUCCESS")
    var pageMovingButtons = new MessageActionRow()
    .addComponents(pageMovingButtons2, pageMovingButtons3, pageMovingButtons1)
    var currentPage = 0;
    return message.channel.send({ components: [pageMovingButtons], embeds: [pages[0]] }).then((msg) => {
      const firstPageFilter = btn => btn.user.id === message.author.id;
      const collector = msg.createMessageComponentCollector({ filter: firstPageFilter, time: 60000 });
      collector.on('collect', async x => {
      x.deferUpdate();
      if(x.customId == "back_button_embed"){
            if(currentPage - 1 < 0){
                currentPage = pages.length - 1
            } else{
                currentPage -= 1;
            }
        } else if(x.customId == "forward_button_embed"){
            if(currentPage + 1 == pages.length){
                currentPage = 0;
            } else{
                currentPage += 1;
            }
        }
        if(x.customId == "back_button_embed" || x.customId == "forward_button_embed"){
            msg.edit({embeds: [pages[currentPage]], components: [pageMovingButtons]});
        }
        if(x.customId == "delete"){
          msg.delete()
        }

      })
    })
    }
    const name = args[0].toLowerCase();
    const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))

    if (!command) {
      let embed = new MessageEmbed()
      .setColor("RED")
      .setTitle("Nutella | Ошибка")
      .setDescription(`${no} Неправильная команда!`)
      return message.channel.send({ embeds: [embed] });
        }
        let embed = new MessageEmbed()
        .setThumbnail(message.client.user.displayAvatarURL({ dynamic: true }))
        .setTitle(`Помощь: ${command.name.slice(0, 1) + command.name.slice(1)}`)
        .setColor(color)
        .setFooter('Nutella')
        .addField(`Команда:`, command.name, true)
        .addField(`Описание:`, command.description ? command.description: "Нет", true)
        .addField(`Категория:`, command.category ? command.category : "Нет", true)
        .addField(`Псевдонимы:`, command.aliases ? command.aliases.join(", ") : "Нет", true)
        .addField(`Пример:`, command.example ? command.example : "Нет", true)
    message.channel.send({ embeds: [embed] });
      
    }}