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


## Modules
There are 3 different types of modules:

1. **Core Modules**. The core modules are defined within Node.js's
   source and are located in the lib/ folder. To load the core modules
   use the following syntax `require($ID)` where `$ID` is like 'http'
   or 'fs'.
2. **File Modules**. The file modules is a module that created by user.
   The module can be loaded as `reuire('filename.js')`. Only exported
   definition are available inside the caller.
3. **Folders as Modules**. The folder should contains file named `index.js`.
   The module can be loaded as `require('foldername')` where `foldername/index.js`
   is expected to exists.

### Core Modules Example

```javascript
const fs = require('fs');
const path = require('path');
const util = require('util');

// Promisify callback-based function
const readFile = util.promisify(fs.readFile);

const main = async () => {
  const filePath = path.join(__dirname, 'data.txt');
  // TODO: async/await node.js 9
  const data = await readFile(filePath, { encoding: 'utf8', flag: 'r' });
  console.log(data);
};

main();
```

### File Modules Example
We create new file called `math.js` with the following content:

```javascript
const add = (a, b) => a + b;
const sub = (a, b) => a - b;

// Exports the functions
exports.add = add;
exports.sub = sub;
```

Notice these two lines:

```javascript
exports.add = add;
exports.sub = sub;
```

These lines are required in order to use `add` and `sub` functions
outside the `math.js`.

Then we add new `math.js` consumer file named `main.js` with the
following content:

```javascript
const math = require('./math.js');

console.log(math.add(1, 2));
console.log(math.sub(4, 8));
```

Run the `main.js`, you will get the following output:

```
3
-4
```

### Folder Modules Example
We create new file called `some-lib/index.js` with the same content as `math.js`.

Update the `main.js` to this:
```javascript
// const math = require('./math.js');
const math = require('./some-lib');

console.log(math.add(1, 2));
console.log(math.sub(4, 8));
```

you should get the same output.

