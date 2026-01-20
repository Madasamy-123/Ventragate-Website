import consultIcon from "../assets/icons/consulting-icon.svg";
import servicesIcon from "../assets/icons/services-icon.svg";
import manageIcon from "../assets/icons/manage-services-icon.svg";
import technicalIcon from "../assets/icons/technical-icon.svg";

export default function Services() {
  const services = [
    {
      title: "Consulting & Strategy",
      description:
        "Expert guidance to align technology with your business goals.",
      icon: consultIcon,
    },
    {
      title: "Implementation Services",
      description:
        "Seamless deployment and integration of cloud-first solutions.",
      icon: servicesIcon,
    },
    {
      title: "Managed IT Services",
      description:
        "Ongoing monitoring, maintenance, and support for mission-critical systems.",
      icon: manageIcon,
    },
    {
      title: "Technical Support",
      description:
        "24/7 responsive support to minimize downtime and maximize uptime.",
      icon: technicalIcon,
    },
  ];

  return (
    <section id="services" className="py-16 md:py-44 max-w-[1920px]">
      <div className=" mx-auto px-[1.5rem] md:px-[3rem] lg:px-[5rem] xl:px-[8rem] 2xl:px-[13.125rem] mx-auto px-6">
 
        {/* Heading */}
        <div className="text-center mb-16">
          <h3
            className="
    text-[2.5rem]          /* 40px */
    md:text-[2.75rem]      /* 44px (optional for larger screens) */
    leading-[52px]
    tracking-[0]
    text-center
    font-['Montserrat']
    font-semibold
    text-black
    mb-4
  "
          >Our Services
          </h3>

          {/* space between heading & text */}
          <p className="mt-4 text-gray-500 text-lg max-w-3xl mx-auto">
            We deliver reliable IT services that support daily operations,
            improve performance, and enable long-term growth.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white p-8 rounded-2xl border border-gray-200
             transition duration-300 hover:bg-teal-600 hover:border-teal-600"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center mb-6">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-12 h-12"
                />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-['Montserrat'] font-semibold text-gray-900 mb-3
               transition group-hover:text-white"
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-600 text-sm leading-relaxed
               transition group-hover:text-white/90"
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>

  );
}
