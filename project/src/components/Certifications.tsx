import React from 'react';
import { Award, Shield, CheckCircle, FileText } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Government of India Approval",
      description: "Officially certified by the Government of India for amputee solutions and prosthetic services.",
      badge: "Certified"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Licensed Medical Device Provider",
      description: "Authorized to provide medical-grade prosthetic devices and rehabilitation services.",
      badge: "Licensed"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance Standards",
      description: "Meets all national and international quality standards for prosthetic care.",
      badge: "Verified"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Professional Accreditation",
      description: "Accredited by professional medical and rehabilitation organizations.",
      badge: "Accredited"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-blue-600">Certifications</span> & Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications demonstrate our commitment to excellence and ensure 
            you receive the highest quality care and services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                {cert.icon}
              </div>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                {cert.badge}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Government Certified Excellence
              </h3>
              <p className="text-gray-600 mb-6">
                Our studio is fully approved and certified by the Government of India, 
                ensuring that all our services meet the highest national standards for 
                prosthetic care and rehabilitation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">ISO 13485 Medical Device Quality Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Government of India Medical Device License</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Professional Rehabilitation Accreditation</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-xl p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Certificate #GOI-2024-VAS</h4>
                <p className="text-gray-600 mb-4">Official Government Certification</p>
                <div className="text-sm text-gray-500">
                  Valid: 2024-2027 | Renewable
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}