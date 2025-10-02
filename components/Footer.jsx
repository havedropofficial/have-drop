import { FaAmazon, FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
       <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-4 text-center">
              <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-white hover:text-red-500 transition duration-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition duration-300">
                  <FaAmazon size={24} />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition duration-300">
                  <FaInstagram size={24} />
                </a>
                <a href="#" className="text-white hover:text-red-500 transition duration-300">
                  <FaFacebook size={24} />
                </a>
              </div>
              <p>&copy; {new Date().getFullYear()} Have Drop. All rights reserved.</p>
            </div>
          </footer>
  )
}
