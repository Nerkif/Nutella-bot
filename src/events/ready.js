module.exports = async (client) => {

  let i = 0;
  setInterval(()=>{
      let activity = [
      `+help`,
      `за ${client.guilds.cache.size} серверов`,
      `за ${client.users.cache.size} участников`,
      `v0.0.3b`,
      ]
      const index = Math.floor(i);
      client.user.setActivity(activity[index], {type: "WATCHING"});
      i = i + 1
      if (i === activity.length) i = i - activity.length
  },10000)
  client.user.setStatus('idle');  //Статус
  console.log(`[API] ${client.user.username} готов к работе`);
  };