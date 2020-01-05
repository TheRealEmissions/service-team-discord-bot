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
   // if embed is true, store message as JSON string and process as JSON in code
   message: {
      type: String,
      required: true
   }
});
const logs = new head.modules.mongoose.Schema({
   log_type: {
      type: String,
      required: true
   },
   channel_id: {
      type: String,
      required: true
   }
});
const slow_mode = new head.modules.mongoose.Schema({
   channel_id: {
      type: String,
      required: true
   },
   time: {
      type: Number,
      required: true
   },
   expiry_timestamp: {
      type: Date,
      required: false,
      default: null
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
      logs: [logs],
      antispam_usermention_limit: {
         type: Number,
         required: false,
         default: 1
      },
      antispam_emojicount_limit: {
         type: Number,
         required: false,
         default: 1
      },
      // Number is in milliseconds
      antispam_duplicatemessages_timeframe: {
         type: Number,
         required: false,
         default: 1
      },
      slow_mode: [slow_mode],
      url_filter_content: {
         type: Array,
         required: false,
         default: []
      },
      url_filter_ignore_channels: {
         type: Array,
         required: false,
         default: []
      },
      url_filter_ignore_categories: {
         type: Array,
         required: false,
         default: []
      },
      url_filter_ignore_roles: {
         type: Array,
         required: false,
         default: []
      },
      freelancer_strike_notification_channel_id: {
         type: String,
         required: false,
         default: ""
      }
   })
);
