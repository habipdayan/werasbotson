const Discord = require('discord.js')
 
exports.run = async (client, message, args) => {
        if(!args[0] || isNaN(args[0])) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen bir sayı yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(!args[1] || isNaN(args[1])) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen yedek kazanan sayısını yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[0] <= 0) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen sıfırdan büyük bir sayı yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(args[1] <= 0) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Lütfen sıfırdan büyük bir sayı yazın!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        if(Number(Number(args[0]) + Number(args[1])) > Number(message.guild.members.cache.filter(k => !k.user.bot).size)) {
                const embed = new Discord.MessageEmbed()
                        .setDescription(`Girdiğiniz değerlerin toplamı suncuudaki üyelerden fazla! Lütfen değerlerinizin toplamı ${message.guild.members.cache.filter(k => !k.user.bot).size} değerinden küçük olsun!`)
                        .setColor("RANDOM")
                        .setTimestamp()
                message.channel.send({embed})
                return
        }
 
        var gg = ''
        var ggk = []
        var gg2 = ''
        var gg2k = []
 
        for(var i = 0; i < args[0]; i++) {
                var u = message.guild.members.cache.filter(k=> !k.user.bot && !ggk.includes(k.user.id)).random().id
                gg += `${i+1}. <@${u}>\n`
                ggk.push(u)
        }
 
        for(var z = 0; z < args[1]; z++) {
                var u = message.guild.members.cache.filter(k=> !k.user.bot && !ggk.includes(k.user.id) && !gg2k.includes(k.user.id)).random().id
                gg2 += `${z+1}. <@${u}>\n`
                gg2k.push(u)
        }
 
 
        const embed = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} | Rastgele Üye Sonuçları`, message.guild.iconURL() || message.author.avatarURL())
                .setDescription(`Kazananlar:\n${gg}\nYedek Kazananlar:\n${gg2}`)
                .setColor("RANDOM")
                .setTimestamp()

        message.channel.send({embed})
}
 
exports.conf = {
        aliases: ['rü', 'ru', 'rastgeleüye']
}
 
exports.help = {
        name: 'rastgeleuye'
}