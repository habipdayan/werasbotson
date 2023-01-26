const Discord = require("discord.js");
const { get } = require("superagent");
module.exports.run = async (bot, message, args) => {
    try {
        if(!args[0]){
message.channel.send('Bir yazı giriniz.\nNot : `Eğer türkçe harf kullanırsanız komut çalışmayabilir.`')
return;
}
        let url = `https://nekobot.xyz/api/imagegen?type=trumptweet&text=${args.join(" ")}`
        get(url).then(res => {
            const embed = new Discord.MessageEmbed()
            .setColor("0x36393E")
            .setAuthor("Trump diyorki..")
            .setImage(res.body.message)//trump
            setTimeout(() => {
                return message.channel.send(embed);
            }, 100);
        });
    } catch(err) {
        console.log(err)    
    }
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kn"],
  permLevel: 0
};

module.exports.help = {
  name: 'trump',
  category: 'Kullanıcı',
  description: 'Anime Karakterlerinin Posterine Yazı Koyar',
  usage: 'trump <yazı>'
};