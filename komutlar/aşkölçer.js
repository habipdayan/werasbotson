const Discord = require("discord.js");
exports.run = (client, message, args) => {

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!member) return message.reply("**Aşkını Ölçmek İstediğin Kişiyi Etiketlemen Gerekir! :heart:**")
  if(member.user.bot) return message.reply("**Botlarla Aşk Yaşayamassın, Sakin Ol!**")
  if(member.id == message.author.id) return message.reply("**Kendin İle Aşk Yaşayamazsın, Sakin Ol!**")
  
  var anasonuc = Math.floor(Math.random() * 101);
  var kalp = "";
  var akalp = "";
  if (Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
    var c = 0; //DCS EKİBİ
    for (var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
      kalp += "❤️";
      c++;
    }
    for (var x = c; x < 10; x++) {
      akalp += `🖤`;
    }
  } else {
    var kalp = "🖤";
    var akalp = "🖤🖤🖤🖤🖤🖤🖤🖤🖤";
  }
  var yorum = "Sizi evlendirelim <3";
  if (anasonuc < 80) {
    var yorum = "Biraz daha uğraşırsan bu iş olacak gibi :)";
  }
  if (anasonuc < 60) {
    var yorum = "Eh biraz biraz bir şeyler var gibi.";
  }
  if (anasonuc < 40) {
    var yorum = "Azıcıkta olsa bir şeyler hissediyor sana :)";
  }
  if (anasonuc < 20) {
    var yorum = "Bu iş olmaz sen bunu unut.";
  }
  const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag} ve ${member.user.tag}`)
    .setDescription(`Aşk yüzdesi **%${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
    .setColor("RED");
  message.channel.send(embed)
};


exports.conf = {
  aliases: ["aşk"]
}

exports.help = {
  name: "aşk-ölçer"
}



