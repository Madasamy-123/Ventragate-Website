import logo from "../assets/logos/ventragate-logo.svg";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling DOWN
        setShowNavbar(false);
      } else {
        // scrolling UP
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`w-full sticky top-0 z-50 transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      {/* Top bar */}
      <div
        className="
          bg-teal-600 text-white
          text-[0.75rem] md:text-[0.875rem]
          h-auto md:h-[2rem]
          py-2 md:py-0
          flex items-center justify-center
          font-normal
        "
      >
        Free cloud & infrastructure assessment for growing enterprises →
      </div>

      {/* Navbar */}
<nav
  className="
    bg-white
    h-[5.9375rem]
    max-w-[120rem]
    mx-auto
    flex
    items-center
    justify-between

    px-[clamp(1rem,4vw,9rem)]   /* unified padding */
    min-[1920px]:px-[13.125rem]
  "
>

        {/* Logo */}
        <img
          src={logo}
          alt="VentraGate"
          className="h-[2rem] w-[9.5rem]
          sm:h-[2.5rem] sm:w-[11.625rem] 
          cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 text-gray-800 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#hero">Home</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#solutions">Solutions</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#services">Services</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="#about">About Us</a>
          </li>
          <li className="hover:text-teal-600 cursor-pointer">
            <a href="https://forms.gle/f33XabwDSmzNCQja6">
              Career
            </a>
          </li>
        </ul>

        {/* CTA */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="
            border border-gray-700
            px-3 md:px-6
            sm:px-4 sm:py-2
            py-1.5
            text-xs sm:text-sm md:text-base
            whitespace-nowrap
            rounded-md sm:rounded-lg
            font-['Montserrat']
            font-semibold
            hover:bg-gray-900 hover:text-white
            transition
          "
        >
          Let's Talk
        </button>
      </nav>
    </header>
  );
}
