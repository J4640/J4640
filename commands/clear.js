module.exports = {
    name: 'clear',
    description: "Clear Messages!",
    async execute(message, args){
        if(!args[0]) return message.reply("Vul een getal in **TIP**(Gebruik !clear [aantal])");
        if(isNaN(args[0])) return message.reply("Vul een echt getal in!");

        if(args[0] > 100) return message.reply("Je kunt niet meer dan 100 berichten verwijderen!");
        if(args[0] < 1) return message.reply("Je moet minimaal 1 bericht verwijderen!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages)
        });
    }
}