exports.run = (client, message, args) => {

  console.log(args.length);
  if(!args || args.length < 1) return message.reply("My friend code is x");
  console.log(args + args[0]);
  switch(args[0]) {
    case 'add':
      // adding a friend code to your account. syntax should be ""
      if (args.length !== 3) return message.reply("The syntax for this command is: _!fc add [console] [friend code]_");
      let newConsole = args[1].toUpperCase();
      let newFC = args[2].replace(/\D/g,"");
      let finalFC;
      switch(newConsole) {
        case 'SWITCH':
          if (newFC.length !== 12) return message.reply("Your friend code for the Nintendo Switch should be 12 digits.");
          finalFC = `SW-${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"switch");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"switch"));
          break;
        case '3DS':
          if (newFC.length !== 12) return message.reply("Your friend code for the Nintendo 3DS should be 12 digits.");
          finalFC = `${newFC.slice(0,4)}-${newFC.slice(4,8)}-${newFC.slice(8,12)}`;
          client.fcs.ensure(message.author.id, {});
          client.fcs.set(message.author.id,finalFC,"3ds");
          console.log(message.author.id+": "+client.fcs.get(message.author.id,"3ds"));
          break;
        default:
          return message.reply("You did not input a valid friend code. The syntax for this command is: _!fc add **[console]** **[friend code]**");
          break;
        };
    break;

    case 'del':
      // deleting a specific friend code

    break;

    case 'delall':
      //delete all friend code data

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
