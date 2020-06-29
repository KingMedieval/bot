const got = require('got');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "hentaigif",
  description: "Hentai 🔞",
  execute(message) {
    if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
    got('https://www.reddit.com/r/HENTAI_GIF/random/.json').then(response => {
        let content = JSON.parse(response.body);
        let nsfwGIFNEWImage = content[0].data.children[0].data.url;
        if (nsfwGIFNEWImage.toLowerCase().indexOf("https://redgifs.com") >= 0) {
          let redID = nsfwGIFNEWImage.slice(26);
          redLink = `https://www.gifdeliverynetwork.com/${redID}`;
          message.channel.send(redLink)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
          console.log('Bot responded with: ' + nsfwGIFNEWImage);
        }
        else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://gfycat.com") >= 0) {
          let gfyID = nsfwGIFNEWImage.slice(19);
          gfyLink = `https://www.gifdeliverynetwork.com/${gfyID}`;
          message.channel.send(gfyLink)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
          console.log('Bot responded with: ' + nsfwGIFNEWImage);
        }
        else {message.channel.send(nsfwGIFNEWImage)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
    }).catch(console.error);
  }
};
