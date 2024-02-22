const core = require("./core");

module.exports = [
  ...core,
  {
    id: "combat",
    name: "Rencontres de combat",
    sources: ["core"],
    pages: [24],
  },
  {
    id: "initiative",
    name: "Initiative",
    sources: ["core"],
    pages: [24],
  },
  {
    id: "actions_mineures",
    name: "Actions Mineures",
    sources: ["core"],
    pages: [25],
  },
  {
    id: "chance_initiative",
    name: "Dépenser de la chance pour agir plus vite",
    type: "encart",
    sources: ["core"],
    pages: [25],
  },
  {
    id: "au_sol",
    name: "Au sol",
    type: "encart",
    sources: ["core"],
    pages: [25],
  },
  {
    id: "actions_capitales",
    name: "Actions Capitales",
    sources: ["core"],
    pages: [26],
  },
  {
    id: "pa_combat",
    name: "Points d'action et rencontres de combat",
    type: "encart",
    sources: ["core"],
    pages: [26],
  },
  {
    id: "attaque",
    name: "Effectuer une attaque",
    sources: ["core"],
    pages: [27],
  },
  {
    id: "localisation_degats",
    name: "Localisation des dégâts",
    sources: ["core"],
    pages: [25],
  },
];
