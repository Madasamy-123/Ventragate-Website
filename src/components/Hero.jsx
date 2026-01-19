import heroImg from "../assets/images/hero-img.png";
import groupImg from "../assets/images/Group-img.png";
import heroBg from "../assets/logos/heropg.svg";


export default function Hero() {
  return (
    <section
      id="hero"
      className=" relative w-full flex justify-center overflow-hidden bg-white"
    >
      {/* SVG BACKGROUND */}
      <img
        src={heroBg}
        alt="heropage"
        aria-hidden
        className="
    absolute
    inset-0
    w-full
    h-full
    object-cover
    z-0
    pointer-events-none
  "
      />

      {/* LEFT SOFT SHADOW */}
<div
  aria-hidden
  className="
    absolute
    left-[-15%]
    top-1/2
    -translate-y-1/2
    rounded-full
    bg-teal-300
    blur-[120px]
    z-[1]

    /* PHONE */
    opacity-0

    /* TABLET / iPAD */
    sm:opacity-10
    sm:w-[24rem]
    sm:h-[24rem]

    /* LAPTOP */
    lg:opacity-15
    lg:w-[30rem]
    lg:h-[30rem]

    /* DESKTOP / MONITOR */
    2xl:opacity-25
    2xl:w-[40rem]
    2xl:h-[40rem]
  "
/>

      {/* RIGHT SOFT SHADOW */}
<div
  aria-hidden
  className="
    absolute
    right-[-15%]
    top-1/2
    -translate-y-1/2
    rounded-full
    bg-teal-300
    blur-[120px]
    z-[1]

    /* PHONE */
    opacity-0

    /* TABLET / iPAD */
    sm:opacity-10
    sm:w-[24rem]
    sm:h-[24rem]

    /* LAPTOP */
    lg:opacity-10
    lg:w-[30rem]
    lg:h-[30rem]

    /* DESKTOP / MONITOR */
    2xl:opacity-15
    2xl:w-[40rem]
    2xl:h-[40rem]
  "
/>

      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          2xl:w-[120rem]
          min-h-[49.5625rem]
          flex
          flex-col
          lg:flex-row
          relative
          z-10
          px-4 sm:px-6 md:px-10
          lg:px-[7.5rem]
          xl:px-[10rem]
          2xl:px-[13.125rem]
        "
      >
        {/* LEFT CONTENT */}
        <div
          className="
            w-full
            lg:w-1/2
            2xl:w-[48.6875rem]
            pt-16
            lg:pt-[5.625rem]
            xl:pt-[6.25rem]
            text-center lg:text-left
          "
        >
          <span className="inline-block mb-5 px-4 py-1 text-sm rounded-full bg-teal-100 text-teal-700">
            Tailored IT, DevOps, and security solutions
          </span>

          <h1
            className="
              text-[2rem]
              sm:text-[2.5rem]
              md:text-[3rem]
              lg:text-[3.5rem]
              2xl:text-[4rem]
              font-semibold
              leading-tight
              2xl:leading-[5.3125rem]
              tracking-[-0.02em]
              text-[#08080C]
              font-['Montserrat']
            "
          >
            Complex IT systems,
            <br />
            built to work reliably.
          </h1>

          <p
            className="
              mt-5
              text-gray-600
              text-base sm:text-lg
              max-w-[37.5rem]
              mx-auto lg:mx-0
            "
          >
            VentraGate helps enterprises design, secure, and operate cloud-first
            IT systems that perform reliably at scale.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="
    mt-6
    bg-teal-600
    text-white
    h-[2.75rem]          /* mobile height */
    w-[12.5rem]          /* mobile width */
    sm:h-[3.25rem]       /* desktop height */
    sm:w-[15.375rem]     /* desktop width */
    rounded-xl
    font-semibold
    hover:bg-teal-700
    transition
  "
          >
            Talk to Experts
          </button>


          {/* CUSTOMER INFO */}
          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            <img
              src={groupImg}
              alt="customer image"
              className="w-[6.5rem] h-[4.125rem]"
            />

            <p className="text-sm text-gray-600">
              <span className="font-semibold text-black text-lg">
                World Wide
              </span>
              <br />
              Happy Customers
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
            w-full
            lg:w-1/2
            flex
            justify-center lg:justify-end
            pt-12
            lg:pt-[5.625rem]
            xl:pt-[6.25rem]
          "
        >
          <img
            src={heroImg}
            alt="IT Expert"
            className="
              w-full
              max-w-[20rem]
              sm:max-w-[26.25rem]
              md:max-w-[32.5rem]
              lg:max-w-[40.625rem]
              2xl:w-[41rem]
              2xl:h-[43.3125rem]
              object-cover
              rounded-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}
