const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

module.exports = {
  name: "donald",
  description: "donald dumb dumb",
  async execute(message, args) {

    let response = await fetch('https://tronalddump.io/random/quote').then((res) => {
    status = res.status;
    return res.json()
  });

  if (status == 200) {
    const quote = response.value;
    const source = response._embedded.source[0].url;
    const date = response.appeared_at;
    const slicedDate = date.slice(0, 10);

    let quoteEmbed = new MessageEmbed();
    quoteEmbed.setDescription(quote);
    quoteEmbed.addField('Source:', source);
    quoteEmbed.setFooter(slicedDate);
    quoteEmbed.setImage(`https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/03/02/09/trump.jpg?w968h681`);
    message.channel.send(quoteEmbed);
  }
  else {
    message.channel.send('Unexpected API Error');
  }

  }
};
