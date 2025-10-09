import React from 'react';
import { Heart, Phone, Mail, MapPin, MessageCircle, Sparkles, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Virinchi's</span>
                <div className="text-xs text-pink-400 font-medium">Beauty Parlour</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Where elegance meets excellence. Transform your beauty with our premium services and expert care.
            </p>
            <div className="flex space-x-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:+919010596600"
                className="bg-pink-600 hover:bg-pink-700 p-2 rounded-full transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a
                href="mailto:kaligaswapna1@gmail.com"
                className="bg-orange-600 hover:bg-orange-700 p-2 rounded-full transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-purple-600 hover:bg-purple-700 p-2 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hair Styling & Cuts</li>
              <li>Makeup & Beauty</li>
              <li>Skin Care & Facials</li>
              <li>Bridal Packages</li>
              <li>Party Makeup</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div>+91 90105 96600</div>
                  <div>+91 90141 57534</div>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>kaligaswapna1@gmail.com</div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>Hyderabad, Telangana</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Virinchi's Beauty Parlour | All rights reserved
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Designed with</span>
              <Heart className="w-4 h-4 text-pink-500" />
              <span>| Where beauty meets excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}