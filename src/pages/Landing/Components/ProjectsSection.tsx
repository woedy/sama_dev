import { useState } from 'react';
import {
  Github,
  ExternalLink,
  Palette,
} from 'lucide-react';

const ProjectsSection = ({}) => {
  const [activeProjectTab, setActiveProjectTab] = useState('development');

  const projects = [
    {
      title: 'Barter Trade App(Swapwing)',
      description:
        'A comprehensive mobile application with trade-up features built using Django backend and Flutter frontend.',
      tech: ['Django', 'Flutter', 'PostgreSQL', 'REST API'],
      demo: 'https://www.youtube.com/watch?v=lvjfaL-MHiw',
      github: 'https://github.com/woedy/swapwing',
      image: '🔄',
    },
    {
      title: 'Interactive Screencast Platform',
      description:
        'Full-stack web application for creating and sharing interactive screencasts with real-time collaboration.',
      tech: ['Django', 'React', 'WebSocket', 'PostgreSQL'],
      demo: 'https://youtu.be/TBdZsbNG8Z0',
      github: '#',
      image: '🎥',
    },
    {
      title: 'Royalty Payment System',
      description:
        'Mobile and web application managing royalty distributions with automated payment processing.',
      tech: ['Django', 'Flutter', 'Payment APIs', 'Analytics'],
      demo: '#',
      github: '#',
      image: '💰',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          My Work
        </h2>

        {/* Project Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700">
            <button
              onClick={() => setActiveProjectTab('development')}
              className={`px-8 py-3 rounded-md font-medium transition-all ${
                activeProjectTab === 'development'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-blue-400'
              }`}
            >
              Development Projects
            </button>
          </div>
        </div>

        {/* Development Projects */}
        {activeProjectTab === 'development' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-all hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.image}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Creative Portfolio */}
        {activeProjectTab === 'creative' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeProjects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl">
                  {project.icon}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Palette
                      size={16}
                      className={`text-${project.color}-400`}
                    />
                    <span
                      className={`text-${project.color}-400 text-sm font-medium`}
                    >
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 text-${project.color}-400 hover:text-${project.color}-300 transition-colors`}
                    >
                      <ExternalLink size={16} />
                      View Work
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
