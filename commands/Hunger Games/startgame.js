const commando = require('discord.js-commando');
const attacks = require("D:/Hunger Games Bot/Data/Attacks.json")
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
          message.channel.send(attacks.test);

        }
}
module.exports = startgame;
