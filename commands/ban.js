module.exports = {
    name: 'ban',
    description: "Deze command is om iemand te banen!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            if(message.member.roles.cache.has(829672585695592469)){

                message.channel.send("Member is gebant!")
            }else{
                message.channel.send('Jij kunt niet een member banen!');
            }
            }

    }
}