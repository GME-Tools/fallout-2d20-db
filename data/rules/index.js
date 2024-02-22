const core = require("./core");
const pa = require("./pa");
const chance = require("./chance");

module.exports = {
  content: [...core],
  pa: pa,
  chance: chance,
};
