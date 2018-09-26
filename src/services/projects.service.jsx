// import * as tagsAPI from "./tags.service";

const projects = [
  {
    _id: 1,
    image: "/projects/powerade.jpg",
    title: "Powerade Hydration Calculator",
    caption:
      "Powerade hydration calculator is based on scientific studies and provides an estimate only of fluid requirements under the above conditions.",
    tags: ["3", "4"],
    url: "https://www.powerade.co.nz/hydration-calculator"
  },
  {
    _id: 2,
    image: "/projects/cheersbeers.jpg",
    title: "Cheers Beers",
    caption:
      "Personalise a box of Speights to say thanks, using a seamless online shopping experience.",
    tags: ["3", "4"],
    url: "https://www.buyspeights.co.nz/"
  },
  {
    _id: 3,
    image: "/projects/nice-o-meter.jpg",
    title: "Coke Nice O Meter",
    caption:
      "Combining the power of users' social media behaviour and the fun of the Coke Nice-O-Meter, it helped Coca-Cola figure out who had been naughty or nice this year, as a way to help raise money for Youthline.",
    tags: ["3", "4"],
    url: ""
  },
  {
    _id: 4,
    image: "/projects/asb-quiz.jpg",
    title: "ASB Tennis Quiz",
    caption:
      "A live crowd mobile game at the Tennis for ASB. NZ first in using a mobile site with a large crowd all in sync via their phones browsers",
    tags: ["1", "4"],
    url: ""
  },
  {
    _id: 5,
    image: "",
    title: "Satellte Tag",
    caption:
      'Event based exhibitor portal, registration service and mobi experience. All the apps are event based. Read more about <a href="https://www.satellite.co.nz/events" target="_blank">Satellite tag</a>.',
    tags: ["2", "4"],
    url: ""
  },
  {
    _id: 6,
    image: "/projects/yealands.jpg",
    title: "Yealands Family Wines",
    caption:
      "A beautiful, intuitive website to be the home of the Yealands brand. The site showcases the brands core sustainable values, its award winning wine, its people and the vineyard itself.",
    tags: ["3", "4"],
    url: "https://www.yealands.co.nz/"
  },
  {
    _id: 7,
    image: "/projects/viaduct.jpg",
    title: "Viaduct Harbour",
    caption:
      "A website to showcase their vibrant community situated in and around Auckland’s waterfront. CMS allowing for flexibility and speed without any complexity for the administrator.",
    tags: ["3", "4"],
    url: "https://www.viaduct.co.nz/"
  },
  {
    _id: 8,
    image: "/projects/kapiti.jpg",
    title: "Taste Kapiti",
    caption:
      "Taste Kapiti AEM site. Shopify integration providing a seamless online shopping experience.",
    tags: ["5", "6"],
    url: "https://www.tastekapiti.co.nz/"
  },
  {
    _id: 9,
    image: "/projects/mainland.jpg",
    title: "Mainland",
    caption:
      "Fonterra Mainland AEM site that showcase 27 uniquely flavoured Mainland cheeses, all made right here in New Zealand",
    tags: ["3", "5"],
    url: "https://mainland.co.nz/"
  },
  {
    _id: 10,
    image: "/projects/fanta.jpg",
    title: "Fanta - Shake Things Up",
    caption:
      "Fanta “Shake Things Up” 2017 australian marketing campaign. A fabric.js based app allowed teens to design outdoor billboards and posters, products and even a shapchat lens. Various creations (including the snapchat lens) went on to be produced and launched in the market.",
    tags: ["3", "4"],
    url: "https://www.fanta.com.au/"
  }
];

export function getProjects() {
  return projects;
}
