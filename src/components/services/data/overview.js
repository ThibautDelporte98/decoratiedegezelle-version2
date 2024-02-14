import imgExterieur from "../../../images/Services/Exterieur/Exterieur.webp";
import imgInterieur from "../../../images/Services/Interieur/interieur.webp";
import imgInterieurMuur from "../../../images/Services/Interieur/A12.webp";
import imgInterieurMuur2 from "../../../images/Services/Interieur/A4.webp";
import imgInterieurPlafond from "../../../images/Services/Interieur/A5.webp";
import imgInterieurPlafond2 from "../../../images/Services/Interieur/A2.webp";
import imgInterieurHoutwerk from "../../../images/Services/Interieur/A7.webp";
import imgInterieurHoutwerk2 from "../../../images/Services/Interieur/A10.webp";
import AquaSensa from "../../../images/Services/Decoratieve technieken/Overview.webp";
import Plamuurwerken from "../../../images/Services/Plamuurwerken/Overview.webp";
import Plamuurwerken2 from "../../../images/Services/Plamuurwerken/A1.webp";
import Plamuurwerken3 from "../../../images/Services/Plamuurwerken/A13.webp";
import Plamuurwerken4 from "../../../images/Services/Plamuurwerken/A19.webp";
import Behangen from "../../../images/Services/Behangen/Overview.webp";
import Behangen2 from "../../../images/Services/Behangen/A1.webp";
import Behangen3 from "../../../images/Services/Behangen/A2.webp";
import Raamdecoratie from "../../../images/Services/Raamdecoratie/Overview.webp";
import Raamdecoratie2 from "../../../images/Services/Raamdecoratie/1.webp";
import ServiceImg from "../../../images/Services/Behangen/vliesa1.jpeg";
import ServiceImg2 from "../../../images/Services/Behangen/vliesa2.jpeg";
import ExDakgoot from "../../../images/Services/Exterieur/A3.webp";
import ExDakgoot2 from "../../../images/Services/Exterieur/A4.webp";
import ExDoor from "../../../images/Services/Exterieur/A1.webp";
import ExDoor2 from "../../../images/Services/Exterieur/A2.webp";
import Gevel1 from '../../../images/Services/Exterieur/Gevel1.webp';
import Gevel2 from '../../../images/Services/Exterieur/Gevel2.webp';
import Aqua from '../../../images/Services/Decoratieve technieken/AquaSensa/AquaSensa1.webp';
import Aqua2 from '../../../images/Services/Decoratieve technieken/AquaSensa/AquaSensa2.webp';
import Calco from '../../../images/Services/Decoratieve technieken/Calco/Calco1.webp';
import Calco2 from '../../../images/Services/Decoratieve technieken/Calco/Calco2.webp';
import Clay from '../../../images/Services/Decoratieve technieken/Clay/Claystuc1.webp';
import Clay2 from '../../../images/Services/Decoratieve technieken/Clay/Claystuc2.webp';
import Tusk from '../../../images/Services/Decoratieve technieken/Tusk/tusk1.webp';
import Tusk2 from '../../../images/Services/Decoratieve technieken/Tusk/tusk2.webp';


