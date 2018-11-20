exports.run = (client, message, args) => {
  console.log(`${message.author.username} tried to use the say command.`);
  message.channel.send(`how dare you try to control what i say, ${message.member.displayName}!`)
  return console.log('haha it works');
}
