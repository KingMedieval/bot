const got = require('got');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;

module.exports = {
  name: "nsfwroulette",
  description: "🔞 roulette",
  execute(message) {
    roulette(message);
  }
};

function roulette(message) {
  if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
  rndSauce = Math.floor(Math.random() * 54);
  if (rndSauce === 0) {
    sauce = 'https://www.reddit.com/r/furryporn/random/.json'
  }
  else if (rndSauce === 1) {
    sauce = 'https://www.reddit.com/r/rule34/random/.json'
  }
  else if (rndSauce === 2) {
    sauce = 'https://www.reddit.com/r/ginger/random/.json'
  }
  else if (rndSauce === 3) {
    sauce = 'https://www.reddit.com/r/Bondage/random/.json'
  }
  else if (rndSauce === 4) {
    sauce = 'https://www.reddit.com/r/gaynsfw/random/.json'
  }
  else if (rndSauce === 5) {
    sauce = 'https://www.reddit.com/r/feet/random/.json'
  }
  else if (rndSauce === 6) {
    sauce = 'https://www.reddit.com/r/gilf/random/.json'
  }
  else if (rndSauce === 7) {
    sauce = 'https://www.reddit.com/r/PokePorn/random/.json'
  }
  else if (rndSauce === 8) {
    sauce = 'https://www.reddit.com/r/Overwatch_Porn/random/.json'
  }
  else if (rndSauce === 9) {
    sauce = 'https://www.reddit.com/r/traps/random/.json'
  }
  else if (rndSauce === 10) {
    sauce = 'https://www.reddit.com/r/IndiansGoneWild/random/.json'
  }
  else if (rndSauce === 11) {
    sauce = 'https://www.reddit.com/r/AsiansGoneWild/random/.json'
  }
  else if (rndSauce === 12) {
    sauce = 'https://www.reddit.com/r/LegalTeens/random/.json'
  }
  else if (rndSauce === 13) {
    sauce = 'https://www.reddit.com/r/HotStuffNSFW/random/.json'
  }
  else if (rndSauce === 14) {
    sauce = 'https://www.reddit.com/r/NSFW_Korea/random/.json'
  }
  else if (rndSauce === 15) {
    sauce = 'https://www.reddit.com/r/valorantrule34/random/.json'
  }
  else if (rndSauce === 16) {
    sauce = 'https://www.reddit.com/r/lesbians/random/.json'
  }
  else if (rndSauce === 17) {
    sauce = 'https://www.reddit.com/r/holdthemoan/random/.json'
  }
  else if (rndSauce === 18) {
    sauce = 'https://www.reddit.com/r/RealAhegao/random/.json'
  }
  else if (rndSauce === 19) {
    sauce = 'https://www.reddit.com/r/freeuse/random/.json'
  }
  else if (rndSauce === 20) {
    sauce = 'https://www.reddit.com/r/gonewildcurvy/random/.json'
  }
  else if (rndSauce === 21) {
    sauce = 'https://www.reddit.com/r/trashyboners/random/.json'
  }
  else if (rndSauce === 22) {
    sauce = 'https://www.reddit.com/r/trashyboners/random/.json'
  }
  else if (rndSauce === 23) {
    sauce = 'https://www.reddit.com/r/armpitfetish/random/.json'
  }
  else if (rndSauce === 24) {
    sauce = 'https://www.reddit.com/r/starwarsnsfw/random/.json'
  }
  else if (rndSauce === 25) {
    sauce = 'https://www.reddit.com/r/NSFW_Japan/random/.json'
  }
  else if (rndSauce === 26) {
    sauce = 'https://www.reddit.com/r/Bisexy/random/.json'
  }
  else if (rndSauce === 27) {
    sauce = 'https://www.reddit.com/r/gaybears/random/.json'
  }
  else if (rndSauce === 28) {
    sauce = 'https://www.reddit.com/r/gaycumsluts/random/.json'
  }
  else if (rndSauce === 29) {
    sauce = 'https://www.reddit.com/r/Blondes/random/.json'
  }
  else if (rndSauce === 30) {
    sauce = 'https://www.reddit.com/r/brunette/random/.json'
  }
  else if (rndSauce === 31) {
    sauce = 'https://www.reddit.com/r/grower/random/.json'
  }
  else if (rndSauce === 32) {
    sauce = 'https://www.reddit.com/r/simps/random/.json'
  }
  else if (rndSauce === 33) {
    sauce = 'https://www.reddit.com/r/HairyPussy/random/.json'
  }
  else if (rndSauce === 34) {
    sauce = 'https://www.reddit.com/r/HairyArmpits/random/.json'
  }
  else if (rndSauce === 35) {
    sauce = 'https://www.reddit.com/r/TittyDrop/random/.json'
  }
  else if (rndSauce === 36) {
    sauce = 'https://www.reddit.com/r/BoltedOnMaxed/random/.json'
  }
  else if (rndSauce === 37) {
    sauce = 'https://www.reddit.com/r/dirtysmall/random/.json'
  }
  else if (rndSauce === 38) {
    sauce = 'https://www.reddit.com/r/PreggoPorn/random/.json'
  }
  else if (rndSauce === 39) {
    sauce = 'https://www.reddit.com/r/collegesluts/random/.json'
  }
  else if (rndSauce === 40) {
    sauce = 'https://www.reddit.com/r/Just18/random/.json'
  }
  else if (rndSauce === 41) {
    sauce = 'https://www.reddit.com/r/Hotchickswithtattoos/random/.json'
  }
  else if (rndSauce === 42) {
    sauce = 'https://www.reddit.com/r/Rule34LifeisStrange/random/.json'
  }
  else if (rndSauce === 43) {
    sauce = 'https://www.reddit.com/r/LadyBonerOFaces/random/.json'
  }
  else if (rndSauce === 44) {
    sauce = 'https://www.reddit.com/r/ladybonersgw/random/.json'
  }
  else if (rndSauce === 45) {
    sauce = 'https://www.reddit.com/r/cocklady/random/.json'
  }
  else if (rndSauce === 46) {
    sauce = 'https://www.reddit.com/r/Fisting/random/.json'
  }
  else if (rndSauce === 47) {
    sauce = 'https://www.reddit.com/r/insertions/random/.json'
  }
  else if (rndSauce === 48) {
    sauce = 'https://www.reddit.com/r/insertions/random/.json'
  }
  else if (rndSauce === 49) {
    sauce = 'https://www.reddit.com/r/PublicBoys/random/.json'
  }
  else if (rndSauce === 50) {
    sauce = 'https://www.reddit.com/r/ttotm/random/.json'
  }
  else if (rndSauce === 51) {
    sauce = 'https://www.reddit.com/r/squidsgonewild/random/.json'
  }
  else if (rndSauce === 52) {
    sauce = 'https://www.reddit.com/r/fursuitsex/random/.json'
  }
  else if (rndSauce === 53) {
    sauce = 'https://www.reddit.com/r/watersports/random/.json'
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
        roulette(message);
    }
  }).catch(console.error);
}
