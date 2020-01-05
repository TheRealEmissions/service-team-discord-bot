const head = require(`../index`);
const history = new head.modules.mongoose.Schema({
   timestamp: {
      type: Date,
      required: false,
      default: new Date()
   },
   /*
Types:
ACTIVATE
EXPIRE
CANCEL
*/
   type: {
      type: String,
      required: true
   },
   transaction_id: {
      type: String,
      required: true
   }
});
module.exports = head.modules.mongoose.model(
   `guildPremiumLicenses`,
   new head.modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      active: {
         type: Boolean,
         required: false,
         default: false
      },
      activated_timestamp: {
         type: Date,
         required: true
      },
      expiry_timestamp: {
         type: Date,
         required: true
      },
      history: [history]
   })
);
