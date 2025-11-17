import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#131633] text-white py-12 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        <div>
          <h3 className="text-2xl font-semibold">Wedjust</h3>
          <p className="mt-4 text-sm text-gray-300 leading-relaxed">
            Crafting unforgettable celebrations with trusted vendors, curated experiences,
            and heartfelt storytelling—so every moment feels just right.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm text-gray-300">
          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Explore</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors duration-200">
                  Why Wedjust
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors duration-200">
                  Stories
                </a>
              </li>
              <li>
                <a href="#vendors" className="hover:text-white transition-colors duration-200">
                  Vendors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#faq" className="hover:text-white transition-colors duration-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors duration-200">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Stay in touch</h4>
          <form className="mt-4 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F5C174] focus:border-transparent"
            />
            <button
              type="submit"
              className="sm:w-auto px-6 py-3 rounded-lg bg-[#F5C174] text-[#131633] font-semibold shadow-md hover:bg-[#ffd68f] transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-gray-400">
            By subscribing, you agree to receive updates from Wedjust. We respect your privacy.
          </p>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
        <p>© {new Date().getFullYear()} Wedjust. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://instagram.com" className="hover:text-white transition-colors duration-200">Instagram</a>
          <a href="https://facebook.com" className="hover:text-white transition-colors duration-200">Facebook</a>
          <a href="https://pinterest.com" className="hover:text-white transition-colors duration-200">Pinterest</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


