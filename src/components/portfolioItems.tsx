import portfolioItemType from "./reusable/portfolioItemType";
import URL_SHORTNER from "/URL_SHORTNER.png";
import BLOGGER from "/BLOGGER.png"
import ECOMMERECE from "/ECOMMERECE.png"

const portfolioItems: portfolioItemType[] = [
  {
    title: "URL shortner",
    description: "shotening the really long URL's",
    image: URL_SHORTNER,
    stack: [
      "React",
      "Node js",
      "Express",
      "MongoDb",
      "Chart js",
      "JavaScript",
      "Tailwind",
    ],
    repositoryLink: "https://github.com/mahmads0323/short-url",
  },
  {
    title: "Blogger",
    description: "Allowing user to create/read blogs",
    image: BLOGGER,
    stack: [
      "React",
      "Node js",
      "Express",
      "MongoDb",
      "Quil Text",
      "JavaScript",
      "Tailwind",
    ],
    repositoryLink: "https://github.com/mahmads0323/blooging",
  },
  {
    title: "Ecommerce",
    description: "Users can buy products",
    image: ECOMMERECE,
    stack: [
      "React",
      "Node js",
      "Express",
      "MongoDb",
      "Google Drive",
      "TypeScript",
      "Tailwind",
    ],
    repositoryLink: "https://github.com/mahmads0323/dev-ecommerce",
  },
];

export default portfolioItems;
