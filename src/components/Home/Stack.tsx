import { Figma, Zap, Code, Waves, Palette, FileText } from "lucide-react"

function StackWithRealIcons() {
  const techs = [
    { icon: <Figma className="w-8 h-8 text-purple-600" />, desc: "Figma" },
    { icon: <Zap className="w-8 h-8 text-black" />, desc: "Framer" },
    { icon: <Code className="w-8 h-8 text-orange-600" />, desc: "HTML5" },
    { icon: <Waves className="w-8 h-8 text-blue-600" />, desc: "Webflow" },
    { icon: <Palette className="w-8 h-8 text-blue-500" />, desc: "CSS3" },
    { icon: <FileText className="w-8 h-8 text-black" />, desc: "Notion" },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-xl mt-8 bg-white">
      {/* Stack Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Stack</h1>

      {/* Tech Grid - 3 columns, 2 rows */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {techs.map((tech) => (
          <div
            key={tech.desc}
            className="bg-gray-100 rounded-2xl p-6 flex items-center gap-4 min-h-[80px] hover:bg-gray-200 transition-colors duration-200"
          >
            <div className="w-12 h-12 flex items-center justify-center">{tech.icon}</div>
            <span className="text-lg font-medium text-gray-900">{tech.desc}</span>
          </div>
        ))}
      </div>

      {/* View Full Stack Link */}
      <div className="flex justify-end">
        <button className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm">
          View Full Stack
        </button>
      </div>
    </div>
  )
}

export default StackWithRealIcons
