import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing Plans
          </h1>
          <p className="text-xl text-gray-600">
            Choose the consulting package that fits your business needs and scale as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gtarang-blue">$1,500</span>
                <span className="text-gray-500">/project</span>
              </div>
              <p className="text-gray-600 mb-8">
                Perfect for small businesses looking to optimize their energy consumption or implement basic digital solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Initial consultation (up to 4 hours)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic energy efficiency assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Recommendations report</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>30 days of email support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary w-full text-center py-3">
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gtarang-blue transform scale-105 z-10">
            <div className="bg-gtarang-blue text-white text-center py-2">
              <span className="font-medium">Most Popular</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gtarang-blue">$4,500</span>
                <span className="text-gray-500">/project</span>
              </div>
              <p className="text-gray-600 mb-8">
                Comprehensive solution for medium-sized companies seeking significant operational improvements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full consultation (up to 10 hours)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive energy audit</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom technology implementation plan</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>ROI analysis and projections</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Implementation assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>90 days of premium support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn btn-primary w-full text-center py-3">
                Get Started
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-transform hover:scale-105 hover:shadow-lg">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gtarang-blue">Custom</span>
              </div>
              <p className="text-gray-600 mb-8">
                Tailored solutions for large enterprises with complex energy needs and technology integration requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited consultation hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Enterprise-wide energy assessment</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom AI & digital transformation solutions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full implementation support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Ongoing training and support</span>
                </li>
              </ul>
              <Link href="/contact" className="btn border border-gtarang-blue text-gtarang-blue hover:bg-gray-50 w-full text-center py-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-center mb-12">Services Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-4 text-left border border-gray-300 font-semibold">Features</th>
                  <th className="p-4 text-center border border-gray-300 font-semibold">Starter</th>
                  <th className="p-4 text-center border border-gray-300 font-semibold">Professional</th>
                  <th className="p-4 text-center border border-gray-300 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-300 font-medium">Consultation Hours</td>
                  <td className="p-4 text-center border border-gray-300">Up to 4 hours</td>
                  <td className="p-4 text-center border border-gray-300">Up to 10 hours</td>
                  <td className="p-4 text-center border border-gray-300">Unlimited</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-gray-300 font-medium">Energy Assessment</td>
                  <td className="p-4 text-center border border-gray-300">Basic</td>
                  <td className="p-4 text-center border border-gray-300">Comprehensive</td>
                  <td className="p-4 text-center border border-gray-300">Enterprise-wide</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300 font-medium">Custom Solutions</td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-gray-300 font-medium">Implementation Support</td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">Basic</td>
                  <td className="p-4 text-center border border-gray-300">Full</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300 font-medium">ROI Analysis</td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border border-gray-300 font-medium">Support Period</td>
                  <td className="p-4 text-center border border-gray-300">30 days</td>
                  <td className="p-4 text-center border border-gray-300">90 days</td>
                  <td className="p-4 text-center border border-gray-300">Ongoing</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-300 font-medium">Dedicated Account Manager</td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="p-4 text-center border border-gray-300">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">How do I know which plan is right for my business?</h3>
              <p className="text-gray-600">
                The plan that's right for your business depends on your specific needs, the size of your operations, and your goals. Our Starter plan is ideal for small businesses looking for initial guidance, Professional is best for medium-sized companies seeking comprehensive solutions, and Enterprise is designed for large organizations with complex requirements. We're happy to provide a free consultation to help you determine the best fit.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Can I upgrade my plan later?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. We design our services to be scalable, allowing you to start with what you need now and expand as your business grows or your requirements change.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">What kind of ROI can I expect from your consulting services?</h3>
              <p className="text-gray-600">
                ROI varies based on your current operations, the solutions implemented, and industry-specific factors. Our Professional and Enterprise plans include detailed ROI analysis to help you understand the potential impact. Typically, our clients see significant improvements in energy efficiency, operational costs, and productivity within the first year.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Do you offer any guarantees?</h3>
              <p className="text-gray-600">
                We stand behind the quality of our consulting services. While we can't guarantee specific results as they depend on implementation and other factors, we're committed to delivering high-quality, actionable recommendations. We work closely with our clients throughout the process to ensure satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gray-50 p-8 md:p-12 rounded-xl">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact us today for a free consultation and discover how our tech consulting services can transform your energy business.
            </p>
            <Link href="/contact" className="btn btn-primary py-3 px-8 inline-block">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 