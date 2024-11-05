const bot = require("./bot");

const client = new bot({ intents: 33411 }); // use intent calculator for this

client.build();

module.exports = client;