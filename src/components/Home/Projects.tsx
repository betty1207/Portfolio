import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowBigRight } from 'lucide-react';
import an from "../../assets/an.png";
import b from "../../assets/b.png";

interface Project {
  id: number;
  title: string;
  longDescription: string;
  mainImage: string;
}

function HomeProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 1,
      title: "Anivita Animal Health",
      longDescription: "A website for a company that works to bring quality animal health solutions to farmers, producers, and veterinary professionals.",
      mainImage: an,
    },
    {
      id: 2,
      title: "Richfam Integrated Children Holistic Development",
      longDescription: "A mockup website for Richfam, a company which focuses on fostering children's development through engaging activities and play.",
      mainImage: b,
    }
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

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8 sm:my-16 bg-white">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">Featured Projects</h1>
      <p className="mb-8 text-gray-700 text-lg">
        I have worked on a variety of projects, from personal portfolios to complex web applications. 
        Here are some highlights of my work.
      </p>

      {/* Projects Grid - 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
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

      {/* View All Projects Link */}
      <div className="flex justify-end">
        <Link 
          to="/projects"
          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
        >
          View All Projects
          <ArrowBigRight className="w-4 h-4 ml-1" />
        </Link>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 text-3xl"
                >
                  &times;
                </button>
              </div>

              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src={selectedProject.mainImage}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Project Overview</h3>
                <p className="text-gray-700">
                  {selectedProject.longDescription}
                </p>
              </div>

              <div className="flex justify-end">
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
    </div>
  );
}

export default HomeProjects;