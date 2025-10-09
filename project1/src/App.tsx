import { Phone, Mail, MapPin, Sparkles, ArrowRight, Menu, X, Scissors, Heart, Star, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = "https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20Virinchi's%20Beauty%20Parlor";

  const services = [
    {
      title: "Bridal Makeup",
      description: "Look stunning on your special day with our expert bridal makeup artists",
      icon: <Sparkles className="w-8 h-8" />
    },
    {
      title: "Hair Styling & Treatments",
      description: "Premium hair care, styling, coloring, and nourishing treatments",
      icon: <Scissors className="w-8 h-8" />
    },
    {
      title: "Skin Care & Facials",
      description: "Rejuvenate your skin with our luxurious facial treatments",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Nail Art & Manicure",
      description: "Beautiful nails with creative designs and perfect grooming",
      icon: <Star className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Sparkles className={`w-8 h-8 transition-colors duration-300 ${scrolled ? 'text-rose-600' : 'text-white'}`} />
              <span className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Virinchi's Beauty Parlor
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`transition-colors duration-300 hover:text-rose-500 font-medium ${scrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-gray-700 hover:text-rose-500 transition-colors font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto py-20">
          <div className="animate-fade-in">
            <div className="inline-block mb-6">
              <Sparkles className="w-16 h-16 text-rose-600 mx-auto animate-pulse" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent mb-6 leading-tight">
              Virinchi's Beauty Parlor
            </h1>
            <p className="text-2xl sm:text-3xl text-gray-700 mb-6 max-w-3xl mx-auto font-medium">
              Where Beauty Meets Elegance
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience luxury beauty treatments and transformations in a serene, welcoming atmosphere. Your journey to radiance begins here.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rose-500 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">About Our Parlor</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A sanctuary of beauty and self-care where every visit is a luxurious experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-rose-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Stylists</h3>
              <p className="text-gray-600 leading-relaxed">
                Highly trained professionals dedicated to enhancing your natural beauty
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-pink-50 to-amber-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-pink-500 to-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Products</h3>
              <p className="text-gray-600 leading-relaxed">
                Only the finest, trusted beauty products for exceptional results
              </p>
            </div>

            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-amber-50 to-rose-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-amber-500 to-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Luxury Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Elegant ambiance designed for your comfort and relaxation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive beauty solutions tailored to your unique style
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-rose-100"
              >
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-5 rounded-2xl text-white flex-shrink-0 shadow-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-3 bg-white px-8 py-4 rounded-full shadow-lg">
              <Clock className="w-6 h-6 text-rose-500" />
              <div className="text-left">
                <p className="font-bold text-gray-900">Opening Hours</p>
                <p className="text-gray-600">Mon - Sun: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Transformations</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Witness the magic of beauty transformations by our talented team
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative aspect-square bg-gradient-to-br from-rose-100 via-pink-100 to-amber-100 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer shadow-lg"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-rose-400 mx-auto mb-2 opacity-50" />
                    <p className="text-gray-500 text-sm md:text-base">Gallery Photo {item}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Star className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-semibold text-lg">View</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-rose-600 via-pink-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-300 text-amber-300" />
                  ))}
                </div>
                <p className="text-white/90 mb-6 leading-relaxed italic">
                  "Amazing service and beautiful ambiance. The staff is professional and caring. Highly recommended!"
                </p>
                <p className="font-bold text-center">Happy Client {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your appointment today and experience beauty redefined
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-rose-100">
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-4 rounded-xl shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Phone Numbers</h3>
                  <a href="tel:+919010596600" className="text-rose-600 hover:text-rose-700 block font-medium">
                    +91 901059660
                  </a>
                  <a href="tel:+919014157534" className="text-rose-600 hover:text-rose-700 block font-medium">
                    +91 9014157534
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-pink-50 to-amber-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-pink-100">
                <div className="bg-gradient-to-br from-pink-500 to-amber-500 p-4 rounded-xl shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Email</h3>
                  <a href="mailto:kaligaswapna1@gmail.com" className="text-rose-600 hover:text-rose-700 break-all font-medium">
                    kaligaswapna1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl hover:shadow-xl transition-all duration-300 border border-amber-100">
                <div className="bg-gradient-to-br from-amber-500 to-rose-500 p-4 rounded-xl shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">Location</h3>
                  <a
                    href="https://www.google.com/maps?q=17.320328,78.520416"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-600 hover:text-rose-700 font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-5 rounded-2xl text-lg font-semibold hover:from-rose-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Phone className="w-6 h-6" />
                <span>Book Appointment on WhatsApp</span>
                <ArrowRight className="w-6 h-6" />
              </a>
            </div>

            <div className="h-96 md:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-100">
              <iframe
                src="https://www.google.com/maps?q=17.320328,78.520416&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Virinchi's Beauty Parlor Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-rose-950 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-rose-400 animate-pulse" />
              <span className="text-2xl font-bold">Virinchi's Beauty Parlor</span>
            </div>
            <p className="text-gray-300 text-lg">
              © 2025 Virinchi's Beauty Parlor | All rights reserved
            </p>
            <p className="text-gray-400">
              Where beauty meets elegance | Creating confidence, one transformation at a time
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
