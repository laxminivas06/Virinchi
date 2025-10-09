import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personalized Care",
      description: "Every client receives individual attention and customized beauty treatments tailored to their unique needs."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Stylists",
      description: "Our team of certified beauty professionals brings years of experience and latest techniques."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Happy Clients",
      description: "Over 1000+ satisfied customers who trust us for their beauty and wellness needs."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Premium Products",
      description: "We use only the finest quality products and latest equipment for exceptional results."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Virinchi's</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
             beauty meets artistry. We're passionate about helping you look and feel your absolute best 
            with our comprehensive range of beauty and wellness services.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
Hello, I’m Swapna, and I started Virinchi’s Beauty Parlour with one simple vision: to help every woman feel beautiful, confident, and empowered.

Our journey began with a deep belief—that everyone deserves to feel their very best. With a team of skilled professionals, a strong commitment to quality, and the use of premium beauty products, we’ve proudly built a space that blends tradition with modern style
        
          
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From timeless beauty rituals to contemporary styling techniques, we offer a complete experience that’s crafted with care, love, and professionalism. At Virinchi’s, it’s not just about beauty—it’s about confidence, comfort, and community.

Thank you for being a part of our story.


            </p>

             <p className="text-lg text-gray-600 leading-relaxed">
               <b>— Swapna Founder, Virinchi’s Beauty Parlour</b>

</p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-3 rounded-full">
                <Award className="w-8 h-8 text-pink-600" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Certified Professionals</div>
                <div className="text-sm text-gray-600">Licensed & Experienced Team</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Virinchi's Beauty Parlour interior"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 text-pink-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}