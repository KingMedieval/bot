const got = require('got');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;

module.exports = {
  name: "nsfwgif",
  description: "🔞",
  execute(message) {
    gifs(message);
};

function gifs(message) {
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
  else if (rndSauce === 3) {
    sauce = 'https://www.reddit.com/r/porninfifteenseconds/random/.json'
  }
  else if (rndSauce === 4) {
    sauce = 'https://www.reddit.com/r/besthqporngifs/random/.json'
  }
  else if (rndSauce === 5) {
    sauce = 'https://www.reddit.com/r/VerticalGifs/random/.json'
  }
  else if (rndSauce === 6) {
    sauce = 'https://www.reddit.com/r/CuteModeSlutMode/random/.json'
  }
  got(sauce).then(response => {
      let content = JSON.parse(response.body);
      let nsfwGIFNEWImage = content[0].data.children[0].data.url;
      if (nsfwGIFNEWImage.toLowerCase().indexOf("https://i.redd.it") >= 0 || nsfwGIFNEWImage.toLowerCase().indexOf("https://i.imgur.com") >= 0 || nsfwGIFNEWImage.toLowerCase().indexOf("https://imgur.com") >= 0) {
        message.channel.send(nsfwGIFNEWImage)
        .then(sent => sent.react('❌'))
      console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(26);
        redLink = `https://www.gifdeliverynetwork.com/${redID}`;
        message.channel.send(redLink)
          .then(sent => sent.react('❌'))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(25);
        redLink = `https://www.gifdeliverynetwork.com/${redID}`;
        message.channel.send(redLink)
          .then(sent => sent.react('❌'))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://www.redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(30);
        redLink = `https://www.gifdeliverynetwork.com/${redID}`;
        message.channel.send(redLink)
          .then(sent => sent.react('❌'))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://www.redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(29);
        redLink = `https://www.gifdeliverynetwork.com/${redID}`;
        message.channel.send(redLink)
          .then(sent => sent.react('❌'))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://gfycat.com") >= 0) {
        let gfyID = nsfwGIFNEWImage.slice(19);
        gfyLink = `https://www.gifdeliverynetwork.com/${gfyID}`;
        message.channel.send(gfyLink)
          .then(sent => sent.react('❌'))
        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
      else {
        console.log(nsfwGIFNEWImage + ' rerun');
        gifs(message);
    }
  }).catch(console.error);
}
