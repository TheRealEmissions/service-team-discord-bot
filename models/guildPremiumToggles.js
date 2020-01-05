const head = require(`../index`);
module.exports = head.modules.mongoose.model(
   `guildPremiumToggles`,
   new head.modules.mongoose.Schema({
      guild_id: {
         type: String,
         required: true
      },
      nsfw_image_filter: {
         type: Boolean,
         required: false,
         default: false
      },
      premium_logging: {
         type: Boolean,
         required: false,
         default: false
      },
      log_member_joining_guild: {
         type: Boolean,
         required: false,
         default: false
      },
      log_member_leaving_guild: {
         type: Boolean,
         required: false,
         default: false
      },
      log_member_update_profile: {
         type: Boolean,
         required: false,
         default: false
      },
      log_member_username_change: {
         type: Boolean,
         required: false,
         default: false
      },
      log_member_avatar_change: {
         type: Boolean,
         required: false,
         default: false
      },
      log_join_vc: {
         type: Boolean,
         required: false,
         default: false
      },
      log_leave_vc: {
         type: Boolean,
         required: false,
         default: false
      },
      log_change_vc: {
         type: Boolean,
         required: false,
         default: false
      },
      log_message_delete: {
         type: Boolean,
         required: false,
         default: false
      },
      log_mass_message_delete: {
         type: Boolean,
         required: false,
         default: false
      },
      log_message_edit: {
         type: Boolean,
         required: false,
         default: false
      },
      log_role_update: {
         type: Boolean,
         required: false,
         default: false
      },
      log_role_delete: {
         type: Boolean,
         required: false,
         default: false
      },
      log_channel_create: {
         type: Boolean,
         required: false,
         default: false
      },
      log_channel_delete: {
         type: Boolean,
         required: false,
         default: false
      },
      log_channel_update: {
         type: Boolean,
         required: false,
         default: false
      },
      anti_spam: {
         type: Boolean,
         required: false,
         default: false
      },
      slow_mode: {
         type: Boolean,
         required: false,
         default: false
      },
      url_filter: {
         type: Boolean,
         required: false,
         default: false
      },
      freelancer_strike_notifications: {
         type: Boolean,
         required: false,
         default: false
      }
   })
);
