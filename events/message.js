module.exports = (client, message) => {

  //var currMessTime;
  //var lastMess;
  //var formerMess;
  // Ignore all bots
  if (message.author.bot) return;
  if (message.guild && !(message.author == null)) {
  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;
  message.guild.fetchMember(message.author);
  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
  }
};

//ugh ok looks like i need to learn about asynchronous functions.
