module.exports = (client, message) => {

  var currMessTime;
  var lastMess;
  var formerMess;
  // Ignore all bots
  if (message.author.bot) return;

  // Ignore messages not starting with the prefix (in config.json)
  if (message.content.indexOf(client.config.prefix) !== 0) return;


  lastMess = client.user.lastMessage;


  try {
    var formerMessages = message.channel.fetchMessages({limit: 5}).then(egg => {return egg;});;
    console.log(formerMessages);
    formerMess = formerMessages.array();
    let i = 0;
    let dupe = 0;
    for(i;i<formerMess.size;i++) {
        if(message.author.id === formerMess[i].id) dupe++;
    }
    if(lastMess && (dupe > 0)) {
      currMessTime = message.createdTimestamp;
      console.log(`${lastMess.createdTimestamp} to ${currMessTime}, a difference of ${currMessTime - lastMess.createdTimestamp}`);
      if((currMessTime - lastMess.createdTimestamp)<(5000 / dupe)) return message.reply("Please slow down!");
    }  else {
      console.log(`flood protection not needed here`)
    }
  }
  catch(err){
    console.log('something went wrong with flood protection: ' + err)
  }

  // Our standard argument/command name definition.
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;

  // Run the command
  cmd.run(client, message, args);
};

//ugh ok looks like i need to learn about asynchronous functions.
