const { play } = require("../include/play");
const { MessageEmbed } = require("discord.js");
const { YOUTUBE_API_KEY } = require("../config.json");
const { SPOTIFY_ID, SPOTIFY_SECRET } = require("../config.json");
const ytdl = require("ytdl-core");
const YouTubeAPI = require("simple-youtube-api");
const youtube = new YouTubeAPI(YOUTUBE_API_KEY);
const fetch = require('node-fetch');
const SpotifyWebApi = require('spotify-web-api-node');

module.exports = {
  name: "spotify",
  cooldown: 30,
  aliases: ["sp"],
  description: "Plays spotify playlist (for now)",
  async execute(message, args) {

    const { channel } = message.member.voice;

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && channel !== message.guild.me.voice.channel)
      return message.reply(`You must be in the same channel as ${message.client.user}`).catch(console.error);

    if (!args.length)
      return message
        .reply(`Usage: ${message.client.prefix}play <YouTube URL | Video Name>`)
        .catch(console.error);
    if (!channel) return message.reply("You need to join a voice channel first!").catch(console.error);

    const permissions = channel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT"))
      return message.reply("Cannot connect to voice channel, missing permissions");
    if (!permissions.has("SPEAK"))
      return message.reply("I cannot speak in this voice channel, make sure I have the proper permissions!");

    const searchLink = args.join(" "); //spotify link

    const search = searchLink.slice(34, 56)

    let tokenRes = await fetch('http://localhost:3000/token').then((res) => {
      status = res.status;
      return res.json()
    });
    if (status == 200) {
      token = tokenRes.token;
    }
    else {
      message.channel.send('Spotify API error')
    }

    console.log(token);

    console.log(search)

    var spotifyApi = new SpotifyWebApi();

    spotifyApi.setAccessToken(token);

spotifyApi.getPlaylist(search)
  .then(async function(data) {

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };

    let song = null;
    let playlist = null;

    for (let i = 0; i < data.body.tracks.items.length;) {
        try {
        let trackAndArtist = `${data.body.tracks.items[i].track.name} ${data.body.tracks.items[i].track.artists[0].name} - Topic`
        console.log(trackAndArtist);
        const results = await youtube.searchVideos(trackAndArtist, 1, { videoCategoryId: "10" });
        songInfo = await ytdl.getInfo(results[0].url);
        song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
          duration: songInfo.videoDetails.lengthSeconds
        };
      } catch (error) {
        console.error(error);
      }
      if (serverQueue) {
        serverQueue.songs.push(song);
        return serverQueue.textChannel
          .catch(console.error);
      }

      queueConstruct.songs.push(song);
      message.client.queue.set(message.guild.id, queueConstruct);
      i++;
    }

    let playlistEmbed = new MessageEmbed()
      .setTitle(`${data.body.name}`)
      .setURL(data.body.external_urls.spotify)
      .setColor("#F8AA2A")
      .setTimestamp();


    message.channel.send(`${message.author} Started a playlist`, playlistEmbed);


    try {
      queueConstruct.connection = await channel.join();
      await queueConstruct.connection.voice.setSelfDeaf(true);
      play(queueConstruct.songs[0], message);
    } catch (error) {
      console.error(error);
      message.client.queue.delete(message.guild.id);
      await channel.leave();
      return message.channel.send(`Could not join the channel: ${error}`).catch(console.error);
    }
  }, function(err) {
    console.error(err);
  });

  //const noItems = playlistRes.tracks.items[0].track.name;



}
};
