import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import Forms from './Forms'

export default function Contact() {
  return (
    
    <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500">
                Get In Touch
              </h2>
              
              <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Discuss Your Project</h3>
                  <p className="text-gray-600 mb-8">
                    I'm always open to discussing new opportunities, whether it's joint ventures, consulting for your brand, or sourcing specific products.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                        <FaEnvelope />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Email</h4>
                        <p className="text-gray-600">havedropofficial@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                        <FaPhone />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Phone</h4>
                        <p className="text-gray-600">+962 (77) 220-2103</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">Location</h4>
                        <p className="text-gray-600">Based in Jordan-Amman</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Forms />
              </div>
            </div>
          </section>
  )
}
