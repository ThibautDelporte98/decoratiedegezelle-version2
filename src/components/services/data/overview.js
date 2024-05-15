import imgExterieur from "../../../images/Services/Exterieur/Exterieur.webp";
import imgInterieur from "../../../images/Services/Interieur/interieur.webp";
import imgInterieurMuur from "../../../images/Services/Interieur/interieur-muur.webp";
import imgInterieurPlafond from "../../../images/Services/Interieur/interieur-plafond.webp";
import imgInterieurHoutwerk from "../../../images/Services/Interieur/interieur-houtwerk.webp";
import AquaSensa from "../../../images/Services/Decoratieve technieken/Overview.webp";
import Plamuurwerken from "../../../images/Services/Plamuurwerken/Overview.webp";
import Plamuurwerken2 from "../../../images/Services/Plamuurwerken/plamuurwerken-plamuurwerken.webp";
import Behangen from "../../../images/Services/Behangen/Overview.webp";
import Behangen2 from "../../../images/Services/Behangen/A2.webp";
import behangen3 from "../../../images/Services/Behangen/vliesa1.jpeg";
import Raamdecoratie from "../../../images/Services/Raamdecoratie/Overview.webp";
import Raamdecoratie2 from "../../../images/Services/Raamdecoratie/1.webp";
import ExDakgoot2 from "../../../images/Services/Exterieur/A4.webp";
import ExDoor2 from "../../../images/Services/Exterieur/A2.webp";
import Gevel1 from "../../../images/Services/Exterieur/Gevel1.webp";
import Aqua2 from "../../../images/Services/Decoratieve technieken/AquaSensa/AquaSensa2.webp";
import Calco2 from "../../../images/Services/Decoratieve technieken/Calco/Calco2.webp";
import Clay2 from "../../../images/Services/Decoratieve technieken/Clay/Claystuc2.webp";
import Tusk2 from "../../../images/Services/Decoratieve technieken/Tusk/tusk2.webp";
import Spuitwerk from "../../../images/Services/spuitwerk/spuitwerk.webp";
import Spuitwerk2 from "../../../images/Services/spuitwerk/spuitwerk2.webp";



