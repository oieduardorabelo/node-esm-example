// código extraído da documentação do @std/esm

// entry.js
require = require("@std/esm")(module);
module.exports = require("./main.mjs").default;
