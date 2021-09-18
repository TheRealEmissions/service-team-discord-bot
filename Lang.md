# CONFIGURING LANG FILES

An example of a lang file:

```js
class Lang {
  constructor(App) {
    this.App = App;
  }

  setLogChannel_Successful({ channelName, channelId }) {
    return {
      title: `Updated Log Channel:`,
      fields: [
        {
          name: `Channel:`,
          value: `<#${channel.id}>`,
        },
      ],
      timestamp: true,
    };
  }
}
```

Likewise, ignore everything but the blue functions, where it says:

```js
setLogChannel_Successful() {}
```

This is a function. This is the embed.

The name of the function relates to where the embed is sent.
For example, `setLogChannel_Successful` relates to successfully setting the log channel of a guild.

You should configure **inside** of the

```js
return {};
```

You can use placeholders effectively in the embed. However, you **MUST** encapsulate your strings (i.e. text) inside of \` instead of "
You place a placeholder into a string by using ${}. If it turns pink, you've done it right.

For example:

```js
//          \/ PLACEHOLDER
randomEmbed(userName) {
  return {
    //        \/ embedding placeholder into the title
    title: `${userName} username.`
  }
}
```

An example, _full_ embed with everything added:
Keep in mind, **embed color** is defined by default in `src/data/Config.js` but you **can** override this by declaring the color in the embed.

**ALL** options in an embed are **OPTIONAL**. None are required. You can have `return {}` and it'll send an empty embed.

```js
return {
  // hex value
  color: 0xffffff,
  // string
  title: "Title here",
  // hyperlinks title
  url: "URL",
  // author config (able to put image on title basically)
  // you can use title + author together
  author: {
    // title
    name: "author name",
    // image URL for the title
    icon_url: "URL",
    // hyperlink title
    url: "URL",
  },
  // string
  description: "description",
  // shown in top right of embed
  thumbnail: "URL",
  // mini embeds inside of the embed basically (just with less accessibility)
  // this is an array (remember those lists?)
  // it contains OBJECTS, denoted by {}
  // this is the box with terms
  // this is used to denote the field features
  // name and value are BOTH REQUIRED
  // however, inline is default false
  fields: [
    {
      name: "This is a field title",
      value: "And this is the field description",
      inline: true,
    },
  ],
  // shown in bottom of embed
  image: "URL",
  // put timestamp on the embed, also supports dates (read into JS dates)
  timestamp: true,
  // this is shown on the very bottom of the embed, again using an OBJECT to store features
  footer: {
    // text to show in footer
    text: "text here",
    // image to show on left of footer text, OPTIONAL
    icon_url: "URL",
  },
};
```
