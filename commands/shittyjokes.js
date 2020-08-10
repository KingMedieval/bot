const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "shittyjokes",
  description: "shitty jokes",
  execute(message) {
    message.channel.send("I am a dumbass");
  }
};
