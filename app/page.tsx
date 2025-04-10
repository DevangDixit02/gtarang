import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-blue-50 py-20 lg:py-32">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative mb-6">
                <div className="absolute -top-4 -left-6 w-16 h-16 rounded-full bg-india-orange opacity-20"></div>
                <div className="absolute -bottom-4 -right-6 w-16 h-16 rounded-full bg-india-green opacity-20"></div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 relative z-10">
                  Next-Gen <span className="text-india-blue">Tech Solutions</span> for Your Business
                </h1>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with cutting-edge technology solutions tailored for your unique needs. We help Indian companies innovate, optimize, and grow in the digital era.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="bg-gradient-to-r from-india-blue to-gtarang-blue text-white py-3 px-8 text-center rounded-md font-medium hover:opacity-90 transition-opacity">
                  Get Started
                </Link>
                <Link href="/services" className="btn border border-india-blue text-india-blue hover:bg-gray-50 py-3 px-8 text-center">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-india-orange to-india-blue opacity-10 z-10 rounded-lg"></div>
              <div className="h-full w-full bg-white flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-32 h-32 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <div className="text-6xl">💻</div>
                  </div>
                  <h3 className="text-2xl font-bold text-india-blue mb-2">GTarang Technologies</h3>
                  <p className="text-gray-600">Innovating for a Digital India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-8">Trusted by Leading Businesses</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="h-16 w-full flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-300">Client 1</div>
            </div>
            <div className="h-16 w-full flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-300">Client 2</div>
            </div>
            <div className="h-16 w-full flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-300">Client 3</div>
            </div>
            <div className="h-16 w-full flex items-center justify-center">
              <div className="text-4xl font-bold text-gray-300">Client 4</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-8 w-14 h-14 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-8 w-14 h-14 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">Our Expert Services</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              We offer comprehensive tech solutions designed to elevate your business to new heights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-gtarang-blue"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gtarang-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm1-6.5v3a1,1,0,0,1-2,0v-3a2,2,0,0,1,0-3.5V7.5a1,1,0,0,1,2,0v2.5A2,2,0,0,1,13,13.5Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Software Development</h3>
                <p className="text-gray-600 mb-4">
                  Tailored software solutions built to address your unique business challenges and streamline operations.
                </p>
                <Link href="/services#software-development" className="text-gtarang-blue font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-gtarang-green"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-gtarang-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8 s3.59-8,8-8s8,3.59,8,8S16.41,20,12,20z M13.88,11.54l-4.96,4.96l-1.41-1.41l4.96-4.96L10.34,8l5.65,0.01L16,13.66L13.88,11.54z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive strategies to modernize your business with digital solutions that enhance efficiency and customer experiences.
                </p>
                <Link href="/services#digital-transformation" className="text-gtarang-green font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <div className="h-3 bg-india-orange"></div>
              <div className="p-6">
                <div className="w-16 h-16 bg-orange-50 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6,3h12c1.65,0,3,1.35,3,3v12c0,1.65-1.35,3-3,3H6c-1.65,0-3-1.35-3-3V6C3,4.35,4.35,3,6,3z M12,18c1.65,0,3-1.35,3-3 s-1.35-3-3-3s-3,1.35-3,3S10.35,18,12,18z M12,10c1.65,0,3-1.35,3-3S13.65,4,12,4S9,5.35,9,7S10.35,10,12,10z M6,10 c1.65,0,3-1.35,3-3S7.65,4,6,4S3,5.35,3,7S4.35,10,6,10z M18,10c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S16.35,10,18,10z M6,18 c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S4.35,18,6,18z M18,18c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S16.35,18,18,18z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent solutions that leverage cutting-edge AI technologies to automate processes and deliver valuable business insights.
                </p>
                <Link href="/ai-solutions" className="text-india-orange font-medium hover:underline inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-block border-2 border-india-blue text-india-blue hover:bg-india-blue hover:text-white py-3 px-8 rounded-md font-medium transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">What Our Clients Say</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              Hear from the businesses that have transformed their operations with our tech solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-lg p-8 relative shadow-sm">
              <div className="absolute -top-4 left-8 text-5xl text-india-blue opacity-30">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                GTarang's custom software solutions have helped us streamline our operations and improve customer satisfaction. Their team's expertise in building intuitive interfaces has been invaluable.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-india-blue bg-opacity-20 rounded-full flex items-center justify-center mr-4 text-india-blue font-bold">
                  RK
                </div>
                <div>
                  <h4 className="font-bold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">CTO, Tech Innovations Ltd.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gradient-to-br from-white to-green-50 rounded-lg p-8 relative shadow-sm">
              <div className="absolute -top-4 left-8 text-5xl text-india-green opacity-30">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                The digital transformation services provided by GTarang have revolutionized how we manage our business. Real-time insights and process automation have been game-changers for us.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-india-green bg-opacity-20 rounded-full flex items-center justify-center mr-4 text-india-green font-bold">
                  SP
                </div>
                <div>
                  <h4 className="font-bold">Sunita Patel</h4>
                  <p className="text-sm text-gray-500">Operations Director, Global Retail</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gradient-to-br from-white to-orange-50 rounded-lg p-8 relative shadow-sm">
              <div className="absolute -top-4 left-8 text-5xl text-india-orange opacity-30">"</div>
              <p className="text-gray-600 mb-6 pt-4">
                Implementing GTarang's mobile app development services has given us a competitive edge in the market. Their expertise in both design and technology is unmatched in the industry.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-india-orange bg-opacity-20 rounded-full flex items-center justify-center mr-4 text-india-orange font-bold">
                  AM
                </div>
                <div>
                  <h4 className="font-bold">Anand Mehta</h4>
                  <p className="text-sm text-gray-500">CEO, Startup Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="relative mb-4">
              <div className="absolute -top-4 -right-6 w-12 h-12 rounded-full bg-india-orange opacity-20"></div>
              <div className="absolute -bottom-4 -left-6 w-12 h-12 rounded-full bg-india-green opacity-20"></div>
              <h2 className="text-4xl font-bold text-gray-900 relative z-10">Why Choose GTarang</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
            </div>
            <p className="text-xl text-gray-600">
              We combine deep technical expertise with a customer-centric approach to deliver solutions that drive real business results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.83,11.17,16.41,2.6A1,1,0,0,0,14.45,2L7.82,6.77A3,3,0,0,0,6.56,8.83L2.38,20.66a1,1,0,0,0,.7,1.26,1,1,0,0,0,.28,0,1,1,0,0,0,1-.7l4.18-11.83a1,1,0,0,1,.42-.69l6.64-4.78Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expertise</h3>
              <p className="text-gray-600">
                Our team brings decades of combined experience in technology and business.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.63,3.65a1,1,0,0,0-.84-.2,8,8,0,0,1-6.22-1.27,1,1,0,0,0-1.14,0A8,8,0,0,1,5.21,3.45a1,1,0,0,0-.84.2A1,1,0,0,0,4,4.43v7.45a9,9,0,0,0,3.77,7.33l3.65,2.6a1,1,0,0,0,1.16,0l3.65-2.6A9,9,0,0,0,20,11.88V4.43A1,1,0,0,0,19.63,3.65ZM18,11.88a7,7,0,0,1-2.93,5.7L12,19.77,8.93,17.58A7,7,0,0,1,6,11.88V5.58a10,10,0,0,0,6-1.39,10,10,0,0,0,6,1.39Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600">
                We prioritize data security and compliance at every step of the process.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.86,13.73a1,1,0,0,0-.86-.5H14a1,1,0,0,0-1,1v7a1,1,0,0,0,.51.87A1,1,0,0,0,14,22a1,1,0,0,0,.45-.11l3-1.5,3,1.5A1,1,0,0,0,21,22a1,1,0,0,0,.5-.13,1,1,0,0,0,.5-.87v-7A1,1,0,0,0,21.86,13.73ZM19,19.31l-2-1a1,1,0,0,0-.9,0l-2,1V15.23h4.86Zm-1-10.46V6H4V17.85H13v-4.12a3,3,0,0,1,3-3h4.61A3,3,0,0,1,18,8.85ZM12,14H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Zm0-4H6a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay at the cutting edge of technology to bring you the latest solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-india-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.88,18.47c.44-1.4.62-2.11.62-5.47a8,8,0,0,0-16,0c0,3.36.18,4.07.62,5.47a2.32,2.32,0,0,0,2.26,1.53H17.6A2.32,2.32,0,0,0,19.88,18.47ZM17.6,18H6.4c-.37,0-.58-.15-.77-.79C5.33,16.09,5.09,15.38,5,12a7,7,0,0,1,14,0c-.06,3.38-.29,4.09-.58,5.21C18.18,17.85,18,18,17.6,18Zm-1.94-3.2A4.58,4.58,0,0,1,12,16.5a4.61,4.61,0,0,1-3.66-1.7,1,1,0,1,0-1.56,1.3A6.5,6.5,0,0,0,12,18.5a6.5,6.5,0,0,0,5.22-2.4,1,1,0,1,0-1.56-1.3Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">
                We provide ongoing support and maintenance to ensure your solutions continue to perform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-india-blue to-purple-600 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-100 mb-8">
              Let's discuss how our tech solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-india-blue hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="/services" className="border-2 border-white text-white hover:bg-white hover:bg-opacity-10 py-3 px-8 rounded-md font-medium transition-colors">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 