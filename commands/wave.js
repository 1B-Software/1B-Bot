const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("wave")
    .setDescription("Says hello to your lonely-ass :)"),
    async execute(interaction) {
        await interaction.reply(`Hello! ${interaction.user.username}`);
    },
};