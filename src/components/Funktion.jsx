import React from 'react';
import ps from '../img/ps.png'
import phone from '../img/phone.png'

const Funktion = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-[1224px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          
          {/* iPhone 15 Banner */}
          <div className="relative bg-gradient-to-br from-cyan-400 to-teal-300 w-full lg:w-[756px] rounded-3xl overflow-hidden p-6 sm:p-8 min-h-[350px] sm:min-h-[400px]">
            {/* Background Circles */}
            <div className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#005690] rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-8 sm:top-12 right-8 sm:right-12 w-24 sm:w-32 h-24 sm:h-32 bg-cyan-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-teal-200 rounded-full opacity-20 translate-x-1/3 translate-y-1/3"></div>
            
            {/* Decorative Dots */}
            <div className="absolute bottom-8 left-8 hidden sm:block">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-blue-900 rounded-full opacity-40"></div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/2 right-12 hidden sm:block">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full opacity-50"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">iPhone 15 Series</h2>
              
              <div className="flex-1 flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* iPhone Images */}
                <div className="flex gap-2 order-2 sm:order-1">
                  <img 
                    src={phone} 
                    alt="iPhone" 
                    className="h-40 sm:h-52 md:h-64 w-auto object-contain"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4 sm:gap-6 max-w-xs order-1 sm:order-2">
                  {/* Countdown */}
                  <div className="flex gap-2 justify-center sm:justify-start">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-white bg-opacity-50 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-2 border border-gray-900 border-opacity-20">
                        <div className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-gray-900">8</div>
                          <div className="text-xs text-gray-700">Days</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Text */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                      It feels good to be the first
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Get ready for the future of smartphones. Experience innovation like never before. Stay tuned for the big iPhone 15 pre-sale.
                    </p>
                  </div>

                  {/* Button */}
                  <button className="bg-[#0C68F4] text-white px-6 sm:px-8 py-3 cursor-pointer rounded-lg font-semibold hover:bg-blue-700 transition w-full sm:w-fit mx-auto sm:mx-0">
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* PlayStation 5 Banner */}
          <div className="relative bg-gradient-to-br from-[#005690] to-[#005690] rounded-3xl w-full lg:w-[444px] overflow-hidden p-6 sm:p-8 min-h-[350px] sm:min-h-[400px]">
            {/* Background Circle */}
            <div className="absolute top-0 right-0 w-32 sm:w-40 h-28 sm:h-36 bg-[#FCC870] rounded-full -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-60 sm:h-80 bg-[#FCC870] rounded-full translate-y-1/3 translate-x-1/4"></div>
            
            {/* Decorative Dots */}
            <div className="absolute top-1/2 right-16 sm:right-24 hidden sm:block">
              <div className="grid grid-cols-4 gap-1">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full opacity-60"></div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-12 hidden sm:block">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-[#FCC870] rounded-full opacity-60"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">Play Station 5</h2>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6">
                {/* Content */}
                <div className="max-w-xs text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-400 mb-4">
                    Digital Edition + 2TB
                  </h3>
                  <button className="bg-blue-600 text-white px-6 sm:px-8 cursor-pointer py-3 rounded-lg font-semibold hover:bg-blue-500 transition w-full sm:w-auto">
                    Buy Now
                  </button>
                </div>

                {/* PS5 Image */}
                <div className="relative">
                  <img 
                    src={ps} 
                    alt="PlayStation 5" 
                    className="h-32 sm:h-40 md:h-45 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Funktion;