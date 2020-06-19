const got = require('got');
const { MessageEmbed } = require('discord.js');

var rndSauce = 0;
var sauce;

module.exports = {
  name: "nsfwroulette",
  description: "🔞 roulette",
  execute(message) {
    if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
    rndSauce = Math.floor(Math.random() * 25);
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

  	got(sauce).then(response => {
  			let content = JSON.parse(response.body);
  			let nsfwrouletteNEWImage = content[0].data.children[0].data.url;
        message.channel.send(nsfwrouletteNEWImage)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + nsfwrouletteNEWImage);
  	}).catch(console.error);
  }
};
