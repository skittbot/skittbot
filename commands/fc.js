exports.run = (client, message, args) => {

  //console.log(args.length);
  if(!args || args.length < 1) {
    client.fcs.ensure(message.author.id, {});
    let finalDefDisp = dispFCS(message.author.id,client);
    if (!finalDefDisp) return message.reply("no friend code was found.");
    return message.reply(message.member.displayName + '\'s Friend Codes:\n' + finalDefDisp);
    //return message.reply("My friend code for the switch is "+ client.fcs.get(message.author.id,"switch"));
  }
  //console.log(args + args[0]);
  switch(args[0]) {

    case 'add':
  // adding a friend code to your account. syntax should be ""
      if (args.length !== 3) return message.reply("the syntax for this command is: !fc add [_console_] [_friend code_]");
      let newConsole = args[1].toUpperCase();
      let newFC;
      console.log(newConsole);
      if (newConsole === 'WIIU') {
        newFC = args[2].replace(/\W/g,"");
        console.log(newFC + ' wii u');
      } else {
        newFC = args[2].replace(/\D/g,"");
        console.log(newFC + ' other');
      }
      let finalFC;
      switch(newConsole) {
  // add new consoles as needed here
        case 'SWITCH':
          if (newFC.length !== 12) return message.reply("your friend code for the Nintendo Switch should be 12 digits.");
          finalFC = `SW-${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"switch");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"switch"));
          message.reply("your switch friend code has been added!");
          break;
        case '3DS':
          if (newFC.length !== 12) return message.reply("your friend code for the Nintendo 3DS should be 12 digits.");
          finalFC = `${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"3ds");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"3ds"));
          message.reply("your 3DS friend code has been added!");
          break;
        case 'WIIU':
          if (newFC.length > 15) return message.reply("your WiiU account name can\'t be that long.");
          finalFC = newFC;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"wiiu");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"wiiu"));
          message.reply("your WiiU code has been added!");
          break;
        default:
          return message.reply("you did not input a valid friend code. The syntax for this command is: !fc add [_console_] [_friend code_]");
          break;
        };
    break;

    case 'del':
      // deleting a specific friend code
          if (args.length !== 2) return message.reply("the syntax for this command is: !fc del [_console_]");
          let delConsole = args[1].toUpperCase();
          switch(delConsole) {
      // add new consoles as needed here
            case 'SWITCH':
              client.fcs.ensure(message.author.id, {});
              client.fcs.set(message.author.id,false,"switch");
              console.log(message.author.id+": "+client.fcs.get(message.author.id,"switch"));
              message.reply("your switch friend code has been removed!");
              break;
            case '3DS':
              client.fcs.ensure(message.author.id, {});
              client.fcs.set(message.author.id,false,"3ds");
              console.log(message.author.id+": "+client.fcs.get(message.author.id,"3ds"));
              message.reply("your 3DS friend code has been removed!");
              break;
            case 'WIIU':
              client.fcs.ensure(message.author.id, {});
              client.fcs.set(message.author.id,false,"wiiu");
              console.log(message.author.id+": "+client.fcs.get(message.author.id,"wiiu"));
              message.reply("your WiiU code has been removed!");
              break;
            default:
              return message.reply("the console you specified could not be found. The syntax for this command is: !fc del [_console_]");
              break;
            };

    break;

    case 'delall':
      //delete all friend code data
      client.fcs.ensure(message.author.id, {});
      client.fcs.set(message.author.id,{});
      return message.reply("your friend code data has been deleted.");
    break;

    case 'forcedel':
      //delete all friend code data
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return console.log('{$message.member} tried to reload.');
      let forceDelTarget = message.mentions.users.first();
      if (!forceDelTarget) return message.reply("the specified user could not be found.");
      client.fcs.ensure(forceDelTarget.id, {});
      client.fcs.set(forceDelTarget.id,{});
      return message.reply("the user you specified has had their friend codes removed.");
    break;

    default:
    //nothing matches, return the "my friend code is x" stuff
    let anyTarget = message.mentions.users.first();
    if (!anyTarget) anyTarget = message.author;
    client.fcs.ensure(anyTarget.id, {});
    let finalDisp = dispFCS(anyTarget.id,client);
    if (!finalDisp) return message.reply("no friend code was found.");
    return message.reply(anyTarget.username + '\'s Friend Codes:\n' + finalDisp);
    //return message.reply("the friend code for the requested user is: " +client.fcs.get(anyTarget.id,"switch"));
    break;
  };
};

function dispFCS(authID,client){
  let targetObj = client.fcs.get(authID);
  //console.log(targetObj);
  let finalString = '';
  for(var key in targetObj){
    if(targetObj[key]) finalString = finalString + '**' + key.toUpperCase() + ':** ' + targetObj[key] + '\n';
    //console.log(key + ': ' +targetObj[key] +finalString);
  }
  if (finalString === '') return false;
  return finalString;
}
