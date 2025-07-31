const proyectos = [
  {
    id: 1,
    titulo: 'Performance Generativa Experimental #1',
    descripcion: "Performance audiovisual experimental que investiga les fronteres entre cos humà, màquina i dades digitals. La peça es va desenvolupar a partir d’un entorn híbrid construït amb dispositius de videojoc retro, sistemes d’intel·ligència artificial i una arquitectura visual generativa sincronitzada amb síntesi d’àudio neuronal. A través d’una estructura improvisada, l'artista activa respostes visuals i sonores en temps real mitjançant interfícies personalitzades que manipulen dades en brut i elements arxivats. El projecte planteja una reflexió crítica sobre la desmaterialització del subjecte digital i la persistència del gest en entorns dominats per processos algorítmics.",
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #1',
    bio: "Creador/a multidisciplinari/a amb una pràctica situada entre la tecnologia obsoleta i les possibilitats emergents de la creació algorítmica. El seu treball parteix d’una mirada arqueològica de les interfícies digitals, utilitzant eines de videojocs antics, llenguatges de programació creativa i intel·ligència artificial com a mitjans per generar experiències sonores i visuals en temps real. Investiga la fricció entre el cos i el codi, explorant com les màquines poden interpretar gestos humans, errors i dades residuals per generar nous llenguatges performatius. Ha presentat el seu treball en formats que van des del live coding fins a la instal·lació interactiva, sempre amb una aproximació crítica als imaginaris tecnològics contemporanis.",
    palabrasClave: ['electrònic', 'computacional', 'generativa', 'algorítmic', 'intel·ligència artificial', 'generat per IA', 'xarxa neuronal', 'temps real', 'performance', 'àudio generatiu', 'experimentació sonora', '8 bits', 'visuals']
  },
  {
    id: 2,
    titulo: "Instal·lació Sonora de Codificació en Viu",
    descripcion: "Instal·lació sonora concebuda com un entorn d’improvisació computacional on el codi esdevé partitura, eina i escenografia. L’obra gira al voltant del concepte de ciutat en mutació, i utilitza sons capturats en espais industrials abandonats, arxius sonors de fonts obertes i fragments de veu processada mitjançant xarxes neuronals. A través del live coding, l'artista construeix i destrueix textures sonores en temps real, generant una narrativa en constant evolució. La peça posa en tensió el control humà i l'autonomia del sistema, tot plantejant preguntes sobre el paper de l'intèrpret en un escenari on la màquina també improvisa. Els algorismes emprats incorporen mecanismes d'adaptació al públic, amb lleugeres variacions generades a partir de les dades ambientals del lloc on s'exposa l'obra.",
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #2',
    bio: "Artista sonor/a i programador/a creatiu/va que utilitza el codi com a mitjà d’expressió immediata i com a vehicle de recerca crítica. El seu treball se situa a l’encreuament entre la improvisació musical, la programació algorítmica i l’arqueologia sonora. Ha desenvolupat sistemes d’escolta computacional capaços de reinterpretar sons arxivats o enregistraments de camp mitjançant xarxes neuronals lleugeres, sempre mantenint una forta connexió amb la improvisació com a pràctica oberta i relacional. En les seves performances i instal·lacions, el codi s’escriu i s’executa en viu, fent visible el procés creatiu com a part central de l’experiència. El seu enfocament busca generar situacions performatives que qüestionin la noció d’autoria, temps lineal i l’estètica del control dins de les arts digitals.",
    palabrasClave: ['computacional', 'interactiu', 'algorítmic', 'intel·ligència artificial', 'xarxa neuronal', 'temps real', 'live coding', 'arts en viu', 'improvisació', 'soroll', 'sons crowdsourced']
  },
  {
    id: 3,
    titulo: "Interacció Rítmica amb IA Modular",
    descripcion: "Performance sonora basada en la creació d’un sistema híbrid que integra síntesi modular analògica amb intel·ligència artificial de baixa latència. L’obra parteix d’un instrument construït a mida, que combina components Eurorack i sensors que detecten gestos físics, els quals alimenten un model d’aprenentatge automàtic entrenat per generar respostes rítmiques en temps real. L’artista estableix un diàleg amb la màquina, alternant control i deixant espais per a l’autonomia del sistema. Els patrons emergents no són completament previsibles, i el resultat és una improvisació en forma de polirítmies sintètiques, timbres imprevistos i errors que esdevenen material compositiu. El projecte reflexiona sobre la coexistència entre processos humans i automatitzats, i les maneres en què la màquina pot aprendre del gest humà sense substituir-lo.",
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #3',
    bio: "Creador/a sonor/a amb interès en les interseccions entre síntesi modular, gest performatiu i intel·ligència artificial. La seva pràctica es fonamenta en la construcció de sistemes d’interacció on l’humà i la màquina comparteixen l’agència creativa. Ha desenvolupat instruments propis que responen al moviment corporal, al pols biològic o a la intensitat lumínica, buscant sempre una relació orgànica entre hardware i software. Les seves performances sovint adopten un format d’improvisació estructurada, on el control de la màquina és parcial i els sistemes d’aprenentatge generen variacions subtils a partir de l’experiència acumulada. La seva obra s’inscriu en una tradició de recerca tecnopoètica on el soroll, el ritme i l’error esdevenen formes d’expressió amb vida pròpia.",
    palabrasClave: ['electrònic', 'performance', 'so', 'generatiu', 'improvisació', 'interactiu', 'temps real', 'controlador']
  },
  {
    id: 4,
    titulo: "Antologia Vocal Generada",
    descripcion: "Projecte escènic centrat en la veu com a matèria sonora, històrica i tecnològica. L’obra presenta una composició performativa en què veus sintètiques, generades per xarxes neuronals, canten fragments de cants litúrgics, cançons tradicionals i poesia sonora en idiomes diversos. Aquest corpus vocal ha estat construït mitjançant entrenament de models d’IA sobre arxius sonors públics, combinant síntesi granular, deep learning i manipulació espectral. A l’espai escènic, l’intèrpret combina aquestes veus artificials amb la seva veu en directe, generant un espai acústic on passat i futur coexisteixen. L’obra reflexiona sobre la transmissió cultural, la preservació vocal i la mutació de la memòria oral en entorns digitals.",
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista:'Artista #4',
    bio: "Artista vocal i investigadora interdisciplinària que treballa en la cruïlla entre arxiu, veu i tecnologia generativa. El seu interès principal rau en la veu com a dispositiu d’identitat i com a territori de ficció. Mitjançant eines d’intel·ligència artificial i síntesi vocal, explora la manera com les màquines poden reproduir, deformar o imaginar veus que mai han existit. Ha desenvolupat pràctiques que combinen la recerca etnomusicològica amb tècniques de machine learning, abordant qüestions relacionades amb l’autoria, la representació i la memòria cultural. El seu treball sovint incorpora la seva pròpia veu en directe, posant en tensió la presència física i la virtualitat sonora, tot generant una experiència híbrida que apel·la a la sensibilitat i a la crítica.", 
    palabrasClave: ['veu', 'electrònic', 'performance', 'experimentació sonora', 'aprenentatge automàtic', 'xarxa neuronal']
  },
  {
    id: 5,
    titulo: "Emergència de Ritmes Audiovisuals",
    descripcion: "Performance audiovisual en temps real que articula ritmes generats algorítmicament amb imatges sintètiques. El projecte utilitza una arquitectura de múltiples models d’intel·ligència artificial entrenats en ritmes electrònics, patrons visuals i dinàmiques escèniques. Cada sessió es presenta com una improvisació única, on els loops i textures sonores es construeixen en directe mitjançant la manipulació d’inputs textuals i gestuals, mentre que els visuals es generen per mitjà de tècniques de síntesi difusiva i transformació latent. La peça proposa un nou tipus de performance DJ/VJ on la màquina no només reprodueix, sinó que crea contingut original en resposta als estímuls escènics i al públic.", 
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #5',
    bio: "Artista digital amb una pràctica centrada en la generació d'entorns audiovisuals vius mitjançant sistemes d'intel·ligència artificial i codificació creativa. El seu treball es nodreix de la cultura club, les estètiques del glitch i els processos generatius, integrant-los en una recerca contínua sobre el ritme com a fenomen multimodal. Ha desenvolupat interfícies personalitzades per al control simultani de so i imatge, creant escenaris performatius on el cos, el codi i la màquina dialoguen sense jerarquia fixa. L’artista entén l’escena com un espai d’escolta expandida, on l’atzar, l’error i la repetició esdevenen formes de resistència davant de la hiperoptimització digital.", 
    palabrasClave: ['intel·ligència artificial', 'audiovisual', 'generat en temps real', 'DJ', 'performance', 'visuals generatius', 'composició', 'improvisació']
  },
  {
    id: 6,
    titulo: "Configuració Variable #1",
    descripcion: "Instal·lació generativa concebuda com una estructura mutacional que combina so, llum i dades biomètriques. La peça es basa en una arquitectura algorítmica que reconfigura constantment les relacions entre els elements audiovisuals en funció de variables ambientals i de presència humana. El sistema integra múltiples capes d’interacció: des de sensors que recullen temperatura, moviment i pols, fins a motors de síntesi sonora que reaccionen a aquests estímuls. L’obra s’activa i s’organitza a partir d’una lògica de complexitat no lineal, inspirada en teories de sistemes vius i xarxes adaptatives. El resultat és una experiència envolvent, inestable i sempre diferent, que convida el públic a participar en la construcció d’un espai sensorial emergent.", 
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #6',
    bio: "Creador/a interdisciplinari/a amb una pràctica que travessa l’art generatiu, l’arquitectura d’informació i la teoria crítica. El seu treball explora les formes en què la tecnologia pot generar estructures vives i especulatives, posant en tensió les nocions d’ordre i caos. Ha desenvolupat sistemes de composició basats en regles evolutives, sistemes complexos i ecosistemes digitals. Les seves instal·lacions es caracteritzen per la capacitat de transformació constant i per la seva obertura a la interpretació del públic com a agent actiu. L’artista treballa sovint amb dades ambientals o corporals, convertint-les en matèria expressiva que interpel·la el límit entre l’individu i l’estructura global.", 
    palabrasClave: ['electrònic', 'so', 'arts en viu', 'reconfiguració', 'interactiu', 'experimentació sonora']
  },
  {
    id: 7,
    titulo: "Taula Magnètica",
    descripcion: "Performance sonora que combina tecnologia analògica, màgia simbòlica i IA especulativa. A través de la manipulació d’objectes sensibles al camp magnètic i a les vibracions latents, l’artista activa un conjunt d’instruments experimentals que interactuen amb un sistema de síntesi neuronal entrenat per detectar patrons energètics no convencionals. L’obra juga amb la idea de la màquina com a mèdium: un dispositiu capaç de canalitzar veus ocultes, dades perdudes o memòries espectrals. La peça crea una atmosfera ritual, on els gestos performatius es barregen amb sons distorsionats, interferències i presències sonores no identificades. L’escenari esdevé un espai liminal entre tecnologia, intuïció i misteri digital.",
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #7',
    bio: "Artista experimental que treballa en la frontera entre ciència ficció, so generatiu i pràctiques màgiques contemporànies. El seu treball combina objectes trobats, circuits modificats i interfícies digitals que responen a estímuls invisibles o simbòlics. Interessat/da en les zones d’ombra de la tecnologia, investiga com la màquina pot ser un espai de projecció poètica, mística o subversiva. Ha desenvolupat dispositius que funcionen com a ponts entre cos, so i forces impredictibles, obrint canals de comunicació amb el que normalment queda fora del registre computacional. Les seves obres són rituals d’escolta, invocacions del glitch i jocs amb l’atzar controlat.", 
    palabrasClave: ['electrònic', 'performance', 'tactilitat', 'so', 'sintetitzador experimental', 'soroll']
  },
  {
    id: 8,
    titulo: "Màquines Meta-Musicals #1",
    descripcion: "Instal·lació audiovisual concebuda com un sistema autoorganitzat que genera música i llum a partir de dades preexistents i regles de transformació estocàstica. La peça utilitza algoritmes inspirats en les cadenes de Markov per transformar mostres de músiques tradicionals i rituals sonors en noves formes sonores imprevisibles. La llum, el moviment i el so estan sincronitzats mitjançant una arquitectura computacional que busca patrons emergents i moments de desordre significatiu. L’espai d’exhibició actua com un ecosistema en equilibri inestable, on l’obra mai no es repeteix exactament igual. Aquesta màquina meta-musical no només reprodueix música, sinó que especula sobre com una màquina pot somiar amb músiques que encara no existeixen.", 
    videoSrc: '../src/data/rain-intro.mp4',
    videoSrc2: '../src/data/rain-intro2.mp4',
    imagenSrc: '../src/data/image-sample.jpg',
    imagenSrc2: '../src/data/image-sample2.jpg',
    nombreArtista: 'Artista #8',
    bio: "Creador/a de sistemes generatius que treballa amb so, escultura i codi per investigar l’autoorganització dins de processos artístics. El seu treball explora la idea de la màquina com a entitat creativa, capaç de construir universos sonors propis a partir d’un conjunt reduït de regles. Treballa amb dades culturals, mostres arxivades i llenguatges musicals tradicionals que són transformats a través de models predictius i glitchs digitals. Les seves instal·lacions busquen activar una escolta no lineal, suggerint una narrativa fragmentària i especulativa que s’estén més enllà de l’humà. L’artista construeix dispositius que són alhora escultures, instruments i sistemes pensants.", 
    palabrasClave: ['instal·lació', 'so', 'site-specific', 'aprenentatge automàtic', 'sinestèsia', 'markov']
  },
];

export default proyectos;
