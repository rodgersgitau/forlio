"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

interface Props {
  navLinks?: { title: string; path: string }[];
}

export default function Navbar({
  navLinks = [
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
  ],
}: Props) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full mx-auto border-b">
      <div className="container flex flex-wrap items-center justify-between w-full gap-8 px-8 py-4 mx-auto max-w-screen-2xl lg:py-8 lg:px-12">
        <Link href={"/"} className="text-2xl font-semibold md:text-5xl">
          LOGO
        </Link>
        <div className="block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <MenuIcon className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded"
            >
              <XIcon className="w-5 h-5" />
            </button>
          )}
        </div>
        <div className="hidden md:block md:w-auto">
          <ul className="flex p-4 mt-0 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 rounded sm:text-xl md:p-0"
    >
      {title}
    </Link>
  );
};
