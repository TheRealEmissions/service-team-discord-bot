# CONFIGURING THE BOT

All bots come with some default settings accessible to all clients.
This readme explains those settings. The same concept applies to any additional config options.

Default config:

```js
class Config {
  constructor() {
    this.commands = new (require(`./Commands`))();
  }
  get defaultPrefix() {
    return {
      prefix: "!",
    };
  }

  get embedPaging() {
    return {
      leftArrow: "◀",
      rightArrow: "▶",
      fieldsPerEmbed: 10,
    };
  }

  get embedColours() {
    return {
      success: 0xf72e50,
      error: 0xdb4f4f,
      default: 0x00baee,
    };
  }
}
```

Let's take a closer look at:

```js
  get embedPaging() {
    return {
      leftArrow: "◀",
      rightArrow: "▶",
      fieldsPerEmbed: 10,
    };
  }
```

Starting with `get embedPaging() {`
You can **ignore** get, this is coding terms.
The term next to it, is the title, hence **embedPaging**. This lets you know what you are configuring.

As always, configure **inside** of the

```js
return {};
```

For example:

```js
  get embedPaging() {
    return {
      leftArrow: "◀",
      rightArrow: "▶",
      fieldsPerEmbed: 10,
    };
  }
```

For this example, leftArrow denotes the emoji for turning the page left, rightArrow denotes the emoji for turning the page right.
`fieldsPerEmbed` means how many fields should show on each page.
