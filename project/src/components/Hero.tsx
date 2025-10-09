import React from 'react';
import { MessageCircle, Star, Sparkles, Crown } from 'lucide-react';

export default function Hero() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour";

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 flex items-center overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="animate-pulse absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="animate-pulse absolute bottom-20 right-10 w-96 h-96 bg-purple-400 rounded-full blur-3xl" style={{animationDelay: '2s'}}></div>
        <div className="animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">
                <Crown className="w-4 h-4" />
                <span>Premium Beauty Experience</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Natural Beauty</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Where Elegance Meets Excellence
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                Experience luxury beauty treatments with our expert stylists and premium services. 
                Transform your look and boost your confidence at Virinchi's Beauty Parlour.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Book Appointment</span>
              </a>
              <button className="inline-flex items-center justify-center space-x-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 border-2 border-gray-200 hover:border-pink-300 shadow-lg">
                <Sparkles className="w-5 h-5" />
                <span>View Services</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">5-Star Rated</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Professional beauty treatment at Virinchi's"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-pink-600" />
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-pulse">
              <div className="text-sm font-medium text-gray-700">Expert Stylists</div>
              <div className="text-xs text-gray-500">Premium Services</div>
            </div>

            <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white p-3 rounded-full shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
              <Crown className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}