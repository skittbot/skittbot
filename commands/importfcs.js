exports.run = (client, message, args) => {
  //this is a one-time-use import command to gather all listed friend codes in the old database.
  console.log('Starting exports now.')
  //run the exports
  var a;
  for(var e in client.transFCS.users) {
    a = client.transFCS.users[e];
    console.log(`Importing user ${a.username}\'s friend codes...`)
    try {
      for (var i in a) {

      }
    } catch(err){
      console.log(`There was an error importing user ${a.username}\'s friend codes!`)
    }
  }
  return;
}
