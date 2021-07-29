const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');
const kiss = [
    'https://nekos.fun/storage/kiss/kiss_115.gif',
    'https://nekos.fun/storage/kiss/kiss_041.gif',
    'https://nekos.fun/storage/kiss/kiss_104.gif',
    'https://nekos.fun/storage/kiss/kiss_058.gif',
    'https://nekos.fun/storage/kiss/kiss_017.gif',
    'https://nekos.fun/storage/kiss/kiss_020.gif',
    'https://nekos.fun/storage/kiss/kiss_087.gif'
];

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'kiss',
                description: 'Give the user a kiss!',
                permission: 'User',
            },
            options: {
                aliases: [],
                clientPermissions: [],
                cooldown: 10,
                nsfwCommand: false,
                args: true,
                usage: 'kiss <UserMention>',
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
        if (!user) return message.channel.send('Oh oh... you gotta provide a valid user to kiss :/');
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(process.env.HEX_COLOR)
            .setImage(kiss[Math.floor(Math.random() * kiss.length)])
            .setDescription(`<@${message.author.id}> Kissed <@${user.id}>!`)
        );
    }
}