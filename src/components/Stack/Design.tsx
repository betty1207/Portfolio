function StackDetailed() {
  const designTools = [
    {
      icon: "🎨",
      name: "Figma",
      description:
        "I use Figma for creating wireframes, prototypes, and high-fidelity UI designs. Its real-time collaboration features make it perfect for working closely with teams and getting instant feedback.",
    },
    {
      icon: "🖱️",
      name: "Framer",
      description:
        "I use Framer when I need to create high-fidelity prototypes with advanced animations and micro-interactions to test user behavior and refine designs.",
    },
    {
      icon: "🌊",
      name: "Webflow",
      description:
        "I use Webflow to build responsive websites without coding, allowing for full design control and seamless interactions while ensuring a smooth user experience.",
    },
    {
      icon: "💎",
      name: "Sketch",
      description:
        "Sketch is my go-to tool for crafting scalable vector designs and maintaining reusable components, which makes managing design systems much easier.",
    },
    {
      icon: "🎭",
      name: "Photoshop",
      description:
        "I turn to Photoshop for advanced image editing, photo manipulation, and creating complex visual compositions that require pixel-perfect precision.",
    },
    {
      icon: "🎯",
      name: "Adobe XD",
      description:
        "Adobe XD helps me create interactive prototypes and design systems with seamless handoff capabilities for development teams.",
    },
    {
      icon: "🎨",
      name: "Illustrator",
      description:
        "I turn to Illustrator for designing vector-based UI elements like logos and custom illustrations that need to be crisp and scalable.",
    },
    {
      icon: "🎪",
      name: "Canva",
      description:
        "When I need to quickly create simple assets like presentation slides or concept sketches for brainstorming sessions, Canva helps me work efficiently.",
    },
  ]

  const developmentTools = [
    {
      icon: "🔶",
      name: "HTML5",
      description:
        "I use HTML5 to structure content when prototyping or testing designs in a browser, ensuring layouts and interactions function as intended.",
    },
    {
      icon: "🎯",
      name: "CSS3",
      description:
        "CSS3 allows me to style and bring my designs to life by adding layouts, colors, animations, and responsive adjustments directly to web pages.",
    },
  ]

  const collaborationTools = [
    {
      icon: "📝",
      name: "Notion",
      description:
        "Notion serves as my central workspace for project documentation, design specifications, and team collaboration on design projects.",
    },
    {
      icon: "🎨",
      name: "Miro",
      description:
        "Miro is essential for brainstorming sessions, user journey mapping, and collaborative workshops with stakeholders and team members.",
    },
  ]

  return (
    <div>
     {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Stack</h1>
          <button className="bg-black text-white hover:bg-gray-800 transition-colors rounded-full px-6 py-2 text-sm font-medium">
            Contact Me
          </button>
        </div>

        {/* Introduction */}
        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl">
          I work with a dynamic stack of tools like Framer and Webflow to bring my ideas to life. My goal is to create
          designs that are not only visually appealing but also optimized for usability, accessibility, and performance.
        </p>
      </div>
    <div className="w-full max-w-6xl mx-auto p-6 rounded-xl mt-8 bg-white">
      {/* Main Content */}
      <div className="w-full max-w-6xl mx-auto px-6 pb-8">
        {/* Design and Prototyping Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Design and Prototyping Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {designTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Development and Implementation Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Development and Implementation Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developmentTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research and Testing Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Research and Testing Tools</h2>
          <div className="text-gray-500 text-center py-8">
            <p>Tools and methodologies for user research and usability testing coming soon...</p>
          </div>
        </div>

        {/* Collaboration and Productivity Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Collaboration and Productivity Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collaborationTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{tool.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default StackDetailed
