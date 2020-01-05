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
const ticket_categories = new head.modules.mongoose.Schema({
   stage: {
      type: String,
      required: true
   },
   category_id: {
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
const stattrack = new head.modules.mongoose.Schema({
   channel_id: {
      type: String,
      required: true
   },
   /*
   Free tier types:
   - Member Count
   - Online Count
   - Offline Count
   - Away Count
   - Streaming Count
   - Open Tickets
   - Guild Age
   - Clock
   - Commission Rate
   - Open for commissions (boolean)
   Premium tier types:
   - Amount of money processed through team
   - Average freelancer rating
   - Average response time in tickets
   - Amount of tickets completed
   */
   type: {
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
      /*
      Methods of payment:
      ME_LINK - uses PayPal.me link
      BOT_INVOICE - uses bots invoice system
      CUSTOM_INVOICE - uses custom invoice defined by bot owner (not available on free tier)
      */
      payment_method: {
         type: String,
         required: true
      },
      /*
      Type of objects:

      > ME_LINK

      link: {
         type: String
      }

      > BOT_INVOICE
      (in case invoice system doesn't work)
      link: {
         type: String
      }

      > CUSTOM_INVOICE
      to be added
      */
      paypal_info: {
         type: Object,
         required: true
      },
      ticket_categories: [ticket_categories],
      suggestion_channel_id: {
         type: String,
         required: false,
         default: ""
      },
      suggestion_approved_channel_id: {
         type: String,
         required: false,
         default: ""
      },
      suggestion_denied_channel_id: {
         type: String,
         required: false,
         default: ""
      },
      suggestion_implemented_channel_id: {
         type: String,
         required: false,
         default: ""
      },
      suggestion_message: {
         type: String,
         required: true
      },
      suggestion_approved_message: {
         type: String,
         required: true
      },
      suggestion_denied_message: {
         type: String,
         required: true
      },
      suggestion_implemented_message: {
         type: String,
         required: true
      },
      suggestion_upvote_emoji: {
         type: String,
         required: true
      },
      suggestion_downvote_emoji: {
         type: String,
         required: true
      },
      logs: [logs],
      stattrack: [stattrack],
      freelancer_rolesync_ignored_roles: {
         type: Array,
         required: false,
         default: []
      }
   })
);
