const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");
const PropertyService = require("../services/property-service");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("property")
    .setDescription("Returns the HOT property.")
    .addStringOption((option) =>
      option
        .setName("token-id")
        .setDescription("The token id for the property.")
        .setRequired(true)
    ),
  async execute(interaction) {
    var tokenId = interaction.options.getString("token-id", true);
    const propertyService = new PropertyService();
    const property = propertyService.get(tokenId);
    const propertyEmbed = new MessageEmbed()
      .setTitle(property.name)
      .setDescription(property.description)
      .setImage(property.imageUrl);
    await interaction.channel.send({ embeds: [propertyEmbed] });
  },
};
