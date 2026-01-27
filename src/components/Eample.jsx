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
                "service_shpk6of",
                "template_1rpgevv",
                formRef.current,
                "gb8wVSexq1EQAkB2h"
            )
            .then(
                () => {
                    toast.success("Successfully submitted", { id: toastId });
                    formRef.current.reset();
                },
                () => {
                    toast.error("Failed to send message", { id: toastId });
                }
            );
    };

    return (
        <section id="contact" className="py-16 md:py-24 max-w-[120rem]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h3 className="mt-[3.125rem] text-[2.5rem] leading-[3.25rem] font-['Montserrat'] font-semibold text-black mb-4">
                        Get in Touch
                    </h3>
                    <p className="text-gray-600">
                        Expert IT, Cloud, DevOps & Infrastructure consulting one click away.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        {/* EMAIL US */}
                        <div className="relative group rounded-xl">
                            <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="relative flex items-start space-x-4 p-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">EMAIL US</h3>
                                    <p className="text-gray-600">support@ventragate.com</p>
                                </div>
                            </div>
                        </div>

                        {/* CALL US */}
                        <div className="relative group rounded-xl">
                            <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                            <div className="relative flex items-start space-x-4 p-4">
                                <div className="flex-shrink-0 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">CALL US</h3>
                                    <p className="text-gray-600">+1 (806) 410 005</p>
                                </div>
                            </div>
                        </div>

                        {/* LOCATIONS */}
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

                    {/* RIGHT SIDE FORM */}
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            required
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            required
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-500"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            maxLength={10}
                            required
                            onChange={(e) => (e.target.value = e.target.value.replace(/\D/g, ""))}
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-500"
                        />
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Add your message"
                            required
                            className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-500 resize-none"
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}
