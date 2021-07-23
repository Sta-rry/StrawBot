const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');
const slaps = [
    'https://i.imgur.com/fm49srQ.gif',
    'https://i.imgur.com/4MQkDKm.gif',
    'https://i.imgur.com/o2SJYUS.gif',
    'https://i.imgur.com/oOCq3Bt.gif',
    'https://i.imgur.com/Agwwaj6.gif',
    'https://i.imgur.com/oRsaSyU.gif',
    'https://i.imgur.com/kSLODXO.gif',
    'https://i.imgur.com/CwbYjBX.gif',
    'https://i.imgur.com/VW0cOyL.gif',
    'https://i.imgur.com/Li9mx3A.gif'
];

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'slap',
                description: 'Give the user a slap!',
                permission: 'User',
            },
            options: {
                aliases: [],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
                usage: 'slap <UserMention>',
                donatorOnly: false,
                premiumServer: false,
            }
        });
    }
    /**
     * @returns {Promise<Message|boolean>}
     * @param {Client} client 
     * @param {Message} message 
     * @param {Array<string>} args 
     */
    async run(client, message, args) {
        const user = message.mentions.users.first();
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to slap :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(process.env.HEX_COLOR)
            .setImage(slaps[Math.floor(Math.random() * slaps.length)])
            .setDescription(`${message.author.username} slapped ${user.username}!`)
        );
    }
}