const Services = [
  {
    id: 1,
    url: "interieur",
    image: imgInterieur,
    title: "Interieur",
    subject: "plafond, muur & houtwerk schilderen",
    IntroTxt: `Transformeer uw interieur met professioneel binnenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
   
    Services: [
      {
        id: 1,
        category: "Interieur",
        subject: "Binnenschilderwerk",
        title: "Plafondschilderen",
        subTitle: "Waarom kiezen voor plafondschilderen",
        customOrder: false,
        descriptions: [
          "Een fris geschilderd plafond kan niet alleen de esthetiek van een kamer verbeteren, maar brengt ook diverse andere voordelen met zich mee. Ontdek waarom plafondschilderen een essentiële stap is voor het creëren van een inspirerende en comfortabele leefomgeving.",
        ],
        pros: [
          {
            id: 1,
            title: "Visuele Verfijning",
            text: "Een nieuw geschilderd plafond geeft direct een gevoel van verfijning en netheid, waardoor de hele ruimte er fris en modern uitziet.",
          },
          {
            id: 2,
            title: "Ruimtelijk Gevoel",
            text: "Door gebruik te maken van lichte kleuren wordt de illusie van een hoger plafond gecreëerd, waardoor de ruimte groter en luchtiger aanvoelt.",
          },
          {
            id: 3,
            title: "Verbergen van Onvolkomenheden",
            text: "Schilderen helpt bij het verbergen van eventuele vlekken, scheuren of verouderde plekken op het plafond, waardoor het er als nieuw uitziet.",
          },
          {
            id: 4,
            title: "Verbeterde Lichtreflectie",
            text: "Heldere plafondkleuren verbeteren de lichtreflectie in de kamer, waardoor deze levendiger en energieker aanvoelt.",
          },
          {
            id: 5,
            title: "Bescherming tegen Schade",
            text: "Een goede verflaag beschermt het plafond tegen vocht, schimmel en andere schade, wat de levensduur van het plafond verlengt.",
          },
        ],

        image: imgInterieurPlafond,
      },
      {
        id: 2,
        category: "Interieur",
        subject: "Binnenschilderwerk",
        title: "Schilderen van muren",
        subTitle: "Waarom kiezen voor het schilderen van uw muur?",
        customOrder: false,
        descriptions: [
          "Het schilderen van muren gaat verder dan esthetiek; het is een daad van creativiteit die je ruimte kan transformeren. Verken de redenen waarom muurschilderen een cruciale rol speelt in het definiëren van de sfeer en stijl van je interieur.",
        ],

        pros: [
          {
            id: 1,
            title: "Persoonlijke Expressie",
            text: "Muurschilderen biedt de mogelijkheid om je persoonlijke stijl en smaak uit te drukken, waardoor elke kamer een unieke uitstraling krijgt die bij jou past.",
          },
          {
            id: 2,
            title: "Ruimtelijke Definitie",
            text: "Verschillende kleuren kunnen helpen bij het creëren van visuele scheidingen tussen ruimtes, waardoor elke zone zijn eigen identiteit krijgt.",
          },
          {
            id: 3,
            title: "Sfeer en Emotie",
            text: "Kleuren hebben de kracht om de sfeer en emoties in een ruimte te beïnvloeden. Warme tinten kunnen gezelligheid brengen, terwijl koele tinten een kalmerend effect hebben.",
          },
          {
            id: 4,
            title: "Optische Illusies",
            text: "Slim gebruik van kleur en patroon kan de perceptie van ruimte veranderen, waardoor kamers groter, knusser of zelfs hoger lijken.",
          },
          {
            id: 5,
            title: "Bescherming en Duurzaamheid",
            text: "Muurschilderingen beschermen de muren tegen stof, vocht en dagelijkse slijtage, waardoor de levensduur van de muur wordt verlengd..",
          },
        ],
        image: imgInterieurMuur,
      },
      {
        id: 3,
        category: "Interieur",
        subject: "Binnenschilderwerk",
        title: "Houtwerk/Lakwerk",
        subTitle: "Waarom kiezen voor houtwerk/lakwerk?",
        customOrder: true,
        descriptions: [
          " Het schilderen van houten oppervlakken gaat verder dan bescherming; het voegt een onmiskenbare charme en duurzaamheid toe aan je interieur. Ontdek waarom het schilderen van houtwerk en lakwerk een essentiële stap is om de schoonheid van je huis te verbeteren.",
        ],
        pros: [
          {
            id: 1,
            title: "Bescherming tegen Slijtage",
            text: "Hoogwaardige lak beschermt houten oppervlakken tegen krassen, vlekken en dagelijkse slijtage, waardoor de levensduur van het materiaal wordt verlengd.",
          },
          {
            id: 2,
            title: "Verfraaiing van Houtnerf",
            text: "Door het gebruik van lak wordt de natuurlijke houtnerf geaccentueerd, waardoor een warme en rijke uitstraling ontstaat die de schoonheid van het hout benadrukt.",
          },
          {
            id: 3,
            title: "Stijlvolle Afwerking",
            text: "Hout- en lakwerk bieden de mogelijkheid om meubels, deuren en kozijnen een stijlvolle en gepolijste afwerking te geven die past bij de rest van je interieur.",
          },
          {
            id: 4,
            title: "Onderhoudsgemak",
            text: "Lakwerk maakt het reinigen van houten oppervlakken eenvoudiger, waardoor stof en vuil zich minder kunnen hechten, en het hout er altijd stralend uitziet.",
          },
        ],
        image: imgInterieurHoutwerk,
      },
    ],
  },
  {
    id: 2,
    url: "exterieur",
    image: imgExterieur,
    title: "Exterieur",
    subject: "buiten houtwerk, gevel schilderen & dakgoot schilderen",
    IntroTxt: `Transformeer uw exterieur met professioneel buitenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
   
    Services: [
      {
        id: 1,
        category: "Exterieur",
        subject: "Buitenschilderwerk",
        title: "Buiten houtwerk",
        subTitle: "Waarom is Buitenhoutwerk Essentieel?",
        customOrder: true,

        descriptions: [
          "Maak een blijvende indruk vanaf het moment dat bezoekers je huis benaderen door aandacht te besteden aan het buitenschrijnwerk en lakwerk. Het schilderen van het exterieur houtwerk gaat verder dan esthetiek; het is een investering in duurzaamheid en bescherming tegen de elementen. Ontdek waarom het schilderen van buitenhoutwerk cruciaal is voor het behoud van de schoonheid en integriteit van je woning.",
        ],
        pros: [
          {
            id: 1,
            title: "Weerbestendige Bescherming",
            text: "Het genieten van de mooie buitenkant van je huis.",
          },
          {
            id: 2,
            title: "Verlenging van Levensduur",
            text: "Hout dat regelmatig wordt geschilderd gaat langer mee.",
          },
          {
            id: 3,
            title: "Onderhoudsarm",
            text: "Het gebruik van goede lakverf voor buiten zorgt ervoor dat je 10 jaar lang niet hoeft te schilderen.",
          },
        ],
        image: ExDoor2,
      },
      {
        id: 2,
        category: "Exterieur",
        subject: "Buitenschilderwerk",
        title: "Gevels Schilderen",
        subTitle: "Waarom Gevelschilderwerk Belangrijk is",
        customOrder: false,

        descriptions: [
          "Het schilderen van de gevel is niet alleen een esthetische keuze, maar ook een belangrijke stap in het behoud en verbetering van de structuur van je huis. Ontdek waarom het schilderen van de gevel van groot belang is voor het creëren van een prachtig en duurzaam thuis.",
        ],
        pros: [
          {
            id: 1,
            text: "De stijl van uw huis gemakkelijk veranderen.",
          },
          {
            id: 2,
            text: "Oneffenheden wegwerken.",
          },
          {
            id: 3,
            text: "U verlengt de levensduur van uw gevel en kozijnen.",
          },
          {
            id: 4,
            text: "Eventueel te combineren met isolatie.",
          },
          {
            id: 5,
            text: "Garantie op de kleurechtheid van uw huis.",
          },
        ],
        image: Gevel1,
      },
      {
        id: 3,
        category: "Exterieur",
        subject: "Buitenschilderwerk",
        title: "Dakgoot Schilderen",
        subTitle: "Waarom is Dakgoot Schilderen Belangrijk?",
        customOrder: true,

        descriptions: [
          "Deze eenvoudige maar effectieve stap draagt niet alleen bij aan de esthetiek van je woning, maar speelt ook een cruciale rol in het behoud van de functionaliteit van je dakgoot. Ontdek waarom dakgootschilderen van essentieel belang is voor duurzame bescherming en een verzorgd exterieur.",
        ],
        pros: [
          {
            id: 1,
            title: "Weerbestendige Bescherming",
            text: "Het reinigen van dakgoten zorgt ervoor dat je dakgoten en je woning er weer netjes en verzorgd uitzien.",
          },
          {
            id: 2,
            title: "Verlenging van Levensduur",
            text: "Het verbeteren van de kwaliteit van de dakgoten en het voorkomen van lekkages",
          },
          {
            id: 3,
            title: "Onderhoudsarm",
            text: "Het is een belangrijk onderdeel van het onderhoud aan dakgoten.",
          },

        ],
        
        image: ExDakgoot2,
      },
    ],
  },
  {
    id: 3,
    url: "decoratieve technieken",
    image: AquaSensa,
    title: "Decoratieve technieken",
    subject: "aqua sensa, calco, tusk & claystuc",
    IntroTxt: `Transformeer uw interieur met onze decoratieve technieken! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
   
    Services: [
      {
        id: 1,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Aqua-Sensa",
        subTitle: "Wat is Aqua Sensa?",
        customOrder: false,

        descriptions: [
          "Laat je ruimte stralen met Aqua-Sensa, een geavanceerde decoratieve techniek die speciaal is ontworpen voor vochtige omgevingen zoals badkamers en keukens. Ontdek de voordelen van deze innovatieve aanpak, die niet alleen een esthetische transformatie biedt, maar ook duurzaamheid en bescherming in natte omgevingen garandeert.",
        ],
        pros: [
          {
            id: 1,
            text: "naadloze en waterbestendige steenimitatie op basis van cement",
          },
          {
            id: 2,
            text: "voor wanden én vloeren",
          },
          {
            id: 3,
            text: "op pleisterwerk, cementering, betegeling en tal van andere ondergronden",
          },
          {
            id: 4,
            text: "bijzonder kras-en stootvast en uitstekend onderhoudbaar",
          },
          {
            id: 5,
            text: "Met Aqua Sensa Fine zeer zachte kleurnuances mogelijk",
          },
        ],
        image: Aqua2,
      },
      {
        id: 2,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Calco",
        subTitle: "Wat is Calco?",
        customOrder: true,
        descriptions: [
          "Ontdek de kunst van subtiliteit en elegantie, waarmee je een harmonieuze ambiance kunt creëren die de tand des tijds doorstaat. Laat je inspireren door de veelzijdigheid van Calco en geef je ruimte een uniek karakter.",
        ],
        pros: [
          {
            id: 1,
            text: "een stuctechniek op basis van fijne kalk en gemalen marmer",
          },
          {
            id: 2,
            text: "poeder dat je kan mengen met water, bindpasta en kleurpigmenten tot een goed verwerkbare pleister            ",
          },
          {
            id: 3,
            text: "van een strakke betonlook over een zuiderse kalkstuc naar een verweerde structuur",
          },
          {
            id: 4,
            text: "uitermate duurzaam en krasvast en uitstekend onderhoudbaar",
          },
        ],
        image: Calco2,
      },
      {
        id: 3,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Tusk",
        subTitle: "Wat is Tusk?",
        customOrder: true,
        descriptions: [
          "Tusk is een stuctechniek op basis van geslepen glasparels en blinkt uit in functionaliteit. Speciaal ontwikkeld voor publieke ruimtes, maar ook populair in woonhuizen. Want ook op esthetisch vlak heeft Tusk heel wat te bieden. De licht gekorrelde reliëfstructuur creëert een warme, aangename sfeer.",
        ],
        pros: [
          {
            id: 1,
            text: "sterke, stootvaste en superkrasvaste structuurafwerking",
          },
          {
            id: 2,
            text: "op basis van glasparels",
          },
          {
            id: 3,
            text: "vlot afwasbare en naadloze wandbescherming",
          },
          {
            id: 4,
            text: "ideaal voor drukke ruimtes: school- of ziekenhuisgangen, wachtzalen, traphallen ...",
          },
          {
            id: 5,
            text: "alternatief voor stootbanden, vinylstroken of oplapwerk met verf",
          },
          {
            id: 6,
            text: "betaalbare oplossing",
          },
        ],
        image: Tusk2,
      },
      {
        id: 4,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Claystuc",
        subTitle: "Wat is Claystuc?",
        customOrder: false,
        descriptions: [
          "Transformeer uw interieur tot een oase van rust en natuurlijke schoonheid met Claystuc, een natuurlijk gesteente dat uw woning omhult met een dikke, beschermende laag. Deze techniek speelt in op het gevoel van geborgenheid met zijn zachte reliëf en natuurlijke kleuren, waardoor elke ruimte een gezellige plek wordt. Bij Claystuc draait alles om veelzijdigheid; het kan op verschillende manieren bewerkt worden, waardoor uw creatieve visie tot leven komt.",
        ],
        pros: [
          {
            id: 1,
            title: "Organische Textuur",
            text: "een stuctechniek op basis van kleimineralen",
          },
          {
            id: 2,
            text: "het A+-Indoor-Air-Quality-label verzekert je klant van een aangenaam binnenklimaat",
          },
          {
            id: 3,
            text: "het zachte reliëf van klei in natuurlijke kleuren dat op verschillende manieren bewerkt kan worden",
          },
          {
            id: 4,
            text: "versterk het ambachtelijke karakter door vezels of steentjes aan de kleimassa toe te voegen",
          },

        ],
        image: Clay2,
      },
    ],
  },
  {
    id: 5,
    url: "plamuurwerken",
    image: Plamuurwerken,
    title: "Plamuurwerken",
    subject: "plamuurwerken & plamuren van gipsplaten",
    IntroTxt: `Ontdek de kunst van professioneel plamuurwerk en geef uw interieur een nieuwe dimensie! Onze ervaren vakmannen zijn meesters in het vakkundig vullen van scheuren, deuken en oneffenheden, waardoor uw muren naadloos en strak worden. Laat ons u begeleiden bij het kiezen van de perfecte kleuren en afwerkingen die passen bij uw stijl, terwijl wij zorgen voor een snelle en efficiënte uitvoering zonder onnodige hinder. Transformeer uw ruimtes met onze expertise in plamuurwerken en creëer een interieur dat spreekt van vakmanschap en elegantie.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions: ["Telefonisch", "Per mail.", "Website"],
      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions: [
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ],
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions: ["Bespreking.", "Op meten.", "Advies."],
      },
      {
        id: 4,
        title: "De offerte",
        descriptions: [
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ],
      },
      // Add more steps as needed
    ],
    Services: [
      {
        id: 1,
        customOrder: true,
        category: "Plamuurwerken",
        subject: "Plamuurwerken",
        title: "Plamuurwerken",
        subTitle: "Het belang van gipsplaten plamuren",
        descriptions: [
          "Leg de basis voor een onberispelijk interieur met plamuurwerken, de essentiële stap voor een gladde en perfecte afwerking van je muren en oppervlakken. Ontdek de voordelen van deze verfijnde techniek die niet alleen zorgt voor visuele perfectie, maar ook de duurzaamheid van je interieur bevordert.",
        ],
        pros: [
          {
            id: 1,
            title: "Strakke en Egale Ondergrond",
            text: "door plamuurwerken te laten uitvoeren, ben je zeker van de kwaliteit van het werk",
          },
          {
            id: 2,
            title: "Verbergen van Oneffenheden",
            text: "het geeft een eenvoudige verwerking",
          },
          {
            id: 3,
            title: "Verbeterde Hechting",
            text: "snelle droogtijd",
          },
          {
            id: 4,
            title: "Professioneel Uiterlijk",
            text: "af te werken met elke soort van verf",
          },

        ],
        image: Plamuurwerken2,
      },
      {
        id: 2,
        category: "Plamuurwerken",
        subject: "Plamuurwerken",
        title: "Plamuren van gipsplaten",
        subTitle: "Het belang van gipsplaten plamuren",
        descriptions: [
          "Het plamuren van gipsplaten, een cruciale stap om een naadloze en professionele afwerking van je muren te realiseren.",
        ],
        pros: [
          {
            id: 1,
            title: "Naadloze Integratie",
            text: "plamuren verwijst naar het opvullen van gaten of barsten in een muur, inclusief de voegen van gyproc platen",
          },
          {
            id: 2,
            title: "Oneffenheden Wegwerken",
            text: "het opvullen van gaten en voegen is cruciaal voordat je de muur afwerkt, omdat dit de hechting van verf bevordert",
          },
          {
            id: 3,
            title: "Optimale Hechting van Verf",
            text: "plamuren wordt uitgevoerd met een vulmiddel of speciaal plamuursel, aangebracht met een plamuurmes",
          },
        ],
        image: Plamuurwerken,
      },
    ],
  },
  {
    id: 6,
    url: "behangwerken",
    image: Behangen,
    title: "Behangwerken",
    subject: "behangen met motief & vliesbehang",
    IntroTxt: `Transformeer uw interieur met professioneel behangwerken! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren, motief en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
    Steps: [
      {
        id: 1,
        title: "Neem contact met ons op.",
        descriptions: ["Telefonisch", "Per mail.", "Website"],
      },
      {
        id: 2,
        title: "Wij contacteren u",
        descriptions: [
          "Wij vragen de nodige info.",
          "Wij plannen een afspraak in",
        ],
      },
      {
        id: 3,
        title: "Ik kom tot bij u.",
        descriptions: ["Bespreking.", "Op meten.", "Advies."],
      },
      {
        id: 4,
        title: "De offerte",
        descriptions: [
          "Opmaak offerte.",
          "Prijs calculatie",
          "Opbellen voor akkoord.",
        ],
      },
      // Add more steps as needed
    ],
    Services: [
      {
        id: 1,
        customOrder: false,
        category: "Behangwerken",
        subject: "Behangwerken",
        title: "Behangen met motief",
        subTitle: "Voordelen van behangen met motief",
        descriptions: [
          "Deze decoratieve aanpak is niet alleen een expressie van creativiteit, maar ook een krachtige manier om een unieke sfeer in je ruimte te creëren. Ontdek waarom behangen met motief een verfijnde keuze is en transformeer je interieur in een kunstwerk.",
        ],
        pros: [
          {
            id: 1,
            title: "Visuele Impact",
            text: "Motiefbehang voegt direct een indrukwekkende visuele impact toe aan je ruimte, waardoor elke muur een statement wordt.",
          },
          {
            id: 2,
            title: "Expressieve Stijlkeuzes",
            text: "Met een overvloed aan motiefopties kun je kiezen uit een scala van expressieve stijlen, van tijdloze klassiekers tot trendy moderne ontwerpen.",
          },
          {
            id: 3,
            title: "Ruimtelijke Transformatie",
            text: "Het behangen met motief transformeert de ruimte en voegt diepte en karakter toe, waardoor een unieke atmosfeer ontstaat.",
          },
          {
            id: 4,
            title: "Eenvoudige Personalisatie",
            text: "Personaliseer je interieur eenvoudig door een motief te kiezen dat past bij je persoonlijke smaak en de gewenste sfeer in je ruimte.",
          },
          {
            id: 5,
            title: "Praktische Verfijning",
            text: "Naast de esthetische voordelen biedt behangen met motief ook een praktische verfijning, waardoor kleine onvolkomenheden worden verhuld en je muren een verzorgde uitstraling krijgen.",
          },
        ],
        image: Behangen2,
      },
      {
        id: 2,
        customOrder: true,
        category: "Behangwerken",
        subject: "Behangwerken",
        title: "Vliesbehang",
        subTitle: "Voordelen van vliesbehang",
        descriptions: [
          "Een stijlvolle keuze die niet alleen de esthetiek van je ruimte verhoogt, maar ook zorgt voor een moeiteloze en duurzame wandafwerking. Ontdek waarom vliesbehang een favoriete optie is voor het creëren van een elegant en verfijnd interieur.",
        ],
        pros: [
          {
            id: 1,
            title: "Eenvoudige Toepassing",
            text: "Deze techniek biedt een breed scala aan decoratieve mogelijkheden, van moderne texturen tot klassieke afwerkingen, waardoor je de stijl van je ruimte naar wens kunt aanpassen.",
          },
          {
            id: 2,
            title: "Duurzaamheid en Bestendigheid",
            text: "Deze techniek biedt een breed scala aan decoratieve mogelijkheden, van moderne texturen tot klassieke afwerkingen, waardoor je de stijl van je ruimte naar wens kunt aanpassen.",
          },
          {
            id: 3,
            title: "Verberg Onvolkomenheden",
            text: "Vliesbehang is duurzaam en bestand tegen scheuren, waardoor het een langdurige en onderhoudsarme optie is voor je muren.",
          },
          {
            id: 4,
            title: "Variatie in Stijl en Patroon",
            text: "Vliesbehang is beschikbaar in een breed scala aan stijlen, patronen en texturen, waardoor je eindeloos kunt variëren en je persoonlijke smaak kunt uiten.",
          },
        ],
        image: behangen3,
      },
    ],
  },
  {
    id: 7,
    url: "spuitwerk",
    image: Spuitwerk,
    title: "Spuitwerk",
    subject: "snel, duurzaam & goedkoper",
    IntroTxt: `Bent u op zoek naar een frisse look voor uw interieur? Of wilt u die ene saaie muur nieuw leven inblazen met wat kleur? Bij ons vindt u de perfecte oplossing. Ontdek alles over onze spuitwerkdiensten en hoe we elke ruimte in uw huis kunnen transformeren tot iets prachtigs.`,
   
    Services: [
      {
        id: 1,
        customOrder: true,
        category: "Raamdecoratie",
        subject: "Raamdecoratie",
        title: "Schilderen met spuitpistool",
        subTitle: "Waarom u kiest voor spuitwerk",
        descriptions: [
          "Bij onze spuitwerkdiensten passen we een combinatie van hoge en lage druk toe, afhankelijk van de oppervlaktegrootte, om de verf gelijkmatig te verspreiden. Een nauwkeurige afplakprocedure is essentieel voorafgaand aan het spuitwerk, waarbij ramen, deuren, kozijnen en trappen zorgvuldig met plastic worden beschermd. Deze voorzorgsmaatregelen verminderen onze schoonmaakinspanningen en besparen zowel tijd als kosten.",
        ],
        pros: [
          {
            id: 1,
            text: "Het aanbrengen van verf met een spuitpistool is aanzienlijk sneller dan traditioneel schilderen met een roller of borstel.",
          },
          {
            id: 2,
            text: "Bovendien resulteert spuitwerk vaak in een fraaier eindresultaat. Het elimineert strepen, biedt een consistente afwerking en creëert een gelijkmatig oppervlak.",
          },
          {
            id: 3,
            text: "De dekking van verf bij spuitwerk is superieur; doorgaans volstaat één laag. ",
          },
          {
            id: 4,
            text: "Het spuiten van verf maakt het gemakkelijker om lastige hoeken en randen te bereiken vergeleken met het gebruik van een borstel of roller.",
          },
          {
            id: 5,
            text: "Moderne technologieën zorgen ervoor dat spuitwerk vrijwel nevelvrij kan worden uitgevoerd.",
          },
        ],
        image: Spuitwerk2,
      },
    ],
  },
  {
    id: 8,
    url: "raamdecoratie",
    image: Raamdecoratie,
    title: "Raamdecoratie",
    subject: "Gordijnen jaloezieën en meer",
    IntroTxt: `Transformeer uw interieur met raamdecoratie! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de juiste stof & kleuren, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
   
    Services: [
      {
        id: 1,
        customOrder: true,
        category: "Raamdecoratie",
        subject: "Raamdecoratie",
        title: "Gordijnen, jaloezieën en meer",
        subTitle: "Waarom Kiezen voor Elegante Raamdecoratie",
        descriptions: [
          "Breng de finishing touch aan in je interieur met elegante raamdecoratie, waaronder gordijnen, jaloezieën en meer. Deze essentiële elementen voegen niet alleen stijl toe aan je ruimte, maar bieden ook praktische voordelen zoals privacy, lichtregulering en een warme, uitnodigende sfeer. Ontdek de veelzijdigheid van raamdecoratie en transformeer je vensters in een visueel hoogtepunt.",
        ],
        pros: [
          {
            id: 1,
            title: "Stijlvolle Esthetiek",
            text: "Gordijnen, jaloezieën en andere raamdecoraties voegen een stijlvolle esthetiek toe aan je interieur, waardoor een verfijnde uitstraling ontstaat.",
          },
          {
            id: 2,
            title: "Privacy en Lichtregulering",
            text: "Raamdecoratie biedt de mogelijkheid om de hoeveelheid natuurlijk licht te regelen en tegelijkertijd privacy te behouden, waardoor een gebalanceerde sfeer ontstaat.",
          },
          {
            id: 3,
            title: "Variatie in Ontwerp",
            text: "Met een breed scala aan ontwerpen, texturen en kleuren biedt raamdecoratie talloze mogelijkheden om je persoonlijke stijl te uiten en je interieur aan te vullen.",
          },
          {
            id: 4,
            title: "Warmte en Comfort",
            text: "Gordijnen voegen niet alleen visuele warmte toe, maar kunnen ook bijdragen aan het verbeteren van de akoestiek in de ruimte, waardoor een gezellige en comfortabele atmosfeer ontstaat.",
          },
          {
            id: 5,
            title: "Functionele Flexibiliteit",
            text: "Of je nu kiest voor zware gordijnen voor totale verduistering of jaloezieën voor subtiele lichtinval, raamdecoratie biedt functionele flexibiliteit om aan verschillende behoeften te voldoen.",
          },
        ],
        image: Raamdecoratie2,
      },
    ],
  },
  
];

export default Services;
