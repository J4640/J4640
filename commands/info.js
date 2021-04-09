module.exports = {
    name: 'info',
    description: "INFO J4640",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#304281')
        .setTitle('J4640')
        .setURL('https://www.youtube.com/channel/UCS78rh7_gY2dL2pOuj9XMUQ')
        .setDescription('Dit is een embed voor informatie')
        .addFields(
            {name: 'TEST 1', value: 'TEST 1'},
            {name: 'TEST 2', value: 'TEST 2'},
            {name: 'TEST 3', value: 'TEST 3'}
        )
        .setImage('https://i.imgur.com/o4YzaDW.jpg')
        .setFooter('Bedankt voor het lezen van de informatie!');

        message.channel.send(newEmbed);
    }
    

}