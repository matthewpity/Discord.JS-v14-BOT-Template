const config = require("../config");
const { Client, Interaction } = require("discord.js");

/**
*
* 
* @param { Client } client
* @param { Interaction } interaction
*/
module.exports = async (client, interaction) => {
    //######################################
    // Slash Commands
    //######################################
    if (interaction.isChatInputCommand()) {
        const command = require('../commands/' + interaction.commandName);

        if (!command) {
            return await interaction.reply({ 
                content: "An error has occured.",
                ephemeral: true
            });
        }
        if (command.disabled && (config.Authors && !config.Authors.join("-").includes(interaction.user.id))) {
            return await interaction.reply({ 
                content: "This command is either disabled or available only for Repute admins.", 
                ephemeral: true });
        }

        await command.run(client, interaction);
    }
    //######################################
    // Buttons
    //######################################
    else if (interaction.isButton()) {
        // ...
    }
}