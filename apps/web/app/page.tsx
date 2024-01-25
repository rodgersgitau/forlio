import Navbar from "@/components/navbar";

import HeroSection from "./_components/hero-section";

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

export default function Page(): JSX.Element {
  return (
    <section className="grid gap-8">
      <Navbar navLinks={navLinks} />
      <HeroSection />
    </section>
  );
}
