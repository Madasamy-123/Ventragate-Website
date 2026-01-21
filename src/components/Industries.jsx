import healthcare from "../assets/images/healthcare.png";
import insurance from "../assets/images/insurance.png";
import ecommerce from "../assets/images/ecommerce.png";
import fintech from "../assets/images/fintech.png";
import manufacturing from "../assets/images/manufacturing.png";
import education from "../assets/images/education.png";

export default function Industries() {
  const industries = [
    { name: "Healthcare", image: healthcare },
    { name: "Insurance", image: insurance },
    { name: "E-commerce", image: ecommerce },
    { name: "FinTech", image: fintech },
    { name: "Manufacturing", image: manufacturing },
    { name: "Education", image: education },




  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden max-w-[120rem]">
      <div
  className="
    mx-auto
    px-6
    lg:px-[7.5rem]
    xl:px-[10rem]
    2xl:px-[13.125rem]
  "
>

        {/* Heading */}
        <div className="text-center mb-14">
<h3
  className="
    text-[2rem]          /* 40px */
    md:text-[2.75rem]      /* 44px (optional for larger screens) */
    leading-[3.25rem]
    tracking-[0]
    text-center
    font-['Montserrat']
    font-semibold
    text-black
    mb-4
  "
>Industries We Support
</h3>
          <p className="text-gray-500 text-lg">
            Technology solutions tailored to diverse business domains
          </p>
        </div>

        {/* CONTINUOUS SLIDER */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 industries-marquee">

            {[...industries, ...industries].map((industry, index) => (
              <div key={index} className="w-[18.5rem] shrink-0 md:min-w-[18.75rem]">
                <div className="relative h-[24.5625rem] w-[18.75rem] rounded-xl overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 from-black/70 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 text-white z-10">
  <h3 className="text-2xl font-semibold text-center">
    {industry.name}
  </h3>
</div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
