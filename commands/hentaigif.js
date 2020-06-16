const got = require('got');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "hentaigif",
  description: "Hentai 🔞",
  execute(message) {
    if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
  	got('https://www.reddit.com/r/HENTAI_GIF/random/.json').then(response => {
  			let content = JSON.parse(response.body);
  			let hentaiGIFNEWImage = content[0].data.children[0].data.url;
        message.channel.send(hentaiGIFNEWImage)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + hentaiGIFNEWImage);
  	}).catch(console.error);
  }
};
