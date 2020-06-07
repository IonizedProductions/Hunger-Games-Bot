const commando = require('discord.js-commando');
const client = new commando.Client;
const path = require('path');
const fs = require('fs');
const config = require("./config.json")
client.on('ready', () => {

    console.log('I am ready master!'); //how you know it is on

    client.user.setPresence({
        game: {
            name: 'Gathering Tributes',
            type: 0
        }
    });

    });
    client.on('error', console.error);
    client.registry.registerGroup('hunger games', 'Hunger Games');

    client.registry.registerDefaults();

    client.registry.registerCommandsIn(__dirname + "/commands");
client.login(config.token);
