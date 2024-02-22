module.exports = [
  {
    id: "achat_d20",
    name: "Achat des d20 (1 à 6 PA)",
    description:
      "<p>Achetez des d20 en plus pour un test, avant de lancer la réserve de dés, mais après l'annonce de la difficulté. Le coût de chaque d20 augmente au fur et à mesure : le premier dé coute 1 point d'action, le deuxième coute 2 PA et le troisième 3 PA. Un test ne peut bénéficier que de trois dés bonus au maximum, ce qui inclut les dés octoryés par des aptitudes ou des traits.</p>",
    sources: ["core"],
    pages: [18], 
  },
  {
    id: "obtenir_infos",
    name: "Obtenir des informations (1 PA)",
    description:
      "<p>Posez une seule question au MJ, au sujet de la situation en cours, en fonction de votre test. Le MJ répond honnêtement, mais peut-être pas complètement.</p>",
    sources: ["core"],
    pages: [18]
  },
  {
    id: "reduire_temps",
    name: "Réduire le temps nécessaire (2 PA)",
    description:
      "<p>Des PA obtenus lors d'un test réussi peuvent permettre de réduire le temps nécessaire à l'accomplissement de la tâche, si vous êtes pressé. Dépensez 2 PA et réduisez de moitié la durée de votre tâche.",
    sources: ["core"],
    pages: [18]
  },
  {
    id: "action_mineure_supp",
    name: "Entreprendre une action mineure supplémentaire (1 PA)",
    description:
      "<p>Entreprenez une action mineure supplémentaire lors de votre tour. Au cours du même round, vous ne pouvez pas entreprendre plus de 2 actions mineures.</p>",
    sources: ["core"],
    pages: [18]
  },
  {
    id: "action_capitale_supp",
    name: "Entreprendre une action capitale supplémentaire (2 PA)",
    description:
      "<p>Entreprenez une action capitale supplémentaire lors de votre tour. La difficulté de tout test de compétence que vous devez effectuer augmente alors de +1. Au cours du même round, vous ne pouvez pas entreprendre plus de 2 actions capitales.</p>",
    sources: ["core"],
    pages: [18]
  },
  {
    id: "degats_supp",
    name: "Infliger des dégâts supplémentaires (1 à 3 PA)",
    description:
      "<p>Après avoir réussi une attaque avec une arme de corps à corps ou de lancer, vous pouvez dépenser 1 PA pour ajouter 1 $CD$, avec un maximum de 3.</p>",
    sources: ["core"],
    pages: [18]
  },
];
