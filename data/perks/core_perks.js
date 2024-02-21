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
    }
]