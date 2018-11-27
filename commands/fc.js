exports.run = (client, message, args) => {

  console.log(args.length);
  if(!args || args.length < 1) return message.reply("My friend code for the switch is "+ client.fcs.get(message.author.id,"switch"));
  console.log(args + args[0]);
  switch(args[0]) {

    case 'add':
  // adding a friend code to your account. syntax should be ""
      if (args.length !== 3) return message.reply("the syntax for this command is: !fc add [_console_] [_friend code_]");
      let newConsole = args[1].toUpperCase();
      let newFC = args[2].replace(/\D/g,"");
      if (args[1] === 'WIIU') newFC = args[2].replace(/\W/g,"");
      let finalFC;
      switch(newConsole) {
  // add new consoles as needed here
        case 'SWITCH':
          if (newFC.length !== 12) return message.reply("your friend code for the Nintendo Switch should be 12 digits.");
          finalFC = `SW-${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"switch");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"switch"));
          break;
        case '3DS':
          if (newFC.length !== 12) return message.reply("your friend code for the Nintendo 3DS should be 12 digits.");
          finalFC = `${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"3ds");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"3ds"));
          break;
        case 'WIIU':
          if (newFC.length > 15) return message.reply("your Wii U account name can\'t be that long.");
          finalFC = newFC;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"wiiu");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"wiiu"));
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
              break;
            case '3DS':
              client.fcs.ensure(message.author.id, {});
              client.fcs.set(message.author.id,false,"3ds");
              console.log(message.author.id+": "+client.fcs.get(message.author.id,"3ds"));
              break;
            case 'WIIU':
              client.fcs.ensure(message.author.id, {});
              client.fcs.set(message.author.id,false,"wiiu");
              console.log(message.author.id+": "+client.fcs.get(message.author.id,"wiiu"));
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

    case 'show':
      //show a friend code of someone else

    break;

    default:
    //nothing matches, return the "my friend code is x" stuff
    return message.reply("My friend code is x and this is the end");
    break;
  };


  };
