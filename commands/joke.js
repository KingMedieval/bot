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

/*
OH MY GAWD
WHAT IS GOING ON
LO SIENTO
PROFE
INTERESTING
INTERESTING
INTERESTING independent
INTERESTING INDEED I THINK THAT IT IS REALLY
INTERESTING INTERESTING i THINK THAT IT IS REALLY
i THINK THAT IT IS VERY INTERESTING
HMMMM THAT IS VERY
CASE "HELLO":
  REACTION.USERS.REMOVE(USER).CATCH(CONSOLE.ERROR);
  IF (!canModifyQueue(MEMBER)) RETURN;
  QUEUE.CONNECTION.DISPATCHER.END();
  QUEUE.TEXTCHANNEL.SEND()

 */
