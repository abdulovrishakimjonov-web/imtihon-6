import React, { useState } from 'react';

const FAQPages = () => {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'General', icon: '📋' },
    { name: 'Shipping', icon: '🚚' },
    { name: 'Payment', icon: '💳' },
    { name: 'Returns', icon: '↩️' },
    { name: 'Account', icon: '👤' },
    { name: 'Technical', icon: '🔧' }
  ];

  const faqData = {
    General: [
      {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for all unused items in their original packaging. Simply contact our support team to initiate a return and receive a full refund.'
      },
      {
        question: 'How can I track my order?',
        answer: 'Once your order ships, you will receive a tracking number via email. You can use this number on our website or the carrier\'s website to track your package in real-time.'
      },
      {
        question: 'Do you ship internationally?',
        answer: 'Yes! We ship to over 100 countries worldwide. Shipping costs and delivery times vary by location. Check our shipping page for more details.'
      },
      {
        question: 'How do I contact customer support?',
        answer: 'You can reach us via email at support@example.com, call us at 1-800-123-4567, or use our live chat feature available 24/7 on our website.'
      }
    ],
    Shipping: [
      {
        question: 'How long does shipping take?',
        answer: 'Standard shipping takes 5-7 business days. Express shipping takes 2-3 business days. International orders may take 10-15 business days depending on the destination.'
      },
      {
        question: 'Do you offer free shipping?',
        answer: 'Yes! We offer free standard shipping on all orders over $100. Express shipping is available for an additional fee.'
      },
      {
        question: 'Can I change my shipping address?',
        answer: 'If your order hasn\'t shipped yet, you can contact us to update your shipping address. Once shipped, address changes must be made through the carrier.'
      },
      {
        question: 'What if my package is lost or damaged?',
        answer: 'We take full responsibility for lost or damaged packages. Contact us immediately and we will either replace the item or issue a full refund.'
      }
    ],
    Payment: [
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers.'
      },
      {
        question: 'Is it safe to use my credit card on your site?',
        answer: 'Absolutely! We use industry-standard SSL encryption to protect your payment information. We never store your full credit card details on our servers.'
      },
      {
        question: 'Can I pay in installments?',
        answer: 'Yes! We offer installment payment options through Klarna and Afterpay for orders over $50. Choose your preferred option at checkout.'
      },
      {
        question: 'Do you offer discounts for bulk orders?',
        answer: 'Yes! Contact our sales team for bulk order pricing. We offer special discounts for orders of 10 or more items.'
      }
    ],
    Returns: [
      {
        question: 'How do I return an item?',
        answer: 'Log into your account, go to Order History, select the item you want to return, and follow the instructions. You\'ll receive a prepaid return label via email.'
      },
      {
        question: 'When will I receive my refund?',
        answer: 'Refunds are processed within 5-7 business days after we receive your return. The refund will be credited to your original payment method.'
      },
      {
        question: 'Can I exchange an item?',
        answer: 'Yes! Select the exchange option when initiating your return. Once we receive the original item, we\'ll ship your exchange immediately.'
      },
      {
        question: 'What items cannot be returned?',
        answer: 'For hygiene reasons, we cannot accept returns on opened personal care items, custom-made products, or clearance items marked as final sale.'
      }
    ],
    Account: [
      {
        question: 'How do I create an account?',
        answer: 'Click on "Sign Up" at the top of the page, enter your email and create a password. You can also sign up using your Google or Facebook account.'
      },
      {
        question: 'I forgot my password. What should I do?',
        answer: 'Click on "Forgot Password" on the login page. Enter your email address and we\'ll send you a link to reset your password.'
      },
      {
        question: 'Can I update my account information?',
        answer: 'Yes! Log into your account and go to "Account Settings" where you can update your personal information, shipping addresses, and payment methods.'
      },
      {
        question: 'How do I delete my account?',
        answer: 'Contact our support team to request account deletion. We will process your request within 48 hours and send you a confirmation email.'
      }
    ],
    Technical: [
      {
        question: 'The website is not loading properly. What should I do?',
        answer: 'Try clearing your browser cache and cookies, or use a different browser. If the problem persists, contact our technical support team.'
      },
      {
        question: 'Why can\'t I add items to my cart?',
        answer: 'This could be due to browser cookies being disabled. Enable cookies in your browser settings or try using incognito/private browsing mode.'
      },
      {
        question: 'My promo code isn\'t working. Why?',
        answer: 'Check that the code hasn\'t expired and that you meet all requirements (minimum purchase amount, eligible products, etc.). Some codes cannot be combined with other offers.'
      },
      {
        question: 'How do I unsubscribe from emails?',
        answer: 'Click the "Unsubscribe" link at the bottom of any email we send you, or manage your email preferences in your account settings.'
      }
    ]
  };

  const filteredFAQs = faqData[activeCategory].filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              How Can We Help You?
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-blue-100">
              Find answers to frequently asked questions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 text-lg"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">⏰</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">24/7</h3>
            <p className="text-gray-600">Support Available</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">💬</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">1000+</h3>
            <p className="text-gray-600">Questions Answered</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">2 Hours</h3>
            <p className="text-gray-600">Average Response</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition">
            <div className="text-4xl mb-2">😊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">98%</h3>
            <p className="text-gray-600">Satisfaction Rate</p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => {
                  setActiveCategory(category.name);
                  setOpenQuestion(null);
                }}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === category.name
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {activeCategory} Questions
              </h2>
              
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <p className="text-gray-600">No questions found. Try a different search term.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition"
                    >
                      <button
                        onClick={() => toggleQuestion(index)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                            openQuestion === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openQuestion === index ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-200 pt-4">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Still Need Help?</h3>
              <p className="text-blue-100 mb-6">
                Our support team is here to help you 24/7
              </p>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Live Chat
                </button>
                <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-400 transition flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </button>
              </div>
            </div>

            {/* Popular Topics */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Topics</h3>
              <div className="space-y-3">
                {['Order Tracking', 'Refund Process', 'Account Issues', 'Product Information', 'Shipping Delays'].map((topic, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition flex items-center gap-3"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {topic}
                  </button>
                ))}
              </div>
            </div>

            {/* Help Resources */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Help Resources</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">📚</span>
                  <span className="font-medium">User Guide</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">🎥</span>
                  <span className="font-medium">Video Tutorials</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">💡</span>
                  <span className="font-medium">Tips & Tricks</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition">
                  <span className="text-2xl">👥</span>
                  <span className="font-medium">Community Forum</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Was this helpful?</h3>
          <p className="text-gray-600 mb-6">Let us know if you found what you were looking for</p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
              Yes, it helped!
            </button>
            <button className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
              </svg>
              No, I need more help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPages;