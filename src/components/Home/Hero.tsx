import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const cards = [
  {
    title: "Frontend Developer",
    description: "I build responsive, accessible, and beautiful web interfaces using React, Tailwind, and more.",
  },
  {
    title: "UI/UX Enthusiast",
    description: "I design user-centric experiences with a focus on clarity, usability, and delight.",
  },
  {
    title: "Problem Solver",
    description: "I enjoy tackling complex challenges and delivering solutions that make a difference.",
  },
];

function Hero() {
  const handleContactClick = () => {
    // Scroll to top smoothly when the link is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Header section */}
      <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-0 relative mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-[40px] font-semibold flex-1">Hey👋, I'm Betelhem!</h1>
        <Link 
                  to="/contact"
                  onClick={handleContactClick}
                  className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-medium inline-block"
                >
                  Contact Me
                </Link>
      </div>

      {/* Description paragraph */}
      <p className="max-w-2xl text-base sm:text-[20px] text-gray-600 mb-6 sm:mb-10">
        I'm Betelhem Tsega, I'm a 4th software Engineer student at Bahirdar University. I'm a passionate Frontend Developer with a creative spark and a results-driven mindset. I wear multiple hats-designer, coder, problem-solver-each one helping me craft digital experiences that are intuitive, user-friendly, and visually compelling. My work is rooted in solving real-world problems through elegant code and thoughtful design, always with a focus on measurable impact.
      </p>

      {/* Cards section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {cards.map((card, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={card.title}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-start cursor-pointer transition-all duration-300"
              style={{ 
                minHeight: '180px',
                maxHeight: '220px'
              }}
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
              onClick={() => setOpenIndex(isOpen ? null : idx)} // Added for mobile touch
            >
              {/* Arrow and title */}
              <div
                className={`flex items-center gap-2 transition-all duration-300 ${
                  isOpen ? "-translate-y-2" : ""
                }`}
              >
                <span className="text-blue-500 text-lg sm:text-xl transition-all duration-300">
                  {isOpen ? <FaArrowDown /> : <FaArrowUp />}
                </span>
                <span
                  className={`text-base sm:text-lg font-semibold transition-all duration-300 ${
                    isOpen ? "-translate-y-1" : ""
                  }`}
                >
                  {card.title}
                </span>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-300 text-left px-1 w-full ${
                  isOpen ? "opacity-100 translate-y-0 mt-2" : "opacity-0 -translate-y-2 pointer-events-none mt-2"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Hero;