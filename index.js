const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NTkyNTQ4NDMzNjU5NjkxMDA4.XRBMAQ.YrsX9hQhD77fMbth5pRlD79ai-A';

// This is what turns the bot on
bot.on('ready', () => {
    console.log('Bot successfully executed online.');
    console.log('Any problems will show down below.');
    bot.user.setActivity("Animal Jams Database", {type: "WATCHING"});
})


// Commands
bot.on('message', msg=>{

    if(msg.content === "symbols"){
        msg.channel.send("þ đ ÷ ∂");
    }

    if(msg.content === "cmds"){
        msg.channel.send(sEmbed);
    }

    if(msg.content === "symbol"){
        msg.channel.send('þ');
    }
})


// Embed template
let newEmbed = new Discord.RichEmbed()
.setColor("#ff00ba")
.setTitle("Title")
.setDescription(`Description here.`);

// Cmds Embed
let sEmbed = new Discord.RichEmbed()
.setColor("#ff00ba")
.setTitle("List of commands.")
.setDescription(`Cmds - Shows list of available commands.
Symbol - Sends an important symbol.
Symbols - Sends all symbols.`);



bot.login(process.env.BOT_TOKEN);
