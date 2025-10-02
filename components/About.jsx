
export default function About() {
  return (
       <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 relative pb-3 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-red-500">
            About My Business
          </h2>
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Turning Global Products into Local Profits</h3>
              <p className="text-gray-600 mb-4">
                I specialize in identifying high-demand, low-competition products on global marketplaces like AliExpress and successfully launching and scaling them on Amazon.
              </p>
              <p className="text-gray-600 mb-6">
                My expertise lies in market research, supply chain logistics, SEO-driven listing optimization, and data-driven PPC advertising to maximize profitability.
              </p>
              <a href="#process" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg inline-block transition duration-300">
                View My Process
              </a>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="E-commerce workflow" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
  )
}
