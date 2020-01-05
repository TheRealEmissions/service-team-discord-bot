const head = require(`../index`);
module.exports = head.modules.mongoose.model(
   `guildToggles`,
   new head.modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      global_commissions: {
         type: Boolean,
         required: false,
         default: true
      },
      blacklist_blocked_freelancers: {
         type: Boolean,
         required: false,
         default: true
      },
      ban_blacklisted_users: {
         type: Boolean,
         required: false,
         default: true
      },
      welcome_system: {
         type: Boolean,
         required: false,
         default: false
      },
      suggestion_system: {
         type: Boolean,
         required: false,
         default: false
      },
      logging: {
         type: Boolean,
         required: false,
         default: false
      },
      log_global_blacklists: {
         type: Boolean,
         required: false,
         default: false
      },
      log_bans: {
         type: Boolean,
         required: false,
         default: false
      },
      log_kicks: {
         type: Boolean,
         required: false,
         default: false
      },
      log_auto_moderation: {
         type: Boolean,
         required: false,
         default: false
      },
      stattrack: {
         type: Boolean,
         required: false,
         default: false
      },
      global_announcements: {
         type: Boolean,
         required: false,
         default: false
      },
      freelancer_strikes: {
         type: Boolean,
         required: false,
         default: false
      },
      freelancer_role_sync: {
         type: Boolean,
         required: false,
         default: false
      },
      transcripts_online: {
         type: Boolean,
         required: false,
         default: true
      }
   })
);
