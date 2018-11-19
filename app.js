const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require(./settings.json);
const fs = require('fs');

//the following code was taken from https://anidiots.guide/first-bot/a-basic-command-handler
// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    // If the file is not a JS file, ignore it (thanks, Apple)
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./events/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    client.on(eventName, event.bind(null, client));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
});


client.on("ready", () => {
  console.log("Skittbot Power On!");
});

client.on("message", (message) => {

  //if there's no prefix then this bot won't read the command.
  if (!message.content.startsWith(settings.prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //ping command, delete later
  if (message.content.startsWith(settings.prefix + "ping")) {
    if(message.author.id !== config.ownerID) return;
    message.channel.send("pong!");
  }

  //end of the client messages
});

client.login(settings.token);
