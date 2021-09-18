# CONFIGURING COMMANDS

Configuring commands is pretty easy. All commands follow a similar format that you'll become acustomed to.

Let's take a look at an example file:

```js
class Config {
  get config_set_supportteam_ROLE() {
    return {
      aliases: [],
      description: "",
      deleteCommand: true,
      permission: {
        require: false,
        permission: "NO PERMISSION REQUIRED (checks Administrator on Discord)",
      },
    };
  }
}
```

As always, only look at where it states the getters, or `get NAME() {}` and only configure **inside** the `return {}`

```js
  get config_set_supportteam_ROLE()
```

equates to the command: `config set supportteam {ROLE}`

- `aliases: []`
  Likewise with configuring the Permissions, this is an Array, or basically a list.
  You **should keep all commands the same length to prevent errors**. For example, don't set "config set supportteam {ROLE}" to "setsupportteam {ROLE}" - it _will_ cause errors due to the use of finding arguments.

Example:

```js
  aliases: ["cfg s str {ROLE}"],
```

- `description: ""`
  This is the description of the command, often used in the help command. You should encapsulate this in `"` as it is a string.

Example:

```js
description: "Useful command";
```

- `deleteCommand: true/false`
  This is used to specify whether the user's original command is deleted or not.
  `true` = deleted
  `false` = not deleted

- permissions
  This area is used to specify the command permission. This links with `src/data/Permissions.js`
  The area:

```js
      permission: {
        require: false,
        permission: "NO PERMISSION REQUIRED (checks Administrator on Discord)",
      },
```

`{}` is a special way of creating a box and putting terms inside of it, keeping it clean.

`require: false` disables permission requirement for the command.
`require: true` enables permission require for the command, and requires the permission where it says `permission: ""`

`permission: "PERMISSION HERE"` specifies the permission required for the command, if `require` is true.
