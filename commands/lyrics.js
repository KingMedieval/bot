const { MessageEmbed } = require('discord.js');
const { GENIUS_API_KEY } = require("../config.json");
const https = require('https');
const { getLyrics , getSong } = require('genius-lyrics-api');

//now with lyrics!

global.title = ' ';

module.exports = {
  name: "lyrics",
  description: "lyrics",
  async execute(message, args) {
    const queue = message.client.queue.get(message.guild.id);
    let lyricsEmbed = new MessageEmbed();
    let lyricsEmbedTwo = new MessageEmbed();
    let lyricsEmbedThree = new MessageEmbed();
    let lyricsEmbedFour = new MessageEmbed();
    if (!args.length && !queue)
        return message.reply(`Usage: ${message.client.prefix}${module.exports.name} <Song Name>`).catch(console.error);
    else if (!args.length) {
      const song = queue.songs[0];
      searchTitle = song.title;
    }
    else {
      searchTitle = args.join(" ");
    }
    const options = {
    apiKey: GENIUS_API_KEY,
    title: searchTitle,
    artist: ' ',
    optimizeQuery: false
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
      if (lyrics.length > 2048 && 4096 > lyrics.length) {
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
      if (lyrics.length > 4096 && 6144 > lyrics.length) {
        var trimmedlyrics = lyrics.substring(0, 2047);
        var trimmedlyricstwo = lyrics.substring(2047, 4095);
        var trimmedlyricsthree = lyrics.substring(4095, lyrics.length);
        lyricsEmbed.setTitle(global.title);
        lyricsEmbed.setThumbnail(albumArtUrl);
        lyricsEmbed.setDescription(trimmedlyrics);
        message.channel.send(lyricsEmbed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .then(lyricsEmbedTwo.setDescription(trimmedlyricstwo))
            .then(message.channel.send(lyricsEmbedTwo))
            .then(lyricsEmbedThree.setDescription(trimmedlyricsthree))
            .then(message.channel.send(lyricsEmbedThree));
      }
      if (lyrics.length > 6144 && 8192 > lyrics.length) {
        var trimmedlyrics = lyrics.substring(0, 2047);
        var trimmedlyricstwo = lyrics.substring(2047, 4095);
        var trimmedlyricsthree = lyrics.substring(4095, 6143);
        var trimmedlyricsfour = lyrics.substring(6143, lyrics.length);
        lyricsEmbed.setTitle(global.title);
        lyricsEmbed.setThumbnail(albumArtUrl);
        lyricsEmbed.setDescription(trimmedlyrics);
        message.channel.send(lyricsEmbed)
            .then(sent => console.log(`Sent a reply to ${sent.author.username}`))
            .then(lyricsEmbedTwo.setDescription(trimmedlyricstwo))
            .then(message.channel.send(lyricsEmbedTwo))
            .then(lyricsEmbedThree.setDescription(trimmedlyricsthree))
            .then(message.channel.send(lyricsEmbedThree))
            .then(lyricsEmbedFour.setDescription(trimmedlyricsfour))
            .then(message.channel.send(lyricsEmbedFour));
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
