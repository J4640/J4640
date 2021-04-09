module.exports = {
    name: 'kick',
    description: "Deze command is om iemand te kicken!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send("Member is gekickt!")
        }else{
            message.channel.send('Jij kunt niet een member kicken!');
        }
    }
}