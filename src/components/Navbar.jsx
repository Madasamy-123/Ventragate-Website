import logo from "../assets/logos/ventragate-logo.svg";

export default function Navbar() {
  // const scrollTo = (ref) => {
  //   if (!ref?.current) return;
  //   ref.current.scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <header className="w-full sticky top-0 z-50 max-w-[120rem]">
      {/* Top bar */}
      <div
        className="bg-teal-600 text-white text-[0.875rem] md:text-[1rem] text-center
             h-auto md:h-[2.3125rem]
             py-2 md:py-0
             flex items-center justify-center mx-auto font-normal"
        style={{ fontFamily: "'Open Sans', sans-serif" }}
      >
        Free cloud & infrastructure assessment for growing enterprises →
      </div>

      {/* Navbar */}
 <nav
  className="
    h-[5.9375rem]
    max-w-[120rem]
    mx-auto
    flex
    items-center
    justify-between
    bg-white

    px-4
    sm:px-6
    md:px-10
    lg:px-[7.5rem]      /* LAPTOP */
    xl:px-[10rem]       /* DESKTOP */
    2xl:px-[13.125rem]  /* MONITOR ONLY */
  "
>
        {/* Logo */}
        <img
          src={logo}
          alt="VentraGate"
          className="h-[2.5rem] w-[11.625rem] cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />

        {/* Desktop Menu */}
        {/* <ul className="hidden md:flex gap-8 text-gray-800 font-medium"> */}
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfSL4IEY99-mw1FqA3Bo9DSfi5N8nPtyWMgeg0lwgmU4JHGnQ/viewform">
              Career
            </a>
          </li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={() =>
            document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
          }
          className="border border-gray-700 px-4 md:px-6 py-2 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition text-sm md:text-base "
        >
          Let's Talk
        </button>
      </nav>

    </header>
  );
}
