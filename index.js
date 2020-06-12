/**
 * Module Imports
 */
const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");

const client = new Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();

/**
 * Client Events
 */
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(".help// made by Stalin", {
    type: "STREAMING", url: "https://www.youtube.com/watch?v=FnFFR3B6S9E" //url: "https://www.twitch.tv/bobross"
  });
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("guildMemberAdd", member => {
  const welcomeChannel = member.guild.channels.cache.find(welcomeChannel => welcomeChannel.name === "😨general");
  if(!welcomeChannel) return;
  welcomeChannel.send(`Hello there.`)

  const welcomeChanneltwo = member.guild.channels.cache.find(welcomeChanneltwo => welcomeChanneltwo.name === "government-regulated-chat");
  if(!welcomeChanneltwo) return;
  welcomeChanneltwo.send(`Hello there.`)
  });


client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (message.content.startsWith(PREFIX)) {
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command =
      client.commands.get(commandName) ||
      client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    try {
      command.execute(message, args);
    } catch (error) {
      console.error(error);
      message.reply("There was an error executing that command.").catch(console.error);
    }
  }
});
