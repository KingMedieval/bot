const { MessageEmbed } = require('discord.js');
const { GENIUS_API_KEY } = require("../config.json");
const https = require('https');
const { getLyrics , getSong } = require('genius-lyrics-api');

global.title = ' ';

module.exports = {
  name: "lyrics",
  description: "lyrics",
  async execute(message, args) {
    let lyricsEmbed = new MessageEmbed();
    let lyricsEmbedTwo = new MessageEmbed();

    if (!args.length)
      return message.reply(`Usage: ${message.client.prefix}${module.exports.name} <Song Name>`).catch(console.error);
    const searchTitle = args.join(" ");
    const options = {
    apiKey: GENIUS_API_KEY,
    title: searchTitle,
    artist: ' ',
    optimizeQuery: true
};

//getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then(song => {
  genAPI = `https://api.genius.com/songs/${song.id}`;
  const headers = {
    Authorization: 'Bearer ' + GENIUS_API_KEY
  };
  https.get(genAPI, { headers }, (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
      data += chunk;
    });
    resp.on('end', () => {
      global.title = JSON.parse(data).response.song.full_title;
      console.log(global.title);
      let lyrics = `${song.lyrics}`;
      let albumArtUrl = `${song.albumArt}`;
      if (lyrics.length < 2048) {
        lyricsEmbed.setTitle(global.title);
        lyricsEmbed.setThumbnail(albumArtUrl);
        lyricsEmbed.setDescription(lyrics);
        message.channel.send(lyricsEmbed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`));
      }
      if (lyrics.length > 2048) {
        var trimmedlyrics = lyrics.substring(0, 2047);
        var trimmedlyricstwo = lyrics.substring(2047, lyrics.length);
        lyricsEmbed.setTitle(global.title);
        lyricsEmbed.setThumbnail(albumArtUrl);
        lyricsEmbed.setDescription(trimmedlyrics);
        message.channel.send(lyricsEmbed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .then(lyricsEmbedTwo.setDescription(trimmedlyricstwo))
            .then(message.channel.send(lyricsEmbedTwo));
      }
    });
  });
    console.log(`
    ${song.id}
    ${song.url}
    ${song.lyrics}
    ${song.albumArt}`);


}).catch(console.error);

}
};
