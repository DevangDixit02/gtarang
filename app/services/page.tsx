import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="relative mb-4">
            <div className="absolute -top-4 -right-8 w-14 h-14 rounded-full bg-india-orange opacity-20"></div>
            <div className="absolute -bottom-4 -left-8 w-14 h-14 rounded-full bg-india-green opacity-20"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
              Our Services
            </h1>
          </div>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-32"></div>
          </div>
          <p className="text-xl text-gray-600">
            Explore our comprehensive range of tech solutions designed to transform your business and drive growth.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-gtarang-blue"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Software Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored software solutions built to address your unique business challenges and streamline operations.
              </p>
              <Link href="#software-development" className="text-gtarang-blue font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-gtarang-green"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Digital Transformation</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive strategies to modernize your business with digital solutions that enhance efficiency and customer experiences.
              </p>
              <Link href="#digital-transformation" className="text-gtarang-green font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-purple-600"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Machine Learning</h3>
              <p className="text-gray-600 mb-4">
                Intelligent solutions that leverage cutting-edge AI technologies to automate processes and deliver valuable business insights.
              </p>
              <Link href="/ai-solutions" className="text-purple-600 font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-india-orange"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">
                Native and cross-platform mobile applications that provide seamless experiences across all devices.
              </p>
              <Link href="#mobile-development" className="text-india-orange font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-rose-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">IoT & Smart Systems</h3>
              <p className="text-gray-600 mb-4">
                Connected device solutions that enable real-time monitoring, data collection, and automated decision-making.
              </p>
              <Link href="#iot-smart-systems" className="text-rose-500 font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
            <div className="h-3 bg-sky-500"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cybersecurity Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive security measures to protect your digital assets, data, and infrastructure from threats.
              </p>
              <Link href="#cybersecurity" className="text-sky-500 font-medium hover:underline inline-flex items-center">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Service Details */}
        <div className="space-y-20">
          {/* Software Development */}
          <section id="software-development" className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block bg-blue-100 text-gtarang-blue px-4 py-1 rounded-full font-medium mb-4">
                  Custom Solutions
                </div>
                <h2 className="text-3xl font-bold mb-4">Custom Software Development</h2>
                <p className="text-gray-600 mb-6">
                  Our team of expert developers creates tailor-made software solutions that perfectly align with your business objectives. From enterprise applications to specialized tools, we deliver high-quality software that drives efficiency and growth.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Full-stack web application development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Enterprise software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Legacy system modernization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-blue mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>API development and integration</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary py-2 px-6 inline-block">
                  Book a Consultation
                </Link>
              </div>
              <div className="bg-blue-50 rounded-xl p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-xl font-bold text-gtarang-blue">Software Development</h3>
                  <p className="text-gray-600">Tailor-made for your success</p>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Transformation */}
          <section id="digital-transformation" className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="order-2 md:order-1 bg-green-50 rounded-xl p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-xl font-bold text-gtarang-green">Digital Transformation</h3>
                  <p className="text-gray-600">Modernizing your business</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block bg-green-100 text-gtarang-green px-4 py-1 rounded-full font-medium mb-4">
                  Business Evolution
                </div>
                <h2 className="text-3xl font-bold mb-4">Digital Transformation</h2>
                <p className="text-gray-600 mb-6">
                  Our digital transformation services help businesses embrace modern technologies to streamline operations, enhance customer experiences, and create new business opportunities. We guide you through the entire process, from strategy to implementation.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Digital strategy development and roadmapping</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Business process automation</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cloud migration and infrastructure modernization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-gtarang-green mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Data analytics and business intelligence solutions</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-secondary py-2 px-6 inline-block">
                  Request Information
                </Link>
              </div>
            </div>
          </section>

          {/* Mobile App Development */}
          <section id="mobile-development" className="scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-block bg-orange-100 text-india-orange px-4 py-1 rounded-full font-medium mb-4">
                  Mobile Solutions
                </div>
                <h2 className="text-3xl font-bold mb-4">Mobile App Development</h2>
                <p className="text-gray-600 mb-6">
                  We design and develop intuitive, high-performance mobile applications that engage users and deliver real business value. Our mobile solutions work seamlessly across platforms and devices.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-india-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Native iOS and Android development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-india-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Cross-platform solutions (React Native, Flutter)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-india-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Mobile UI/UX design and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-india-orange mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>App maintenance and support services</span>
                  </li>
                </ul>
                <Link href="/contact" className="bg-india-orange text-white py-2 px-6 inline-block rounded-md hover:bg-opacity-90 transition-colors">
                  Discuss Your Project
                </Link>
              </div>
              <div className="bg-orange-50 rounded-xl p-10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-xl font-bold text-india-orange">Mobile Development</h3>
                  <p className="text-gray-600">Apps that users love</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-india-blue to-purple-600 rounded-xl p-10 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-100 mb-8">
              Let's discuss how our tech solutions can help you achieve your business goals and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-india-blue hover:bg-gray-100 py-3 px-8 rounded-md font-medium transition-colors">
                Contact Us
              </Link>
              <Link href="/pricing" className="border border-white text-white hover:bg-white hover:bg-opacity-10 py-3 px-8 rounded-md font-medium transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 