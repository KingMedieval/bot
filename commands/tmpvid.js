const got = require('got');
const https = require('https');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;
var webm;

module.exports = {
  name: "tmpvid",
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

        if (nsfwGIFNEWImage.toLowerCase().indexOf("https://redgifs.com") >= 0) {
          let redID = nsfwGIFNEWImage.slice(26);
          redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
          https.get(redAPI, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              webmLink = JSON.parse(data).gfyItem.webmUrl;
              slicedLink = webmLink.slice(14);
              eightLink = `https://thcf8.${slicedLink}`
              message.channel.send(eightLink)
                .then(sent => sent.react('❌'))

              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        }

        else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://redgifs.com") >= 0) {
          let redID = nsfwGIFNEWImage.slice(25);
          redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
          https.get(redAPI, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              webmLink = JSON.parse(data).gfyItem.webmUrl;
              slicedLink = webmLink.slice(14);
              eightLink = `https://thcf8.${slicedLink}`
              message.channel.send(eightLink)
                .then(sent => sent.react('❌'))

              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        }

        else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://www.redgifs.com") >= 0) {
          let redID = nsfwGIFNEWImage.slice(30);
          redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
          https.get(redAPI, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              webmLink = JSON.parse(data).gfyItem.webmUrl;
              slicedLink = webmLink.slice(14);
              eightLink = `https://thcf8.${slicedLink}`
              message.channel.send(eightLink)
                .then(sent => sent.react('❌'))

              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        }

        else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://www.redgifs.com") >= 0) {
          let redID = nsfwGIFNEWImage.slice(29);
          redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
          https.get(redAPI, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              webmLink = JSON.parse(data).gfyItem.webmUrl;
              slicedLink = webmLink.slice(14);
              eightLink = `https://thcf8.${slicedLink}`
              message.channel.send(eightLink)
                .then(sent => sent.react('❌'))

              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        }

        else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://gfycat.com") >= 0) {
          let gfyID = nsfwGIFNEWImage.slice(19);
          gfyAPI = `https://api.redgifs.com/v1/gfycats/${gfyID}`;
          https.get(gfyAPI, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              webmLink = JSON.parse(data).gfyItem.webmUrl;
              slicedLink = webmLink.slice(14);
              eightLink = `https://thcf8.${slicedLink}`
              message.channel.send(eightLink)
                .then(sent => sent.react('❌'))

              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });

          }).on("error", (err) => {
            console.log("Error: " + err.message);
          });
        }

        else {message.channel.send(nsfwGIFNEWImage)
            .then(sent => sent.react('❌'))

        console.log('Bot responded with: ' + nsfwGIFNEWImage);
      }
    }).catch(console.error);
  }
};
