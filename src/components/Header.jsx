import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-teal-600 text-white sticky top-0 z-50 shadow-md max-w-[120rem]">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2"/>
                <path d="M15 20L18 23L25 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-xl font-bold">VentraGate</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="hover:text-teal-200 transition">Solutions</a>
            <a href="#services" className="hover:text-teal-200 transition">Services</a>
            <a href="#about" className="hover:text-teal-200 transition">About Us</a>
            <a href="#careers" className="hover:text-teal-200 transition">Careers</a>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-md font-medium hover:bg-teal-50 transition">
              Let's Talk
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-3">
            <a href="#products" className="hover:text-teal-200 transition">Products</a>
            <a href="#services" className="hover:text-teal-200 transition">Services</a>
            <a href="#about" className="hover:text-teal-200 transition">About Us</a>
            <a href="#careers" className="hover:text-teal-200 transition">Careers</a>
            <button className="bg-white text-teal-600 px-6 py-2 rounded-md font-medium hover:bg-teal-50 transition w-fit">
              Let's Talk
            </button>
          </nav>
        )}
      </div>
      <div className="bg-teal-700 text-center py-1 text-sm">
        Free cloud & infrastructure assessment for growing enterprises →
      </div>
    </header>
  );
}
