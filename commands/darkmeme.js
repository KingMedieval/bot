const got = require('got');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "darkmeme",
  description: "darkPOGGERS",
  execute(message) {
    const embed = new MessageEmbed();
  	got('https://www.reddit.com/r/offensivememesboi/random/.json').then(response => {
  			let content = JSON.parse(response.body);
  			let permalink = content[0].data.children[0].data.permalink;
  			let darkmemeUrl = `https://reddit.com${permalink}`;
  			let darkmemeImage = content[0].data.children[0].data.url;
  			let darkmemeTitle = content[0].data.children[0].data.title;
  			let darkmemeUpvotes = content[0].data.children[0].data.ups;
  			let darkmemeDownvotes = content[0].data.children[0].data.downs;
  			let darkmemeNumComments = content[0].data.children[0].data.num_comments;
  			embed.addField(`${darkmemeTitle}`, `[View thread](${darkmemeUrl})`);
  			embed.setImage(darkmemeImage);
  			embed.setFooter(`👍 ${darkmemeUpvotes} 👎 ${darkmemeDownvotes} 💬 ${darkmemeNumComments}`);
  			message.channel.send(embed)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + darkmemeImage);
  	}).catch(console.error);
  }
};
