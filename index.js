const Commando = require('discord.js-commando');
const Client = new Commando.Client({
    unknownCommandResponse: false
});

Client.registry.registerGroups([
    {id: 'voice'}
])
.registerCommandsIn(__dirname + '/commands');

Client.login('NDYyMjU4NDI4MDk4NjQxOTM3.DhgC8w.mSYZsFK9-HMWS8kgnHGG9O8Jes8');

Client.on('ready', () => {
    console.log('DESCULPE');
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
