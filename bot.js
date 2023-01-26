const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client({ disableMentions: 'everyone' });
const ayarlar = require('./ayarlar.json');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.on('ready', () => {
    
      console.log ('_________________________________________');
      console.log (`Kullanıcı İsmi     : ${client.user.username}`);
      console.log (`Sunucular          : ${client.guilds.cache.size}`);
      console.log (`Kullanıcılar       : ${client.users.cache.size}`);
      console.log (`Prefix             : ${ayarlar.prefix}`);
      console.log (`Durum              : Bot Çevrimiçi!`);
      console.log ('_________________________________________');
    
    });


client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on('message', async message => {
const cdb = require("croxydb") //gerekli modül
if(message.guild){
  const data1 = cdb.get("cd1."+message.guild.id)
  const data2 = cdb.get("cd2."+message.channel.id+message.guild.id)
  
  if(data1){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!:no_entry_sign: **")
  }
  }
  })
  }

    if(!data1 && data2){
  const blacklist = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "Amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq"];

  let content = message.content.split(' ');
  
  content.forEach(kelime => {
  if(blacklist.some(küfür => küfür === kelime))  {
  if(!message.member.permissions.has('BAN_MEMBERS')){
  message.delete({timeout: 1000});
  message.reply("**Lütfen Küfür Etme!!:no_entry_sign: **")
  }
  }
  })
  }
  
}
  });

client.on("message", async message => { 
if(message.channel.type == "dm"){
const csl = client.channels.cache.get('1042369232085721121')
const cse = new Discord.MessageEmbed()
.setTitle("Bota Bir DM Geldi")
.setColor("Gold")
.setThumbnail(client.user.avatarURL)
.setDescription(`**Gönderen Kişi: \`${message.author.tag}\`**`)
.addField("Gelen Mesaj", "```"+message.content+"```")
.setTimestamp()
.setFooter('By FTh')
csl.send(cse)
}
})

client.on("message", async message => {
let cdb = require("croxydb")
    let uyarisayisi = await cdb.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await cdb.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete({timeout:100});
                cdb.add(`reklamuyari_${message.author.id}`, 1) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)               
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete({timeout:100});
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacak`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete({timeout:100});
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    cdb.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL())
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
}); 

   client.on('messageDelete', async (message) => {
	const cdb = require('croxydb');
	
	
    if (message.author.id == client.user.id)
        return;
    else
        cdb.set(`${message.guild.id}.silinenMesaj.${message.channel.id}.mesaj`, message.content)

cdb.set(`${message.guild.id}.silinenMesaj.${message.channel.id}.sahipId`, message.author.id)
         
});   


client.on("message", async message => {
  let data = ["sa", "Sa", "sA", "SA", "sea", "Sea", "SEA"];
  if (data.includes(message.content)) {
    message.reply("Aleyküm selam hoşgeldiniz.");
  }
});

client.on("message", async message => {
  let data = [
    "gnydn",
    "günaydın",
    "Günaydın",
    "gunaydin",
    "gunaydın",
    "Gunaydın",
    "Gunaydin"
  ];
  if (data.includes(message.content)) {
    message.reply("Günaydın. Hoşgeldiniz.");
  }
});

client.on("message", async message => {
  let data = [
    "iyi geceler",
    "iyi akşamlar",
    "iyi gclr",
    "ii geceler",
    "iyi aksamlar",
    "Iyi Geceler",
    "İyi geceler",
    "İyi akşamlar"
  ];
  if (data.includes(message.content)) {
    message.reply("İyi akşamlar.");
  }
});

client.on("message", async message => {
  let data = [
    "Nasılsınız?",
    "Nassınız?",
    "Nasılsınız",
    "nasilsiniz",
    "nassiniz",
    "nasilsinizz",
    "Nasılsınızz"
  ];
  if (data.includes(message.content)) {
    message.reply("İyiyiz sizi sormalı?");
  }
});

client.on("message", async message => {
  let data = [
    "iyi",
    "idare eder",
    "normal",
    "kötü",
    "sorma",
    "iyii",
    "iyidir"
  ];
  if (data.includes(message.content)) {
    message.reply("Allah daha iyisini versin.");
  }
});

setInterval(() => {
 client.channels.cache.get("896671716309360661").send('Merhaba! Arkadaşarınızı davet ederek sunucumuza destek olabilirsiniz.')
}, 600000)


client.on('guildMemberAdd', async member => { 
//Dcs Ekibi
const kanal = "1058094058859405444"
const kanal2 = "1058094195287539792"
const log2 = client.channels.cache.get(kanal2)
const log = client.channels.cache.get(kanal)
let user = client.users.cache.get(member.id);

log2.setName(member.guild.memberCount + " Kişiyiz")
log.setName("Katılan: " + user.tag + "")

})

//Ayrılma
client.on('guildMemberRemove', async member => { 

const kanal = "1058093890927853658"
const kanal2 = "1058093890927853658"
const log2 = client.channels.cache.get("1058092309662674985")
const log = client.channels.cache.get(kanal)
let user = client.users.cache.get(member.id);
//Dcs Ekibi
log2.setName(member.guild.memberCount + " Kişiyiz")
log.setName("Ayrılan: " + user.tag + "")

})

client.on("guildCreate", guild => {

  let murphy = guild.owner
  
const dcs = new Discord.MessageEmbed()
.setTitle(`Merhaba! Beni eklediğin için teşekkür ederim :)`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setColor("GREEN")//dcs
.addField('Prefixim', "!")
.addField(`Destek Sunucusu`, `https://discord.gg/qFGDKmCYsH`)
murphy.send(dcs).catch(e => {console.log("dm kapalı")})
});



