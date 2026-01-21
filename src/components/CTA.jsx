import expertImg from "../assets/images/experts-img.png";
import ctaBgLogo from "../assets/logos/cta-logo.svg";

export default function CTA() {
  return (
    <section className="py-20 bg-white">

      {/* OUTER CONTAINER */}
      <div
        className="
          max-w-[120rem]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          lg:px-[7.5rem]
          2xl:px-[13.125rem]
        "
      >

        {/* CTA CARD */}
        <div
          className="
          relative
            flex
            flex-col
            lg:flex-row
            overflow-hidden
            rounded-2xl
            shadow-xl
            lg:h-[22.5rem]   /* 360px only on laptop+ */
          "
        >

          {/* LEFT IMAGE */}
          <div
            className="
              w-full
              h-[14rem]
              sm:h-[18rem]
              xl:w-[25.3125rem]
              xl:h-[22.5rem]
              flex-shrink-0
            "
          >
            <img
              src={expertImg}
              alt="Professional consultant"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              flex-1
              bg-[#0b3f3c]
              text-white
              p-8
              sm:p-10
              md:p-12
              lg:p-14
              flex
              flex-col
              justify-center
              lg:h-[22.5rem]
              flex-1
              xl:w-[45.6875rem]
            "
          >

            {/*  BACKGROUND LOGO */}
            <img
              src={ctaBgLogo}
              alt="lines"
              aria-hidden
              className="
               hidden sm:block  
                absolute
                right-0
                bottom-0
                w-[15rem]
                opacity-20
                pointer-events-none
              "
            />

            <h2
              className="
    text-2xl
    sm:text-3xl
    md:text-[32px]
    lg:text-[28px]   /* laptop */
    xl:text-[40px]   /* monitor */
    font-['Montserrat']
    font-semibold
    mb-4
  "
            >
              Ready to Transform Your IT?
            </h2>


            <p className="text-teal-100 mb-8 max-w-md leading-relaxed">
              Let’s discuss how we can help your business grow with the right
              technology.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                w-fit
                bg-teal-500
                text-white
                px-8
                py-3
                rounded-lg
                font-semibold
                hover:bg-teal-400
                transition
                shadow-md
              "
            >
              Talk to Experts
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
