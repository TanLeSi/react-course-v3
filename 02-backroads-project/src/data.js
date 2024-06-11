import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
import tour5 from "./images/tour-5.jpeg"
import tour6 from "./images/tour-6.jpeg"
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const services = [
  {
    id: 1, icon: "fas fa-wallet fa-fw", title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 2, icon: "fas fa-tree fa-fw", title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 3, icon: "fas fa-socks fa-fw", title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
];

export const tours = [
  {
    id: 1, img: tour1, title: "Tibet Adventure", country: "China",
    date: "august 26th, 2020", days: 6, price: 2100,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 2, img: tour2, title: "Best of Java", country: "Indonesia",
    date: "october 1st, 2020", days: 11, price: 1400,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 3, img: tour3, title: "Tibet Adventure", country: "Hong Kong",
    date: "September 15th, 2020", days: 8, price: 5000,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  {
    id: 4, img: tour4, title: "Kenya Highlights", country: "Kenya",
    date: "December 5th, 2019", days: 20, price: 3300,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  },
  // {
  //   id: 1, icon: tour1, title: "Tibet Adventure",
  //   date: "august 26th, 2020", days: "6 days", price: "from $2100",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  // },
  // {
  //   id: 1, icon: tour1, title: "Tibet Adventure",
  //   date: "august 26th, 2020", days: "6 days", price: "from $2100",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia."
  // },
];
