const { MessageEmbed } = require("discord.js");
const chalk = require("chalk");

module.exports = {
  name: "mos7f",
  cooldown: 10,
  aliases: ["mohf", "مصحف", "قرءان", "المصحف"],

  run: async function(client, message) {
    var pages = require("../../db/list/mos7f");
    var page = 1;

    var embed = new MessageEmbed()
      .setColor("#2F3136")
      .setFooter(
        `القراآن الكريم | Page ${pages.length} in ${page} pages`,
        "https://cdn.discordapp.com/avatars/758813926472941578/66e9b6014102bba65bded8323a252d4a.png?size=1024"
      )
      .setImage(pages[page - 1]);
    message.channel.send({ embed: embed }).then(msg => {
      msg.react("⬅");
      msg.react("➡").then(() => {
        let backwardsFilter = (reaction, user) =>
          reaction.emoji.name === "⬅" && user.id === message.author.id;
        let forwardsFilter = (reaction, user) =>
          reaction.emoji.name === "➡" && user.id === message.author.id;
        let backwards = msg.createReactionCollector(backwardsFilter, {
          time: 0
        });
        let forwards = msg.createReactionCollector(forwardsFilter, { time: 0 });
        backwards.on("collect", r => {
          if (page === 1) return;
          page--;
          embed.setImage(pages[page - 1]);
          embed.setFooter(
            `القراآن الكريم | Page ${pages.length} in ${page} pages`,
            "https://cdn.discordapp.com/avatars/758813926472941578/66e9b6014102bba65bded8323a252d4a.png?size=1024"
          );
          msg.edit({ embed: embed });
          r.users.remove(message.author.id).catch(err => console.log(err));
        });
        forwards.on("collect", r => {
          if (page === pages.length) return;
          page++;
          embed.setImage(pages[page - 1]);
          embed.setFooter(
            `القراآن الكريم | Page ${pages.length} in ${page} pages`,
            "https://cdn.discordapp.com/avatars/758813926472941578/66e9b6014102bba65bded8323a252d4a.png?size=1024"
          );
          msg.edit({ embed: embed });
          r.users.remove(message.author.id).catch(err => console.log(err));
        });
      });
    });
  }
};
