const { Client, Intents, MessageEmbed } = require("./discord.js");
const akinator = require("./discord.js-akinator");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const fs = require('fs');
const { owner, token } = require("./config.json")
const { isMT } = require('./maintenance.json')
client.on('ready', () => {
  console.log(`${client.user.tag} Now Is Online!`)
  if(isMT == true) {
    client.user.setActivity('Akinator bot is now MAINTENANCE', { type: 'PLAYING' });
  } else {
    client.user.setActivity('with Akinator', { type: 'PLAYING' });
  }
});

const express = require("express");
const app = express();
app.listen(() => console.log("http nyala~"));
require('events').EventEmitter.defaultMaxListeners = 30;
app.use('/', (req, res) => {
res.send("Websites Monitor Frenzy");})

const prefix = ".";
const tanggal = new Date()
const replaceJSONProperty = require('replace-json-property');
const { pathToFileURL } = require("url");
const { uptime } = require("process");
const childMode = false; //Whether to use Akinator's Child Mode
const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
const embedColor = "#1F1E33"; //The Color of the Message Embeds

client.on("messageCreate", message => {
  try {
console.log(`${message.author.tag}: ${message.content}`)
// Local DB Path
const dbPath = `./database/player/${message.author.tag}.json`;
const gamePath = `./database/game/${message.author.id}.json`;

// First function
function bacaNegara() {
  const { languageGame } = require(gamePath)
    if(languageGame == "en") {      
        message.reply(`Your currently language is ENGLAND ( :england: )`)
    } else {
        if(languageGame == "id") {
            message.reply(`Your currently language is INDONESIA ( :flag_id: )`)
    } else {
        if(languageGame == "bg") {
            message.reply(`Your currently language is BULGARIA ( :flag_bg: )`)
    } else {
        if(languageGame == "fr") {
            message.reply(`Your currently language is FRANCE ( :flag_fr: )`)
    } else {
        if(languageGame == "tr") {
            message.reply(`Your currently language is TURKISH ( :flag_tr: )`)
    } else {
        message.reply("no language detected")
    }
    }
    }
    }
    }
}

function akistatus() {
    const currentPlay = fs.readdirSync(gamePath).length
    message.reply(`Currently ${currentPlay} people play Akinator!`)
}
// Create teh arguments
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
// Local database file path
            if(message.content.startsWith(prefix)) {
// Well. we will detect if the bot was MT
            if(isMT == true) {
    message.reply("WAIT. You just use __Akinator__ bot prefix(.) but Sorry. akinator bot was currently on a MAINTENANCE\nYou still can create a game by the way.")
    return;
}
                if(fs.existsSync(gamePath)) {
                    // The users has registered so. lets give them command
                        if(command == "play" || command == "p" || command == "akinator" || command == "aki") {
                        const { languageGame, gameTypes, pakeButton } = require(gamePath)
                          // logs.send(`New game started! by ${message.author.tag}`)
                            akinator(message, {
                                language: `${languageGame}`, //Defaults to "en"
                                childMode: childMode, //Defaults to "false"
                                gameType: gameTypes, //Defaults to "character"
                                useButtons: `${pakeButton}`, //Defaults to "false"
                                embedColor: embedColor //Defaults to "RANDOM"
                            });
                        } else {
                        if(command == "invite") {
                            const exampleEmbed = new MessageEmbed()
                            .setAuthor({ name: 'Akinator Beta Bot', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg', url: 'https://en.akinator.com' })
                            .setImage("https://unrealitymag.com/wp-content/uploads/2018/12/Akinator-750x422.jpg")
                            .setDescription("Akinator bot invite has restarted!\nInvite the akinator bots [here](https://discord.com/api/oauth2/authorize?client_id=947821626051948584&permissions=274877982784&scope=bot)\nSupport servers [here](https://dsc.gg/brainps)")
                            .setFooter({ text: 'Akinator Bot 2022', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg' });
                            message.channel.send({ embeds: [exampleEmbed] });
                        } else {
                            if(command == "changelanguage") {
                            if(fs.existsSync(gamePath)) {   
                            const toWhat = args[0]
                            if(!toWhat) {
                                message.reply("To whats? usage: .changelanguage en")
                            } else {
                                const { gameTypes } = require(gamePath)
                                const newcon = fs.readFileSync(gamePath)
                                const conntent = newcon;
                                message.reply("Editing the games.. maybe taking 5 seconds...")
                                setTimeout(function(){ 
                                fs.unlinkSync(gamePath)
                                fs.writeFileSync(gamePath, conntent);
                                message.reply("The language has changed to **" + toWhat + "** if the langauge still using your previous pls use .deletegame and create it once again with your new language ;)")
                                 }, 5000); //time in milliseconds
                            }
                            } else {
                                message.reply("wait. you need create a game before change the language :D")
                            }
                            } else {
                                if(command == "deletegame") {
                                    if(fs.existsSync(gamePath)) {
                                        fs.unlinkSync(`./database/game/${message.author.id}.json`)
                                        message.reply("game deleted succesfully, dont be sad, you can still play this bot ;)")
                                    } else {
                                        // Do nothing else :)
                                        message.reply("no game detected.")
                                    }
                                } else { // https://www.google.com/url?sa=i&url=https%3A%2F%2Funrealitymag.com%2Fhow-do-you-get-better-at-akinator%2F&psig=AOvVaw1qinhX1wbAJ8jawgaPN-nL&ust=1646205658788000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLCcn5CwpPYCFQAAAAAdAAAAABAJ
                                    if(command == "help") {
                                        const exampleEmbed = new MessageEmbed()
                                        .setAuthor({ name: 'Akinator Beta Bot', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg', url: 'https://en.akinator.com' })
                                        .setImage("https://unrealitymag.com/wp-content/uploads/2018/12/Akinator-750x422.jpg")
                                        .setDescription("**Current Commands**\n.play\n.invite\n.checkgame\n.mylanguage\n.help\n.changelanguage\n.creategame\n.deletegame\n\n__Akinator notebook__: Give me permission to __DELETE A MESSAGE__\n- __Visit__ us [here](https://en.akinator.com)")
                                        .setFooter({ text: 'This bot was created by .FreenzySG.#2331', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg' });
                                        message.channel.send({ embeds: [exampleEmbed] });
                                    } else {
                                    if(command == "mylanguage") {
                                      if(fs.existsSync(gamePath)) {
                                         bacaNegara()
                                      } else {
                                          message.reply("no game detected")
                                      }
                                    } else {
                                        if(command == "checkgame") {
                                            if(fs.existsSync(gamePath)) {
                                                const { languageGame, date } = require(gamePath)
                                                message.reply("yes. you currently have a game with lang " + languageGame + " created at " + tanggal + "")
                                            } else {
                                                message.reply("you currently have no game.")
                                            }
                                        } else {
                                          if(command == "player") {
                                            akistatus() // Post the akinator status :)
                                          } else {
                                              if(command == "gameconfig") {
                                                  if(fs.existsSync(gamePath)) {
                                                      const data = fs.readFileSync(gamePath, 'utf-8')
                                                      message.reply("```json\n" + data + "```")
                                                  } else {
                                                      message.reply("something-fucked up!")
                                                  }
                                              } else {
                                                if(command == "botinfo") {
                                                    const pjson = require('../../package.json');
                                                    const botuptime = moment.duration(this.client.uptime).format('y[ years][,] M[ months][,] d[ days][,] h[ hours][,] m[ minutes][, and] s[ seconds]');
                                                    const moment = require('moment');
                                                    require('moment-duration-format');
                                                    const exampleEmbed = new MessageEmbed()
                                                    .setAuthor({ name: 'Akinator Beta Bot Status', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg', url: 'https://en.akinator.com' })
                                                    .setImage("https://unrealitymag.com/wp-content/uploads/2018/12/Akinator-750x422.jpg")
                                                    .addField("Nodejs Version", process.version)
                                                    .addField("Discord.js Version", DiscordJS.version)
                                                    .addField("Package Version", pjson.version)
                                                    .addField("Uptime", uptime)
                                                    .setFooter({ text: 'This bot was created by .FreenzySG.#2331', iconURL: 'https://miro.medium.com/max/792/1*lTWsQr8phKRUVGMjL7SqGg.jpeg' });
                                                    message.channel.send({ embeds: [exampleEmbed] });
                                                  }
                                              }
                                          }
                                        }
                                    }
                                    }
                                }
                            }
                        }
                        }
                    } else {
                        if(command == "creategame") {
                    
                        } else {
                            message.reply("create a game first before use my command.")     
                        }
                    }
            }
  } catch (e) {
    if(e == "DiscordAPIError: Missing Permissions") {
      console.log("hey error")
    } else {
      message.reply(e)
    } 
  }
  })
            
            // And here. the command only for users who didnt registered.
client.on("messageCreate", message => {
// Create teh arguments
const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
// Local DB Path
const dbPath = `./database/player/${message.author.tag}.json`;
const gamePath = `./database/game/${message.author.id}.json`;

if (command == "creategame") {
const lang = args[0]
const gameTypes = args[1]
const allLang = fs.readFileSync('ts.txt', 'utf-8')
const usebutton = args[2]

if(!lang) {
    message.reply("Need game types.\nExample: .creategame en character\n\n!creategame <language> <gameType> <usebutton>\n\nif want use button:\n.creategame en character usebutton\n\nif use a keyboard:\n.cretaegame en character false")
} else {
    fs.readFile('./ts.txt', function (err, data) {
        if (err) message.channel.send(err);
        if(lang == "en" || lang == "tk" || lang == "bg" || lang == "uk" || lang == "id" || lang == "tr" || lang == "fr") {
            if(!usebutton) {
                message.reply("Need game types.\nExample: !creategame en character\n\n!creategame <language> <gameType> <usebutton>\n\nif want use button:\n.creategame en character usebutton\n\nif use a keyboard:\n.cretaegame en character false")
            } else {
            if(usebutton == "yes" || usebutton == "true" || usebutton == "usebutton") {
                if(!gameTypes) {
                    message.reply("Need game types.\nExample: !creategame en character\n\n!creategame <language> <gameType> <usebutton>\n\nif want use button:\n.creategame en character usebutton\n\nif use a keyboard:\n.cretaegame en character false")
                } else {
                    if(gameTypes == "animals" || gameTypes == "character") {
                    if(fs.existsSync(gamePath)) {
                        const { language, gameTypes } = require(gamePath);
                        message.reply(`You already create a game, Type: ${gameTypes}, Language: ${language}`)
                    } else {
                    const conntent = `{ "languageGame": "${lang}", "gameTypes": "${gameTypes}", "pakeButton": true, "date": "${tanggal}", "username": "${message.author.tag}" }`;
                    message.reply(`game created! LANG: ${lang}, type: ${gameType}, usebutton: true (YES)\n\nREMEMBER TO GIVE AKINATOR PERMISSION MANAGE_MESSAGE`)
                      // logs.send(`Created! ${conntent}`)
                    fs.writeFileSync(gamePath, conntent);
                    }
                    } else {
                        message.reply(`The akinator bots only support gametype: **ANIMALS/CHARACTER** not a ${gameTypes}`)
                    }
                } 
            } else {
                if(!gameTypes) {
                    message.reply("Need game types.\nExample: !creategame en character\n\n!creategame <language> <gameType> (ANIMALS/CHARACTER)")
                } else {
                    if(gameTypes == "animals" || gameTypes == "character") {
                    if(fs.existsSync(gamePath)) {
                        const { language, gameTypes } = require(gamePath);
                        message.reply(`You already create a game, Type: ${gameTypes}, Language: ${language}`)
                    } else {
                        const conntent = `{ "languageGame": "${lang}", "gameTypes": "${gameTypes}", "pakeButton": false, "date": "${tanggal}", "username": "${message.author.tag}" }`;
                    message.reply(`game created! LANG: ${lang}, type: ${gameType}, usebutton: NO BUTTON, USE KEYBOARD\n\nREMEMBER TO GIVE AKINATOR PERMISSION MANAGE_MESSAGE`)
                    fs.writeFileSync(gamePath, conntent);
                      // logs.send(`Created! ${conntent}`)
                    }
                    } else {
                        message.reply(`The akinator bots only support gametype: **ANIMALS/CHARACTER** not a ${gameTypes}`)
                    }
                } 
            }
            }  
        } else {
            message.reply("currently supported lang: uk, en, id, bg, tr, fr")
        }
      });
   
}
}
            
})

client.login(token)