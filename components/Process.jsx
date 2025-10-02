import React from 'react'
import { FaChartLine, FaCheckCircle, FaPencilAlt, FaSearch, FaSyncAlt } from 'react-icons/fa'

export default function Process() {
  return (
    <section id="process" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500">
                My Systematic Process
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Process Step 1 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaSearch />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Product Research</h3>
                  <p className="text-gray-600">
                    Using tools like Helium 10 and Jungle Scout to identify profitable products with high demand and low competition.
                  </p>
                </div>
                
                {/* Process Step 2 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Supplier Vetting</h3>
                  <p className="text-gray-600">
                    Carefully selecting AliExpress suppliers with high ratings, reliable shipping, and quality products.
                  </p>
                </div>
                
                {/* Process Step 3 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaPencilAlt />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Listing Optimization</h3>
                  <p className="text-gray-600">
                    Creating compelling listings with keyword-rich titles, benefit-driven bullet points, and professional images.
                  </p>
                </div>
                
                {/* Process Step 4 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaChartLine />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">PPC Advertising</h3>
                  <p className="text-gray-600">
                    Launching strategic PPC campaigns to generate initial sales velocity and improve organic ranking.
                  </p>
                </div>
                
                {/* Process Step 5 */}
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300">
                  <div className="text-red-500 text-4xl mb-4">
                    <FaSyncAlt />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Scaling</h3>
                  <p className="text-gray-600">
                    Reinvesting profits into advertising and expanding the product catalog for sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </section>
  )
}
