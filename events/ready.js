module.exports = async (client) => {

  let i = 0;
  setInterval(()=>{
      let activity = [
      `Nutella | +help`,
      `за ${client.users.cache.size} участников`,
      `за лучшим сервером!`,
      ]
      const index = Math.floor(i);
      client.user.setActivity(activity[index], {type: "WATCHING"});
      i = i + 1
      if (i === activity.length) i = i - activity.length
  },10000)
  client.user.setStatus('idle');  //Статус
  console.log(`[API] ${client.user.username} готов к работе`);
  };