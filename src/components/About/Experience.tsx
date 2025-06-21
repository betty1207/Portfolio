import { Link } from "react-router-dom";
function Experience() {
  const handleContactClick = () => {
    // Scroll to top smoothly when the link is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header with Contact Me button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">About Me</h1>
          <Link 
                  to="/contact"
                  onClick={handleContactClick}
                  className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-medium inline-block"
                >
                  Contact Me
                </Link>
        </div>

        {/* About Description */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
           My journey as a <b>Front-End Developer</b> and <b>Software Engineering</b> student has been shaped 
           by hands-on experience, real-world collaboration, and a passion for crafting intuitive digital experiences. 
           I’ve contributed to a wide range of projects — from <b>portfolio websites</b> and <b>eCommerce platforms</b> 
           to <b>API-powered web applications</b> — mainly as part of the talented team at <b>Helder</b>.
           With a strong foundation in modern technologies like <b>React</b>, <b>TypeScript</b>, <b>Next.js</b>, <b>Vue.js</b>, 
           <b>Tailwind CSS</b>, <b>GraphQL</b>, and basic knowledge of <b>Flutter</b>, I’ve helped turn design ideas into fast,
            responsive, and user-friendly interfaces. and i have designed some UI/UX using <b>figma</b> My work involves everything from reusable components and real-time data 
            integration to optimizing for performance and accessibility.
            Whether working independently or in a team, I enjoy the challenge of blending 
            design with code to build engaging digital experiences.
            Currently, my focus is on strengthening my frontend expertise while preparing to grow into a well-rounded <b>full-stack developer </b> 
            who combines creativity, logic, and teamwork to build meaningful software solutions.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <div className="grid gap-12">
            {/* Experience Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <h2 className="text-2xl font-semibold text-gray-900">Experience</h2>
              </div>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">Helder – Front-End Developer</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Collaborates with a creative development team to build 7+ responsive web applications 
                      for various clients. Specializes in React (TypeScript) and Next.js, creating clean, 
                      component-based UIs with full API integration and a strong focus on reusability and 
                      performance.
                    </p>


                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">Rick & Morty Explorer (Side Project)</h3>
                    <p className="text-gray-600 leading-relaxed">
                    Developed a modern Single Page Application using Vue.js and GraphQL to explore characters, 
                    episodes, and locations from the Rick and Morty universe. Built reusable components, managed state efficiently,
                     and implemented smooth UI interactions for an engaging user experience.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">Flutter App (Course Project)</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Completed a certified Flutter mobile development course and built a basic wishlist 
                      application demonstrating core Flutter concepts like widgets, layout, navigation, and 
                      state management. Currently improving mobile app skills with the goal of building scalable 
                      cross-platform apps in the future.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                </li>
              </ul>
            </div>

            {/* Education Section */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gray-300"></div>
                <h2 className="text-2xl font-semibold text-gray-900">Academic Education</h2>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-medium text-xl text-gray-900 mb-2">Bahirdar University – BiT Campus</h3>
                  <p className="text-gray-600 mb-1">Software Engineering</p>
                  <p className="text-gray-500 text-sm">2020 – present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experience;