import { Link } from "react-router-dom";
import { ArrowBigRight } from "lucide-react";

// Official technology icons
import { SiFigma, SiReact, SiVuedotjs, SiTailwindcss, SiFlutter, SiNextdotjs } from "react-icons/si";

function StackWithRealIcons() {
  const handleViewStackClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const techs = [
    { icon: <SiFigma className="w-8 h-8 text-purple-600" />, desc: "Figma" },
    { icon: <SiReact className="w-8 h-8 text-blue-500" />, desc: "React" },
    { icon: <SiVuedotjs className="w-8 h-8 text-green-500" />, desc: "Vue" },
    { icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />, desc: "Tailwind CSS" },
    { icon: <SiFlutter className="w-8 h-8 text-blue-400" />, desc: "Flutter" },
    { icon: <SiNextdotjs className="w-8 h-8 text-black" />, desc: "Next.js" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 rounded-xl mt-8 bg-white">
      {/* Stack Heading */}
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Stack</h1>

      {/* Tech Grid */}
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
        <Link 
          to="/stack"
          onClick={handleViewStackClick}
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
        >
          View Full Stack
          <ArrowBigRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default StackWithRealIcons;