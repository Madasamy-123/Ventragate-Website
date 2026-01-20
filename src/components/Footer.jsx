import ventragateLogo from "../assets/logos/ventragate-logo.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-600">

      {/* OUTER FULL-WIDTH WRAPPER */}
      <div className="w-full">

        {/* INNER CENTERED CONTAINER (210px padding in rem) */}
        <div
          className="
            w-full
            2xl:max-w-[120rem]
            mx-auto
            px-4 sm:px-6 md:px-10
            lg:px-[7.5rem]
            xl:px-[10rem]
            2xl:px-[13.125rem]
            py-16
          "
        >
          {/* FLEX CONTENT */}
          <div
  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-5
    gap-y-12
    gap-x-12
  "
>

            {/* BRAND */}
            <div className="space-y-4 lg:col-span-2 max-w-sm">
  <img
    src={ventragateLogo}
    alt="VentraGate"
    className="h-8 w-auto"
  />

  <p className="text-sm  text-left max-w-[22rem] ">
    From cloud and infrastructure to security and automation,
    VentraGate helps businesses run faster, safer, and smarter.
  </p>

  <div className="flex gap-3 pt-2">
    <a  className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-teal-600 transition">
      <img src={instagramIcon} alt="Instagram" className="w-9 h-9" />
    </a>
    <a href="https://www.linkedin.com/company/ventragate/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-teal-600 transition">
      <img src={linkedinIcon} alt="LinkedIn" className="w-9 h-9" />
    </a>
  </div>
</div>


            {/* SOLUTIONS */}
            <div className="lg:col-span-1" >
              <h3 className="text-gray-900 font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm">
                <li>Cloud Solutions</li>
                <li>DevOps & Automation</li>
                <li>Security</li>
                <li>IT Consulting</li>
              </ul>
            </div>

            {/* SERVICES */}
            <div className="lg:col-span-1">
              <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li>Consulting & Strategy</li>
                <li>Implementation Services</li>
                <li>Managed IT Services</li>
                <li>Technical Support</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div className="lg:col-span-1" >
              <h3 className="text-gray-900 font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

      {/* FULL-WIDTH COPYRIGHT BAR */}
      <div className="w-full bg-teal-600">
        <p className="text-center text-white text-sm py-4">
          © 2026 Copyright By VentraGate Technologies LLP
        </p>
      </div>

    </footer>
  );
}
