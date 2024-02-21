module.exports = [
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
        description: "<p>Au rang 1, vous pouvez modifier l'armure des robots, leurs armes montées et leurs modules avec des mods de rang 1. Au rang 2, vous débloquez l'accès aux mods de rang 2 et vous réduisez de 1 la difficulté de tous vos tests de réparation de robots. Au rang 3, vous débloquez l'accès aux mods de rang 3 et vous pouvez reprogrammer les robots pour qu'ils remplissent une toute autre fonction ou altérer leur comportement si le MJ vous y autorise.</p><p>Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [63]
    },
    {
        id: "fana_armes",
        name: "Fana d'Armes",
        ranks: 4,
        prereq: {int: 6, level: 2},
        description: "<p>Vous pouvez modifier les armes légères grâce à des mods d'arme. Chaque rang dans cette aptitude débloque un rang de mod : le rang 1 débloque les mods de rang 1, le rang 2 débloque les mods de rang 2, etc.</p><p>Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "fana_capsules",
        name: "Fana de Capsules",
        ranks: 1,
        prereq: {chr: 5},
        description: "<p>Lorsque vous vendez ou achetez des objets, vous pouvez augmenter ou diminuer le prix des biens échangés de 10%.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "fantome",
        name: "Fantôme",
        ranks: 1,
        prereq: {per: 5, agi: 6},
        description: "<p>Lorsque vous entreprenez un test d'<b>AGI + Discrétion</b> alors que vous trouvez dans l'ombre ou l'obscurité, le premier d20 supplémentaire est gratuit. La limite de 5d20 s'applique toujours à la réserve.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "farfouilleur",
        name: "Farfouilleur",
        ranks: 3,
        prereq: {cha: 6, level: 1},
        description: "<p>Chaque fois que vous lancez les dés pour savoir combien de munitions vous trouvez, vous en trouvez plus. Au rang 1, vous trouvez +3 $CD$ supplémentaires de munitions. Au rang 2, vous trouvez +6 $CD$ supplémentaires de munitions. Enfin, au rang 3, vous trouvez +10 $CD$ supplémentaires de munitions. Les munitions supplémentaires que vous trouvez sont du même type que les munitions que vous dénichez initialement. Par exemple, si vous trouvez des cartouches de 10mm, cette aptitude augmente le nombre de cartouches 10mm que vous dénichez. Si vous trouvez plusieurs types de munitions, Farfouilleue vous permet d'augmenter le nombre de munitions dont la rareté est la plus faible (en cas d'égalité, le MJ tranche).</p><p>Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 5.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "farmer_pharma",
        name: "Farmer la Pharma",
        ranks: 1,
        prereq: {cha: 6},
        description: "<p>Lorsque vous fouillez un lieu contenant des médicaments ou des drogues, vous découvrez un objet supplémentaire, tiré au hasard, et ce, sans dépenser de PA.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "fetard",
        name: "Fêtard/Fêtarde",
        ranks: 1,
        prereq: {end: 6, chr: 7},
        description: "<p>Vous ne pouvez pas devenir dépendant aux boissons alcoolisées, chaque fois que vous buvez ce type de boisson, vous regagnez +2 PV.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "finesse",
        name: "Finesse",
        ranks: 1,
        prereq: {agi: 9},
        description: "<p>Une fois par rencontre de combat, vous pouvez relancer l'intégralité des $CD$ d'un unique jet de dégâts sans dépenser de point de chance.</p>",
        sourcesId: ["core"],
        pages: [64]
    },
    {
        id: "force_frappe",
        name: "Force de frappe",
        ranks: 1,
        prereq: {for: 8},
        description: "<p>Lorsque vous effectuez une attaque au corps à corps avec une arme de corps à corps à deux mains, votre attaque obtient l'effet de dégâts Brutal.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "forgeron",
        name: "Forgeron",
        ranks: 3,
        prereq: {for: 6, level: 2},
        description: "<p>Vous povuez modifier les armes de corps à corps grâce à des mods d'arme. Chaque rang dans cette aptitude débloque un rang de mod : le rang 1 débloque les mods de rang 1, le rang 2 débloque les mods de rang 2, etc.</p><p>Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "frappe_perforante",
        name: "Frappe Perforante",
        ranks: 1,
        prereq: {for: 7},
        description: "<p>Les attaques que vous effectuez à mains nues ou avec une arme de corps à corps à lames obtiennent l'effet de dégâts Perforant 1. Si elles bénéficient déjà de cet effet, la valeur de ce dernier augmente de 1.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "fusilier",
        name: "Fusilier",
        ranks: 2,
        prereq: {agi: 7, level: 2},
        description: "<p>Lorsque vous effectuez une attaque avec une arme à distance à deux mains dotée d'une cadence de tir inférieure ou égale à 2 (à l'exception des armes lourdes), ajoutez +1 $CD$ aux dégâts de l'arme pa rang dans cette aptitude.</p><p>De plus, au rang 2, ajoutez l'effet de dégâts Perforant 1. Si l'attaque bénéficie déjà de cet effet, la valeur de ce dernier augmente de 1. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "fusion",
        name: "Fusion",
        ranks: 1,
        prereq: {per: 10},
        description: "<p>Lorsque vous tuez un ennemi avec une arme à énergie, il explose. Jetez un nombre de $CD$ égal à la moitié de la valeur de dégâts de l'arme (arrondie à l'inférieur). Pour chaque Effet obtenu, une créature située à portée courte ou inférieure de votre victime (en commençant par la plus proche) subit un nombre de points de dégâts énergétiques égal au total obtenu sur les $CD$.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "guerison_rapide",
        name: "Guérison Rapide",
        ranks: 1,
        prereq: {end: 6, no_robots: true},
        description: "<p>Lorsque vous effectuez un test d'<b>END + Survie</b> pour traiter vos propres blessures, le premier d20 supplémentaire est gratuit. La limite de 5d20 s'applique toujours à la réserve.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "guerisseur",
        name: "Guérisseur",
        ranks: 3,
        prereq: {int: 7, level: 1},
        description: "<p>Lorsque vous soignez les PV d'un patient par l'action mineure Porter secours, soignez 1 PV supplémentaire par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 5.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "ho_hisse",
        name: "Ho-Hisse !",
        ranks: 1,
        prereq: {for: 8},
        description: "<p>Lorsque vous effectuez une attaque à distance avec un projectile, vous pouvez dépenser 1 PA pour augmenter d'un niveau la portée de l'arme : de courte à moyenne ou de moyenne à longue.</p>",
        sourcesId: ["core"],
        pages: [65]
    },
    {
        id: "action_boy",
        name: "Homme/Femme d'Action",
        ranks: 1,
        description: "<p>Lorsque vous dépensez des PA pour obtenir une action capitale supplémentaire, vous ne subissez pas d'augmentation de difficulté pour le test de compétence lié à cette action.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "infiltrateur",
        name: "Infiltrateur",
        ranks: 1,
        prereq: {per: 8},
        description: "<p>Vous pouvez relancer 1d20 lors de tout test de Crochetage destiné à déverrouiller une porte ou un conteneur.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "infirmier",
        name: "Infirmier",
        ranks: 1,
        prereq: {int: 8},
        description: "<p>Lorsque vous utilisez l'action mineure Porter secours pour essayer de soigner une blessure, vous pouvez relancer 1d20.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "taille_compte",
        name: "La Taille Compte",
        ranks: 3,
        prereq: {end: 7, agi: 6},
        description: "<p>Lorsque vous effectuez une attaque à distance avec une arme lourde, ajoutez +1 $CD$ aux dégâts de l'arme par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 4.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "locomotive",
        name: "Locomotive",
        ranks: 2,
        prereq: {for: 9, end: 7, level: 1},
        description: "<p>Au prix d'une action capitale, vous pouvez charger si vous portez une armure assistée ou petes un super mutant. Il s'agit d'une action de déplacement et vous ne pouvez pas vous déplacer ou sprinter au cours du même tour. Lorsque vous entreprenez cette action, vous vous placez à portée de main d'un ennemi situé à portée moyenne (1 zone) ou inférieure, puis effectuez un test de <b>FOR + Athlétisme</b> de difficulté 2. En cas de réussite, votre ennemi subit vos dégâts à mains nues normaux et vous le renversez.</p><p>Au rang 2, ajoutez +1 $CD$ et l'effet de dégâts Etourdissant aux dégâts infligés. A la discrétion du MJ, des créatures particulièrement massives ou robustes peuvent ne pas être renversées par cette action. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 5.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "mains_lestes",
        name: "Mains lestes",
        ranks: 1,
        prereq: {agi: 8},
        description: "<p>Vous pouvez recharger plus rapidement vos armes à feu. Lorsque vous effectuez une attaque à distance, vous pouvez dépenser 2 PA pour augmenter de +2 la cadence de tir de votre arme pour cette attaque uniquement.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "maitre_voleur",
        name: "Maître-Voleur",
        ranks: 1,
        prereq: {per: 8, agi: 9},
        description: "<p>Lorsque vous entreprenez un test pour crocheter une serrure ou faire les poches de quelqu'un, la difficulté du test de votre adversaire pour vous repérer augmente de +1.</p>",
        sourcesId: ["core"],
        pages: [66]
    },
    {
        id: "marchand_sable",
        name: "Marchand de Sable",
        ranks: 1,
        prereq: {agi: 9},
        description: "<p>Lorsque vous effectuez une attaque furtive avec une arme équipée d'un silencieux, ajoutez +2 $CD$ aux dégâts de l'arme. Vous ne tirez aucun bénéfice de cette aptitude si vous portez une armure assistée.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "metabolisme_rapide",
        name: "Métabolisme Rapide",
        ranks: 3,
        prereq: {end: 6, level: 1, no_robots: true},
        description: "<p>Lorsque vous récupérez des PV par un autre moyen que le repos, vous récupérez 1 PV supplémentaire par rang dans cette aptitude. Chaque fois que vous sélectionnez cette aptitude, le niveau requis augmente de 3.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "mysterieux_etranger",
        name: "Mystérieux Etranger",
        ranks: 1,
        prereq: {chan: 7},
        description: "<p>De temps à autre, un Mystérieux étranger vous vient en aide, avec des résultats mortels. Au début d'une rencontre de combat, vous pouvez dépenser 1 point de chance. Si vous le faites, le MJ peut faire apparaître, à n'importe quel moment de la scène, le Mystérieux étranger : il effectue une unique attaque à distance contre un adversaire que vous avez déjà attaqué, ou qui vient de vous attaquer, puis disparaît. Si vous avez dépensé un point de chance, le MJ doit vous le restituer si le Mystérieux étranger n'est pas apparu.</p><p>L'étranger a une <b>AGI</b> de 10 et une compétence Armes légères de 6, et cette dernière est un atout personnel. Il lance toujours 3d20 pour son attaque, qu'il exécute avec un revolver .44 Magnum personnalisé, et elle inflige 8 $CD$ de dégâts balistiques Brutaux et Perforants 1. L'étranger apparaît toujours à la portée optimale de son arme. Toute tentative de retrouver l'étranger après son attaque est vouée à l'échec.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "nature_audacieuse",
        name: "Nature Audacieuse",
        ranks: 1,
        prereq: {cha: 7},
        description: "<p>Lorsque vous entreprenez un test de compétence et achetez au moins 1d20 en octroyant des PA au meneur de jeu, vous pouvez relancer 1d20 du résultat. Vous ne pouvez pas sélectionner cette aptitude si vous disposez de Nature prudente.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "nature_prudente",
        name: "Nature Prudente",
        ranks: 1,
        prereq: {per: 7},
        description: "<p>Lorsque vous entreprenez un test de compétence et achetez au moins 1d20 avec des points d'action, vous pouvez relancer 1d20 du résultat. Vous ne pouvez pas sélectionner cette aptitude si vous disposez de Nature audacieuse.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "ninja",
        name: "Ninja",
        ranks: 1,
        prereq: {agi: 8},
        description: "<p>Lorsque vous effectuez une attaque furtive à mains nues ou avec une arme de corps à corps, ajoutez +2 $CD$ aux dégâts de l'attaque. Vous ne tirez aucun bénéfice de cette aptitude si vous portez une armure assistée.</p>",
        sourcesId: ["core"],
        pages: [67]
    },
    {
        id: "nyctalope",
        name: "Nyctalope",
        ranks: 1,
        prereq: {per: 7},
        description: "<p>Vous réduisez de 1 l'augmentation de difficulté due à l'obscurité.</p>",
        sourcesId: ["core"],
        pages: [67]
    }
]