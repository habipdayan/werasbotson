const { MessageEmbed, MessageAttachment } = require("discord.js");
const moments = require("moment");
const fs = require("fs");

exports.run = async (client, message, args) => {
    var guild = client.guilds.cache.array();
    var guildList = `> BOTUN OLDUĞU BÜTÜN SUNUCULARIN LİSTESİ: \n\n` + guild.map((x, index) => `${index + 1}. Sunucu Bilgileri: \nSunucu İsmi: ${x.name} \nSunucu ID: ${x.id} \nSunucuya Giriş Tarihi: ${moments(x.joinedTimestamp).format("LL")} \n---------------------------------------------`).join("\n");

    const embed = new MessageEmbed()
            .setDescription(guildList)
            .setColor(message.member.displayHexColor)
            .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
            .setFooter(`${message.author.username} tarafından kullanıldı!`, message.author.avatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(embed).catch(x => {
            const files = "./guildList.txt";
            const content = '\u200B'

            fs.writeFileSync(files, content);

            const cs = fs.readFileSync('guildList.txt', 'utf-8');
            fs.writeFileSync('guildList.txt', guildList + cs)
            const uwu = fs.readFileSync('guildList.txt');
            const attachment = new MessageAttachment(uwu, 'guildList.txt');

            message.channel.send(`${message.author}, mesaj sığmadığı için dosya olarak gönderdim!`, attachment);

            setTimeout(() => {
                fs.unlinkSync("guildList.txt")
            }, 1000);
        })
}
exports.conf = {
    aliases: []
};

exports.help = {
    name: "sunucu-liste"
};