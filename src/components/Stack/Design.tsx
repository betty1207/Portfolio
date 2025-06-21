import { SiReact, SiVuedotjs, SiTailwindcss, SiFlutter, SiNextdotjs, SiGit, SiGithub, SiFigma, SiTrello, SiSlack } from "react-icons/si";
import { Link } from "react-router-dom";

function StackDetailed() {
   const handleContactClick = () => {
    // Scroll to top smoothly when the link is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const frontendTech = [
    {
      icon: <SiReact className="w-8 h-8 text-blue-500" />,
      name: "React",
      description: "I use React to build fast and interactive user interfaces with reusable components and efficient state management.",
    },
    {
      icon: <SiVuedotjs className="w-8 h-8 text-green-500" />,
      name: "Vue.js",
      description: "Vue.js helps me build maintainable frontend applications with a progressive approach and clear structure.",
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 text-cyan-500" />,
      name: "Tailwind CSS",
      description: "I use Tailwind CSS to rapidly create beautiful, responsive designs using utility-first CSS classes.",
    },
    {
      icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
      name: "Flutter",
      description: "Flutter allows me to build visually attractive, natively compiled applications for mobile, web, and desktop from a single codebase.",
    },
    {
      icon: <SiNextdotjs className="w-8 h-8 text-black" />,
      name: "Next.js",
      description: "Next.js provides me with server-side rendering, routing, and performance optimizations for production-grade React applications.",
    },
  ];

  const devTools = [
    {
      icon: <SiGit className="w-8 h-8 text-orange-500" />,
      name: "Git",
      description: "I use Git for version control, allowing me to manage code history, branches, and collaborate effectively.",
    },
    {
      icon: <SiGithub className="w-8 h-8 text-gray-800" />,
      name: "GitHub",
      description: "GitHub is my go-to platform for hosting code, managing repositories, and collaborating with others using pull requests and issues.",
    },
  ];

  const designTools = [
    {
      icon: <SiFigma className="w-8 h-8 text-purple-500" />,
      name: "Figma",
      description: "Figma is my favorite tool for UI design, prototyping, and collaboration with teams in real-time.",
    },
  ];

  const collabTools = [
    {
      icon: <SiTrello className="w-8 h-8 text-blue-600" />,
      name: "Trello",
      description: "I use Trello to organize tasks, manage project progress, and stay on top of deadlines using boards and checklists.",
    },
    {
      icon: <SiSlack className="w-8 h-8 text-purple-600" />,
      name: "Slack",
      description: "Slack helps me communicate efficiently with teams, share updates, and integrate development tools directly into our channels.",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="w-full max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-start mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">Stack</h1>
           <Link 
                  to="/contact"
                  onClick={handleContactClick}
                  className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-medium inline-block"
                >
                  Contact Me
                </Link>
        </div>

        {/* Introduction */}
        <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-4xl">
          I work with a modern and flexible stack to build intuitive and engaging digital experiences. Here's a breakdown of my go-to technologies and tools.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto p-6 rounded-xl mt-8 bg-white">
        {/* Frontend Technologies */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frontend Technologies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {frontendTech.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Developer Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {devTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Design Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {designTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {tool.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Tools */}
        <div className="bg-white rounded-xl border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Collaboration Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {collabTools.map((tool) => (
              <div key={tool.name} className="flex gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  {tool.icon}
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
  );
}

export default StackDetailed;