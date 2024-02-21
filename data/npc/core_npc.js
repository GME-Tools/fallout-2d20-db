module.exports = [
    {
        id: "canigou",
        name: "Canigou",
        level: 1,
        category: "Créature",
        keywords: ["Mammifère"],
        type: "Normale",
        xp: 0,
        special: {CORPS: 5, ESPRIT: 4},
        skills: {CaC: 2, AUTRE: 1},
        derived: {pv: 6, initiative: "Idem PJ", defense: 1, carry: 25},
        dr: {balistic: 0, energy: 0, radiation: 0, poison: 0},
        attacks: [
            {
                id: "bite",
                name: "Bite",
                test: {special: "CORPS", skill: "CaC"},
                damage: {cd: 2, type: "balistique", effects: ["Brutal"]}
            }
        ],
        abilities: [
            {
                id: "sens_aiguises",
                name: "Sens aiguisés",
                description: "<p>au moins l'un des sens de Canigou est particulièrement aiguisé. Canigou peut essayer de détecter les créatures ou les objets que d'autres personnages ne pourraient pas repérer et il réduit de 1 (jusqu'à un minimum de 0) la difficulté de tout ses tests de <b>PER</b>.</p>"
            },
            {
                id: "chien_attaque",
                name: "Chien d'attaque",
                description: "<p>lorsque Canigou vous aide dans le cadre d'une attaque, il doit se placer à portée de main de votre cible. Si l'attaque est réussie, il inflige ses propres dégâts de corps à corps à la cible.</p>"
            },
            {
                id: "compagnon",
                name: "Compagnon",
                description: "<p>le niveau de Canigou est égal au vôtre et augmente au même rythme. Lorsque vous atteignez le niveau 3, et tous les 2 niveaux par la suite, augmentez de +1 le Corps ou l'Esprit de Canigou. A chaque nouveau niveau, ainsi qu'à chaque augmentation de sa valeur de Corps, Canigou gagne +1 PV. Les dégâts de la morsure de Canigou augmentent de +1 $CD$ au niveau 5 et tous les 5 niveaux par la suite.</p>"
            }
        ]
    }
]