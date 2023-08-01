require("dotenv").config();
const { Client: DiscordClient, IntentsBitField } = require("discord.js");
const { Client: UndiciClient } = require("undici");

const client = new DiscordClient({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (message.content === "hello") {
    message.reply("Hi cabeça");
  }
});

client.on("ready", (c) => {
  console.log(`${c.user.tag}is ready`);
});
client.login("MTEyMjkyMjI2MzEzMDQxOTI0MA.GHcQrC.WOa5IrSiyaClEdz_wQY6BEBR4LwWqdJCaLfPuw
");