const commando = require('discord.js-commando');
const Signups = require("D:/Hunger Games Bot/Data/Signups.json")
const fs = require('fs');
const p1 = "D:/Hunger Games Bot/Data/SignupUsers/user.txt"
const p2 = "D:/Hunger Games Bot/Data/SignupUsers/user2.txt"
const p3 = "D:/Hunger Games Bot/Data/SignupUsers/user3.txt"
const p4 = "D:/Hunger Games Bot/Data/SignupUsers/user4.txt"
const p5 = "D:/Hunger Games Bot/Data/SignupUsers/user5.txt"
const p6 = "D:/Hunger Games Bot/Data/SignupUsers/user6.txt"
const p7 = "D:/Hunger Games Bot/Data/SignupUsers/user7.txt"
const p8 = "D:/Hunger Games Bot/Data/SignupUsers/user8.txt"
const p9 = "D:/Hunger Games Bot/Data/SignupUsers/user9.txt"
const p10 = "D:/Hunger Games Bot/Data/SignupUsers/user10.txt"
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
        if (fs.existsSync(p10)) {
            message.reply("You have not been selected for this years hunger games");
        } else if (fs.existsSync(p9)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user10.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user10 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p8)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user9.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user9 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p7)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user8.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user8 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p6)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user7.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user7 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p5)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user6.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user6 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p4)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user5.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user5 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p3)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user4.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user4 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p2)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user3.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user3 saved!");
                message.reply(" Signup Complete!");
            });
        } else if (fs.existsSync(p1)) {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user2.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user2 saved!");
                message.reply(" Signup Complete!");
            });
        } else {
            fs.writeFile("D:/Hunger Games Bot/Data/SignupUsers/user.txt", user, {
                encoding: "utf-8"
            }, function(err) {
                if (err) {
                    throw err;
                }
                console.log("file user saved!");
                message.reply(" Signup Complete!");
            });
        }
    }
}
module.exports = signup;
