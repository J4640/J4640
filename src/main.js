const Discord = require('discord.js')

const client = new Discord.Client();

const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.once('ready', () => {
    console.log('J4640BOT is online!')
});



client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com/channel/UCS78rh7_gY2dL2pOuj9XMUQ');
    } else if (command == 'suggest'){
        message.channel.send('HIER KOMT SUGGESTION');
    } else if (command == 'info'){
        message.channel.send('Welkom in de discord van J4640! ');
    } else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    } else if (command === 'info'){
        client.commands.get('info').execute(message, args, Discord);
    }
});

client.login('ODI5NjkxMDY0OTY5NDYxNzgw.YG70BA.BzObFaqeMY3zuwFZdG8GNb1ilLA');
