const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

module.exports = class PenaltiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'tuturu',
            group: 'voice',
            memberName: 'voice',
            description: 'tuturu is a command'
        });
    }
    async run(msg){
        let isReady = true;
        let voiceChannel = msg.member.voiceChannel;
        let connection = await voiceChannel.join();
        if(isReady && connection) {
            isReady = false;
            let finish = connection.playFile(__dirname+'/tuturu.mp3');
            finish.on('end', () =>{
                isReady = true;
                voiceChannel.leave();
            })
        }
    }
};