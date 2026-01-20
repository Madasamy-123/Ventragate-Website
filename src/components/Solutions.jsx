import cloudImg from "../assets/images/cloud-solutions-img.png";
import devopsImg from "../assets/images/devops-img.png";
import securityImg from "../assets/images/security_img.png";
import consultingImg from "../assets/images/it-consulting-img.png";

export default function Solutions() {
  const solutions = [
    {
      title: "Cloud Solutions",
      description:
        "Migrate and secure your infrastructure with scalable, high-performance, and cost-effective solutions.",
      image: cloudImg,
    },
    {
      title: "DevOps & Automation",
      description:
        "Optimize development and deployment with streamlined CI/CD pipelines and automation.",
      image: devopsImg,
    },
    {
      title: "Security",
      description:
        "Protect your data with advanced security practices, strategies and compliance management.",
      image: securityImg,
    },
    {
      title: "IT Consulting",
      description:
        "Navigate infrastructure complexity with expert guidance, performance, and scalability.",
      image: consultingImg,
    },
  ];

  return (
    <section id="solutions" className="py-16 md:py-24  max-w-[1920px]">
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

        {/* Heading */}
        <div className="text-center mb-14">
          <h3
            className="
    mt-[50px]
    text-[2.5rem]          /* 40px */
    leading-[52px]
    tracking-[0]
    text-center
    font-['Montserrat']
    font-semibold
    text-black
    mb-4
  "
          >
            Solutions designed for real-world
            <br />
            IT challenges
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Our solutions combine cloud, DevOps, security, and infrastructure
            expertise to deliver reliable outcomes at scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center items-stretch">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="w-full max-w-[280px] bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
