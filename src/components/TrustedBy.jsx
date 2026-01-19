import accuquote from "../assets/logos/accuquote-logo.png";
import alchemy from "../assets/logos/alchemy-logo.png";
import bluesky from "../assets/logos/blueSky-logo.png"
import dodge from "../assets/logos/dodge-logo.png";
import everly from "../assets/logos/everly-logo.png"
import force from "../assets/logos/force-logo.png";
import habits from "../assets/logos/habits-logo.png";
import intact from "../assets/logos/intact-logo.png";
import iptiq from "../assets/logos/iptiq-logo.png";
import lendingDirect from "../assets/logos/lendingDirect-logo.png";
import newEngland from "../assets/logos/newEngland-logo.png";
import popsixle from "../assets/logos/popsixle-logo.png";
import relm from "../assets/logos/relm-logo.png";
import revert from "../assets/logos/revert-logo.png";
import smartMint from "../assets/logos/smartMint-logo.png";
import stake from "../assets/logos/stake-logo.png";
import umovefree from "../assets/logos/umovefree-logo.png";
import value from "../assets/logos/Value-logo.png";


export default function TrustedBy() {
  const companies = [
    { name: "AccuQuote", logo: accuquote },
    { name: "Alchemy Vision", logo: alchemy },
    { name: "BlueSky", logo: bluesky },
    { name: "Dodge Construction", logo: dodge },
    { name: "Everly", logo: everly },
    { name: "Force", logo: force },
    { name: "Habits", logo: habits },
    { name: "Intact Specialty", logo: intact },
    { name: "IPTIQ", logo: iptiq },
    { name: "Lending Direct", logo: lendingDirect },
    { name: "New England", logo: newEngland },
    { name: "Popsicle", logo: popsixle },
    { name: "Relm", logo: relm },
    { name: "Revert", logo: revert },
    { name: "SmartMint", logo: smartMint },
    { name: "Stake", logo: stake },
    { name: "uMoveFree", logo: umovefree },
    { name: "Value", logo: value },
  ];

  return (
    <section className="bg-white py-12 relative overflow-hidden max-w-[120rem] h-[14.3125rem]">
      <p className="text-center text-black mb-8 font-montserrat text-[1.25rem]">
        Trusted by growing enterprises across industries
      </p>

      {/* Gradient fade – LEFT */}
      {/* LEFT – extra white */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-[13.125rem] bg-gradient-to-r from-white via-white to-transparent z-10" />

      {/* RIGHT – extra white */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[13.125rem] bg-gradient-to-l from-white via-white to-transparent z-10" />


      {/* Logos */}
      <div className="overflow-hidden">
        <div className="animate-scroll flex gap-24 whitespace-nowrap w-max items-center">
          {[...companies, ...companies].map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center flex-shrink-0"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-[1.875rem] w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


