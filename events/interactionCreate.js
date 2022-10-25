const config = require("../config");

module.exports = async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
        await interaction.deferReply({ ephemeral: true }).catch(() => { });

        const command = require('../commands/' + interaction.commandName);

        if (!command)
            return await interaction.followUp({ content: "An error has occured.", ephemeral: true });
        if (command.disabled && config.Admins && !config.Admins.join("-").includes(interaction.member.id))
            return await interaction.followUp({ content: "This command is disabled for now.", ephemeral: true });

        await command.run(client, interaction);
    }
}