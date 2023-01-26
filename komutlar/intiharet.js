const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
    let intiharsebep = args.slice(0).join(" ")
    if(!intiharsebep) {
    return message.reply('Neden İntihar Ettiğini Belirtmelisin.')
    } else {    
   message.delete({timeout: 100})
      
  const intihar = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle('İNTİHAR VAKASI!')
      .setDescription(`${message.author.username} │ Adlı Kullanıcı **${intiharsebep}** Yüzünden İntihar Etti! `)
      .setImage("https://media.discordapp.net/attachments/737348411568685066/901154609840664646/tumblr_bd0fac9c8b8c26d7c51382d766a6cfc8_894cb49a_500.gif")
      message.channel.send(intihar)
    }  
}

exports.conf = {
    aliases: ["intiharet","intihar"]
  }
  
  exports.help = {
    name: 'intihar-et'
  }