const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if(message.author.id !== '907000782803591179') return message.reply('Bu Komudu Sadece Botun Sahibi Kullanabilir');
      var oyun = args.join(` `);
      client.user.setActivity(oyun);
      message.channel.send(`Botun Oynuyor Kısmı **${oyun}** Olarak Değiştirildi `)
      message.react('✅');
    }
exports.conf = {
  aliases: [],
};

exports.help = {
  name: 'oynuyor'
};