// código extraído da documentação do esm
// https://github.com/standard-things/esm#readme

// entry.js
require = require("esm")(module);
module.exports = require("./main.js").default;
