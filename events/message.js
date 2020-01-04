module.exports = (head, client, message) => {
   if (message.channel.type !== "text") return;
   if (message.author.id == client.user.id) return;
   if (message.author.bot) return;
   if (message.content.toStirng().startsWith("-")) {
      let args = message.content.split(" ");
      let command = args[0].replace("-", "");
      let cmd = client.commandHandler.getCommand(command);
      if (!cmd) return;
      try {
         cmd.run(head, client, message, args);
      } catch (e) {
         head.error(e);
      }
   }
};
