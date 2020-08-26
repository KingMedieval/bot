const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "joke",
  description: "shitty jokes like really bad",
  async execute(message) {
    let response = await fetch(`https://icanhazdadjoke.com/`, {
      headers: {
        'Accept': 'application/json'
      }
    }).then((res) => {
      status = res.status;
      return res.json()
    });

    if (status == 200) {
      const joke = response.joke;
      message.channel.send(joke);
    }
    else {
      message.channel.send('Unexpected API Error');
    }
  }
};
