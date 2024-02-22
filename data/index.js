const rules = require("./rules");
const sources = require("./sources");
const origins = require("./origins");
const traits = require("./traits");
const perks = require("./perks");
const npc = require("./npc");

module.exports = () => ({
  ...rules,
  sources: sources,
  origins: origins,
  traits: traits,
  perks: perks,
  npc: npc,
});
