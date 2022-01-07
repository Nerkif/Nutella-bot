const { Collection, Client } = require('discord.js')
const { token, default_prefix } = require('./config.json')
const { no, yes } = require('./emoji.json');
const { color, err } = require('./config.json');
const fs = require('fs');
const moment = require('moment');
const { MessageEmbed } = require('discord.js');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MEMBERS",
        "GUILD_BANS",
        "GUILD_INTEGRATIONS",
        "GUILD_WEBHOOKS",
        "GUILD_INVITES",
        "GUILD_VOICE_STATES",
        "GUILD_PRESENCES",
        "GUILD_MESSAGES",
        "GUILD_MESSAGE_REACTIONS",
        "GUILD_MESSAGE_TYPING",
        "DIRECT_MESSAGES",
        "DIRECT_MESSAGE_REACTIONS",
        "DIRECT_MESSAGE_TYPING",
    ],
});

client.commands = new Collection();
client.aliases = new Collection();

require('./message')(client);

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

fs.readdir(__dirname + "/events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(__dirname + `/events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    console.log("Ивент: "+eventName)
  });
});


client.login(token);