import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GTarang Technologies</h3>
            <p className="text-gray-300 mb-4">
              Providing expert consulting in Robotics, AI, Warehouse Automation,
              and Satellite Technologies for innovative business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.62,16.24c-2.58-.25-3.05-.61-3.13-1.07-.12-.71.53-1.41,1.75-1.35,1.09.05,1.55.82,1.6,1.3h2.47c-.15-2.15-2.38-3.13-4.07-3.13-3.17,0-4.86,1.95-4.86,4.17,0,2.89,2.34,3.33,4.36,3.55,1.83.2,2.41.66,2.37,1.35-.06,1-.97,1.39-1.87,1.35-1.04-.03-1.77-.78-1.84-1.43h-2.48c.14,2.17,2.07,3.28,4.25,3.28,2.5,0,4.89-1.16,4.89-4.1C21.34,17.3,20.13,16.4,18.62,16.24Zm-11.96-2.32L4.37,19.77H3.06l0-11.49H5.05l0,7.09,2.3-4.91h1.31l0,4.91,2.29-4.91h1.38l-3.68,7.84h-1.01l0-5.03Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.68,2.5a.5.5,0,0,0-.5-.5H2.5a.5.5,0,0,0-.5.5v20a.5.5,0,0,0,.5.5h19.68a.5.5,0,0,0,.5-.5ZM8.78,20.19H5.05V9.48H8.78Zm-1.86-12a2.16,2.16,0,1,1,2.15-2.16A2.16,2.16,0,0,1,6.92,8.15ZM20.19,20.19H16.46V15.06c0-1.38,0-3.16-1.92-3.16s-2.22,1.5-2.22,3.05v5.24H8.59V9.48h3.57v1.62h.05a3.9,3.9,0,0,1,3.5-1.92c3.75,0,4.44,2.47,4.44,5.68Z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.86,8.12c0,.15,0,.29,0,.44a9.56,9.56,0,0,1-9.65,9.65A9.59,9.59,0,0,1,3,18.52a7,7,0,0,0,.82,0,6.83,6.83,0,0,0,4.22-1.45,3.4,3.4,0,0,1-3.17-2.36,3.34,3.34,0,0,0,.64.06,3.36,3.36,0,0,0,.9-.12,3.4,3.4,0,0,1-2.72-3.33v0a3.36,3.36,0,0,0,1.54.43A3.4,3.4,0,0,1,4.22,9a3.37,3.37,0,0,1,.46-1.71,9.63,9.63,0,0,0,7,3.54,3.35,3.35,0,0,1-.09-.77,3.39,3.39,0,0,1,5.86-2.32,6.74,6.74,0,0,0,2.15-.82,3.39,3.39,0,0,1-1.49,1.88,6.8,6.8,0,0,0,1.95-.53A6.9,6.9,0,0,1,17.86,10.12Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#robotics" className="text-gray-300 hover:text-white transition-colors">
                  Robotics Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#ai-ml" className="text-gray-300 hover:text-white transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#warehouse" className="text-gray-300 hover:text-white transition-colors">
                  Warehouse Automation
                </Link>
              </li>
              <li>
                <Link href="/services#satellite" className="text-gray-300 hover:text-white transition-colors">
                  Satellite Technology
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm3.41,12.42A3.28,3.28,0,0,1,12,16.58,3.28,3.28,0,0,1,8.59,14.4a13.38,13.38,0,0,1-.59-4.4,13.38,13.38,0,0,1,.59-4.38A3.25,3.25,0,0,1,12,3.42a3.28,3.28,0,0,1,3.41,2.22,13.38,13.38,0,0,1,.59,4.38A13.38,13.38,0,0,1,15.41,14.42Zm-2.18-3H10.77V12H8.54a1,1,0,0,0,0,2h1.23v3.9a1,1,0,0,0,2,0V14h1.46a1,1,0,0,0,0-2H11.77V9.42h1.46a1,1,0,0,0,0-2H10.77a1,1,0,0,0,0,2h0Z"/>
                </svg>
                <span className="text-gray-300">
                  Flat 702, Balaji Residency<br />
                  Sec-15, Kharghar, Raigarh<br />
                  Maharashtra - 410210
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/>
                </svg>
                <span className="text-gray-300">
                  info@gtarangenergy.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18.16A8.16,8.16,0,1,1,20.16,12,8.16,8.16,0,0,1,12,20.16Zm3.33-3.73a4.33,4.33,0,0,1-6.66,0,4.33,4.33,0,0,1,0-6.66,4.33,4.33,0,0,1,6.66,0A4.33,4.33,0,0,1,15.33,16.43Zm-.94-5.72a3.47,3.47,0,0,0-4.78,0,3.47,3.47,0,0,0,0,4.78,3.47,3.47,0,0,0,4.78,0A3.47,3.47,0,0,0,14.39,10.71Z"/>
                </svg>
                <span className="text-gray-300">
                  +91 8879476341
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} GTarang Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 