const { Client } = require("discord.js");
const fs = require("fs");
const path = require("path");
const logger = require("./logger");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const config = require("./config");
const log = new logger(path.join(__dirname, "logs.log"));
const rest = new REST({ version: '10' }).setToken(config.Token);

class bot extends Client {
  constructor(props) {
    super(props);

    this.loadEvents();

    const arrayOfSlashCommands = [];

    let commandsDir = path.join(__dirname, "/commands");

    fs.readdir(commandsDir, (err, files) => {
      if (err) throw err;
      files.forEach(async (file) => {
        let command = require(commandsDir + "/" + file);
        let commandData = {
          name: command.name,
          description: command.description,
          options: command.options,
          dm_permission: command.dmEnabled,
          type: command.type,
        };
        arrayOfSlashCommands.push(commandData);
      });
    });

    this.on("ready", async () => {
      await rest.put(Routes.applicationCommands(config.ClientID), { body: arrayOfSlashCommands });
      this.log("Successfully logged in as " + this.user.username);
    });
  }

  loadEvents() {
    const eventsDir = path.join(__dirname, "/events");
    fs.readdir(eventsDir, (err, files) => {
      if (err) this.log(err);
      else
        files.forEach((file) => {
          const event = require(eventsDir + "/" + file);
          this.on(file.split(".")[0], event.bind(null, this));
        });
    });
  }

  log(string) {
    log.log(string);
  }

  build() {
    this.login(config.Token).catch(console.error);
  }
}

module.exports = bot;