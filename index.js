require('dotenv').config();
const Commando = require('discord.js-commando');
const Client = new Commando.Client({
    unknownCommandResponse: false
});

Client.registry.registerGroups([
    {id: 'voice'}
])
.registerCommandsIn(__dirname + '/commands');

Client.login(process.env.BOT_KEY);

Client.on('ready', () => {
    console.log('BOT is online');
});

Client.on('message', msg => {
    if (msg.content.includes('Mais')) {
        msg.reply('DO QUE NUNCA BIXO');
    }
});

Client.on('guildMemberAdd', (member) => {
    member.send('Seja bem vindo');
    member.client.channels.find('name','geral').send(`Bem vindo ${member.user.username}`);
})
