import React from 'react';
import { Scissors, Palette, Sparkles, Crown } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Hair Styling & Cuts",
      description: "Professional haircuts, styling, and treatments for all hair types.",
      features: ["Trendy Haircuts", "Hair Coloring", "Hair Treatments", "Styling & Blowdry"],
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Makeup & Beauty",
      description: "Expert makeup services for all occasions and professional beauty treatments.",
      features: ["Bridal Makeup", "Party Makeup", "Facial Treatments", "Eyebrow Shaping"],
      image: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Skin Care & Facials",
      description: "Rejuvenating facial treatments and advanced skincare solutions.",
      features: ["Deep Cleansing Facial", "Anti-Aging Treatments", "Acne Treatment", "Skin Brightening"],
      image: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Bridal Packages",
      description: "Complete bridal beauty packages for your special day.",
      features: ["Pre-Bridal Treatments", "Bridal Makeup", "Hair Styling", "Mehendi Services"],
      image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty services designed to enhance your natural beauty 
            and boost your confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 p-2 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Special Packages & Offers</h3>
          <p className="text-xl mb-6 opacity-90">
            Book multiple services together and save! Ask about our seasonal packages 
            and special occasion deals.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Bridal Package</h4>
              <p className="text-sm opacity-80">Complete bridal beauty solution with pre-wedding treatments</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Monthly Membership</h4>
              <p className="text-sm opacity-80">Regular beauty maintenance with exclusive discounts</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Party Ready</h4>
              <p className="text-sm opacity-80">Quick makeover packages for special occasions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}