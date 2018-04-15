# Node.js Playground
This is my Node.js playground.

Run the following commands to run locally:

    git clone https://github.com/pyk/node-playground.git
    cd node-playground
    npm install

There are a plugins for VS Code that useful:

* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
  This plugin will helps you to catch a typo/error without running the code.


## Const
In this section we will talk about `const` because it is commonly
used in a Node.js codebase.

### What is `const`?

`const` is a keyword to represent a constant value. A constant value
is a value that never change, if the value is change then it raise an
error.

### Example

```javascript
// const.js
const number = 10;

number = 2;
```

Run:

    node const.js

It will throw an error:

    TypeError: Assignment to constant variable.
        at Object.<anonymous> (/home/pyk/go/src/github.com/pyk/node-playground/const.js:3:8)
        at Module._compile (internal/modules/cjs/loader.js:654:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:665:10)
        at Module.load (internal/modules/cjs/loader.js:566:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:506:12)
        at Function.Module._load (internal/modules/cjs/loader.js:498:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:695:10)
        at startup (internal/bootstrap/node.js:201:19)
