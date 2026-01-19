import checkIcon from "../assets/icons/check-icon.svg";
import aboutUsImg from "../assets/images/about-us-img.png";

export default function AboutUs() {
  const features = [
    "Experienced technology professionals",
    "Customized, best-fit approach",
    "Secure and scalable solutions",
    "Proven delivery methodology",
    "Long-term support and partnership",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#EFFEFC]">
      {/* MAIN CONTAINER */}
      <div
        className="
          w-full
          2xl:max-w-[120rem]
          mx-auto
          px-4 sm:px-6 md:px-10
          lg:px-[7.5rem]
          xl:px-[10rem]
          2xl:px-[13.125rem]
          
        "
      >
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-[5rem]           
            items-center
            mt-[6.25rem]
          "
        >
          {/* LEFT */}
          <div>
            <h3 className="   
    text-[2.5rem]          
    leading-[3.25rem]
    tracking-[0]
   
    font-['Montserrat']
    font-semibold
    text-black
    mb-4
  ">
              About Us
            </h3>

            <p className="text-black-400 mb-6 leading-relaxed font-['Open Sans']">
              VentraGate delivers tailored IT, DevOps, and security solutions
              focused on long-term reliability and performance.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center mt-1">
                    <img src={checkIcon} alt="check" className="w-4 h-4" />
                  </div>
                  <span className="text-black-400 font-['Open Sans']">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src={aboutUsImg}
              alt="Professional team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
