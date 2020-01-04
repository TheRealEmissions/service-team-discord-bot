const modules = require(`./modules`);
const functions = require(`./functions`);
const methods = require(`./methods`);
const storage = require(`./storage`);
const { ShardingManager } = modules.Discord;
const head = new ShardingManager(`./bot.js`, {
   token: "abc"
});

head.modules = modules;
head.functions = functions;
head.methods = methods;
head.storage = storage;

module.exports = head;
