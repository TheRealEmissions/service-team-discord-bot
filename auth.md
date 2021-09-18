# CONFIGURING AUTH OPTIONS

This file is important. It is used to connect the bot to other services, such as Discord or MongoDB.

It is vitally important you fill this section out correctly otherwise the bot may not work.

Likewise with the `Config.md` explanation, configuring the `src/data/auth.js` file is not much harder.

Let's take a look:

```js
/**
 * @class
 */
class auth {
  constructor() {}

  /**
   * @returns {Boolean}
   */
  get DEBUG() {
    return !!process.env.DEBUG || true;
  }

  /**
   * @returns {Boolean}
   */
  get DEV_MODE() {
    return !!process.env.DEV_MODE || true;
  }

  /**
   * @returns {String}
   */
  get CLIENT_TOKEN() {
    return process.env.CLIENT_TOKEN || "TOKEN HERE";
  }

  /**
   * @returns {String}
   */
  get DB_URI() {
    return `URI`;
  }
}

module.exports = auth;
```

You should only care about the getters, or where it says `get NAME() {}`
This is where you configure.

- Debug mode:
  Denoted by:

```js
  get DEBUG() {
    return !!process.env.DEBUG || true;
  }
```

You should configure after the `||`. The term before it is there for public bots who use "process environment files" to keep auth information safe.

Enabling debug mode simply outputs more to the console, allowing you to see what's going on. For large-scale production, it is advised to keep this disabled by using `false` as logging can take a lot of storage.

- Dev mode:
  Denoted by:

```js
  get DEV_MODE() {
    return !!process.env.DEV_MODE || true;
  }
```

Dev mode is for running on Windows. Otherwise you should set this to `false`.

- Client Token:
  Denoted by:

```js
  get CLIENT_TOKEN() {
    return process.env.CLIENT_TOKEN || "TOKEN HERE";
  }
```

You should configure after the `||`. You should put the **BOT TOKEN** of your Discord Bot here, where it states `TOKEN HERE`. Keep the quotes.

- DB URI:
  Denoted by:

```js
  get DB_URI() {
    return `URI`;
  }
```

You should paste your MongoDB node.js URI here.
You can create a MongoDB database for free here:
https://www.mongodb.com/cloud/atlas

To get your MongoDB URI from here:

1. Go to "Connect"
2. Go to "Connect your application"
3. Select Version 2.2.1.2 or later
4. Copy the URI it shows below, and replace `<username>` with your MongoDB username, `<password>` with your MongoDB password, `<dbname>` with the name of the "Collection" (for example: MyFirstBot) -- **THIS IS A URL, SO NO SPACES**

After this, you have completed the configuration of your auth file.
