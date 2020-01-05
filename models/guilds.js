const head = require(`../index`);
module.exports = head.modules.mongoose.model(
   `guilds`,
   new head.modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      premium_points: {
         type: Number,
         required: false,
         default: 0
      }
   })
);
