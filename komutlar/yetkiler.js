const Discord = require("discord.js")
exports.run = (client, msg, args) => {
  
  let x;
  let x2;
  let x3;
  let x4;
  let x5;
  let x6;
  let x7;
  let x8;
  let x9;
  let x10;
  let x11;
 const member = msg.mentions.members.first() || msg.guild.members.cache.get(args[0]) || msg.member
  //yönetici
  if (member.hasPermission("ADMINISTRATOR")) x = "✔"
  if (!member.hasPermission("ADMINISTRATOR")) x = "❌"

  //Denetim kaydı
  if (member.hasPermission("VIEW_AUDIT_LOG")) x2 = "✔"
  if (!member.hasPermission("VIEW_AUDIT_LOG")) x2 = "❌"

  //Sunucuyu yönet //Dcs Ekibi
  if (member.hasPermission("MANAGE_GUILD")) x3 = "✔"
  if (!member.hasPermission("MANAGE_GUILD")) x3 = "❌"

  //Rolleri yönet
  if (member.hasPermission("MANAGE_ROLES")) x4 = "✔"
  if (!member.hasPermission("MANAGE_ROLES")) x4 = "❌"

  //Kanalları yönet
  if (member.hasPermission("MANAGE_CHANNELS")) x5 = "✔"
  if (!member.hasPermission("MANAGE_CHANNELS")) x5 = "❌"

  //üyeleri at
  if (member.hasPermission("KICK_MEMBERS")) x6 = "✔"
  if (!member.hasPermission("KICK_MEMBERS")) x6 = "❌"

  //üyeleri yasakla
  if (member.hasPermission("BAN_MEMBERS")) x7 = "✔"
  if (!member.hasPermission("BAN_MEMBERS")) x7 = "❌"

  //mesajları yönet
  if (member.hasPermission("MANAGE_MESSAGES")) x8 = "✔"
  if (!member.hasPermission("MANAGE_MESSAGES")) x8 = "❌"

  //kullanıcı adlarını yönet
  if (member.hasPermission("MANAGE_NICKNAMES")) x9 = "✔"
  if (!member.hasPermission("MANAGE_NICKNAMES")) x9 = "❌"

  //emojileri yönet
  if (member.hasPermission("MANAGE_EMOJIS")) x10 = "✔"
  if (!member.hasPermission("MANAGE_EMOJIS")) x10 = "❌"

  //webhookları yönet
  if (member.hasPermission("MANAGE_WEBHOOKS")) x11 = "✔"
  if (!member.hasPermission("MANAGE_WEBHOOKS")) x11 = "❌"

const cse = new Discord.MessageEmbed()
.setTitle(member.user.username+" Yetkileri")
.setColor("BLUE")
.setThumbnail(member.user.displayAvatarURL())
.setDescription(`
    \`\`\`diff
${x} Yönetici
${x2} Denetim Kaydını Görüntüle
${x3} Sunucuyu Yönet
${x4} Rolleri Yönet
${x5} Kanalları Yönet
${x6} Üyeleri At
${x7} Üyeleri Yasakla
${x8} Mesajları Yönet
${x9} Kullanıcı Adlarını Yönet
${x10} Emojileri Yönet
${x11} Webhook'ları Yönet
\`\`\`
`)
.setTimestamp()
.setFooter("Yanında ❌ Yer Alan Kısımlar Sahip Olunmayan Yetkilerdir")
msg.channel.send(cse)
}

exports.conf = {
  aliases: ["izinlerim","yetkilerim","izinler"]
}

exports.help = {
  name: "yetkiler"
}