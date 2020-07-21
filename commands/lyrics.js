
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const { KSOFT_API_KEY } = require("../config.json");

module.exports = {
    name: "lyrics",
    description: "Displays lyrics of given song name",
    async execute(message, args) {
        const queue = message.client.queue.get(message.guild.id);

        if (!KSOFT_API_KEY)
            return message.reply("Missing Ksoft api key in config").catch(console.error);

        if (!args.length && !queue)
            return message.reply(`Usage: ${message.client.prefix}lyrics <Song Name>`).catch(console.error);
        else if (!args.length) {
          const song = queue.songs[0];
          const global.search = song.title;
        }
        else {
          const global.search = args.join(" ");
        }
        let response = await fetch('https://api.ksoft.si/lyrics/search?q=' + search, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${KSOFT_API_KEY}`
            }
        }).then((res) => {
            status = res.status;
            return res.json()
        });

        if (status == 200) {
            const title = response.data[0].name;
            const artist = response.data[0].artist;
            const thumbnail = response.data[0].album_art;
            const lyrics = response.data[0].lyrics;
            const album_year = response.data[0].album_year;

            let lyricsembed = new MessageEmbed();
            let lyricsembedsecond = new MessageEmbed();
            let lyricsembedthird = new MessageEmbed();
            let lyricsembedfourth = new MessageEmbed();
            if (String(lyrics).length >= 6144 && String(lyrics).length < 8192) {
              const first = String(lyrics).slice(0, 2047);
              const second = String(lyrics).slice(2047, 4095);
              const third = String(lyrics).slice(4095, 6143);
              const fourth = String(lyrics).slice(6143, String(lyrics).length);
              lyricsembed.setTitle(title + ' by ' + artist);
              lyricsembed.setThumbnail(thumbnail);
              lyricsembed.setColor('#F8AA2A');
              lyricsembed.setDescription(first);
              message.channel.send(lyricsembed);
              lyricsembedsecond.setColor('#F8AA2A');
              lyricsembedsecond.setDescription(second);
              message.channel.send(lyricsembedsecond);
              lyricsembedthird.setColor('#F8AA2A');
              lyricsembedthird.setDescription(third);
              message.channel.send(lyricsembedthird);
              lyricsembedfourth.setColor('#F8AA2A');
              lyricsembedfourth.setDescription(fourth);
              lyricsembedfourth.setFooter('Published in the year ' + album_year);
              message.channel.send(lyricsembedfourth);
            }
            else if (String(lyrics).length >= 4096 && String(lyrics).length < 6144) {
              const first = String(lyrics).slice(0, 2047);
              const second = String(lyrics).slice(2047, 4095);
              const third = String(lyrics).slice(4095, String(lyrics).length);
              lyricsembed.setTitle(title + ' by ' + artist);
              lyricsembed.setThumbnail(thumbnail);
              lyricsembed.setColor('#F8AA2A');
              lyricsembed.setDescription(first);
              message.channel.send(lyricsembed);
              lyricsembedsecond.setColor('#F8AA2A');
              lyricsembedsecond.setDescription(second);
              message.channel.send(lyricsembedsecond);
              lyricsembedthird.setColor('#F8AA2A');
              lyricsembedthird.setDescription(third);
              lyricsembedthird.setFooter('Published in the year ' + album_year);
              message.channel.send(lyricsembedthird);
            }
            else if (String(lyrics).length >= 2048 && String(lyrics).length < 4096) {
                const first = String(lyrics).slice(0, 2047);
                const second = String(lyrics).slice(2047, String(lyrics).length);
                lyricsembed.setTitle(title + ' by ' + artist);
                lyricsembed.setThumbnail(thumbnail);
                lyricsembed.setColor('#F8AA2A');
                lyricsembed.setDescription(first);
                message.channel.send(lyricsembed);
                lyricsembedsecond.setColor('#F8AA2A');
                lyricsembedsecond.setDescription(second);
                lyricsembedsecond.setFooter('Published in the year ' + album_year);
                message.channel.send(lyricsembedsecond);
            } else {
                lyricsembed.setTitle(title + ' by ' + artist);
                lyricsembed.setThumbnail(thumbnail);
                lyricsembed.setColor('#F8AA2A');
                lyricsembed.setDescription(String(lyrics));
                lyricsembed.setFooter('Published in the year ' + album_year);
                message.channel.send(lyricsembed);
            }
        } else {
            message.channel.send('Unexpected Api error occured while grabbing song lyrics');
        }
    }
};
