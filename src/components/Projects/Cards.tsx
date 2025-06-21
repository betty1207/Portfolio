import { useState } from 'react';
import an from  "../../assets/an.png"
import an1 from  "../../assets/an1.png"
import an2 from  "../../assets/an2.png"
import an3 from  "../../assets/an3.png"
import b from  "../../assets/b.png"
import b1 from  "../../assets/b1.png"
import b2 from  "../../assets/b2.png"
import b3 from  "../../assets/b3.png"
import c from  "../../assets/c.png"
import c1 from  "../../assets/c1.png"
import c2 from  "../../assets/c2.png"
import c3 from  "../../assets/c3.png"
import d from  "../../assets/d.png"
import d1 from  "../../assets/d1.png"
import d2 from  "../../assets/d2.png"
import d3 from  "../../assets/d3.png"
import e from  "../../assets/e.png"
import e1 from  "../../assets/e1.png"
import e2 from  "../../assets/e2.png"
import e3 from  "../../assets/e3.png"
import f from  "../../assets/f.png"
import f1 from  "../../assets/f1.png"
import f2 from  "../../assets/f2.png"
import f3 from  "../../assets/f3.png"
import g from  "../../assets/g.png"
import g1 from  "../../assets/g1.png"
import g2 from  "../../assets/g2.png"
import g3 from  "../../assets/g3.png"
import h from  "../../assets/h.png"
import h1 from  "../../assets/h1.png"
import h2 from "../../assets/h2.png"
import h3 from "../../assets/h3.png"
import i from  "../../assets/i.png"
import i1 from  "../../assets/i1.png"
import i2 from "../../assets/i2.png"
import i3 from "../../assets/i3.png"
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  longDescription: string;
  mainImage: string;
  additionalImages: string[];
  technologies: string[];
  role: string;
}

function ProjectCards() {
   const handleContactClick = () => {
    // Scroll to top smoothly when the link is clicked
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');

   const projects: Project[] = [
    {
      id: 1,
      title: "Anivita Animal Health",
      longDescription: "A website that is for a company that works to bringing quality animal health solutions to farmers, producers, and veterinary professionals.",
      mainImage: an,
      additionalImages: [
        an1,
        an2,
        an3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript", "Figma"],
      role: "Frontend Developer, UI/UX designer",
    },
    {
      id: 2,
      title: "Richfam Integrated Children Holistic Development, Lodge& Family Amusement Center.",
      longDescription: "made a mokeup website for a richfam a company which focus on fostering children's development through engaging activities and play, providing a nurturing space for growth. Specially the Games Section",
      mainImage: b,
      additionalImages: [
        b1,
        b2,
        b3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
      
    },
    {
      id: 3,
      title: "Endashaw Yohannes Portfolio",
      longDescription: "Developed a personal portfolio for Endashaw Yohannes Hailu who is a seasoned Process Improvement and Strategy Expert, Project Manager, and Professional Trainer",
      mainImage: c2,
      additionalImages: [
        c1,
        c,
        c3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "UI/UX designer",
    },
    {
      id: 4,
      title: "Agricultural Leadership & Investment Group",
      longDescription: "Built a Figma for the company that works on Agricultural Leadership and Investment Program was launched as a sister initiative to  YessEthiopia, a nonprofit working for youth empowerment and educational development.",
      mainImage: d3,
      additionalImages: [
        d1,
        d2,
        d
      ],
      technologies: ["Figma"],
      role: "UI/UX designer",
      
    },
    {
      id: 5,
      title: "Eastein Real State Website",
     
      longDescription: "Built a website for Eastein Real State, a company that specializes in real estate development and management. A mockup website",
      mainImage: e,
      additionalImages: [
        e1,
        e2,
        e3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
    },
    {
      id: 6,
      title: "Dr. Eyob Mamo Portfolio",
      longDescription: "Developed an personal portfolio for Dr. Eyob Mamo who is an Ethiopian author, leadership expert, and motivational speaker. Still in progress",
      mainImage: f,
      additionalImages: [
        f1,
        f2,
        f3,
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
     
    },
    {
      id: 7,
      title: "Pittards World Class Leather",
      longDescription: "Made a website for Pittards, a company that specializes in high-quality leather products.",
      mainImage: g,
      additionalImages: [
        g1,
        g2,
        g3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
    },
    {
      id: 8,
      title: "Muquecha Studios",
      longDescription: "Built a website for Muquecha Studios, a company that specializes in creating high-quality Games.",
      mainImage: h2,
      additionalImages: [
        h1,
        h,
        h3
      ],
      technologies: ["Next.Js", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
      
    },
    {
      id: 9,
      title: "Refocus Africa",
      longDescription: "Built a one page website for Refocus Africa,for it's conference that was held on Addis Ababa.",
      mainImage: i,
      additionalImages: [
        i1,
        i2,
        i3
      ],
      technologies: ["React", "TailwindCSS", "Vue.js", "Typescript"],
      role: "Frontend Developer",
    },
  ];

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const openFullImage = (img: string) => {
    setCurrentImage(img);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8 sm:my-16">
      <div className='flex justify-between items-center mb-8'>
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Projects</h1>
      <Link 
                        to="/contact"
                        onClick={handleContactClick}
                        className="bg-black text-white hover:bg-gray-800 transition-colors duration-200 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl text-lg font-medium inline-block"
                      >
                        Contact Me
                      </Link>
                      </div>
      <p className="mb-8 text-gray-700 text-lg">
      I have worked on a variety of projects, 
      from personal portfolios to complex web applications, 
      each designed to solve real-world problems and enhance user experiences. 
      Here are Some of them which i have worked on my 3 month period of internship with the team i have been assigned with.
      </p>
      

      {/* Projects Grid - 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="h-64 sm:h-80 overflow-hidden">
              <img
                src={project.mainImage}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3> 
              <button
                onClick={() => openModal(project)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Wider Popup Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              {/* Header with close button */}
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              {/* Main project image - taller height (h-[28rem]) */}
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  className=" h-[28rem] object-cover"  // Increased height
                  onClick={() => openFullImage(selectedProject.mainImage)}
                />
              </div>

              {/* Additional images grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {selectedProject.additionalImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="rounded-lg overflow-hidden h-48 bg-gray-100 cursor-pointer"
                    onClick={() => openFullImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                ))}
              </div>

              {/* Project details - 2 column layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Details</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-500">Role</h4>
                      <p>{selectedProject.role}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-500">Technologies</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Full image view */}
      {currentImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setCurrentImage('')}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={currentImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setCurrentImage('')}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;