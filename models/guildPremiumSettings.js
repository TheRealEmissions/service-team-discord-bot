const head = require(`../index`);
const wizard_messages = new head.modules.mongoose.Schema({
   m_id: {
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
   `guildPremiumSettings`,
   new modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      rf_wizard_messages: [wizard_messages],
      sf_wizard_messages: [wizard_messages],
      q_wizard_messages: [wizard_messages],
      payment_method: {
         type: String,
         required: false,
         default: "ME_LINK"
      }
   })
);
