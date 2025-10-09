import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const whatsappLink = "https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your look? Contact us today to book your appointment and 
            experience the luxury of professional beauty care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone Numbers</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919010596600" className="hover:text-pink-600 transition-colors">
                        +91 90105 96600
                      </a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:+919014157534" className="hover:text-pink-600 transition-colors">
                        +91 90141 57534
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp Booking</h4>
                    <p className="text-gray-600 mb-2">Quick and easy appointment booking</p>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
                    >
                      Book on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:kaligaswapna1@gmail.com" className="hover:text-pink-600 transition-colors">
                        kaligaswapna1@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Hyderabad, Telangana</p>
                    <p className="text-sm text-gray-500">Coordinates: 17.320328, 78.520416</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Working Hours</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-pink-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Monday - Saturday</div>
                    <div className="text-gray-600">10:00 AM - 8:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-pink-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Sunday</div>
                    <div className="text-gray-600">11:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-pink-100 rounded-lg">
                  <p className="text-sm text-pink-800">
                    <strong>Note:</strong> We recommend booking in advance, especially for bridal and party packages.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Parlour</h3>
                <p className="text-gray-600">Located in Hyderabad, Telangana</p>
                <p className="text-sm text-gray-500">Detailed address will be shared upon booking</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready for Your Beauty Transformation?</h3>
              <p className="text-lg mb-6 opacity-90">
                Book your appointment today and let our expert team help you look and feel your absolute best.
              </p>
              
              <div className="space-y-4">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-pink-600 px-6 py-3 rounded-full font-semibold text-center hover:bg-gray-100 transition-colors"
                >
                  Book WhatsApp Appointment
                </a>
                <a
                  href="tel:+919010596600"
                  className="block bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-semibold text-center transition-colors"
                >
                  Call Now: +91 90105 96600
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Personal consultation to understand your needs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Professional service with premium products</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Relaxing and comfortable environment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert advice for maintaining your look</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Follow-up support and care tips</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}