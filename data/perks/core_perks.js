module.eports = [
    {
        id: "ami_animaux",
        name: "Ami des Animaux",
        ranks: 2,
        prereq: {chr: 6, level: 1},
        description: "<p>Au rang 1, chaque fois qu'un PNJ créature dont le profil affiche le mot-clef Mammifère, Lézard ou Insecte souhaite vous attaquer, jetez 1 $CD$ : si vous obtenez un résultat autre qu'un Effet, la créature choisit de ne pas vous attaquer, bien qu'elle puisse toujours s'en prendre à un autre personnage.</p><p>Au rang 2, vous pouvez entreprendre un test de <b>CHR + Survie</b> de difficulté 2 au prix d'une action capitale. En cas de réussite, l'animal vous considère comme amical et attaquera quiconque s'en prend à vous. Cette aptitude ne fonctionne pas sur les animaux redoutables ou légendaires. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 5.</p>",
        sourcesId: ["core"],
        pages: [59]
    },
    {
        id: "amphibie",
        name: "Ammphibie",
        ranks: 2,
        prereq: {end: 5, level: 1},
        description: "<p>L'eau est votre alliée. Au rang 1, vons ne subissez plus de dégâts de radiation lorsque vous nagez dans une eau irradiée et vous pouvez retenir votre souffle deux fois plus longtemps.</p><p>Au rang 2, les ennemis ajoutent +2 à la difficulté de leurs tests pour vous repérer lorsque vous êtes complètement immergé. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 3.</p>",
        sourcesId: ["core"],
        pages: [59]
    },
    {
        id: "antiradiations",
        name: "Antiradiations",
        ranks: 2,
        prereq: {end: 8, level: 1},
        description: "<p>Votre résistance aux dégâts de radiation, quelle que soit la localisation, augmente de +1 par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "armurier",
        name: "Armurier",
        ranks: 4,
        prereq: {for: 5, int: 6},
        description: "<p>Vous pouvez modifier les pièces d'armure grâce à des mods d'armure. Chaque rang dans cette aptitude débloque un rang de mod : le rang 1 débloque les mods de rang 1, le rang 2 débloque les mods de rang 2, etc.</p><p>Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "barbare",
        name: "Barbare",
        ranks: 1,
        prereq: {for: 7, level: 4, no_robots: true},
        description: "<p>Votre Force influe sur vos résistances aux dégâts des différentes localisations. Vous ne tirez aucun bénéfice de cette aptitude lorsque vous portez une armure assistée.</p><ul><li><b>FOR 7-8 :</b> RD balistique +1</li><li><b>FOR 9-10 :</b> RD balistique +2</li><li><b>FOR 11+ :</b> RD balistique +3</li></ul></p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "barycentre",
        name: "Barycentre",
        ranks: 1,
        prereq: {agi: 7},
        description: "<p>Lorsque vous effectuez une attaque à distance, vous pouvez toujours choisir de tirer dans le Buste de votre cible (ou de son équivalent si la créature utilise une autre table de localisation des dégâts), le tout, sans augmenter la difficulté de votre attaque. De plus, vous pouvez relancer 1d20 du résultat de votre attaque.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "beau_parleur",
        name: "Beau Parleur",
        ranks: 1,
        prereq: {chr: 6},
        description: "<p>Vous pouvez relancer 1d20 lors de tout test deTroc ou de Discours en opposition.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "blitz",
        name: "Blitz",
        ranks: 2,
        prereq: {agi: 9, level: 1},
        description: "<p>Lorsque vous vous placez à portée de main d'un adversaire et effectuez dans le même tour une attaque au corps à corps contre lui, vous pouvez relancer 1d20 du résultat de votre attaque.</p><p>De plus, au rang 2, cette attaque inflige +1 $CD$ de dégâts. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 3.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "boyaux_plombes",
        name: "Boyaux Plombés",
        ranks: 2,
        prereq: {and: 6, level: 1},
        description: "<p>Au rang 1, vous pouvez relancer le $CD$ qui détermine si vous subissez des dégâts de radiation en comsommant de la nourriture ou une boisson irradiée. Au rang 2, vous êtes immunisé aux dégâts de radiation infligés par la consommation de nourriture ou de boisson irradiée. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [60]
    },
    {
        id: "bricolage",
        name: "Bricolage",
        ranks: 1,
        description: "<p>Vous pouvez réparer un objet sans avoir besoin de pièces détachées. Néanmoins, cette réparation est temporaire : l'objet se brisera à nouveau lors de la prochaine complication que vous obtiendrez en l'utilisant. De plus, la marge de complication de tout test de compétence effectué à l'aide de cet objet augmente de 1.</p>",
        sourcesId: ["core"],
        pages: [61]
    },
    {
        id: "canaille",
        name: "Canaille",
        ranks: 1,
        prereq: {chr: 7},
        description: "<p>Vous pouvez ignorer la première complication obtenue sur tout test de <b>CHR + Discours</b> destiné à convaincre quelqu'un d'un mensonge.</p>",
        sourcesId: ["core"],
        pages: [61]
    },
    {
        id: "canigou",
        name: "Canigou",
        ranks: 1,
        prereq: {chr: 5},
        description: "<p>Vous n'êtes pas seul dans la nature. Vous avez un chien qui est aussi votre ami et voter allié en cas de difficulté. Ce chien est représenté par le profil ci-contre et se voit considéré comme un PNJ créature allié sous vos ordres (cf. page 336). Si vous devez récolter votre nourriture et votre eau, votre chien se débrouille par lui même pour trouver ses vivres. S'il est tué, vous avez le choix : soit vous trouvez un autre chien avant la prochaine aventure, soit vous échangez cette aptitude contre une autre après l'aventure en cours.</p>",
        sourcesId: ["core"],
        pages: [61]
    },
    {
        id: "chasseur",
        name: "Chasseur",
        ranks: 1,
        prereq: {end: 6},
        description: "<p>Les attaques que vous effectuez contre les personnages dont le profil affiche le mot-clef Mammifère, Lézard ou Insecte, ainsi que le mot-clef Mutant, obtiennent l'effet de dégâts Brutal, si elles n'en bénéficient pas déjà.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "chimie",
        name: "Chimie",
        ranks: 1,
        prereq: {int: 7},
        description: "<p>La durée d'effet des drogues que vous créez est doublée (cf. page 164). De plus, vous débloquez les recettes qui nécessitent de posséder cette aptitude.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "chirurgien_chevrotine",
        name: "Chirurgien de la Chevrotine",
        ranks: 1,
        prereq: {for: 5, agi: 7},
        description: "<p>Les attaques que vous effectuez avec un fusil à pompe obtiennent l'effet de dégâts Perforant 1. Si elles bénéficient déjà de cet effet, la valeur de ce dernier augmente de 1.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "cible_mouvante",
        name: "Cible Mouvante",
        ranks: 1,
        prereq: {agi: 6},
        description: "<p>Lorsque vous sprintez, augmentez de +1 votre défense jusqu'au début de votre prochain tour.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "cogneur",
        name: "Cogneur",
        ranks: 1,
        prereq: {for: 6},
        description: "<p>Lorsque vous effectuez une attaque au corps à corps en cognant avec votre arme à feu (cf. page 111), votre attaque obtient l'effet de dégâts Brutal.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "commandant_laser",
        name: "Commandant laser",
        ranks: 2,
        prereq: {per: 8, level: 2},
        description: "<p>Lorsque vous effectuez une attaque avec une arme à énergie à distance, ajoutez +1 $CD$ aux dégâts de l'arme par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "commando",
        name: "Commando",
        ranks: 2,
        prereq: {agi: 8, level: 2},
        description: "<p>Lorsque vous effectuez une attaque à distance avec une arme dotée d'une cadence de tir supérieure ou égale à 3 (à l'exception des armes lourdes), ajoutez +1 $CD$ aux dégâts de l'arme par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 3.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "comprehension",
        name: "Compréhension",
        ranks: 1,
        prereq: {int: 6},
        description: "<p>Après avoir utilisé le bonus conféré par la lecture d'un magazine, jetez 1 $CD$. Si vous obtenez un Effet, vous pouvez utiliser ce bonus une fois de plus.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "concerto_conserves",
        name: "Concerto de Conserves",
        ranks: 1,
        prereq: {cha: 5},
        description: "<p>Lorsque vous fouillez un lieu contenant de la nourriture, vous découvrez un aliment supplémentaire, tiré au hasard, et ce, sans dépenser de PA.</p>",
        sourcesId: ["core"],
        pages: [62]
    },
    {
        id: "coups_super_critiques",
        name: "Coups Super Critiques",
        ranks: 1,
        prereq: {cha: 9},
        description: "<p>Lorsque vous infligez au moins 1 point de dégâts à un ennemi, vous pouvez dépenser 1 point de chance pour lui faire subir automatiquement un coup critique et ainsi causer une blessure.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "degainage_rapide",
        name: "Dégainage Rapide",
        ranks: 1,
        prereq: {agi: 6},
        description: "<p>Chaque tour, vous pouvez dégainer une seule arme ou un seul objet que vous transportez sans y consacrer une action mineure.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "denicheur_tresors",
        name: "Dénicheur de Trésors",
        ranks: 3,
        prereq: {cha: 5, level: 2},
        description: "<p>Chaque fois que vous lancez des dés pour savoir combien d'argent vous trouvez, vous en trouvez plus. Au rang 1, vous trouvez +3 $CD$ supplémentaires de capsules. Au rang 2, vous trouvez +6 $CD$ supplémentaires de capsules. Enfin, au rang 3, vous trouvez +10 $CD$ supplémentaires de capsules. CHaque fois que vous sélectionnez cette aptitude, le niveau augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "energie_solaire",
        name: "Energie Solaire",
        ranks: 1,
        prereq: {end: 7},
        description: "<p>Vous élminiez 1 point de dégâts de radiation par heure passée à la lumière directe du soleil.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "entomologiste",
        name: "Entomologiste",
        ranks: 1,
        prereq: {int: 7},
        description: "<p>Les attaques que vous effectuez contre les personnages dont le profil affiche le mot-clef Insecte obtiennent l'effet de dégâts Perforant 1. Si elles bénéficient déjà de cet effet, la valeur de ce dernier augmente de 1.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "exercice",
        name: "Exercice",
        ranks: 10,
        prereq: {level: 2},
        description: "<p>Augmentez l'un de vos attributs S.P.E.C.I.A.L. de 1 rang. Comme toujours, vos attributs S.P.E.C.I.A.L. ne peuvent pas dépasser 10 avec cette méthode. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 2.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "expert_demolition",
        name: "Expert en démolition",
        ranks: 1,
        prereq: {per: 6, cha: 6},
        description: "<p>Lorsque vous effectuez une attaque à l'aide d'une arme dotée de la qualité Zone d'impact, l'attaque obtient l'effet de dégâts Brutal. De plus, vous débloquez les recettes d'explosifs qui nécessitent de posséder cette aptitude.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "expert_robotique",
        name: "Expert en robotique",
        ranks: 3,
        prereq: {int: 8, level: 2},
        description: "<p>Au rang 1, vous pouvez modifier l'armure des robots, leurs armes montées et leurs modules avec des mods de rang 1. Au rang 2, vous débloquez l'accès aux mods de rang 2 et vous réduisez de 1 la difficulté de tous vos tests de réparation de robots. Au rang 3, vous débloquez l'accès aux mods de rang 3 et vous pouvez reprogrammer les robots pour qu'ils remplissent une toute autre fonction ou altérer leur comportement si le MJ vous y autorise.</p>",
        sourcesId: ["core"],
        pages: [63]
    }
]