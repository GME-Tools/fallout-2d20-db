const rules   = require('./rules');
const sources = require('./sources');
const origins = require('./origins');
const traits  = require('./traits');

module.exports = () => ({
  rules: rules,
  sources: sources,
  origins: origins,
  traits: traits
});