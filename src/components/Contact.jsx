import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from "emailjs-com";
import { useRef } from "react";
import toast from "react-hot-toast";

export default function Contact() {

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const toastId = toast.loading("Sending message...");


    emailjs
      .sendForm(
        "service_bn6dil3",
        "template_6ispbh5",
        formRef.current,
        "8Pw8d7lcBoLZbZ9-B"
      )
      .then(
        () => {
          toast.success("Successfully submitted", { id: toastId });
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          toast.error("Failed to send message ", { id: toastId });
        }
      );
  }
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
            <div className="relative group rounded-xl">
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative flex items-start space-x-4 p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">EMAIL US</h3>
                  <p className="text-gray-600">info.ventragate@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="relative group rounded-xl">
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative flex items-start space-x-4 p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">CALL US</h3>
                  <p className="text-gray-600">+91 7339672322</p>
                </div>
              </div>
            </div>

            <div className="relative group rounded-xl">
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

              <div className="relative flex items-start space-x-4 p-4">
                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">LOCATIONS</h3>
                  <div className="text-gray-600 space-y-2">
                    <div>
                      <p className="font-medium">USA</p>
                      <p className="text-sm">
                        VentraGate Technologies LLC, PO 4321, River Edge, NJ USA - 07661
                      </p>
                    </div>
                    <div>
                      <p className="font-medium">INDIA</p>
                      <p className="text-sm">
                        VentraGate Technologies, Third floor, No.7, YNOT Towers,
                        Sri Sangara Nagar, near KCT Tech Park, Saravanampatti,
                        Coimbatore, Tamil Nadu 641035
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail} method="POST" className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                maxLength={10}
                onChange={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, "");
                }}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Add your message"
                rows={4}
                required
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
