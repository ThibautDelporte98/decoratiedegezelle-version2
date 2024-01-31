import phone from "../../../images/icons/phone.png";
import email from "../../../images/icons/email.png";
import adress from "../../../images/icons/location.png";
import btw from "../../../images/icons/btw.png";




const data = [

      {
        id: 1,
        title: "phone",
        text: "+32 0478 36 60 70",
        icon: phone,
        link: "+32 0478 36 60 70",
      },
      {
        id: 2,
        title: "email",
        text: "info@decoratiedegezelle.be",
        icon: email,
        link: "info@decoratiedegezelle.be",

      },
      {
        id: 3,
        title: "address",
        text: "Kouterstraat 42 | Harelbeke",
        icon: adress,
        link: "https://www.google.com/maps/place/Kouterstraat+42,+8530+Harelbeke/@50.8491017,3.3105846,17z/data=!3m1!4b1!4m6!3m5!1s0x47c33b85bbda4913:0x4840866eeb66375e!8m2!3d50.8491017!4d3.3105846!16s%2Fg%2F11jygrp3z5?entry=ttu",
      },
      {
        id: 4,
        title: "BTW",
        text: "BTW BE0797.449.965",
        icon: btw,
        link: "",

      },


];

// Function to dynamically generate links
function generateLink(item) {
  switch (item.title) {
    case "phone":
      return `tel:${item.text.replace(/\s/g, "")}`;
    case "email":
      return `mailto:${item.text}`;
    default:
      // If the link is empty, copy the text to the clipboard
      const linkToCopy = item.link || item.text || "";
      return () => {
        navigator.clipboard.writeText(linkToCopy).then(
          () => console.log('Link copied to clipboard:', linkToCopy),
          (err) => console.error('Unable to copy link to clipboard', err)
        );
      };
  }
}

const dataWithLinks = data.map((item) => ({
  ...item,
  link: generateLink(item),
}));


export default dataWithLinks;
