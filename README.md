> **Stuff you need to know:**

All events are bound to the first two functions:
`head` and `client`
Regardless of the events' functions, these two variables need to be called first.
For example, for the `message` event that passes through the `message` variable:
```js
module.exports = (head, client, message) => {
    // code
}
```

`head` is the bootable file, this file will eventually be used for handling sharding.
This file contains the following variables bound to its object that is exported:
```js
head.log = m => {
   console.log(`\x1b[33m%s\x1b[0m`, `[LOG] ${m}`);
};
head.post = m => {
   console.log(m);
};
head.error = m => {
   console.error(`\x1b[31m%s\x1b[0m`, `[ERROR] ${m}`);
};
head.modules = modules;
head.functions = functions;
head.methods = methods;
head.storage = storage;
```

`client` is the Discord.Client() instance. Nothing is bound to `client` manually except from:
```js
client.commandHandler = cmdHandler;
```
This is the bot's command handler.

> **Available HEAD functions:**

```js
head.log(message)
```
Logs a message in console with the prefix `[LOG]` in yellow text.

```js
head.post(message)
```
Logs a message in console with no prefix and no colour.

```js
head.error(message)
```
Logs an error in console with the prefix `[ERROR]` in red text.

> Available HEAD objects:

```js
head.modules.<module>
```
Grab a package from the imported packages. **Available packages:**
- Discord *(discordjs/discord.js)*
- djs_commands *(djs-commands)*
- mongoose *(mongoose)*
- fs *(fs)*

```js
head.functions.<function>
```
Grab a function from the required functions in the `functions.js` file.

```js
head.methods.<method>
```
Grab a method from the required methods in the `methods.js` file. These imports will need to be initialised with `new` as the files in */methods/* are classes.

```js
head.storage.<file>
```
Grab a storage file from the required files in the `storage.js` file. All information in these files are static.

```