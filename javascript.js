let chaptersObj = {
  introduction: {
    subtitle: "Introduction du héro",
    text: `Bonjour aventuriers, aventurières! 
Mon nom est Malgus noid et j'ai 27 ans. Je suis originaire du pays Alcoria et je suis soldat dans l'armée du pays où la magie peut être utiliser par tous ces habitants et ailleurs dans le monde.
Mon histoire débuta lors d'une patrouille en forêt où un phénomène magique se produisit me séparant de mes hommes et me faisant perdre connaissance.
À mon réveil, j'étais dans une cellule où de l'autre côté des barreaux
une femme en armure posa la question suivante : Qui êtes-vous ?`,
    video: "assets/introductionPlayer.mp4",
    img: "assets/vortex.jpg",
    options: [
      {
        text: "Commencer",
        action: "goToChapter(`reveil_hero`)",
      },
    ],
  },
  reveil_hero: {
    subtitle: "Réveil du héro",
    text: `Malgus d'Astoria prit dans un phénomène magique inconnu perdit connaissance pour reprendre conscience dans une cellule.
Confus de sa situation problématique. il reprit pied dans la réalité lorsqu'une voix de l'autre côté des barreaux 
lui demanda: "Qui êtes-vous et d'où venez-vous? Malgus se retourna pour découvrir une femme en armure s'adressant à lui. 
La femme répéta la question : "Qui êtes-vous et d'où venez-vous?" `,
    img: "assets/interrogatoire.jpg",
    options: [
      {
        text: "Le héro lui répond",
        action: "goToChapter(`interrogatoire_malgus`)",
      },
      {
        text: "Le héro lui ment",
        action: "goToChapter(`inquisition`)",
      },
    ],
  },
  interrogatoire_malgus: {
    subtitle: "Amavia",
    text: `Malgus choisit l'honnêteté. "Je m'appelle Malgus, je suis un soldat de l'armée d'Alcoria.
J'étais en patrouille lorsqu'un phénomène magique inconnu est survenu ce qui me fit perdre connaissance.
À mon réveil, j'étais dans cette cellule. Pouvez-vous me dire où je suis et pourquoi, s'il-vous-plait? Cela m'aiderait à comprendre ma situation actuelle."
La femme en armure répondit : "Je m'appelle Amavia, je suis la commandante de l'armée du royaume de Magnolia. Quant au pourquoi de votre situation,
il s'agit d'une mesure préventive car voyez-vous nous sommes en guerre et mes hommes vous on trouvez inconscient sur notre territoire pensant que vous êtes un espion. L'êtes-vous ?"
Malgus lui répondit : "Non commandante, je ne suis pas un espion." dit-il d'un air résolu. La commandante lui-répondit: "C'est ce que je vais déterminé à l'instant. "`,
    img: "assets/explication.jpg",
    options: [
      {
        text: "Amavia décide de croire l'histoire de Malgus",
        action: "goToChapter(`destin_positif`)",
      },
    ],
  },
  inquisition: {
    subtitle: "Malhonnêteté inopportune",
    text: `Malgus choisit le mensonge. "Je m'appelle Malgis, je suis marchand agricole.
J'étais en route avec mes produits vers le marché de la capitale lorsque des brigands m'ont attaqué, pillé et assommé.
À mon réveil, j'étais dans cette cellule. Pouvez-vous me dire où je suis et pourquoi, s'il-vous-plait? 
La femme en armure répondit : "Je m'appelle Amavia, je suis la commandante de l'armée du royaume de Magnolia. Quant au pourquoi de votre situation,
il s'agit d'une mesure préventive car voyez-vous nous sommes en guerre et mes hommes vous on trouvez inconscient sur le territoire de la captitale pensant que vous êtes un espion. L'êtes-vous ?"
Malgus lui répondit : "Non commandante, je ne suis pas un espion." dit-il d'un air défiant. La commandante lui-répondit: "C'est ce que je vais déterminé à l'instant." 
Par contre, intérieurement, elle se dit : "Son histoire ne colle pas, quand on l'a retrouvé inconscient, il portait des vêtements à mi-chemin entre des vêtements normaux et d'une armure.
Que dois faire, le croire ou non ?"`,
    video: "assets/liar.mp4",
    img: "assets/mensonge.jpg",
    options: [
      {
        text: "Amavia ne croit pas Malgis(Malgus)",
        action: "decision3()",
      },
      {
        text: "Amavia décide de croire Malgis(Malgus)",
        action: "decision4()",
      },
    ],
  },
  destin_positif: {
    subtitle: "Libération providentielle",
    text: `Notre héro en cellule attendait la réponse de la commandante Amavia. 
Après 5 minutes de réflexion, elle donna sa décision : "Malgus, après ce que vous venez de me révéler sur vous, j'ai pesé le pour et le contre et j'ai choisis de vous croire.".
Elle ouvrit la porte de la cellule et dit : "Maintenant, laisser-moi vous éclairer sur la situation actuelle du royaume. 
Ensuite, j'aurais une proposition à vous faire.".`,
    img: "assets/choix.jpg",
    options: [
      {
        text: "Amavia offre à Malgus d'intégrer son armée",
        action: "goToChapter(`integration_armee`)",
      },
    ],
  },
  destin_negatif: {
    subtitle: "Partie terminé",
    text: `Chers aventuriers et aventurières des Chroniques d'Altaïr
vous venez de prendre une décision qui a eu des conséquences négatives pour notre héro. 
Le héro est soit capturé ou mort. PARTIE TERMINÉ!!!`,
    video: "assets/gameover.mp4",
    img: "assets/gameover.jpg",
    options: [
      {
        text: "La partie est terminé, veuillez recommencer une nouvelle partie!",
        action: "goToChapter(`introduction`)",
      },
    ],
  },
  integration_armee: {
    subtitle: "Magnolia",
    text: `Malgus choisis d'accepter l'offre de la commandante. Suite à la décision du héro, Amavia lui expliqua que le royaume de Magnolia est en guerre contre des envahisseurs d'outre-mer que l'on appel les discariens :
 Une race hybride mi-homme mi-féline. Elle expliqua également que cela fait 10 ans que la guerre a commencé et que les armées de Magnolia perdaient du terrain
et que le royaume risquait depuis peu la défaite face à ces envahisseurs discariens. Elle finit en disant : "Voilà, la situation actuelle. est-ce que vous avez des questions ?"
Notre héro fit non de la tête. La commandante s'exclama : "Parfait dans cas, il est temps pour vous de choisir entre 4 factions de l'armée : furtif, guerriers, tacticien ou berserker." `,
    video: "assets/choices.mp4",
    img: "assets/histoirejeu.jpg",
    options: [
      {
        text: "Les furtifs",
        action: "goToChapter(`faction_1`)",
      },
      {
        text: "Les guerriers",
        action: "goToChapter(`faction_2`)",
      },
      {
        text: "Les tacticiens",
        action: "goToChapter(`faction_3`)",
      },
      {
        text: "Les berserkers",
        action: "goToChapter(`faction_4`)",
      },
    ],
  },
  faction_1: {
    subtitle: "Les furtifs",
    text: `Amavia fit la description de cette faction : "Les furtifs sont des soldats qui ont appris des méthodes permettant de mettre hors d'état de nuire ou de tuer leurs adversaires discariens.
En choisissant cette faction, tu apprendras alors les techniques de combats et les méthodes propre aux soldat furtifs et ton équipement militaire sera adapté pour convenir à cette faction
et modifiable au cours de ton périple dans cette guerre. La commandante de cette faction s'appelle Anna 28 ans."`,
    video: "assets/furtif.mp4",
    img: "assets/furtif.jpg",
    options: [
      {
        text: "Choisir",
        action: "goToChapter(`premiers_combats`)",
      },
      {
        text: "Revenir au menu des factions",
        action: "goToChapter(`integration_armee`)",
      },
    ],
  },
  faction_2: {
    subtitle: "Les guerriers",
    text: `Amavia fit la description de cette faction : "Les guerriers est la faction principale de l'armée de Magnolia.
En choisissant cette faction, tu recevras une formation guerrière et un équipement militaire conséquent à ton choix de faction et 
modifiable au cours de ton périple dans cette guerre. La commandante de cette faction s"appelle Iriana 27 ans"`,
    video: "assets/warrior.mp4",
    img: "assets/guerrier.jpg",
    options: [
      {
        text: "Revenir au menu des factions",
        action: "goToChapter(`integration_armee`)",
      },
    ],
  },
  faction_3: {
    subtitle: "Les tacticiens",
    text: `Amavia fit la description de cette faction : "Les tacticiens est une faction de soldat plus petite puisqu'elle ne compte que des gens ayant une grande intelligence 
et un instinct tactique très développé. Il s'agit de la faction la plus difficile, car la formation est très difficile mais payante à la fin. Par contre Malgus, pour le choix de l'équipement militaire tu devras faire preuve de discernement dans tes choix,
car cela aura une influence de comment le commandant de cette faction fera appel à toi pour les missions(Cette faction est la seule où ton choix d'équpement militaire ne peut être modifié qu'une fois).
Le commandant de cette faction s'appel Victor 40 ans.".`,
    video: "assets/tacticien.mp4",
    img: "assets/tacticien.jpg",
    options: [
      {
        text: "Revenir au menu des factions",
        action: "goToChapter(`integration_armee`)",
      },
    ],
  },
  faction_4: {
    subtitle: "Les berserkers",
    text: `Amavia fit la description de cette faction : Les berserkers sont une faction de soldat que l'on pourrait qualifié de casse-cou dans le sens qu'ils ne réfléchissent pas avant de foncer sur l'ennemi discarien.
Pourtant, elles très efficaces même s'ils subissent des pertes importantes en conséquence de leur précipitation sur le champs de bataille. Cette faction à la particularité
de combiner l'apprentissage des furtifs et des guerriers pour ainsi donner un style de combat improvisé, mais efficace. Quant, à l'équipement militaire, la combinaison mentionnée plus haut te permet d'avoir accès aux équipements des deux factions
et modifiable au cours de ton périple dans cett guerre. Le commandant s'appel Ivan l'audacieux 32 ans.`,
    video: "assets/berserker.mp4",
    img: "assets/berserker.jpg",
    options: [
      {
        text: "Revenir au menu des factions",
        action: "goToChapter(`integration_armee`)",
      },
    ],
  },
  premiers_combats: {
    subtitle: "Marche vers les envahisseurs discariens",
    text: `Malgus choisis la faction furtive. Une fois que la formation des furtives fut terminée, la commandante Amavia vint lui expliquer que le choix d'arme au début
se compose d'une arme à feu à projectile magique, d'une épée et/ou poignard. Par la suite, Malgus prit la route vers ces premiers combats. Cela faisait 3 mois qu'il était apparu dans ce monde
et qu'il avait intégré l'armée de Magnolia. Les premiers affrontements furent difficile, mais victorieux au cours duquel
il se distingua par sa bravoure, son intelligence et son travail d'équipe avec ces frères et soeurs d'arme. 
Ces faits d'arme lui permis de gagner la confiance des autres et des alliés.`,
    video: "assets/combat.mp4",
    img: "assets/combat.jpg",
    options: [
      {
        text: "Malgus se fait de nombreux alliés dont les commandantes Amavia et Anna",
        action: "goToChapter(`confiance_mutuelle`)",
      },
    ],
  },
  confiance_mutuelle: {
    subtitle: "Frères et soeurs d'arme unis",
    text: `Par ses actes, sa bravoure, son intelligence et son travail d'équipe,
Malgus se fit de nombreux alliés dont certaines devirent plus proche au point de développer des sentiments pour lui. 
Dont, la commandante Amavia et la commandante Anna. Par contre, notre héro ne se doutait point que l'un de ses nouveaux alliés dans sa faction avait un secret potentiellement lourds de conséquences pour notre héro.`,
    img: "assets/allié.jpg",
    options: [
      {
        text: "Qui est le traître?",
        action: "goToChapter(`consternation`)",
      },
    ],
  },
  consternation: {
    subtitle: "Trahison d'un ami",
    text: `Au cours des 2 mois suivant, malgré quelques défaites mineures, Malgus et sa faction remportèrent d'importantes victoires poussant l'ennemi discarien dans ses derniers retranchements.
Au cours de cette série de victoire, Malgus se rapprocha des commandantes Amavia et Anna, se fit des amis 
dont Marcel qui avait un comportement étrange depuis quelque temps. Sachant que la victoire finale était proche, l'armée de Magnolia lança le dernier assaut contre les discariens.
Pendant, la bataille Malgus et Marcel se retrouvèrent séparer des autres. Malgus dit :"Ne perd pas espoir, nous allons nous en sortir et rejoindre les autres."
Marcel dit :"Moi oui, mais pas toi!" avant de lui assener un coup derrière la tête. Et, en tombant à terre Malgus dit : "Pourquoi Marcel!? Pourquoi cette trahison?"
Marcel répondit : "Je n'avais pas le choix, j'avais le choix de te trahir pour qu'ils t'interrogent ou mourrir. Et, j'ai choisi de vivre!!!".`,
    video: "assets/treason.mp4",
    img: "assets/trahison.jpg",
    options: [
      {
        text: "Malgus capturé!",
        action: "decision()",
      },
      {
        text: "Est-ce que Malgus parvient à s'échapper ?",
        action: "decision1()",
      },
    ],
  },
  fuite_hero: {
    subtitle: "Retour au front",
    text: `Suite à cette trahison de Marcel. Malgus était sur le point d'être capturé, mais il parvient à fuir 
et à rentrer au camps de base des furtifs, où il raconta la trahison de Marcel.
Celui-ci fut jeter au cachot en attendant son sort. `,
    img: "assets/évasion.jpg",
    options: [
      {
        text: "Poursuite des derniers combats pour la victoire finale",
        action: "goToChapter(`consecration`)",
      },
    ],
  },
  consecration: {
    subtitle: "Magnolia victorieuse",
    text: `La dernière bataille s'engagea dans sa dernière ligne droite où l'armée de Magnolia et Malgus furent au bout du compte victorieux et repoussèrent l'ennemi discarien hors du royaume. 
Il était maintenant temps de parler de paix et d'avenir.`,
    img: "assets/victoire.jpg",
    options: [
      {
        text: "La vie repris son cours et Marcel fut jugé",
        action: "goToChapter(`paix`)",
      },
    ],
  },
  paix: {
    subtitle: "Retour triomphale",
    text: `Un mois passa suite à la victoire sur l'ennemi, au cours duquel l'ordre fut rétablit dans royaume ayant été ravagé par le chaos de la guerre.
Le traite Marcel fut condamnné à la prison à vie. Des célébrations grandioses furent organisées pour les habitants du royaume pour fêter la victoire.
La paix était de nouveau une réalité tangible. L'avenir s'annonce radieux pour Malgus.`,
    img: "assets/paix.jpg",
    options: [
      {
        text: "Épilogue",
        action: "goToChapter(`epilogue`)",
      },
    ],
  },
  epilogue: {
    subtitle: "Fin heureuse",
    text: `Une fois que les célébrations furent terminées, il était temps pour lui d'avoir une fin heureuse dans ce royaume qui était devenu le sien
(sachant qu'il ne savait pas comment retourner d'où il venait à l'origine).
Il maria la commandante Anna des furtifs et ce fut la meilleure décision qu'il prit depuis son arrivé. 
Félicitation!!! Vous venez de finir le jeu, si vous voulez rejouer appuyer sur le bouton nouvelle partie.
Je vous remercie d'avoir jouer à mon jeu!`,
    video: "assets/newgame.mp4",
    img: "assets/finheureuse.jpg",
    options: [
      {
        text: "Nouvelle partie?",
        action: "goToChapter(`introduction`)",
      },
    ],
  },
};

