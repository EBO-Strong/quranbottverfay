const { MessageEmbed } = require("discord.js");
const azkarM = require("../../db/list/morningAzkar");

module.exports = {
  name: "morning",
  cooldown: 6,
  aliases: ["azkar-morning", "اذكار الصباح", "الصباح"],
  run: async (client, message) => {
    var result = azkarM[Math.floor(Math.random() * azkarM.length)];
    message.channel.send(
      new MessageEmbed()
        .setThumbnail("https://athkarapp.com/images/athkarLogo.png")
        .setAuthor(
          "أذكار الصباح",
          "https://cdn.discordapp.com/avatars/758813926472941578/66e9b6014102bba65bded8323a252d4a.png?size=1024"
        )
        .setTitle("**المصدر**")
        .setURL(
          "https://cdn.discordapp.com/avatars/758813926472941578/66e9b6014102bba65bded8323a252d4a.png?size=1024"
        )
        .setColor(0x2f3136)
        .setDescription("**" + result + "**")
        .setFooter(
          client.user.username,
          client.user.avatarURL({ dynaimc: true })
        )
    );
  }
};
