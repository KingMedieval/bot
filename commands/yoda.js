const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "yoda",
  description: "translates to little green alien speak",
  async execute(message, args) {
    if (!args.length)
      return message.reply("add text, you must").catch(console.error);

    const inputText = args.join(" ");

    let response = await fetch('https://yoda-api.appspot.com/api/v1/yodish?text=' + inputText).then((res) => {
      status = res.status;
      return res.json()
    });

    if (status == 200) {
      const yodish = response.yodish;
      let yodishEmbed = new MessageEmbed();
      yodishEmbed.setDescription(yodish);
      yodishEmbed.setImage(`https://vignette.wikia.nocookie.net/lego-videogames/images/5/5f/Yoda.png/revision/latest?cb=20190714151809`);
      message.channel.send(yodishEmbed);
    }
    else {
      message.channel.send('API broke, it did');
    }
  }
};
