module.exports = class {
   constructor() {
      this.name = "test";
      this.alias = [];
      this.usage = "";
      this.ids = ["201095756784992256"];
   }

   async run(head, client, message, args) {
      if (!this.ids.includes(message.author.id)) return;
      head.log(`Successful log.`);
      message.channel.send(`Success`);
   }
};
