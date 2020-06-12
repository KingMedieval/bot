const got = require('got');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "prequelmeme",
  description: "POGGERS",
  execute(message) {
    const embed = new MessageEmbed();
  	got('https://www.reddit.com/r/PrequelMemes/random/.json').then(response => {
  			let content = JSON.parse(response.body);
  			let permalink = content[0].data.children[0].data.permalink;
  			let prequelmemeUrl = `https://reddit.com${permalink}`;
  			let prequelmemeImage = content[0].data.children[0].data.url;
  			let prequelmemeTitle = content[0].data.children[0].data.title;
  			let prequelmemeUpvotes = content[0].data.children[0].data.ups;
  			let prequelmemeDownvotes = content[0].data.children[0].data.downs;
  			let prequelmemeNumComments = content[0].data.children[0].data.num_comments;
  			embed.addField(`${prequelmemeTitle}`, `[View thread](${prequelmemeUrl})`);
  			embed.setImage(prequelmemeImage);
  			embed.setFooter(`👍 ${prequelmemeUpvotes} 👎 ${prequelmemeDownvotes} 💬 ${prequelmemeNumComments}`);
  			message.channel.send(embed)
  					.then(sent => console.log(`Sent a reply to ${sent.author.username}`))
  			console.log('Bot responded with: ' + prequelmemeImage);
  	}).catch(console.error);
  }
};
