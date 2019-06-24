const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'NTkyNTg4MTQ2ODM5OTEyNDQ4.XRBoKA.gW2oRYCGKW-bN8e_0hlQ9VEhV7Q';

bot.on('ready', () => {
    console.log('YouTube Bot successfully executed online.');

    bot.user.setActivity('Lonely', 'https://twitch.tv/lonelytopyt');
})



bot.on('message', msg=>{

    if(msg.content === "link"){
        msg.channel.send("https://youtube.com/c/LonelyFN");
    }
})

bot.login(token);
