import React, { useState } from "react";
import qish from "../img/qish.png";
import blog from "../img/blog.png";
import bitkoin from "../img/bitkoin.png";
import atim from "../svg/atim.svg";
import icons from "../svg/icons.svg";
import bus from "../svg/bus.svg";
import vaqt from "../svg/vaqt.svg";

const Count = () => {
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-[1224px] mx-auto px-4">
        <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b-2 border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our Blogs</h2>
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-all duration-300 group">
            <span className="font-medium text-sm sm:text-base">View all</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 sm:mb-16">
          {/* Large Featured Blog */}
          <div
            onMouseEnter={() => setHoveredBlog(1)}
            onMouseLeave={() => setHoveredBlog(null)}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
            style={{
              transform:
                hoveredBlog === 1 ? "translateY(-8px)" : "translateY(0)",
            }}
          >
            <div className="relative overflow-hidden h-48 sm:h-64">
              <img
                src={qish}
                alt="Meta Platforms"
                className="w-full h-full object-cover transition-transform duration-700"
                style={{
                  transform: hoveredBlog === 1 ? "scale(1.1)" : "scale(1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-4 sm:p-6">
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-3">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  <span>August, 8, 2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>3 min read</span>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                Meta Platforms plans to release fre...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The parent company of Facebook, Meta Platforms, is introducing
                software to help deve...
              </p>
            </div>
          </div>

          {/* Small Blog Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div
              onMouseEnter={() => setHoveredBlog(2)}
              onMouseLeave={() => setHoveredBlog(null)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col sm:flex-row gap-4"
              style={{
                transform:
                  hoveredBlog === 2 ? "translateX(8px)" : "translateX(0)",
              }}
            >
              <div className="relative overflow-hidden w-full sm:w-48 md:w-60 flex-shrink-0 h-48 sm:h-auto">
                <img
                  src={blog}
                  alt="Headphones"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredBlog === 2 ? "scale(1.15)" : "scale(1)",
                  }}
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-[#F45E0C] mb-2 hover:text-neutral-400 transition-colors duration-300 line-clamp-2">
                  8 Things You Probably Didn't Know About Headphones
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  Owning a headphone could mean a different thing for different
                  people. For some, it act as a fashion statement. It's easy to
                  spot these people, the headphone are almo...
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span className="text-xs">March, 28, 2023</span>
                  </div>
                  <div className="flex items-center gap-1 text-[#F45E0C]">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <span>12</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              onMouseEnter={() => setHoveredBlog(3)}
              onMouseLeave={() => setHoveredBlog(null)}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col sm:flex-row gap-4"
              style={{
                transform:
                  hoveredBlog === 3 ? "translateX(8px)" : "translateX(0)",
              }}
            >
              <div className="relative overflow-hidden w-full sm:w-48 md:w-60 flex-shrink-0 h-48 sm:h-auto">
                <img
                  src={bitkoin}
                  alt="Bitcoin"
                  className="w-full h-full object-cover transition-transform duration-700"
                  style={{
                    transform: hoveredBlog === 3 ? "scale(1.15)" : "scale(1)",
                  }}
                />
              </div>
              <div className="p-4 flex-1">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  Analyzing the August 17th Bitcoin Price Drop
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2 sm:line-clamp-3 leading-relaxed">
                  On August 17th at 9:30PM UTC, Bitcoin's price dropped more
                  than 8% in a 10-minute window, to a two-month low of under
                  $26k. This pulled
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <span className="text-xs">August, 17, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div
            onMouseEnter={() => setHoveredFeature(1)}
            onMouseLeave={() => setHoveredFeature(null)}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer transition-all duration-500"
            style={{
              transform:
                hoveredFeature === 1
                  ? "translateY(-12px) scale(1.05)"
                  : "translateY(0) scale(1)",
            }}
          >
            <div
              className="inline-flex transition-all duration-500 flex-shrink-0"
              style={{
                transform:
                  hoveredFeature === 1 ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              <img src={atim} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-[20px] text-[#0C0C0C] leading-tight">
              Latest and Greatest Tech
            </h3>
          </div>

          <div
            onMouseEnter={() => setHoveredFeature(2)}
            onMouseLeave={() => setHoveredFeature(null)}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer transition-all duration-500"
            style={{
              transform:
                hoveredFeature === 2
                  ? "translateY(-12px) scale(1.05)"
                  : "translateY(0) scale(1)",
            }}
          >
            <div
              className="inline-flex transition-all duration-500 flex-shrink-0"
              style={{
                transform:
                  hoveredFeature === 2 ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              <img src={icons} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-[20px] text-[#0C0C0C]">Guarantee</h3>
          </div>

          <div
            onMouseEnter={() => setHoveredFeature(3)}
            onMouseLeave={() => setHoveredFeature(null)}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer transition-all duration-500"
            style={{
              transform:
                hoveredFeature === 3
                  ? "translateY(-12px) scale(1.05)"
                  : "translateY(0) scale(1)",
            }}
          >
            <div
              className="inline-flex transition-all duration-500 flex-shrink-0"
              style={{
                transform:
                  hoveredFeature === 3 ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              <img src={bus} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-[20px] text-gray-900 leading-tight">
              Free Shipping over 1000$
            </h3>
          </div>

          <div
            onMouseEnter={() => setHoveredFeature(4)}
            onMouseLeave={() => setHoveredFeature(null)}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer transition-all duration-500"
            style={{
              transform:
                hoveredFeature === 4
                  ? "translateY(-12px) scale(1.05)"
                  : "translateY(0) scale(1)",
            }}
          >
            <div
              className="inline-flex transition-all duration-500 flex-shrink-0"
              style={{
                transform:
                  hoveredFeature === 4 ? "rotate(360deg)" : "rotate(0deg)",
              }}
            >
              <img src={vaqt} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>
            <h3 className="text-base sm:text-lg lg:text-[20px] text-[#0C0C0C]">24/7 Support</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Count;
