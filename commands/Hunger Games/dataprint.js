const commando = require('discord.js-commando');
const fs = require('fs');

const {
    Client,
    RichEmbed
} = require('discord.js');
class dataprint extends commando.Command {

    constructor(client) {
        super(client, {
            name: 'dataprint',
            group: 'commands',
            memberName: 'dataprint',
            description: 'File Read command for debugging',
            args: [
              {
                key:"file",
                prompt:"What File would you like to read?",
                type:"string",
            },
            ]
        });

    }
    async run(message, args) {


            if (file == "user4"){
            fs.readFile('"D:/Hunger Games Bot/Data/SignupUsers/user4.txt"', function (err, data) {
          if (err) throw err;
          console.log(data);
          message.channel.send(data);
        });
      }
      else {
        message.reply(", no work sorry my dude");
      }


    }
}
module.exports = dataprint;
