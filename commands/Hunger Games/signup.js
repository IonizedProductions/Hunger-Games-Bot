const commando = require('discord.js-commando');
const Signups = require("D:/Hunger Games Bot/Data/Signups.json")
const fs = require('fs');
const p1 = "D:/Hunger Games Bot/Data/SignupUsers/user.txt"
const p2 = "D:/Hunger Games Bot/Data/SignupUsers/user2.txt"
const p3 = "D:/Hunger Games Bot/Data/SignupUsers/user3.txt"
const p4 = "D:/Hunger Games Bot/Data/SignupUsers/user4.txt"
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

          if (fs.existsSync(p4)) {
            message.reply("No more signups at this time");
          }
          else if(fs.existsSync(p3)){
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user4.txt", user, {
            encoding: "utf-8"
            }, function(err) {
            if (err) {
            throw err;
            }
            console.log("file user4 saved!");
            });
          }
          else if (fs.existsSync(p2)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user3.txt", user, {
            encoding: "utf-8"
            }, function(err) {
            if (err) {
            throw err;
            }
            console.log("file user3 saved!");
            });
          }
          else if (fs.existsSync(p1)){
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user2.txt", user, {
            encoding: "utf-8"
            }, function(err) {
            if (err) {
            throw err;
            }
            console.log("file user2 saved!");
            });
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
          }

}

          }











module.exports = signup;
