# CONFIGURING PERMISSIONS

In `src/data/Permissions.js` you will find:

```js
  get users() {
    return {
      "USER ID": ["PERMISSION 1", "PERMISSION 2"],
    };
  }

  get roles() {
    return {
      "ROLE ID": ["PERMISSION 1", "PERMISSION 2"],
    };
  }
```

`get users()` -> all user permissions
`get roles()` -> all role permissions (users inherit permissions from the roles they have)

Configure **inside** of the

```js
return {};
```

You will find permissions in `src/data/Commands.js`. If there any external permissions, you will be told.

**You can use `*` to denote access to ALL permissions**

`[]` is an ARRAY - it is basically a list
`[1, 2, 3]` is basically:

- 1
- 2
- 3
  List separated by commas.
  `" "` is a "string". Arrays can contain STRINGS.
  For example:
  `["THIS IS A STRING", "THIS IS ANOTHER STRING"]`
  This is how permissions work. You add each permission to the list.

Example customisation:

```js
class Permissions {
  get users() {
    return {
      "201095756784992256": ["*"],
      "982948209302930922": [
        "USE_COMMAND_EXAMPLE",
        "WHATEVER_THIS_PERMISSION_IS",
      ],
    };
  }

  get roles() {
    return {
      "294829324829482983": ["USE_COMMAND_EXECUTE"],
    };
  }
}

module.exports = Permissions;
```
