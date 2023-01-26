const Discord = require("discord.js");


exports.run = (client, message, args) => {
  const kurallar = new Discord.MessageEmbed()
    .setDescription(`**SUNUCU KURALLARI**
1-) Sunucu içinde reklam yapmak yasaktır. Buna özelden yapılan mesajlarda dahildir.
2-) Küfür, Argo, Hakaret içeren kelimeler kullanmak yasaktır. Mizahı dahi olamaz.
3-) Topluluğumuz düşünce açısından özgür bir topluluk olduğundan kimse kimsenin düşünce özgürlüğüne karışamaz. (Bazı istisnalar dışında.)
4-) Dini değerler ile alay etmek, hakaret etmek, küçümsemek yasaktır. Mizahı dahi olamaz.
5-) Topluluğumuz Discord'un önerdiği topluluk kurallarına uymaktadır. Bu açıdan  Discord ToS & Discord Guidelines göre hareket etmekteyiz.
6-) Art arda mesaj (flood yasaktır).
7-) Sohbet kanallarında spam (uzun) şeklinde mesajlar yasaktır.
8-) Medya kanalında paylaşacağınız dosyalarda (PDF, JPG, PNG, JPEG, MP4, MP3, RAR, ZİP vb.) dosyalar arkasında Trojan Horse (Truva Atı), RAT veya herhangi bir virüs koymak kesinlikle yasaktır. Kural ihlali yapanlar uyarılmadan banlanacak ve kolluk kuvvetlerine bildirilecektir. 
9-) Sohbet kanallarında hack konularından bahsetmek yasaktır. Siber Güvenlik dışında.
10-) Sohbet, Medya, Müzik, Destek-Öneri kanallarında yardım istemek yasaktır. Bu gibi durumlarda alttaki yazılım kanallarını kullanabilir veya weras-forum kullanabilirsiniz.
11-) Çözüme ulaşmış konulara yorum yapmamanız önerilir.
12-) Başvuru kanallarına birden fazla başvuru yapmamalısınız. 
13-) Sunucumuzda çoklu hesap yasaktır. Seste sıkıntı yaşıyorsanız herhangi bir yetkiliye bildirmelisiniz. 
14-) Hiç bir üyeyi rahatsız etmemelisiniz. Özelden dahil. Buna maruz kalan üyelerin yetkililere haber vermesi önerilir. (Uyarıya rağmen devam ediyorsa engel atın. Ne kadar engel yerse kullanıcı hesabının kapanma olasılığı yükselir.)
15-) Yetkili ekibi sürekli etiketlemek yasaktır. 
16-) Üyelere sevmeyeceği lakaplar takamaz, ismiyle dalga geçemezsiniz.
17-) Irkçılık kesinlikle yapmamalısınız. Multimedya da buna dahildir. Topluluğumuzun yöneticilerinin ideolojilieri kesinlikle sunucunun ideolojisini etkilemez. 
18-) Gereksiz emoji kullanımı yasaktır. Giflerde buna dahil.
19-) Forumlarda link atacağınız zaman yetkili ekibe haber vermelisiniz.
20-) Cinsel içerikli ve şiddet içeren paylaşımlar yasaktır.

Amacımız herkesin memnun olacağı bir sunucu oluşturmak. Kurallar iyi bir topluluğun anahtarıdır. Bu çerçevede yapıcı olalım.

Not: Üye olan sunucu kuralları bilmek zorundadır. Üç maymunu oynamayalım. Diğer yandan hiç bir şey canınızı sıkmasın iyi eğlenceler.
                                                                                                         
• Discord Topluluk kuralları hakkında daha fazla bilgi almak istiyorsanız, https://discord.com/terms & https://discord.com/guidelines sitesini bir gözden geçirin.


• Klasik Discord sunucu kurallarına uymanız yeterli olacaktır.`)
  

     .setImage('https://cdn.discordapp.com/attachments/1054464779156197516/1054464823603249192/KURALLAR.gif')
     .setColor("RANDOM")
    .setFooter(`${message.guild.name}`)
  message.channel.send(kurallar);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"rules"
}