client.on("message", message => {
    if(message.author.bot) return;
    if(message.mentions.users.first() != client.user) return;
    if(message.content.startsWith(prefix + "mute")) return; //bu örnek sadece buraya komutlarınızın adını yazın çünkü mesela mute @bot diyince de bu mesajı atacak onun olmaması için orda yazdığım örnek kodu tüm kodlar i,in araya || koyarak kullanınız
    message.reply({ content: `Yardımcı olabilmem için şu komutu kullan: **${prefix}yardım**`});
});

client.on("guildCreate", guild => {
  let log = guild.channels.cache.filter(c => c.type === "text").random();

const dcs = new Discord.MessageEmbed()
.setTitle(`Hoş geldim`)
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter(guild.name)
.setColor("GREEN")
.addField("Prefixim","!")
.addField(`Destek Sunucusu`, `[Tıkla](https://discord.gg/qFGDKmCYsH)`)
.addField('Hakkımda', "Merhaba ben Weras Moderation. Gelişmiş sistemlerimle sunucumuzu güvende tutmak için hazırım. Karşılaştığınız sorunlar için destek sunucumuza gelmeyi unutmayın")
log.send(dcs)
});


client.on("message", async(message) => {
  const ai = require("clever-bot-api")
  if (message.channel.name == "🧠│ai-sohbet")  { //sohbet-botu isimli kanal açıp orada botu kullanın

    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.reply({ content: "**:x: Please dont mention anyone**", allowedMentions: { repliedUser: true }});
    }
    if (!message.content) return message.reply({ content: "Please say something.", allowedMentions: { repliedUser: true }});
    var turkish = {
      "ı": "i",
      "ğ": "g",
      "ç": "c",
      "ş": "s",
      "ö": "o",
      "ü": "u"
    }
    var msg = await ai(message.content.split("").map(char => turkish[char] ? char.replace(char, turkish[char]) : char).join(""));
    message.reply({ content: msg, allowedMentions: { repliedUser: true }});
  
  }
});

client.on("message", async msg => {
const cdb = require("croxydb")
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 4) {
    if (cdb.get(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            return msg.channel
              .send(`✋ Lütfen Büyük Harf Kullanma!`)
              .then(m => m.delete({ timeout: 5000}));
          }
        }
      }
    }
  }
});

client.on("guildMemberAdd", async member => {
let dcs = client.channels.cache.get("1042420524736852019"); 
dcs.setName(`Son üyemiz: ${member.user.username}`) //dcs ekibi
})

client.on('roleCreate', async (role, member) => {

 let sChannel = role.guild.channels.cache.get('1065765155113283625')

    sChannel.send(`**Rol Koruma Sistemi**
Yeni Bir rol Eklendi ve Koruma Sebebiyle silindi
Silinen Rol: **${role.name}**
`)
    .then(() => console.log(`${role.name} adlı rol silindi`))
    .catch(console.error);
 
 role.delete()

});

client.on('message', async message => {
if (message.content === '!fake-katıl') { // - yerine prefixi yaz
  client.emit('guildMemberAdd', message.member || await message.guild.members.fetch(message.author));
    }

    if (message.content === '!fake-ayrıl') { // - yerine prefixi yaz
        client.emit('guildMemberRemove', message.member || await message.guild.members.fetch(message.author));
    }
});

client.on("ready", async () => {
  let csdb = require("croxydb")
  setInterval(() => {
    
  client.guilds.cache.map(cs => {
    
  let csv = csdb.get("sunucutanit."+cs.id)
    if(csv){
      
      let time = Date.now() - csv.zaman
      let sure = csv.sure
      
      if(time >= sure){
        csdb.delete("sunucutanit."+cs.id)
      }
    }
  })
  }, 300000)
})   

client.on('message', message => {
    if (message.content === '!wexter') {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Weras')
            .setURL('https://www.undsel.org')
            .setAuthor('Weras')
            .setDescription('Weras Web sitesine girmek içnin tıklayın.');

        message.channel.send(exampleEmbed);
    }
});



client.login(process.env.token);