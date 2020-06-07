const commando = require('discord.js-commando');
const Signups = require("D:/Hunger Games Bot/Data/Signups.json")
const fs = require('fs');
const p1 = "D:/Hunger Games Bot/Data/SignupUsers/user.txt"
const p2 = "D:/Hunger Games Bot/Data/SignupUsers/user2.txt"
const p3 = "D:/Hunger Games Bot/Data/SignupUsers/user3.txt"
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

          message.channel.send(user);
          if (fs.existsSync(p1)) {
              if (fs.existsSync(p2)) {
                fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user3.txt", user, {
            encoding: "utf-8"
            }, function(err) {
            if (err) {
            throw err;
            }
            console.log("file user3 saved!");
            });
              }
              else{
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user2.txt", user, {
        encoding: "utf-8"
        }, function(err) {
        if (err) {
        throw err;
        }
        console.log("file user2 saved!");
        });
  }
}
else{
          fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user.txt", user, {
  encoding: "utf-8"
}, function(err) {
  if (err) {
    throw err;
  }
  console.log("file user saved!");
});
message.channel.send("debug");
        }
}
}

module.exports = signup;
