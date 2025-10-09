import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      rating: 5,
      comment: "Virinchi's made my wedding day absolutely perfect! The bridal makeup was flawless and lasted the entire day. The team is so professional and caring.",
      service: "Bridal Package",
      image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Anitha Reddy",
      location: "Secunderabad",
      rating: 5,
      comment: "I've been coming here for over a year now. The hair treatments are amazing and my hair has never looked better. Highly recommend their services!",
      service: "Hair Care",
      image: "https://images.pexels.com/photos/3992657/pexels-photo-3992657.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Kavitha Nair",
      location: "Hyderabad",
      rating: 5,
      comment: "The facial treatments here are incredible. My skin feels so refreshed and glowing after every visit. The staff is knowledgeable and friendly.",
      service: "Skincare",
      image: "https://images.pexels.com/photos/3992658/pexels-photo-3992658.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Deepika Patel",
      location: "Rangareddy",
      rating: 5,
      comment: "Perfect place for party makeup! They understood exactly what I wanted and made me look stunning. Will definitely come back for more occasions.",
      service: "Party Makeup",
      image: "https://images.pexels.com/photos/3992659/pexels-photo-3992659.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients about their 
            beautiful experiences at Virinchi's Beauty Parlour.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <Quote className="w-8 h-8 text-pink-500 mr-4" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">
                "{testimonial.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-pink-600">{testimonial.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Heart className="w-8 h-8 mr-2" />
              <h3 className="text-3xl font-bold">Join Our Happy Clients</h3>
            </div>
            <p className="text-xl mb-6 opacity-90">
              Experience the transformation that over 1000+ clients have enjoyed. 
              Book your appointment today and discover your most beautiful self.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Beauty Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}