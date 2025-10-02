import { FaCheckCircle } from 'react-icons/fa'

export default function Skills() {
  return (
      <section id="skills" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500">
                Skills & Expertise
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500">Market Research</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Product Identification
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Competitor Analysis
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Niche Evaluation
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Trend Spotting
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500">Amazon Optimization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      SEO Listing
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      PPC Management
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Conversion Optimization
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Review Management
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4 pb-2 border-b border-red-500">Supply Chain Management</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Supplier Vetting
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Quality Control
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Logistics Planning
                    </li>
                    <li className="flex items-center">
                      <span className="text-red-500 mr-2"><FaCheckCircle /></span>
                      Inventory Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
  )
}
