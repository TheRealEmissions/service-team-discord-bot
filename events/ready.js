module.exports = (head, client) => {
   head.log(`Client is ready:`);
   head.post(`User ID: ${client.user.id}`);
   head.post(`Username: ${client.user.username}`);
   head.post(`Discriminator: ${client.user.discriminator}`);
};
