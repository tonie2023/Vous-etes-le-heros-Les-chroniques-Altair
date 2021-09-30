let introduction = {
  subtitle: "Introduction du héro",
  text: `Bonjour aventuriers, aventurières! 
         Mon nom est Malgus noid et j'ai 27 ans.
         Je viens de la dimension Altaria où dans mon monde la magie peut être utiliser par tous ces habitants.
         Je suis originaire du pays Alcoria et je suis commandant de l'armée du pays.
         Mon histoire débuta lors d'une patrouille en forêt avec mes hommes où un phénomène magique se produisit me séparant de mes hommes et me faisant perdre connaissance.
         À mon réveil, j'étais dans une cellule où de l'autre côté des barreaux
        une femme en armure posa la question suivante : Qui êtes-vous ?`,
  img:,
}

let reveilHero = {
  subtitle: "Réveil du héro",
  text: `Le commandant Malgus d'Astoria prit dans un phénomène magique inconnu perdit connaissance pour reprendre conscience dans une cellule.
  Confus de sa situation problématique. il reprit pied dans la réalité lorsqu'une voix de l'autre côté des barreaux 
  lui demanda: "Qui êtes-vous et d'où venez-vous? Malgus se retourna pour découvrir une femme en armure s'adressant à lui. 
  La femme répéta la question : "Qui êtes-vous et d'où venez-vous?" `,
  img:,
  option: ["Le héro lui répond", "Le héro mentit"],
};
let interrogatoireMalgus = {
  subtitle: "Amavia",
  text: `Malgus choisit l'honnêteté. "Je m'appelle Malgus, je suis le commandant de l'armée d'Alcoria.
   J'étais en patrouille avec mes hommes lorsqu'un phénomène magique inconnu est survenu ce qui me fit perdre connaissance.
   À mon réveil, j'étais dans cette cellule. Pouvez-vous me dire où je suis et pourquoi, s'il-vous-plait? Cela m'aiderait à comprendre ma situation actuelle."
   La femme en armure répondit : "Je m'appelle Amavia, je suis la commandante de l'armée du royaume de Magnolia. Quant au pourquoi de votre situation,
   il s'agit d'une mesure préventive car voyez-vous nous sommes en guerre et mes hommes vous on trouvez inconscient sur notre territoire pensant que vous êtes un espion. L'êtes-vous ?"
   Malgus lui répondit : "Non commandante, je ne suis pas un espion." dit-il d'un air résolu. La commandante lui-répondit: "C'est ce que je vais déterminé à l'instant. "`,
  img:,
  option: ["Amavia décide de croire l'histoire de Malgus", "Amavia ne croit pas l'histoire de Malgus"],
}
let inquisition = {
  subtitle:"Malhonnêteté inopportune",
  text:`Malgus choisit le mensonge. "Je m'appelle Malgis, je suis marchand agricole.
  J'étais en route avec mes produits agricole vers le marché de la capitale lorsque des brigands m'ont attaqué, pillé et assommé par la suite.
  À mon réveil, j'étais dans cette cellule. Pouvez-vous me dire où je suis et pourquoi, s'il-vous-plait? 
  La femme en armure répondit : "Je m'appelle Amavia, je suis la commandante de l'armée du royaume de Magnolia. Quant au pourquoi de votre situation,
  il s'agit d'une mesure préventive car voyez-vous nous sommes en guerre et mes hommes vous on trouvez inconscient sur le territoire de la captitale pensant que vous êtes un espion. L'êtes-vous ?"
  Malgus lui répondit : "Non commandante, je ne suis pas un espion." dit-il d'un air défiant. La commandante lui-répondit: "C'est ce que je vais déterminé à l'instant." 
  Par contre, intérieurement, elle se dit : "Son histoire ne colle pas, quand on l'a retrouvé inconscient, il portait des vêtements à mi-chemin entre des vêtements normaux et d'une armure.
  Que dois faire, le croire ou non ?"`,
  img:,
  option: ["Amavia décide de croire l'histoire de Malgis(Malgus)", "Amavia ne croit pas l'histoire de Malgis(Malgus)"],
}
let destinPositif = {
  subtitle: "Libération providentielle",
  text: `Notre héro en cellule attendait la réponse de la commandante Amavia. 
  Après 5 minutes de réflexion, elle donna sa décision : "Malgus, après ce que vous venez de me révéler sur vous, j'ai pesé le pour et le contre et j'ai choisis de vous croire.".
  Elle ouvrit la porte de la cellule et dit : "Maintenant, laisser-moi vous éclairer sur la situation actuelle du royaume. 
  Ensuite, j'aurais une proposition à vous faire.".`,
  img:,
  option: ["Amavia offre à Malgus d'intégrer son armée", "Rester en cellule une journée de plus"],
}
let destinNégatif = {
  subtitle: "Partie terminé",
  text: `Notre héro en cellule attendait la réponse de la commandante Amavia avec nervosité. 
  Après 5 minutes de réflexion, elle donna sa décision : "Malgus, après ce que vous venez de me révéler sur vous, j'ai pesé le pour et le contre et je ne vous crois pas.".
  Malgis(Malgus) : "Mais, pourquoi!?" dit-il d'un ton plaintif. Amavia répondit : "Il y a des éléments qui ne marchent pas dans votre histoire, 
  notamment vos vêtements inhabituels ne correspondant pas à un marchand agricole, je suis désolé mais on va devoir vous garder plus longtemps dans votre cellule.". Malgis(Malgus) cria : "Non!!!".`, 
  img:,
  option: ["La partie est terminé, veuillez recommencer une nouvelle partie!"],
}
let intégrationArmée= {
  subtitle: "Magnolia",
  text: `Malgus choisis d'accepter l'offre de la commandante. Suite à la décision du héro, Amavia lui expliqua que le royaume de Magnolia est en guerre contre des envahisseurs d'outre-mer que l'on appel les discariens :
  Une race hybride mi-homme mi-féline. Elle expliqua également que cela fait 10 ans que la guerre a commencé et que les armées de Magnolia perdaient du terrain
  et que le royaume risquait depuis peu la défaite face à ces envahisseurs discariens. Elle finit en disant : "Voilà, la situation actuelle. est-ce que vous avez des questions ?"
  Notre héro fit non de la tête. La commandante s'exclama : "Parfait dans cas, il est temps pour vous de choisir entre 4 factions de l'armée : furtif, guerriers, tacticien ou berserker." `,
  img:,
  option: ["Furtif", "Guerrier", "Tacticien", "Berserker"],
}
let faction1= {
  subtitle: "Les furtifs",
  text: `Amavia fit la description de cette faction : "Les furtifs sont des soldats qui ont appris des méthodes permettant de mettre hors d'état de nuire ou de tuer leurs adversaires discariens.
  En choisissant cette faction, tu apprendras alors les techniques de combats et les méthodes propre aux soldat furtifs et ton équipement militaire sera adapté pour convenir à cette faction
  et modifiable au cours de ton périple dans cette guerre. La commandante de cette faction s'appelle Anna 28 ans."`,
  img:,
  option: ["Choisir", "Revenir au menu des factions"],
}
let faction2 = {
  subtitle: "Les guerriers",
  text: `Amavia fit la description de cette faction : "Les guerriers est la faction principale de l'armée de Magnolia.
  En choisissant cette faction, tu recevras une formation guerrière et un équipement militaire conséquent à ton choix de faction et 
  modifiable au cours de ton périple dans cette guerre. La commandante de cette faction s"appelle Iriana 27 ans"`,
  img:,
  option: ["Choisir", "Revenir au menu des factions"],
}
let faction3 = {
  subtitle: "Les tacticiens",
  text: `Amavia fit la description de cette faction : "Les tacticiens est une faction de soldat plus petite puisqu'elle ne compte que des gens ayant une grande intelligence 
  et un instinct tactique très développé. Il s'agit de la faction la plus difficile, car la formation est très difficile mais payante à la fin. Par contre Malgus, pour le choix de l'équipement militaire tu devras faire preuve de discernement dans tes choix,
  car cela aura une influence de comment le commandant de cette faction fera appel à toi pour les missions(Cette faction est la seule où ton choix d'équpement militaire ne peut être modifié qu'une fois).
  Le commandant de cette faction s'appel Victor 40 ans.".`,
  img:,
  option: ["Choisir", "Revenir au menu des factions"],
}
let faction4 = {
  subtitle: "Les berserkers",
  text: `Amavia fit la description de cette faction : Les berserkers sont une faction de soldat que l'on pourrait qualifié de casse-cou dans le sens qu'ils ne réfléchissent pas avant de foncer sur l'ennemi discarien.
  Pourtant, elles très efficaces même s'ils subissent des pertes importantes en conséquence de leur précipitation sur le champs de bataille. Cette faction à la particularité
  de combiner l'apprentissage des furtifs et des guerriers pour ainsi donner un style de combat improvisé, mais efficace. Quant, à l'équipement militaire, la combinaison mentionnée plus haut te permet d'avoir accès aux équipements des deux factions
  et modifiable au cours de ton périple dans cett guerre. Le commandant s'appel Ivan l'audacieux 32 ans.`,
  img:,
  option: ["Choisir", "Revenir au menu des factions"],
}
let premiersCombats= {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let souschap3_1 = {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let souschap3_2 = {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let alliance= {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let consécration = {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let paix= {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let epilogue = {
  subtitle:,
  text: ``,
  img:,
  option:,
}
let chaptersObj = {
}