import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Sample gallery images - replace with actual client photos from /public/images/gallery/
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Bridal makeup transformation",
      title: "Bridal Makeup",
      category: "Makeup"
    },
    {
      src: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hair styling and cut",
      title: "Hair Styling",
      category: "Hair"
    },
    {
      src: "https://images.pexels.com/photos/3997992/pexels-photo-3997992.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Facial treatment session",
      title: "Facial Treatment",
      category: "Skincare"
    },
    {
      src: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Party makeup look",
      title: "Party Makeup",
      category: "Makeup"
    },
    {
      src: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Hair coloring service",
      title: "Hair Coloring",
      category: "Hair"
    },
    {
      src: "https://images.pexels.com/photos/3997994/pexels-photo-3997994.jpeg?auto=compress&cs=tinysrgb&w=800",
      alt: "Eyebrow shaping",
      title: "Eyebrow Shaping",
      category: "Beauty"
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Transformation</span> Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Witness the beautiful transformations and stunning makeovers we've created for our clients. 
            Each image tells a story of confidence and beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                <div className="text-white p-4 w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-80">{image.category}</p>
                    </div>
                    <Camera className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
                <p className="text-sm opacity-80">{selectedImage + 1} of {galleryImages.length}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to be featured in our gallery?</p>
          <a
            href="https://api.whatsapp.com/send?phone=91901059660&text=Hi%2C%20I%20would%20like%20to%20book%20a%20session%20at%20Virinchi's%20Beauty%20Parlour"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book Your Transformation
          </a>
        </div>
      </div>
    </section>
  );
}