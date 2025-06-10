import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Let() {
  const socialLinks = [
    { 
      href: "https://github.com/", 
      icon: <FaGithub className="text-xl" />, 
      label: "GitHub" 
    },
    { 
      href: "https://linkedin.com/", 
      icon: <FaLinkedin className="text-xl" />, 
      label: "LinkedIn" 
    },
    { 
      href: "https://twitter.com/", 
      icon: <FaTwitter className="text-xl" />, 
      label: "Twitter" 
    },
    { 
      href: "mailto:someone@example.com", 
      icon: <FaEnvelope className="text-xl" />, 
      label: "Email" 
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8 sm:my-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Let's Connect!</h1>
      <p className="mb-8 text-gray-700 text-lg">
        Whether it's brainstorming a new project, discussing design optimizations, or just sharing creative insights, I'm always excited to collaborate. Reach out to me and let's craft something exceptional — together!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-lg p-4 flex items-center justify-between border border-gray-200 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-50 p-3 rounded-full">
                {social.icon}
              </div>
              <span className="font-medium">{social.label}</span>
            </div>
            <div className="transform transition-all duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="group-hover:rotate-0 rotate-[-40deg] transition-transform duration-300"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Let;