import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24  max-w-[120rem]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> */}
          <h3 className="    mt-[3.125rem]
    text-[2.5rem]          /* 40px */
    leading-[3.25rem]
    tracking-[0]
    text-center
    font-['Montserrat']
    font-semibold
    text-black
    mb-4
  ">

            Get in Touch
          </h3>
          <p className="text-gray-600">
            Expert IT, Cloud, DevOps & Infrastructure consulting one click away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">EMAIL US</h3>
                <p className="text-gray-600">support@ventragate.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">CALL US</h3>
                <p className="text-gray-600">+1 (806) 410 005</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">LOCATIONS</h3>
                <div className="text-gray-600 space-y-2">
                  <div>
                    <p className="font-medium">USA</p>
                    <p className="text-sm">VentraGate Technologies LLC, PO 4321, River Edge, NJ USA - 07661
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">INDIA</p>
                    <p className="text-sm">VentraGate Technologies LLP, 39 MuthuNagar, Coimbatore, TN India - 641031 IT Hub, Bangalore, KA 560001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <textarea
                placeholder="Add your message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-600 text-white px-8 py-3 rounded-md font-medium hover:bg-teal-700 transition shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
