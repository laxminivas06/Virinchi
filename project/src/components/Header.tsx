import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = "https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour";

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">Virinchi's</span>
              <div className="text-xs text-pink-600 font-medium">Beauty Parlour</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Services</a>
            <a href="#gallery" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Gallery</a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href={`tel:+919010596600`} className="text-pink-600 hover:text-pink-700 transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full flex items-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-pink-600 py-2 transition-colors font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-pink-600 py-2 transition-colors font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-pink-600 py-2 transition-colors font-medium">Services</a>
              <a href="#gallery" className="text-gray-700 hover:text-pink-600 py-2 transition-colors font-medium">Gallery</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-600 py-2 transition-colors font-medium">Contact</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full flex items-center space-x-2 transition-all duration-300 w-fit mt-4"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}