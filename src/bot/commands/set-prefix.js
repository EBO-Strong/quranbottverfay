const { MessageEmbed } = require("discord.js");
const quickdb = require("quick.db");

module.exports = {
  name: "set-prefix",
  cooldown: 7,
  aliases: ["prefix"],
  run: async (client, message) => {
    var args = message.content
      .split(" ")
      .slice(1)
      .join(" ");
    if (!args) {
      quickdb.set(`Prefix_${message.guild.id}`, require('../../config/bot').prefix);
      message.channel.send(
        "Successfully reseted a prefix in server"
      );
    } else if (args) {
      quickdb.set(`Prefix_${message.guild.id}`, args);
      message.channel.send(
        `Chaneged a prefix to | **${args}**`
      );
    }
  }
};