let finalChoice = 0;

function decision() {
  finalChoice = 1;
  goToChapter(`fuite_hero`);
}

function impactDecision() {
  if (finalChoice == true) {
    goToChapter(`fuite_hero`);
  } else {
    goToChapter(`destin_negatif`);
  }
}

let finalChoice2 = 0;
function decision1() {
  finalChoice2 = 1;
  if (finalChoice2 == false) {
    goToChapter(`destin_negatif`);
  } else {
    goToChapter(`fuite_hero`);
  }
}

let finalChoice3 = 0;
function decision3() {
  finalChoice3 = 1;
  if (finalChoice3 == true) {
    goToChapter(`destin_negatif`);
  } else {
    goToChapter(`destin_positif`);
  }
}

let finalChoice4 = 0;
function decision4() {
  finalChoice4 = 1;
  if (finalChoice4 == true) {
    goToChapter(`destin_positif`);
  } else {
    goToChapter(`destin_negatif`);
  }
}

let audio = new Audio("assets/finishHim.mp3");

function goToChapter(chapterName) {
  let chapitre = chaptersObj[chapterName];
  localStorage.setItem("chapitre", chapterName);
  let boite = document.querySelector(".texte");
  boite.innerText = chapitre.text;
  let sousTitre = document.querySelector(".subtitle");
  sousTitre.innerText = chapitre.subtitle;
  let image = document.querySelector(".image");
  image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img"/>`;
  let buttons = document.querySelector(".bouton");

  audio.play();

  console.log(audio);
  let video = document.querySelector(".video");
  image.innerHTML = `<video src="${chaptersObj[chapterName].video}" alt="chapter_video"/>`;
  if (chaptersObj[chapterName].video) {
    image.innerHTML = `<video class="video" src="${chaptersObj[chapterName].video}" loop autoplay muted alt="chapter_video"/>`;
  } else {
    image.innerHTML = `<img src="${chaptersObj[chapterName].img}" alt="chapter_img"/>`;
  }
  console.log(chaptersObj[chapterName].video);
  let text = "";
  chapitre.options.forEach(function (opt) {
    let index = 0;
    index < chaptersObj[chapterName].options.length;
    index++;
    text += `<button class="no1" onclick="${opt.action}">${opt.text}</button>`;
  });
  buttons.innerHTML = text;
  console.log(chapitre.subtitle);
  console.log(chapitre.text);
  console.log(audio);
}
if (localStorage.getItem("chapitre") != undefined) {
  goToChapter(localStorage.getItem("chapitre"));
} else {
  goToChapter("introduction");
  console.log(goToChapter);
}
