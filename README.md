# Skittbot
Skittbot is a Discord bot that currently does one thing well--friend codes! Skittbot is relatively flexible and will accept and store friendcodes.

## Skittbot Features
Skittbot will do the following:
* Allow registered users to add or remove their friend codes for Nintendo Switch, 3DS, and WiiU.
* Allow registered users to display these friend codes to a Discord channel, or to request the friend codes of someone else that they can @.
* Allow those who can edit messages to remove friend codes from users who abuse the feature.

Skittbot has the following extra properties:
* Skittbot uses <a href="https://enmap.evie.codes/">enmap</a> to store data.  Because this effectively uses sqlite, your data will remain even if you take the bot down.
* Skittbot stores data based on your user id.  If you have your instance of Skittbot in multiple servers, it will be able to recall your codes from anywhere.

## Setting Up Skittbot
Want your own instance of Skittbot?  Here are some basic instructions.
1. Clone the git repository to your computer or server.  Make sure you have node.js, npm, and nvm installed!  
2. Run <code>npm install</code> in your directory.  You also need to run <code>npm install better-sqlite-pool</code>.
3. Make a copy of <a href="https://github.com/skittbot/skittbot/blob/master/config_example.json">config-example.json</a> and name it "config.json".
4. Open up "config.json" with your text editor of choice.  Make the following edits as necessary.
  * Token: This is your bot's token.  Be careful not to share this token with anyone.
  * Prefix: This can be whatever you want--it's the prefix for all of skittbot's bot commands.
  * Debug: This isn't implemented yet.  It's to enable debug logs, eventually.
  * Ownerid: This should be your unique discord userid.
5. Run <code>node app.js</code> and skittbot will start!

## Thanks/Credits
Huge thanks to <a href="https://anidiots.guide/">the folks at An Idiot's Guide</a>, which is a WONDERFUL resource for learning how to make a Discord bot via node.  I used a lot of the code there for event handling and oh my god it's so good.
Extra super bonus thanks to Évelyne Lachance, also from the prior link, who created <a href="https://enmap.evie.codes/">enmap</a>, which I've been thoroughly impressed with.
