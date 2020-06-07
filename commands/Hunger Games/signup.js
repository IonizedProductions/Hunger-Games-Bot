const commando = require('discord.js-commando');
const Signups = require("D:/Hunger Games Bot/Data/Signups.json")
const fs = require('fs');
const {
    Client,
    RichEmbed
} = require('discord.js');
class signup extends commando.Command {

        constructor(client) {
            super(client, {
                name: 'signup',
                group: 'commands',
                memberName: 'signup',
                description: 'Signs you up for this years games'
            });

        }
        async run(message, args) {
          var user = message.author.username;
          fs.writefile("D:/Hunger Games Bot/Data/Signups.json", JSON.stringify(user,null,4), err =>{
            if (err) throw err;
          });
message.channel.send("signup complete");
        }
}
module.exports = signup;
