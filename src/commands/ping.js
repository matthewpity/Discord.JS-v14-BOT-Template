const bot = require("../bot");

module.exports = {
  name: "ping",
  description: "Just a template command",
  disabled: false,
  options: [],
  /**
  *
  * 
  * @param { bot } client
  * @param { Interaction } interaction
  */
  run: async (client, interaction) => {
    await interaction.reply({ 
      content: "Pong!", 
      ephemeral: true 
    });
  }
};
