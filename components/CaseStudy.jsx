
export default function CaseStudy() {
  return (
    
     <section id="case-study" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500">
            Success Case Study
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-800 text-white p-6">
              <h3 className="text-2xl font-bold">Multi-Function Vegetable Chopper</h3>
            </div>
            
            <div className="p-6 md:flex gap-8">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Challenge</h4>
                <p className="text-gray-600 mb-6">
                  Find a common kitchen tool with an opportunity for improved design and marketing in a competitive category.
                </p>
                
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Strategy</h4>
                <p className="text-gray-600 mb-6">
                  Identified a supplier with a 4.8-star rating on AliExpress, negotiated costs, and created an optimized listing focused on solving customer pain points.
                </p>
                
                <h4 className="text-xl font-bold text-gray-800 mb-3">The Result</h4>
                <p className="text-gray-600">
                  Achieved top rankings in the Home & Kitchen category with consistent monthly revenue and profits.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Monthly Revenue</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  <p className="text-gray-600 mt-2">$2,800+</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Profit Margin</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-gray-600 mt-2">38% Average</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Advertising Efficiency</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <p className="text-gray-600 mt-2">18% ACOS</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Customer Satisfaction</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-red-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                  <p className="text-gray-600 mt-2">4.5/5 Stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}
