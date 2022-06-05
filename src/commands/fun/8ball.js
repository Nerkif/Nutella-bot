const Discord = require("discord.js")

module.exports = {
    name: '8ball',
    aliases: ["8ball"],
    category: "fun",
    description: "Шар предсказаний",
    example: "`+8ball`",
    cooldown: 3,
    async execute (message, args) {
  //command
  function doMagic8BallVoodoo() {
    var rand = ['Да', 'Нет', 'А ты как думаешь ? НЕТ.', 'Может быть', 'Никогда', 'Возможно'];

    return rand[Math.floor(Math.random()*rand.length)];
}

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
  
var msg1 = Array(5); 
		msg1[1] = "Нет";
	  msg1[2] = "Да";
		msg1[3] = "Может быть";
		msg1[4] = "Никогда";
		msg1[5] = "А ты как думаешь ? НЕТ."
		msg1[6] = "Возможно" 
        var x = getRandomInt(0, 20);
		if (x < 5){ 
         if (x < 3){
			message.channel.send(msg1[1]);
		}
		else {
               message.channel.send(msg1[3]);
		}
		}
		else if (x<= 9) {
			if (x >= 7){
			message.channel.send(msg1[2]); }
				else{
                   message.channel.send(msg1[4]);
				}
		} 
		else if (x <= 12 ) { 
			message.channel.send(msg1[5]);
		}
		else {
			message.channel.send(msg1[6])
		}
		

  


  }
  }