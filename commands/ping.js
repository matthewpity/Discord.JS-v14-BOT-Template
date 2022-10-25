module.exports = {
  name: "ping",
  description: "Template command",
  disabled: false,
  options: [],
  run: async (client, interaction) => {
    await interaction.followUp({ content: "Pong!", ephemeral: true });
  },
};
