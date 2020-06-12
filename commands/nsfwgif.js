const got = require('got');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;

module.exports = {
  name: "nsfwgif",
  description: "🔞",
  execute(message) {
    if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
    rndSauce = Math.floor(Math.random() * 3);
    if (rndSauce === 0) {
      sauce = 'https://www.reddit.com/r/NSFW_GIF/random/.json'
    }
    else if (rndSauce === 1) {
      sauce = 'https://www.reddit.com/r/porngifs/random/.json'
    }
    else if (rndSauce === 2) {
      sauce = 'https://www.reddit.com/r/canthold/random/.json'
    }
  	got(sauce).then(response => {
  			let content = JSON.parse(response.body);
  			let nsfwGIFNEWImage = content[0].data.children[0].data.url;
        message.channel.send(nsfwGIFNEWImage)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + nsfwGIFNEWImage);
  	}).catch(console.error);
  }
};
