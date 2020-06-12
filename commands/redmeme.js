const got = require('got');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "redmeme",
  description: "POGGERS",
  execute(message) {
    const embed = new MessageEmbed();
  	got('https://www.reddit.com/r/CommunismMemes/random/.json').then(response => {
  			let content = JSON.parse(response.body);
  			let permalink = content[0].data.children[0].data.permalink;
  			let redmemeUrl = `https://reddit.com${permalink}`;
  			let redmemeImage = content[0].data.children[0].data.url;
  			let redmemeTitle = content[0].data.children[0].data.title;
  			let redmemeUpvotes = content[0].data.children[0].data.ups;
  			let redmemeDownvotes = content[0].data.children[0].data.downs;
  			let redmemeNumComments = content[0].data.children[0].data.num_comments;
  			embed.addField(`${redmemeTitle}`, `[View thread](${redmemeUrl})`);
  			embed.setImage(redmemeImage);
  			embed.setFooter(`👍 ${redmemeUpvotes} 👎 ${redmemeDownvotes} 💬 ${redmemeNumComments}`);
  			message.channel.send(embed)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + redmemeImage);
  	}).catch(console.error);
  }
};
