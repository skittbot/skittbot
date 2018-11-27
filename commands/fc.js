exports.run = (client, message, args) => {

  if(!args || args.size < 1) return message.reply("My friend code is x");
  console.log(args);
  switch(args[1]) {

    case args[1] === 'add':
      // adding a friend code to your account. syntax should be ""


    break;

    case args[1] === 'del':
      // deleting a specific friend code

    break;

    case args[1] === 'delall':
      //delete all friend code data

    break;

    case args[1] === 'show':
      //show a friend code of someone else

    break;

    default:
    //nothing matches, return the "my friend code is x" stuff

  }


  };
