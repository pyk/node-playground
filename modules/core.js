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
