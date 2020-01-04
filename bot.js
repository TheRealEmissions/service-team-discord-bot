module.exports = head => {
   const client = new head.modules.Discord.Client({
      disableEveryone: true,
      disabledEvents: ["TYPING_START"]
   });

   head.modules.fs.readdir(`./events/`, (err, files) => {
      if (err) return console.error(err);
      for (const file of files) {
         if (!file.endsWith(".js")) continue;
         let event = require(`./events/${file}`);
         let eventName = file.split(".")[0];
         client.on(eventName, event.bind(null, head, client));
         delete require.cache[require.resolve(`./events/${file}`)];
         head.log(`Loaded event ${file}`);
      }
   });

   const { CommandHandler } = head.modules.djs_commands;
   let cmdHandler = new CommandHandler({
      folder: __dirname + `/commands/`,
      prefix: [""]
   });

   client.commandHandler = cmdHandler;
   client.login(head.storage.auth.token);
};