const Services = [
  {
    id: 1,
    url: 'interieur',
    image:imgInterieur,
    title: 'Interieur',
    subject: "plafond, muur & houtwerk schilderen",
    IntroTxt:`Transformeer uw interieur met professioneel binnenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },

    ],
    Services: [
      {
        id: 1,
        category:"Interieur",
        subject:"Binnenschilderwerk",
        title: "Plafondschilderen",
        customOrder:false,
        descriptions:[
          "Het plafond speelt een cruciale rol in de uitstraling van elke kamer, gezien het vaak het grootste en meest opvallende oppervlak is. Wanneer het plafond last heeft van verkleuring of veroudering, kan dit de hele ruimte negatief beïnvloeden. Om dit te voorkomen, is het essentieel om het plafond regelmatig te laten schilderen. Hier komen wij in beeld als professionele schilders. Wij beschikken over de expertise om u te helpen bij het maken van de juiste keuzes voor verf en afwerkingen, specifiek voor uw plafond. Met onze vakkundigheid zorgen we ervoor dat het schilderwerk snel en efficiënt wordt uitgevoerd, met minimaal ongemak voor u als klant.",
        ],
        image1:imgInterieurPlafond,
        image2:imgInterieurPlafond2,

      },
      {
        id: 2,
        category:"Interieur",
        subject:"Binnenschilderwerk",
        title: "Schilderen van muren",
        customOrder:false,
        descriptions:[ 
          "Geef uw interieur een stralende upgrade met prachtig geschilderde binnenmuren! Muren hebben een enorme invloed op de uitstraling van elke kamer. Ons professionele schilderteam staat voor u klaar om uw muren snel en efficiënt nieuw leven in te blazen. Kies voor een frisse look, bedek beschadigingen en vlekken, en transformeer de sfeer van uw ruimte met een nieuwe verflaag.Ontdek zelf de verbluffende resultaten van onze gerealiseerde projecten. Vraag u offerte aan en laat uw interieur stralen!"
        ],
        image1:imgInterieurMuur,
        image2:imgInterieurMuur2,
      },
      {
        id: 3,
        category:"Interieur",
        subject:"Binnenschilderwerk",
        title: "Houtwerk/Lakwerk",
        customOrder:true,
        descriptions:[ 
          "Geef uw houtwerk een prachtige afwerking met professioneel lakwerk! Of het nu gaat om meubels, deuren, of ramen, ons ervaren team staat klaar om uw houten oppervlakken te transformeren. Met zorgvuldige selectie van hoogwaardige materialen en nauwkeurig vakmanschap, bieden wij duurzame bescherming en verbeteren we de natuurlijke schoonheid van uw hout. Geef uw ruimtes een tijdloze uitstraling en verhoog de levensduur van uw houtwerk. Ontvang vandaag nog een offerte en ontdek de verbluffende resultaten van onze projecten!"
        ],
        image1:imgInterieurHoutwerk,
        image2:imgInterieurHoutwerk2,
      },
      

    ],
  },
  {
    id: 2,
    url: 'exterieur',
    image:imgExterieur,
    title: "Exterieur",
    subject: "buiten houtwerk, gevel schilderen & dakgoot schilderen",
    IntroTxt:`Transformeer uw exterieur met professioneel buitenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },

    ],
    Services: [
      {
        id: 1,
        category:"Exterieur",
        subject:"Buitenschilderwerk",
        title: "Buiten houtwerk",
        customOrder:true,

        descriptions:[ 
          "Geef uw houtwerk een prachtige afwerking met professioneel lakwerk! Of het nu gaat om omheiningen, deuren, of ramen, ons ervaren team staat klaar om uw houten oppervlakken te transformeren. Met zorgvuldige selectie van hoogwaardige materialen (BOSS paints) en nauwkeurig vakmanschap, bieden wij duurzame bescherming en verbeteren we de natuurlijke schoonheid van uw hout. Geef uw ruimtes een tijdloze uitstraling en verhoog de levensduur van uw houtwerk. Ontvang vandaag nog een offerte en ontdek de verbluffende resultaten van onze projecten!"
        ],
        image1:ExDoor,
        image2:ExDoor2,
      },
      {
        id: 2,
        category:"Exterieur",
        subject:"Buitenschilderwerk",
        title: "Gevels Schilderen",
        customOrder:false,

        descriptions:[ 
          "Geef uw huis een adembenemende transformatie met professioneel gevelschilderwerk! Uw gevel is het visitekaartje van uw huis, en met onze expertise geven wij het de perfecte uitstraling. Ons ervaren schilderteam gebruikt hoogwaardige verfproducten en technieken om uw gevel te beschermen tegen weersinvloeden en veroudering. Of het nu gaat om een opfrisbeurt van de bestaande kleur of een volledig nieuwe look, wij leveren duurzame en esthetisch verbluffende resultaten. Ontvang een gratis offerte en zie hoe uw huis met onze gevelschilderservice weer tot leven komt!"
        ],
        image1:Gevel1,
        image2:Gevel2,
      },
      {
        id: 2,
        category:"Exterieur",
        subject:"Buitenschilderwerk",
        title: "Dakgoot Schilderen",
        customOrder:true,

        descriptions:[ 
          "Geef uw woning de finishing touch met onze professionele dakgootschilderingsservice! Een goed onderhouden dakgoot is essentieel voor de bescherming van uw huis tegen water- en weerschade. Ons gespecialiseerde team staat klaar om uw dakgoten te schilderen, niet alleen voor esthetische doeleinden, maar ook voor duurzame bescherming. Wij gebruiken hoogwaardige verf die speciaal is ontworpen om bestand te zijn tegen alle weersomstandigheden. Door onze nauwkeurige en efficiënte aanpak zorgen wij voor een strakke afwerking die niet alleen de uitstraling van uw huis verbetert, maar ook de levensduur van uw dakgoten verlengt. Vraag vandaag nog een offerte aan en ontdek hoe onze dakgootschilderingsservice uw huis naar een hoger niveau tilt!"
        ],
        image1:ExDakgoot,
        image2:ExDakgoot2,
      },

    ],
  },
  {
    id: 3,
    url: 'decoratieve-technieken',
    image:AquaSensa,
    title: "Decoratieve technieken",
    subject: "aqae sensa, calco, tusk & claystuc",
    IntroTxt:`Transformeer uw interieur met onze decoratieve technieken! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },
    ],
    Services: [
      {
        id: 1,
        category:"Decoratieve technieken",
        subject:"Decoratieve Technieken",
        title: "Aqua-Sensa (Voorbereiding Ardex 8 + 9 natte omgeving)",
        customOrder:false,

        descriptions:[
          "Ontdek het vakmanschap van ons team met Aqua Sensa, de innovatieve steenimitatietechniek op basis van cement die zowel uw wanden als vloeren transformeert. Bij ons bent u verzekerd van expertise en precisie. Onze ervaren vakmensen begrijpen de nuances van deze unieke techniek en passen deze met zorg toe, waardoor uw ruimtes de uitstraling van echte natuursteen krijgen. We begeleiden u stap voor stap, vanaf het selecteren van de juiste tinten tot de perfecte applicatie. Vraag vandaag nog een offerte aan en ontdek hoe onze decoratieve techniek uw huis naar een hoger niveau tilt!",
        ],
        image1:Aqua,
        image2:Aqua2,

      },
      {
        id: 2,
        category:"Decoratieve technieken",
        subject:"Decoratieve Technieken",
        title: "Calco",
        customOrder:true,

        descriptions:[ 
          "Betover uw binnenruimtes met de subtiele elegantie van Calco, onze decoratieve techniek voor binnenmuren op basis van kalkpoeder en bindpasta. Deze verfijnde methode biedt niet alleen een natuurlijke en steenachtige uitstraling, maar ook zachte kleurnuances die uw interieur een warme en uitnodigende sfeer geven. Bij ons ontdekt u de kunst van Calco, waar meesterlijke ambacht en moderne esthetiek samenkomen! Vraag een gratis offerte aan en betover jouw huis met onze Calco decoratieve techniek."
        ],
        image1:Calco,
        image2:Calco2,
      },
      {
        id: 3,
        category:"Decoratieve technieken",
        subject:"Decoratieve Technieken",
        title: "Tusk",
        customOrder:true,

        descriptions:[ 
          "Tusk is een stuctechniek op basis van geslepen glasparels en blinkt uit in functionaliteit. Speciaal ontwikkeld voor publieke ruimtes, maar ook populair in woonhuizen. Want ook op esthetisch vlak heeft Tusk heel wat te bieden. De licht gekorrelde reliëfstructuur creëert een warme, aangename sfeer. Vraag een gratis offerte aan en betover jouw huis met onze Tusk decoratieve techniek."
        ],
        image1:Tusk,
        image2:Tusk2,
      },
      {
        id: 4,
        category:"Decoratieve technieken",
        subject:"Decoratieve Technieken",
        title: "Claystuc",
        customOrder:false,

        descriptions:[ 
          "Transformeer uw interieur tot een oase van rust en natuurlijke schoonheid met Claystuc, een natuurlijk gesteente dat uw woning omhult met een dikke, beschermende laag. Deze techniek speelt in op het gevoel van geborgenheid met zijn zachte reliëf en natuurlijke kleuren, waardoor elke ruimte een gezellige plek wordt. Bij Claystuc draait alles om veelzijdigheid; het kan op verschillende manieren bewerkt worden, waardoor uw creatieve visie tot leven komt. Vraag een gratis offerte aan en betover jouw huis met onze Claystuck decoratieve techniek."
        ],
        image1:Clay,
        image2:Clay2,
      },
    ],
  },
  // {
  //   id: 4,
  //   image:Egaliseren,
  //   subject: "Vloer Egaliseren",
  //   link: '../Services/IndoorPainting.js',
  //   IntroTxt:
  //   `Transformeer uw interieur met professioneel binnenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.Ontdek de veelzijdigheid van binnenschilderwerk en de impact ervan op uw interieur. Laat ons enkele veelvoorkomende opties onder de loep nemen, zodat u kunt zien hoe deze simpele ingrepen een wereld van verschil kunnen maken voor de uitstraling van uw huis.`,
  //   Steps: [
  //     {
  //       id: 1,
  //       title: "Neem contact met ons op.",
  //       descriptions:[
  //         "Telefonisch",
  //         "Per mail.",
  //         "Website",
  //       ]

  //     },
  //     {
  //       id: 2,
  //       title: "Wij contacteren u",
  //       descriptions:[
  //         "Wij vragen de nodige info.",
  //         "Wij plannen een afspraak in",
  //       ]
  //     },
  //     {
  //       id: 3,
  //       title: "Ik kom tot bij u.",
  //       descriptions:[
  //         "Bespreking.",
  //         "Op meten.",
  //         "Advies.",
  //       ]
  //     },
  //     {
  //       id: 4,
  //       title: "De offerte",
  //       descriptions:[
  //         "Opmaak offerte.",
  //         "Prijs calculatie",
  //         "Opbellen voor akkoord.",
  //       ]
  //     },
  //     // Add more steps as needed
  //   ],
  //   Services: [
  //     {
  //       id: 1,
  //       category:"Interieur",
  //       subject:"Binnenschilderwerk",
  //       title: "Plafondschilderen",
  //       descriptions:[
  //         "Het plafond speelt een cruciale rol in de uitstraling van elke kamer, gezien het vaak het grootste en meest opvallende oppervlak is. Wanneer het plafond last heeft van verkleuring of veroudering, kan dit de hele ruimte negatief beïnvloeden. Om dit te voorkomen, is het essentieel om het plafond regelmatig te laten schilderen. Hier komen wij in beeld als professionele schilders. Wij beschikken over de expertise om u te helpen bij het maken van de juiste keuzes voor verf en afwerkingen, specifiek voor uw plafond. Met onze vakkundigheid zorgen we ervoor dat het schilderwerk snel en efficiënt wordt uitgevoerd, met minimaal ongemak voor u als klant.",
  //       ],
  //       image1:ServiceImg,
  //       image2:ServiceImg2,

  //     },
  //     {
  //       id: 2,
  //       category:"Interieur",
  //       subject:"Binnenschilderwerk",
  //       title: "Schilderen van muren",
  //       descriptions:[ 
  //         "Geef uw interieur een stralende upgrade met prachtig geschilderde binnenmuren!Muren hebben een enorme invloed op de uitstraling van elke kamer. Ons professionele schilderteam staat voor u klaar om uw muren snel en efficiënt nieuw leven in te blazen. Kies voor een frisse look, bedek beschadigingen en vlekken, en transformeer de sfeer van uw ruimte met een nieuwe verflaag.Ontdek zelf de verbluffende resultaten van onze gerealiseerde projecten. Vraag u offerte aan en laat uw interieur stralen!"
  //       ],
  //       image1:ServiceImg,
  //       image2:ServiceImg2,
  //     },
  //     // Add more steps as needed
  //   ],
  // },
  {
    id: 5,
    url: 'plamuurwerken',
    image:Plamuurwerken,
    title: "Plamuurwerken",
    subject: "plamuurwerken & plamuren van gipsplaten",
    IntroTxt:
    `Ontdek de kunst van professioneel plamuurwerk en geef uw interieur een nieuwe dimensie! Onze ervaren vakmannen zijn meesters in het vakkundig vullen van scheuren, deuken en oneffenheden, waardoor uw muren naadloos en strak worden. Laat ons u begeleiden bij het kiezen van de perfecte kleuren en afwerkingen die passen bij uw stijl, terwijl wij zorgen voor een snelle en efficiënte uitvoering zonder onnodige hinder. Transformeer uw ruimtes met onze expertise in plamuurwerken en creëer een interieur dat spreekt van vakmanschap en elegantie.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },
      // Add more steps as needed
    ],
    Services: [
      {
        id: 1,
        customOrder:true,
        category:"Plamuurwerken",
        subject:"Plamuurwerken",
        title: "Plamuurwerken",
        descriptions:[
          "Breng uw muren tot perfectie met onze professionele plamuur- en pleisterwerken! Onze ervaren vakmensen staan klaar om kleine scheuren, deuken en oneffenheden in uw muren moeiteloos te herstellen. Met zorg en precisie creëren we een gladde en egale ondergrond die ideaal is voor elke verdere afwerking. Of het nu gaat om een renovatieproject of een nieuwbouw, onze plamuur- en pleisterwerken zijn de basis voor een prachtige afwerking.",
        ],
        image1:Plamuurwerken2,
        image2:Plamuurwerken3,

      },
      {
        id: 2,
        category:"Plamuurwerken",
        subject:"Plamuurwerken",
        title: "Plamuren van gipsplaten",
        descriptions:[ 
          "Creëer moeiteloos gladde en naadloze oppervlakken met onze professionele plamuurwerken voor gipsplaten! Ons ervaren team specialiseert zich in het perfectioneren van gipsplaatwanden, waarbij we kleine imperfecties en naden vakkundig wegwerken. Met zorgvuldig aangebrachte plamuur zorgen we voor een gelijkmatige textuur en een onberispelijke afwerking, wat resulteert in muren die klaar zijn voor schilderwerk of behang."
        ],
        image1:Plamuurwerken,
        image2:Plamuurwerken4,
      },
    ],
  },  {
    id: 6,
    url: 'behangwerken',
    image:Behangen,
    title: "Behangwerken",
    subject: "behangen met motief & vliesbehang",
    IntroTxt:
    `Transformeer uw interieur met professioneel behangwerken! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren, motief en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },
      // Add more steps as needed
    ],
    Services: [
      {
        id: 1,
        customOrder:false,
        category:"Behangwerken",
        subject:"Behangwerken",
        title: "Behangen met motief",
        descriptions:[
          "Voeg een vleugje elegantie toe aan uw ruimte met ons behang met motief! Kies uit een uitgebreide collectie en stijlen, variërend van tijdloze klassiekers tot trendy moderne ontwerpen. Onze ervaren behangers zorgen voor een nauwkeurige installatie, waarbij elk motief perfect wordt uitgelijnd voor een naadloze afwerking. Vraag u offerte aan en laat je interieur stralen!",
        ],
        image1:Behangen2,
        image2:Behangen3,

      },
      {
        id: 2,
        customOrder:true,
        category:"Behangwerken",
        subject:"Behangwerken",
        title: "Vliesbehang",
        descriptions:[ 
          "Ontdek de verfijnde luxe van ons vliesbehang voor een moeiteloze stijlupgrade in uw interieur! Vliesbehang biedt niet alleen een strakke en naadloze afwerking, maar het is ook eenvoudig aan te brengen en te verwijderen Neem vandaag nog contact met ons op en ontdek hoe ons vliesbehang uw interieur kan verheffen met tijdloze elegantie."
        ],
        image1:ServiceImg,
        image2:ServiceImg2,
      },
    ],
  },
  {
    id: 7,
    url: 'raamdecoratie',
    image:Raamdecoratie,
    title: "Raamdecoratie",
    subject: "Gordijnen jaloezieën en meer",
    IntroTxt:
    `Transformeer uw interieur met raamdecoratie! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de juiste stof & kleuren, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions:[
          "Telefonisch",
          "Per mail.",
          "Website",
        ]

      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions:[
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ]
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions:[
          "Bespreking.",
          "Op meten.",
          "Advies.",
        ]
      },
      {
        id: 4,
        title: "De offerte",
        descriptions:[
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ]
      },
    ],
    Services: [
      {
        id: 1,
        customOrder:true,
        category:"Raamdecoratie",
        subject:"Raamdecoratie",
        title: "Gordijnen, jaloezieën en meer",
        descriptions:[
          " Of u nu op zoek bent naar stijlvolle gordijnen, moderne jaloezieën, sfeervolle shutters of praktische rolgordijnen, wij hebben de perfecte oplossing voor elk raam in uw huis. Onze deskundige adviseurs helpen u graag bij het kiezen van de juiste stoffen. Vraag vandaag nog gratis advies!",
        ],
        image1:Raamdecoratie,
        image2:Raamdecoratie2,

      },

    ],
  },
];

export default Services;
