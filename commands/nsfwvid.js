const got = require('got');
const https = require('https');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;
var webm;

module.exports = {
  name: "nsfwvid",
  description: "🔞",
  execute(message) {
    video(message);
  }
};

function video(message) {
  if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
  rndSauce = Math.floor(Math.random() * 8);
  if (rndSauce === 0) {
    sauce = 'https://www.reddit.com/r/porn_gifs/random/.json'
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
  else if (rndSauce === 7) {
    sauce = 'https://www.reddit.com/r/porninaminute/random/.json'
  }
  got(sauce).then(response => {
      let content = JSON.parse(response.body);
      let nsfwGIFNEWImage = content[0].data.children[0].data.url;
      console.log(nsfwGIFNEWImage);
      if (nsfwGIFNEWImage.toLowerCase().indexOf("https://redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(26);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if(resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.mobileUrl;
              message.channel.send(mp4Link)


              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });
          }
          else{
            video(message);
          }

        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
      }

      else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(25);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if(resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.mobileUrl;
              message.channel.send(mp4Link)


              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });
          }
          else{
            video(message);
          }

        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
      }

      else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://www.redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(30);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if(resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.mobileUrl;
              message.channel.send(mp4Link)


              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });
          }
          else{
            video(message);
          }
        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
      }

      else if (nsfwGIFNEWImage.toLowerCase().indexOf("http://www.redgifs.com") >= 0) {
        let redID = nsfwGIFNEWImage.slice(29);
        redAPI = `https://api.redgifs.com/v1/gfycats/${redID}`;
        https.get(redAPI, (resp) => {
          if(resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.mobileUrl;
              message.channel.send(mp4Link)


              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });
          }
          else{
            video(message);
          }
        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
      }

      else if (nsfwGIFNEWImage.toLowerCase().indexOf("https://gfycat.com") >= 0) {
        let gfyID = nsfwGIFNEWImage.slice(19);
        gfyAPI = `https://api.redgifs.com/v1/gfycats/${gfyID}`;
        https.get(gfyAPI, (resp) => {
          if(resp.statusCode === 200) {
            let data = '';
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              mp4Link = JSON.parse(data).gfyItem.mobileUrl;
              message.channel.send(mp4Link)


              console.log('Bot responded with: ' + nsfwGIFNEWImage);
            });
          }
          else{
            video(message);
          }

        }).on("error", (err) => {
          console.log("Error: " + err.message);
        });
      }

      else {
        console.log(nsfwGIFNEWImage + ' rerun');
        video(message);
    }
  }).catch(console.error);
}
