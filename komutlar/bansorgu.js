const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Let tanımları
        let kullanıcı = args[0]

        if(!kullanıcı){
            const hata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`${message.author} **Lütfen Sunucudan Banlanan Kullanıcı İD'si Gir**`)
            return message.channel.send(hata)
        }

        if(isNaN(kullanıcı)){
            const hata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`${message.author} **Dostum Harf Giremezsin :rage:, Lütfen Sunucudan Banlanan Kullanıcı İD'si Gir**`)
            return message.channel.send(hata)
        }

        if(kullanıcı){
            message.guild.fetchBans().then(cmfban1 => {
                if(!cmfban1.has(kullanıcı)){
                    // Eğer Kullanıcı Banlanmamışsa Bildirelim

                    const banlanmamis = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`Belirtilen Belirtilen ${args[0]} Kişisi Bu Sunucudan Banlanmamış.`)
                    message.channel.send(banlanmamis)
                
              return;
        }

                // Kullanıcı Banlanmışsa Başarıyla Mesajımızı Ve Neden Banlandığını Söyleyelim

                message.guild.fetchBan(kullanıcı).then(({ user, reason }) => {
                    const banlanmis = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`Belirtilen ${user}(\`${user.id}\`) Kişisi **${reason}** Sebebiyle Bu Sunucudan Banlanmış`)
                    return message.channel.send(banlanmis)
               })
            })
        }

    } 


exports.conf = {
    aliases: ['bansorgu']
}

exports.help = {
    name: 'ban-sorgu'
}
