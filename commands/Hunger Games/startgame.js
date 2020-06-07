const commando = require('discord.js-commando');
const attacks = require("D:/Hunger Games Bot/Data/Attacks.json")
const user1 = "D:/Hunger Games Bot/Data/SignupUsers/user.txt"
const user2 = "D:/Hunger Games Bot/Data/SignupUsers/user2.txt"
const fs = require('fs');
const {
    Client,
    RichEmbed
} = require('discord.js');
class startgame extends commando.Command {

        constructor(client) {
            super(client, {
                name: 'startgame',
                group: 'commands',
                memberName: 'startgame',
                description: 'Begins this years games'
            });

        }
        async run(message, args) {
          fs.readFile(user1, 'utf8', function(err, contents) {
message.channel.send(contents);
    });
    fs.readFile(user2, 'utf8', function(err, contents2) {
    message.channel.send(contents2);
    });

        }
}
module.exports = startgame;
