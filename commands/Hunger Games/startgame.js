const commando = require('discord.js-commando');
const discord = require('discord.js');
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
const a1 = "D:/Hunger Games Bot/Data/Attacks/a1.txt"
const win = "D:/Hunger Games Bot/Data/wins/win.txt"
const Lost = "D:/Hunger Games Bot/Data/lost/lost.txt"


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
            description: 'Starts this years games',

        });

    }
    async run(message, args) {
message.channel.send('https://www.youtube.com/watch?v=WXYJgvO_Lq4');
if (message.author.id = '169868696427167744'){
  message.channel.send("@everyone, the game has started");
        fs.readFile(p1, "utf-8", function(err, data) {
            fs.readFile(p2, "utf-8", function(err, data2) {
                fs.readFile(p3, "utf-8", function(err, data3) {
                    fs.readFile(win, "utf-8", function(err, data4) {
                        fs.readFile(p4, "utf-8", function(err, data5) {
                            fs.readFile(p5, "utf-8", function(err, data6) {
                                fs.readFile(p6, "utf-8", function(err, data7) {
                                    fs.readFile(p7, "utf-8", function(err, data8) {
                                        fs.readFile(p8, "utf-8", function(err, data9) {
                                            fs.readFile(p9, "utf-8", function(err, data10) {
                                                fs.readFile(p10, "utf-8", function(err, data11) {
                                                  fs.readFile(Lost, "utf-8", function(err, data12) {
                                                    var districtArray = [data, data2, data3, data5, data6, data7, data8, data9, data10, data11];
                                                    var wl = function() {
                                                        var disctrictchoice = districtArray[Math.floor(Math.random() * 10)];
                                                        return disctrictchoice;
                                                    };

                                                    var lp = wl();
                                                    var los = wl();


                                                    const hg1 = new discord.MessageEmbed()
                                                        .setColor('#ffff00')
                                                        .setTitle('The Games')
                                                        .addFields({
                                                            name: 'District 1',
                                                            value: data,
                                                            inline: true
                                                        }, {
                                                            name: 'District 2',
                                                            value: data2,
                                                            inline: true
                                                        }, {
                                                            name: 'District 3',
                                                            value: data3,
                                                            inline: true
                                                        }, {
                                                            name: 'District 4',
                                                            value: data5,
                                                            inline: true
                                                        }, {
                                                            name: 'District 5',
                                                            value: data6,
                                                            inline: true
                                                        }, {
                                                            name: 'District 6',
                                                            value: data7,
                                                            inline: true
                                                        }, {
                                                            name: 'District 7',
                                                            value: data8,
                                                            inline: true
                                                        }, {
                                                            name: 'District 8',
                                                            value: data9,
                                                            inline: true
                                                        }, {
                                                            name: 'District 9',
                                                            value: data10,
                                                            inline: true
                                                        }, {
                                                            name: 'District 10',
                                                            value: data11,
                                                            inline: true
                                                        }, {
                                                            name: 'Results',
                                                            value: lp + data4,
                                                            inline: true
                                                        }, {
                                                          name: 'Worst Loser',
                                                          value: los + data12,
                                                          inline: true
                                                        })
                                                        .setTimestamp()
                                                    message.channel.send(hg1);
                                                  });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
}
else{
  message.reply("You do not have permission to begin the games");
}
    }
}

module.exports = startgame;
