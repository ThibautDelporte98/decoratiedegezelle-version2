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

const Services = [
  {
    id: 1,
    url: "interieur",
    image: imgInterieur,
    title: "Interieur",
    subject: "plafond, muur & houtwerk schilderen",
    IntroTxt: `Transformeer uw interieur met professioneel binnenschilderwerk! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
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
    ],
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
    ],
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
            title: "Bescherming tegen Weersinvloeden",
            text: "Hoogwaardige lak en verf beschermen het buitenhoutwerk tegen blootstelling aan zon, regen, sneeuw en wind, waardoor veroudering en verval worden verminderd.",
          },
          {
            id: 2,
            title: "Onderhoud van Structuur",
            text: "Door het schilderen van buitenhoutwerk behoud je de structurele integriteit van de gevel, ramen, deuren en andere elementen, wat essentieel is voor de levensduur van je huis.",
          },
          {
            id: 3,
            title: "Verbetering van Curb Appeal",
            text: "Een frisse verflaag verbetert de esthetiek van je huis, waardoor de 'curb appeal' toeneemt en de waarde van je woning stijgt.",
          },
          {
            id: 4,
            title: "Aanpassing aan Architectuur:",
            text: "De kleurkeuze en afwerking kunnen worden aangepast aan de architectuur van je huis, waardoor een harmonieuze uitstraling ontstaat die de stijl van de woning complementeert.",
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
            title: "Bescherming tegen Weerselementen",
            text: "Hoogwaardige verf vormt een beschermende barrière tegen regen, wind, UV-stralen en andere weersinvloeden, waardoor de gevel wordt beschermd tegen veroudering en schade.",
          },
          {
            id: 2,
            title: "Structurele Integriteit Behouden",
            text: "Het schilderen van de gevel draagt bij aan het behoud van de structurele integriteit van je huis, waardoor potentiële problemen zoals scheuren en afbladderen worden voorkomen.",
          },
          {
            id: 3,
            title: "Esthetische Transformatie",
            text: "Een nieuwe verflaag kan de uitstraling van je woning volledig transformeren, waardoor het een eigentijdse en aantrekkelijke look krijgt die bij je stijl past.",
          },
          {
            id: 4,
            title: "Weerstand tegen Schimmel en Vocht",
            text: "Kwalitatieve verf beschermt tegen vochtindringing en schimmelgroei, wat essentieel is om de binnenmuren droog en gezond te houden.",
          },
          {
            id: 5,
            title: "Verhoogde Waarde van het Vastgoed",
            text: "Een goed onderhouden exterieurgevel draagt bij aan de algehele waarde van je woning, waardoor het aantrekkelijker wordt voor potentiële kopers.",
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
            text: "Kwalitatieve verf op de dakgoot fungeert als een beschermende laag tegen diverse weersomstandigheden, zoals regen, zon en vorst, waardoor corrosie en roestvorming worden voorkomen.",
          },
          {
            id: 2,
            title: "Verlenging van Levensduur",
            text: "Dakgootschilderen vertraagt het natuurlijke verouderingsproces van het materiaal, waardoor de levensduur van de dakgoot wordt verlengd en de noodzaak van frequente vervanging wordt verminderd.",
          },
          {
            id: 3,
            title: "Onderhoudsarm",
            text: "Een geschilderde dakgoot is over het algemeen minder vatbaar voor ophoping van vuil, bladeren en ander afval, waardoor het onderhoud aanzienlijk wordt verminderd.",
          },
          {
            id: 4,
            title: "Esthetische Afwerking",
            text: "Het schilderen van de dakgoot draagt bij aan de algemene uitstraling van je woning, waardoor het een verzorgde en aantrekkelijke uitstraling krijgt.",
          },
        ],
        
        image: ExDakgoot2,
      },
    ],
  },
  {
    id: 3,
    url: "decoratieve-technieken",
    image: AquaSensa,
    title: "Decoratieve technieken",
    subject: "aqae sensa, calco, tusk & claystuc",
    IntroTxt: `Transformeer uw interieur met onze decoratieve technieken! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de perfecte kleuren en afwerkingen, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
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
    ],
    Services: [
      {
        id: 1,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Aqua-Sensa (Voorbereiding Ardex 8 + 9 natte omgeving)",
        subTitle: "Waarom Kiezen voor Aqua Sensa?",
        customOrder: false,

        descriptions: [
          "Laat je ruimte stralen met Aqua-Sensa, een geavanceerde decoratieve techniek die speciaal is ontworpen voor vochtige omgevingen zoals badkamers en keukens. Ontdek de voordelen van deze innovatieve aanpak, die niet alleen een esthetische transformatie biedt, maar ook duurzaamheid en bescherming in natte omgevingen garandeert.",
        ],
        pros: [
          {
            id: 1,
            title: "Waterbestendige Bescherming",
            text: "Aqua-Sensa creëert een waterafstotende barrière, waardoor je wanden en oppervlakken beschermd worden tegen vocht en schimmelvorming.",
          },
          {
            id: 2,
            title: "Esthetische Veelzijdigheid",
            text: "Deze techniek biedt een breed scala aan decoratieve mogelijkheden, van moderne texturen tot klassieke afwerkingen, waardoor je de stijl van je ruimte naar wens kunt aanpassen.",
          },
          {
            id: 3,
            title: "Duurzame Oplossing",
            text: "Aqua-Sensa is ontwikkeld voor langdurige prestaties, waardoor de decoratieve elementen bestand zijn tegen de uitdagingen van vochtige omgevingen en de tand des tijds doorstaan.",
          },
          {
            id: 4,
            title: "Gemakkelijke Reiniging en Onderhoud",
            text: "De waterafstotende eigenschappen maken reiniging eenvoudig en verminderen de ophoping van vuil en zeepresten, waardoor je ruimte langer fris blijft.",
          },
          {
            id: 5,
            title: "Voortreffelijke Toepassing",
            text: "Aqua-Sensa kan worden toegepast op verschillende ondergronden, waaronder ARDEX 8 + 9, voor een naadloze integratie in natte omgevingen zoals badkamers en keukens.",
          },
        ],
        image: Aqua2,
      },
      {
        id: 2,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Calco",
        subTitle: "Belangrijke kenmerken van Calco.",
        customOrder: true,
        descriptions: [
          "Ontdek de kunst van subtiliteit en elegantie, waarmee je een harmonieuze ambiance kunt creëren die de tand des tijds doorstaat. Laat je inspireren door de veelzijdigheid van Calco en geef je ruimte een uniek karakter.",
        ],
        pros: [
          {
            id: 1,
            title: "Weerbestendige Bescherming",
            text: "Kwalitatieve verf op de dakgoot fungeert als een beschermende laag tegen diverse weersomstandigheden, zoals regen, zon en vorst, waardoor corrosie en roestvorming worden voorkomen.",
          },
          {
            id: 2,
            title: "Verlenging van Levensduur",
            text: "Dakgootschilderen vertraagt het natuurlijke verouderingsproces van het materiaal, waardoor de levensduur van de dakgoot wordt verlengd en de noodzaak van frequente vervanging wordt verminderd.",
          },
          {
            id: 3,
            title: "Onderhoudsarm",
            text: "Een geschilderde dakgoot is over het algemeen minder vatbaar voor ophoping van vuil, bladeren en ander afval, waardoor het onderhoud aanzienlijk wordt verminderd.",
          },
          {
            id: 4,
            title: "Esthetische Afwerking",
            text: "Het schilderen van de dakgoot draagt bij aan de algemene uitstraling van je woning, waardoor het een verzorgde en aantrekkelijke uitstraling krijgt.",
          },
        ],
        image: Calco2,
      },
      {
        id: 3,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Tusk",
        subTitle: "Voordelen van Tusk",
        customOrder: true,
        descriptions: [
          "Tusk is een stuctechniek op basis van geslepen glasparels en blinkt uit in functionaliteit. Speciaal ontwikkeld voor publieke ruimtes, maar ook populair in woonhuizen. Want ook op esthetisch vlak heeft Tusk heel wat te bieden. De licht gekorrelde reliëfstructuur creëert een warme, aangename sfeer.",
        ],
        pros: [
          {
            id: 1,
            title: "Abstracte Expressie",
            text: "Tusk biedt decoratieve technieken die abstracte expressie omarmen, waardoor je de vrijheid hebt om kunstzinnige elementen in je interieur te introduceren.",
          },
          {
            id: 2,
            title: "Diepte en Dimensie",
            text: "De technieken van Tusk creëren visuele diepte en dimensie, waardoor een boeiende en dynamische sfeer ontstaat in elke ruimte.",
          },
          {
            id: 3,
            title: "Flexibiliteit in Stijl",
            text: "Of je nu houdt van een moderne, minimalistische look of een meer klassieke benadering prefereert, Tusk biedt technieken die zich flexibel aanpassen aan verschillende stijlen.",
          },
          {
            id: 4,
            title: "Ambachtelijke Verfijning",
            text: "Tusk legt de nadruk op ambachtelijke verfijning, waardoor elk oppervlak een kunstwerk wordt met aandacht voor detail en vakmanschap.",
          },
          {
            id: 5,
            title: "Durf en Creatieve Vrijheid",
            text: "Met Tusk decoratieve technieken moedigen we creatieve vrijheid aan. Durf unieke ontwerpen te verkennen en geef je ruimte een persoonlijke touch.",
          },
        ],
        image: Tusk2,
      },
      {
        id: 4,
        category: "Decoratieve technieken",
        subject: "Decoratieve Technieken",
        title: "Claystuc",
        subTitle: "Voordelen van Claystuc",
        customOrder: false,
        descriptions: [
          "Transformeer uw interieur tot een oase van rust en natuurlijke schoonheid met Claystuc, een natuurlijk gesteente dat uw woning omhult met een dikke, beschermende laag. Deze techniek speelt in op het gevoel van geborgenheid met zijn zachte reliëf en natuurlijke kleuren, waardoor elke ruimte een gezellige plek wordt. Bij Claystuc draait alles om veelzijdigheid; het kan op verschillende manieren bewerkt worden, waardoor uw creatieve visie tot leven komt.",
        ],
        pros: [
          {
            id: 1,
            title: "Organische Textuur",
            text: "Claystuc creëert een organische textuur op oppervlakken, waardoor je interieur wordt verrijkt met een natuurlijke en aardse uitstraling.",
          },
          {
            id: 2,
            title: "Warmte en Comfort:",
            text: "De warme tinten en aardse kleuren van Claystuc brengen een gevoel van comfort en geborgenheid in elke ruimte, waardoor een harmonieuze ambiance ontstaat.",
          },
          {
            id: 3,
            title: "Ademend Materiaal",
            text: "Als ademend materiaal reguleert Claystuc de vochtigheid in je ruimte, waardoor een gezond binnenklimaat wordt bevorderd.",
          },
          {
            id: 4,
            title: "Veelzijdigheid in Ontwerp",
            text: "Of je nu kiest voor een rustieke, landelijke uitstraling of een eigentijds design, Claystuc biedt veelzijdigheid in ontwerp om aan diverse stijlen te voldoen.",
          },
          {
            id: 5,
            title: "Milieuvriendelijk en Duurzaam",
            text: "Gemaakt van natuurlijke en milieuvriendelijke materialen, draagt Claystuc bij aan duurzaamheid en minimaliseert de impact op het milieu.",
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
        subTitle: "Waarom plamuren belangrijk is",
        descriptions: [
          "Leg de basis voor een onberispelijk interieur met plamuurwerken, de essentiële stap voor een gladde en perfecte afwerking van je muren en oppervlakken. Ontdek de voordelen van deze verfijnde techniek die niet alleen zorgt voor visuele perfectie, maar ook de duurzaamheid van je interieur bevordert.",
        ],
        pros: [
          {
            id: 1,
            title: "Strakke en Egale Ondergrond",
            text: "Plamuurwerken zorgen voor een strakke en egale ondergrond, waardoor de basis wordt gelegd voor een vlekkeloze verfaanbreng en decoratieve afwerkingen.",
          },
          {
            id: 2,
            title: "Verbergen van Oneffenheden",
            text: "Oneffenheden, scheuren en kleine beschadigingen worden met plamuurwerken deskundig weggewerkt, waardoor muren er als nieuw uitzien.",
          },
          {
            id: 3,
            title: "Verbeterde Hechting",
            text: "Een goed uitgevoerde plamuurtechniek bevordert de hechting van verf en decoratieve afwerkingen, waardoor een langdurig en duurzaam resultaat wordt gegarandeerd.",
          },
          {
            id: 4,
            title: "Optimale Oppervlaktevoorbereiding",
            text: "Plamuurwerken vormen een essentieel onderdeel van oppervlaktevoorbereiding, waardoor de verf gelijkmatig wordt verdeeld en de textuur van de muur wordt geoptimaliseerd.",
          },
          {
            id: 5,
            title: "Professioneel Uiterlijk",
            text: "Een met zorg uitgevoerde plamuurlaag geeft muren en oppervlakken een professioneel en verzorgd uiterlijk, waardoor je interieur naar een hoger niveau wordt getild.",
          },
        ],
        image: Plamuurwerken2,
      },
      {
        id: 2,
        category: "Plamuurwerken",
        subject: "Plamuurwerken",
        title: "Plamuren van gipsplaten",
        subTitle: "Waarom plamuren van gipsplaten belangrijk is",
        descriptions: [
          "Het plamuren van gipsplaten, een cruciale stap om een naadloze en professionele afwerking van je muren te realiseren. Ontdek de voordelen van deze gespecialiseerde techniek die niet alleen de schoonheid van gipsplaten benadrukt, maar ook duurzaamheid en visuele perfectie garandeert.",
        ],
        pros: [
          {
            id: 1,
            title: "Naadloze Integratie",
            text: "Plamuren van gipsplaten zorgt voor een naadloze integratie van de platen, waardoor de overgangen tussen de verschillende secties van de muur onzichtbaar worden.",
          },
          {
            id: 2,
            title: "Oneffenheden Wegwerken",
            text: "Oneffenheden, schroefgaten en naden in de gipsplaten worden vakkundig weggewerkt, resulterend in een gladde en strakke ondergrond.",
          },
          {
            id: 3,
            title: "Optimale Hechting van Verf",
            text: "De plamuurlaag op de gipsplaten zorgt voor een optimale hechting van verf, waardoor de uiteindelijke afwerking duurzaam en bestendig is.",
          },
          {
            id: 4,
            title: "Creëren van een Gelijkmatige Textuur",
            text: "Plamuren helpt bij het creëren van een gelijkmatige textuur op gipsplaten, wat essentieel is voor een esthetisch aantrekkelijke uitstraling.",
          },
          {
            id: 5,
            title: "Professionele Afwerking",
            text: "Het plamuren van gipsplaten geeft een professionele afwerking aan muren en oppervlakken, waardoor je interieur een hoogwaardige uitstraling krijgt.",
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
            text: "Vliesbehang staat bekend om zijn gemakkelijke toepassing. Met de juiste lijmtechniek is het aanbrengen een moeiteloos proces, zelfs voor doe-het-zelvers.",
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
          {
            id: 5,
            title: "Makkelijk Verwijderbaar",
            text: "Bij renovaties of verandering van smaak is vliesbehang gemakkelijk te verwijderen zonder de muur te beschadigen, waardoor het een flexibele keuze is.",
          },
        ],
        image: behangen3,
      },
    ],
  },
  {
    id: 7,
    url: "raamdecoratie",
    image: Raamdecoratie,
    title: "Raamdecoratie",
    subject: "Gordijnen jaloezieën en meer",
    IntroTxt: `Transformeer uw interieur met raamdecoratie! Een prachtige manier om de uitstraling van uw huis te verfraaien en te versterken. Een deskundige vakman staat klaar om u te adviseren bij het selecteren van de juiste stof & kleuren, terwijl u kunt rekenen op een snelle en efficiënte uitvoering zonder onnodige hinder.`,
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
    ],
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
