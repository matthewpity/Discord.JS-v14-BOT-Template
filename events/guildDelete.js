module.exports = async (client, guild) => {
    await client.shard.fetchClientValues('guilds.cache.size').then(results => client.log(`Left a guild: ${guild.name} (Total guilds: ${results.reduce((prev, val) => prev + val, 0)})`)).catch();
}