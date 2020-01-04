const modules = require(`./modules`);
const functions = require(`./functions`);
const methods = require(`./methods`);
const storage = require(`./storage`);
const head = {};
/**
 * @param {string} m - Message to log
 */
head.log = m => {
   console.log(`\x1b[33m%s\x1b[0m`, `[LOG] ${m}`);
};
/**
 * @param {string} m - Message to log
 * @param {string} [c=null] - Colour to set m to
 */
head.post = (m, c = null) => {
   switch (c) {
      case "black":
         console.log(`\x1b[30m%s\x1b[0m`, m);
         break;
      case "red":
         console.log(`\x1b[31m%s\x1b[0m`, m);
         break;
      case "green":
         console.log(`\x1b[32m%s\x1b[0m`, m);
         break;
      case "yellow":
         console.log(`\x1b[33m%s\x1b[0m`, m);
         break;
      case "blue":
         console.log(`\x1b[34m%s\x1b[0m`, m);
         break;
      case "magenta":
         console.log(`\x1b[35m%s\x1b[0m`, m);
         break;
      case "cyan":
         console.log(`\x1b[36m%s\x1b[0m`, m);
         break;
      case "white":
         console.log(`\x1b[37m%s\x1b[0m`, m);
         break;
      default:
         console.log(m);
         break;
   }
};
/**
 * @param {string} m - Message to log in error
 */
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
