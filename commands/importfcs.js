exports.run = (client, message, args) => {
  //this is a one-time-use import command to gather all listed friend codes in the old database.
  console.log('Starting exports now.')
  //run the exports
  var a; //current user is a
  for(var e in client.transFCS.users) { //loop thru users in json file
    a = client.transFCS.users[e];//set the user to "a"
    console.log(`Importing user ${a.username}\'s friend codes...`)
    try {
      for (var i in a) {
        if(i !== "username") {
        client.fcs.set(a.username,a[i],i);
        console.log(`Imported ${a.username}\'s friend codes for ${i}: ${a[i]}`)
        }
      }
    } catch(err){
      console.log(`There was an error importing user ${a.username}\'s friend codes!\n${err}`)
    }
  }
  return;
}
