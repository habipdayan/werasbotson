const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  
  let invites = await message.guild.fetchInvites().catch(error => {
    return message.channel.send("❌ | Davetleri Göremiyorum! Yeterli Yetkim Yok!")
  })

  invites = invites.array()

  let possibleinvites = []
  invites.forEach(function(invites) {
    possibleinvites.push(`🔸 | ${invites.inviter.username} | Davet: ${invites.uses}`)
  })

  const embed = new Discord.MessageEmbed()
    .setTitle(`DAVET BİLGİLERİ (TOP 30)`)
    .setColor("BLUE")
    .setDescription(`**${possibleinvites.slice(0, 30).join("\n")}**`)
    .setTimestamp()
    .setFooter(`Komutu Kullanan: ${message.author.username}`)
  message.channel.send(embed)
}

exports.conf = {
  aliases: ["davetbilgi", "db"]
}

exports.help = {
  name: "davetler"
}



