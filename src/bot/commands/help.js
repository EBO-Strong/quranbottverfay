const { MessageEmbed } = require("discord.js");
const quickdb = require("quick.db");

module.exports = {
  name: "help",
  cooldown: 7,
  aliases: ["مساعده"],
  run: async (client, message) => {
    var prefix = quickdb.fetch(`Prefix_${message.guild.id}`);
    if (prefix == null)
      quickdb.set(
        `Prefix_${message.guild.id}`,
        require("../../config/bot").prefix
      );
    message.channel.send(
      new MessageEmbed()
        .setAuthor(
          "General Commands🕌",
          "https://athkarapp.com/images/athkarLogo.png"
        )
        .setThumbnail(client.user.avatarURL({ dynaimc: true }))
        .setColor(0x2f3136)
        .setFooter(
          client.user.username,
          client.user.avatarURL({ dynaimc: true })
        ).setDescription(`
**Info**
> 🕌 \`${prefix}help\`
> 🕌 \`${prefix}ping\`

**Azkar**
> 🕌 \`${prefix}set-azkar-channel\`
> 🕌 \`${prefix}set-azkar-embed\`
> 🕌 \`${prefix}set-azkar-toggle\`
> 🕌 \`${prefix}morning\`
> 🕌 \`${prefix}evening\`
> 🕌 \`${prefix}mos7f\`

**Quran**
> 🕌 \`${prefix}set-quran-channel\`
> 🕌 \`${prefix}set-quran-toggle\`
> 🕌 \`${prefix}quran\`

**Perfix bot in the server**: \`${prefix}\`

**Links:**
[ InviteBot ]() - [ ServerSupport ]()




// .addFields(
      //   { name: `> ${prefix}help`, value: "**`للحصول على قاءمة السماعده`**", inline: false },
      //   { name: `> ${prefix}support`, value: "**`للحصول على روابط مساعدة البوت`**", inline: false },
      //   { name: `> ${prefix}ping`, value: "**`للحصول على نتيجه ببينج البوت`**", inline: false },
      //   { name: `_ _`, value: "_ _", inline: false },
      //   { name: `> ${prefix}set-azkar-channel`, value: "**`لتحديد روم نشر الأذكار`**", inline: false },
      //   { name: `> ${prefix}set-azkar-embed`, value: "**`للتغير ما بين نظام نشر الأذكار من رساءل عاديه ل رساءل ايمبد`**", inline: false },
      //   { name: `> ${prefix}set-azkar-toggle`, value: "**`لايقاف و تشغيل نظام أرسال الأذكار`**", inline: false },
      //   { name: `> ${prefix}morning`, value: "**`للحصول على اذكار الصباح`**", inline: false },
      //   { name: `> ${prefix}evening`, value: "**`للحصول على اذكار المساء`**", inline: false },
      //   { name: `> ${prefix}mos7f`, value: "**`للحصول على صفحات المصحف الكريم`**", inline: false },
      //   { name: `_ _`, value: "_ _", inline: false },
      //   { name: `> ${prefix}set-quran-channel`, value: "**`لتحديد روم اذاعة القرءان الكريم`**", inline: false },
      //   { name: `> ${prefix}set-quran-toggle`, value: "**`لاقاف و تشغيل نظام أذاعة القرءان الكريم`**", inline: false },
      //   { name: `> ${prefix}quran`, value: "**`لتشغيل صور معينه في القرءان الكريم`**", inline: false },
      // )
    );
  }
};
