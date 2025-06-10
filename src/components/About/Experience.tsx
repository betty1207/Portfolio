function Experience() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header with Contact Me button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">About Me</h1>
          <button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full px-6 py-2 text-sm font-medium">
            Contact Me
          </button>
        </div>

        {/* About Description */}
        <div className="mb-12">
          <p className="text-gray-600 text-lg leading-relaxed max-w-5xl">
            My journey as a Senior UI/UX Product Designer has been shaped by a strong technical foundation and
            real-world experience. I have worked on diverse projects, from SaaS platforms and fintech solutions to
            e-learning systems and loyalty programs. My expertise in design systems, usability, and product strategy has
            allowed me to collaborate with businesses of all sizes, delivering high-impact solutions that balance
            aesthetics and functionality.
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
                    <h3 className="font-medium text-xl text-gray-900 mb-2">VTemp</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Conducts qualitative and quantitative research to understand user behaviors, providing insights
                      that inform design decisions across various products and services.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">Go Digital Technologies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Collaborates with cross-functional teams to create user-centered designs, ensuring accessibility
                      and consistency across enterprise.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">MAD Technologies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Develops intuitive user flows, wireframes, and prototypes to enhance user engagement and
                      streamline navigation across digital platforms.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-xl text-gray-900 mb-2">Yeab Futures</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Bridges design and development by creating interactive prototypes, refining UI components, and
                      optimizing performance for scalable user interfaces.
                    </p>
                  </div>
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
                  <h3 className="font-medium text-xl text-gray-900 mb-2">Addis Ababa University</h3>
                  <p className="text-gray-600 mb-1">Software Engineering</p>
                  <p className="text-gray-500 text-sm">2020 – 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Made in Framer watermark */}
        <div className="flex justify-end mt-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>🖼️</span>
            <span>Made in Framer</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Experience;