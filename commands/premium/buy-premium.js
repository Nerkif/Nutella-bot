const { MessageEmbed } = require('discord.js');

module.exports = {                        
    name: 'buy-premium',
    aliases: ["bprem", "premium-buy", "buy-prem"],
    category: "Премиум",
    description: "Приобрести премиум",
    example: "`+buy-premium`",
    cooldown: 3,
    async execute (message, args) {
      let embed = new MessageEmbed()
      .setColor("#ff0051")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setTitle('**Nutella | Премиум**')
      .setDescription(`[Купить премиум ?!](https://www.donationalerts.com/r/nutella_bot)

Чтобы приобрести премиум вы должны перейти по ссылке,
отправить вот такое сообщение:
1. Ваш ник
2. Ваш айди
3. И на сколько месяцев хотите приобрести премиум

Сумма премиума составляет 45 рублей за 1 месяц`)
      .setFooter("© Nutella. Все права защищены 2021") //Футер  
      message.channel.send(embed)
    }}