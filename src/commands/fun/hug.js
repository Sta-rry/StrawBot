const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');
const hugs = [
    'https://i.imgur.com/r9aU2xv.gif',
    'https://i.imgur.com/wOmoeF8.gif',
    'https://i.imgur.com/nrdYNtL.gif',
    'https://i.imgur.com/BPLqSJC.gif',
    'https://i.imgur.com/ntqYLGl.gif',
    'https://i.imgur.com/v47M1S4.gif',
    'https://i.imgur.com/82xVqUg.gif',
    'https://i.imgur.com/4oLIrwj.gif',
    'https://i.imgur.com/6qYOUQF.gif',
    'https://i.imgur.com/UMm95sV.gif',
    'https://nekos.fun/storage/hug/hug_014.gif',
    'https://nekos.fun/storage/hug/hug_063.gif',
    'https://nekos.fun/storage/hug/hug_039.gif',
    'https://nekos.fun/storage/hug/hug_083.gif'
];

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'hug',
                description: 'Give the user a slap!',
                permission: 'User',
            },
            options: {
                aliases: ['hg'],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
                usage: 'Hug <UserMention>',
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
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to Hug :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(process.env.HEX_COLOR)
            .setImage(hugs[Math.floor(Math.random() * hugs.length)])
            .setDescription(`<@${message.author.id}> Hugged <@${user.id}>!`)
        );
    }
}