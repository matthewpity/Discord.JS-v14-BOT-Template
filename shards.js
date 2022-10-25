const { ShardingManager } = require('discord.js');
const config = require('./config.js')
const logger = require("./logger");

const logger = new logger(path.join(__dirname, "..", "logs.log"));

let manager = new ShardingManager('./index.js', {
    token: config.Token,
    totalShards: 'auto',
});

manager.on('shardCreate', shard => {
    logger.log(`Launched shard with ID ${shard.id}`);
});

manager.spawn();