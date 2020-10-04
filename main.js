const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

client.once('ready', () => {
    console.log('your bot name is online!');
});


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(" ");
    const command = args.shift().toLowerCase();

    if(command === 'mute'){
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
              // I added the following if statement to mute everyone but the invoker:
              // if (member != message.member)
          
              // This single line however, nested inside the for loop, should mute everyone in the channel:
              member.voice.setMute(true);
            }
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }

    if(command === "unmute") {
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {
              // I added the following if statement to mute everyone but the invoker:
              // if (member != message.member)
          
              // This single line however, nested inside the for loop, should mute everyone in the channel:
              member.voice.setMute(false);
            }
          } else {
            message.reply('You need to join a voice channel first!');
          }
    }
});

       

client.login('NzYyMTgxNDQzODE2MjU5NjM1.X3layA.dlQ45NI8S1JHau-HLi142bJsQW4');