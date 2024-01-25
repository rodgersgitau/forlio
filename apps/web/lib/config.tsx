const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const HeroSection = {
  title: "Beautiful portfolios",
  titleSequence: [
    ".for developers",
    1000,
    ".for creatives",
    1000,
    ".for artists",
    1000,
    ".for agencies",
    1000,
  ],
  description:
    "Craft stunning portfolios effortlessly & showcase your work with style. Perfect for developers and other creatives",
  cta: {
    primary: "Start building now",
    other: "Docs",
  },
};

export default {
  navLinks,
  hero: HeroSection,
};
