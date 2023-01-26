const Discord = require('discord.js')
exports.run = (client, message, args) => {

    const ağla = new Discord.MessageEmbed()
    .setAuthor('Botu Ağlattın İyimi?')
    .setColor("BLUE")
    .setTimestamp()
    .setImage(`https://media3.giphy.com/media/2rtQMJvhzOnRe/giphy.gif?cid=790b76115d398a482f6177556b32d70a&rid=giphy.gif`)
    return message.channel.send(ağla)
}

exports.conf = {
  aliases: []
}

exports.help = {
  name: 'ağla'
}