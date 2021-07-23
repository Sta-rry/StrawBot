
const Discord = require('discord.js');
const { Message } = require('discord.js');
const Client = require('../../classes/Unicron');
const BaseCommand = require('../../classes/BaseCommand');

module.exports = class extends BaseCommand {
    constructor() {
        super({
            config: {
                name: 'support',
                description: 'Shows Support Server, Invite link.',
                permission: 'User',
            },
            options: {
                aliases: ['invite'],
                clientPermissions: ['EMBED_LINKS'],
                cooldown: 3,
                nsfwCommand: false,
                args: false,
                usage: '',
                donatorOnly: false,
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
        const OWNER = await client.users.fetch(client.unicron.owner, false);
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(process.env.HEX_COLOR)
            .setTitle('Straw Support & Invite')
            .setDescription(`
[Straw Support](${client.unicron.serverInviteURL})
[Invite Straw](https://discord.com/api/oauth2/authorize?client_id=753745656111300679&permissions=8&scope=bot)`)
            .setImage(process.env.BANNER)
            .setFooter(`Made by ${OWNER.tag}`)
        );
    }
}