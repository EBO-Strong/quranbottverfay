require("./server/express");
const { Client, Collection } = require("discord.js");
const client = new Client();
const chalk = require("chalk");
const fs = require("fs");
const mongo = require("./db/mongo");

client.commands = new Collection();





    client.on("ready", () => {
    function randomStatus() {
        let status = [`${client.guilds.cache.size} Servers`, `بسم الله الرحمن الرحيم`, `a!help`, `a!quran`]
        let rstatus = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[rstatus], {type: "PLAYING"});    
    }; setInterval(randomStatus, 3000)
})



const connectToMongoDB = async() => {
    await mongo().then(async mongosse => {
        try {
            console.log(chalk.green.bold("mongodb+srv://ALEX:hvgqXetXFfBbVzb6@cluster0.epc7j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"));
        } finally {
            mongosse.connection.close();
        }
    });
};

connectToMongoDB();

fs.readdir(__dirname + "/bot/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let event = require(__dirname + "/bot/events/" + file);
        let eventName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading event ") + chalk.magenta.bold(`"${eventName}"`)
        );
        client.on(eventName, event.bind(null, client));
    });
});

fs.readdir(__dirname + "/bot/commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(__dirname + "/bot/commands/" + file);
        let commandName = file.split(".")[0];
        console.log(
            chalk.blue.bold("Loading command ") + chalk.red.bold(`"${commandName}"`)
        );
        client.commands.set(commandName, props);
    });
});

client.on("guildCreate", guild => {
  let channel = client.channels.cache.get("833427164124282930");
  let embed = new MessageEmbed().setColor("#FC00FF")
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `✅ Join Server`)
  .setTimestamp()
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `<@${guild.ownerID}>`,true)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.on("guildDelete", guild => {
  let channel = client.channels.cache.get("833427164124282930");
  let embed = new MessageEmbed()
  .setColor("#FC00FF")
  .setTimestamp()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle( `❌ Left Server`)
  .addField("🔠 **Server Name**", `${guild.name}`)
  .addField("👑 **Server Owner**", `<@${guild.ownerID}>`,true)
  .addField("🆔 **Server Id**", `${guild.id}`)
  .addField("👥 **Member Count**", `${guild.memberCount}`)
  .setFooter(`${client.user.tag}`);
  channel.send(embed);
});

client.login(require("./config/bot").token).catch(err => console.log(chalk.red.bold(err)))
