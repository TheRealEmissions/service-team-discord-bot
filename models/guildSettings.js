const head = require(`../index`);
const welcome = new head.modules.mongoose.Schema({
   index: {
      type: Number,
      required: true
   },
   type: {
      type: String,
      required: true
   },
   embed: {
      type: Boolean,
      required: false,
      default: false
   },
   message: {
      type: String,
      required: true
   }
});
module.exports = head.modules.mongoose.model(
   `guildSettings`,
   new head.modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      bot_prefix: {
         type: Array,
         required: false,
         default: ["-"]
      },
      welcome_system: [welcome],
      freelance_roles: {
         type: Array,
         required: true
      },
      payment_method: {
         type: String,
         required: true
      }
   })
);
