const commando = require('discord.js-commando');

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

        }
}
module.exports = startgame;
