module.exports = [
  {
    id: "interagir",
    name: "Interagir",
    type: "action_mineure",
    description: "<p>Interagissez de manière simple avec votre équipement ou votre environnement. Par exemple, ouvrez une porte ou appuyez sur un bouton.</p>",
    sources: ["core"],
    pages: [25]
  },
  {
    id: "prendre_dose",
    name: "Prendre une dose",
    type: "action_mineure",
    description: "<p>Administrez-vous une dose de drogue que vous tenez en main. Vous pouvez choisir de la donner à un autre personnage colontaire et situé à portée de main. Si vous ne tenez pas encore la drogue, vous devez d'abord la saisir.</p>",
    sources: ["core"],
    pages: [25]
  },
  {
    id: "saisir_objet",
    name: "Saisir un objet",
    type: "action_mineure",
    description: "<p>Attrapez un objet que vous portez sur vous ou qui est situé à portée de main. Vous pouvez ranger un autre objet dans le cadre de cette action.</p>",
    sources: ["core"],
    pages: [25]
  },
  {
    id: "deplacer",
    name: "Se déplacer",
    type: "action_mineure",
    description: "<p>Action de déplacement. Déplacez-vous d'une zone au maximum, jusqu'à un emplacement à portée moyenne ou inférieure. Si vous êtes à terre, vous pouvez vous relever au lieu de vous déplacer.</p>",
    sources: ["core"],
    pages: [25]
  },
  {
    id: "viser",
    name: "Viser",
    type: "action_mineure",
    description: "<p>Relancez 1d20 sur le prochain test d'attaque que vous effectuez au cours du tour.</p>",
    sources: ["core"],
    pages: [25]
  },
  {
    id: "aider",
    name: "Aider",
    type: "action_capitale",
    description: "<p>Aidez un autre personnage à réussir son test. Lorsque ce personnage joue son tour et entreprend sa tâche, vous lui fournissez de l'aide (cf. page 16). Si vous n'avez pas encore agi lors de ce round, vous renoncez à votre tour ultérieur pour aider un allié lorsqu'il entreprend un test de compétence.</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "attaquer",
    name: "Attaquer",
    type: "action_capitale",
    description: "<p>Effectuez une attaque au corps à corps ou à distance, selon la procédure décrite sous <em>Effectuer une attaque</em> en page 27.</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "ordre",
    name: "Donner un ordre à un PNJ",
    type: "action_capitale",
    description: "<p>Si un PNJ allié est sous vos ordres, ordonnez-lui d'entreprendre l'action capitale de votre choix. Si cette action nécessite un test, vous lui venez automatiquement en aide en utilisant <b>Charisme + Discours</b> (si le PNJ est une personne), <b>Charisme + Survie</b> (si le PNJ est un animal) ou <b>Intelligence + Science</b> (si le PNJ est un robot).</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "effectuer_test",
    name: "Effectuer un test",
    type: "action_capitale",
    description: "<p>Effectuer un test de compétence pour une action qui n'est pas présentée ici, avec l'accord du MJ</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "rien",
    name: "Ne rien faire",
    type: "action_capitale",
    description: "<p>Passez votre tour sans agir</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "porter_secours",
    name: "Porter secours",
    description: "<p>Soignez sans tarder les blessures dont vous ou un allié souffrez. Effectuez un test d'<b>Intelligence + Médecine</b> de difficulté égale au nombre de blessures dont souffre votre patient. Ajoutez 1 à la difficulté si vous essayez de vous soigner vous-même. En cas de réussite, choisissez une option ci-dessous :</p><p><ul><li>Soigner un nombre de PV égal à votre valeur de Médecine (page 33);</li><li>Soigner une blessure dont suffre votre patient (page 34);</li><li>Stabiliser un personnage agonisant (page 34)</li></ul></p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "se_preparer",
    name: "Se préparer",
    type: "action_capitale",
    description: "<p>Serrez les dents, reprenez votre souffle et préparez-vous pour la suite. Effectuez un test d'<b>Endurance + Survie</b> de difficulté 0 et conservez tous les points d'action générés. Le MJ peut vous permettre d'utiliser une autre combinaison d'attribut et compétence en fonction de votre description, par exemple un test de <b>Charisme + Discours</b> pour inspirer vos alliés.</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "se_proteger",
    name: "Se protéger",
    type: "action_capitale",
    description: "<p>Vous vous concentrez sur votre protection. Effectuez un test d'<b>Agilité + Athlétisme</b> dont la difficulté est égale à votre valeur actuelle de défense. En cas de réussite, votre défense augmente de +1. Au prix de 2PA, augmentez encore cette valeur de +1.</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "se_tenir_pret",
    name: "Se tenir prêt",
    type: "action_capitale",
    description: "<p>Décrivez une situation que vous attendez et choisissez une action capitale que vous effectuerez quand cette situation se produira. Si cet événement intervient avant le début de votre prochain tour, vous pouvez exécuter cette action capitale immédiatement et interrompre les actions des autres personnages si nécessaire. Si au moins deux personnages se tiennent prêts pour la même situation, leurs actions ont lieu dans l'ordre d'initiative.</p>",
    sources: ["core"],
    pages: [26]
  },
  {
    id: "sprinter",
    name: "Sprinter",
    type: "action_capitale",
    description: "Action de déplacement. Déplacez-vous de deux zones au maximum, jusqu'à un emplacement à portée longue ou inférieure.",
    sources: ["core"],
    pages: [26]
  }
]