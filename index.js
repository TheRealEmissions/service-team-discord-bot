const modules = require(`./modules`);
const functions = require(`./functions`);
const methods = require(`./methods`);
const storage = require(`./storage`);
const head = {};
head.log = m => {
   console.log(`\x1b[33m%s\x1b[0m`, `[LOG] ${m}`);
};
head.post = m => {
   console.log(m);
};
head.error = m => {
   console.error(`\x1b[31m%s\x1b[0m`, `[ERROR] ${m}`);
};
/**
 * When Discord.js is downloaded, edit Util.fetchRecommendedShards and change 1000 to 20
 */

modules.mongoose.connect(storage.auth.mongoUrl, {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
modules.mongoose.connection.on("error", head.error);
modules.mongoose.connection.once("open", () => {
   console.log(`[LOG] Connected to the database.`);
});

head.modules = modules;
head.functions = functions;
head.methods = methods;
head.storage = storage;

module.exports = head;

require(`./bot`)(head);
