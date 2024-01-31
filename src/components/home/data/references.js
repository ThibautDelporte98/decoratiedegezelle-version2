import Interieur from "../../../images/carouselImages/home/A1.webp";
import Exterieur from "../../../images/carouselImages/home/A2.webp";
import image from "../../../images/carouselImages/home/A3.webp";


const data = [

    {
        id: 1 ,
        subject: "Interieur",
        title: "frituur natuur",
        location:"Kortrijk",
        image: Interieur,
        url: "/referentie/id:1",
        techniques: [
            {
                id:1,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
            ,
            {
                id:2,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
        ]


    },
    {
        id: 2 ,
        subject: "Exterieur",
        title: "gevel woning",
        location:"Bissegem",
        image: Exterieur,
        url: "/referenties/id:2",
        text: "Ontdek de veelzijdigheid van binnenschilderwerk en de impact ervan op uw interieur. Laat ons enkele veelvoorkomende opties onder de loep nemen, zodat u kunt zien hoe deze simpele ingrepen een wereld van verschil kunnen maken voor de uitstraling van uw huis."
    },
    {
        id: 3 ,
        subject: "Decoratieve technieken",
        title: "woning Bissegem",
        location:"Kortrijk",
        image: image,
        url: "/referenties/id:3",

        techniques: [
            {
                id:1,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
            ,
            {
                id:2,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
        ]    },
    {
        id: 4 ,
        subject: "Plamuurwerken",
        title: "woning Kortrijk",
        location:"Kortrijk",
        image: image,
        url: "/referenties/id:4",

        techniques: [
            {
                id:1,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
            ,
            {
                id:2,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
        ]    },
    {
        id: 5 ,
        subject: "Behangen",
        title: "Winkel Wevelgem",
        image: image,
        location:"Kortrijk",
        url: "/referenties/id:5",

        techniques: [
            {
                id:1,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
            ,
            {
                id:2,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
        ]    },
    {
        id: 6 ,
        subject: "Raamdecoratie",
        title: "Gordijnen jaloezieën en meer",
        location:"Kortrijk",
        image: image,
        url: "/diensten/id:6",

        techniques: [
            {
                id:1,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
            ,
            {
                id:2,
                title:"Dakgoot schilderen",
                url:"/diensten"

            }
        ]    },

    
    
    ]
    
    export default data; 