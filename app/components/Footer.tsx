import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Gtarang Energy Solutions</h3>
            <p className="text-gray-300 mb-4">
              Providing cutting-edge tech consulting services for energy solutions
              and innovative technological implementations.
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
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="text-gray-300 hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#consulting" className="text-gray-300 hover:text-white transition-colors">
                  Tech Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#energy" className="text-gray-300 hover:text-white transition-colors">
                  Energy Solutions
                </Link>
              </li>
              <li>
                <Link href="/services#digital" className="text-gray-300 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/services#ai" className="text-gray-300 hover:text-white transition-colors">
                  AI Implementation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18.16A8.16,8.16,0,1,1,20.16,12,8.16,8.16,0,0,1,12,20.16Zm1-1.74a1,1,0,0,1-2,0V12a1,1,0,0,1,1-1h3a1,1,0,0,1,0,2H12Z"/>
                </svg>
                <span className="text-gray-300">
                  Mon-Fri: 9:00 AM - 6:00 PM
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="h-6 w-6 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm2.39,13.35a.9.9,0,0,1-.39.07.92.92,0,0,1-.44-.11.89.89,0,0,1-.36-.31l-1.56-2a.92.92,0,1,1,1.44-1.13l1.09,1.39,2.78-3.56a.92.92,0,0,1,1.29-.15.93.93,0,0,1,.15,1.29l-3.16,4A.9.9,0,0,1,14.39,15.35ZM3.42,11.08a.93.93,0,0,1,1-1.57,4.85,4.85,0,0,1,2-1.67A4.86,4.86,0,0,1,12,8.42a4.87,4.87,0,0,1,4.88-1.49.94.94,0,0,1-.35,1.84,3,3,0,1,0,2.93,3.14.94.94,0,0,1,1.87-.16,4.88,4.88,0,0,1-8.17,3.71,4.89,4.89,0,0,1-7.74-4.38Z"/>
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
                  +1 (123) 456-7890
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Gtarang Energy Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 