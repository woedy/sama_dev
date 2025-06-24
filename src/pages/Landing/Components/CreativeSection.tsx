import React, { useState } from 'react';
import { ExternalLink, Code, Palette, Music, Image, LucidePictureInPicture } from 'lucide-react';
import { Link } from 'react-router-dom';

const projectData = [
  {
    id: 1,
    category: 'UI/UX',
    icon: '🎨',
    iconColor: 'text-purple-400',
    gradient: 'from-purple-600/20 to-pink-600/20',
    label: 'UI/UX Design',
    title: 'Mobile App Interface',
    description:
      'User interface design for GeyHey Old Girls Union mobile application with modern aesthetics and intuitive user flow.',
    linkText: 'View Design',
    linkColor: 'text-purple-400',
    href: 'https://youtu.be/rWl-thnEyQY',
    iconComponent: <Palette size={16} className="text-purple-400" />,
    target: "_blank"
  },
  {
    id: 2,
    category: 'Graphics',
    icon: '🖼️',
    iconColor: 'text-emerald-400',
    gradient: 'from-emerald-600/20 to-blue-600/20',
    label: 'Graphic Design',
    title: 'Brand Identity Design',
    description:
      'Complete brand identity package including logo design, color schemes, and marketing materials.',
    linkText: 'View Portfolio',
    linkColor: 'text-emerald-400',
    href: '/brand-identity',
    iconComponent: <Palette size={16} className="text-emerald-400" />,
    target: ""
  },
  {
    id: 3,
    category: 'Music',
    icon: '🎵',
    iconColor: 'text-orange-400',
    gradient: 'from-orange-600/20 to-red-600/20',
    label: 'Music Production',
    title: 'Sound Engineering',
    description:
      'Original music composition and sound engineering for various projects and media.',
    linkText: 'Listen',
    linkColor: 'text-orange-400',
    href: '/sounds',
    iconComponent: <Music size={16} className="text-orange-400" />,
     target: ""
  },
  {
    id: 4,
    category: 'Videos',
    icon: '🎬',
    iconColor: 'text-blue-400',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    label: 'Video Demo',
    title: 'App Demo Videos',
    description:
      'Professional demo videos showcasing app features and user interactions.',
    linkText: 'Watch Demo',
    linkColor: 'text-blue-400',
    href: 'https://www.youtube.com/watch?v=lvjfaL-MHiw&list=PLOvNa3sdza-1zsWfJvDKdXrMVk0-vOYzf&pp=gAQB0gcJCWMEOCosWNin',
    iconComponent: <ExternalLink size={16} className="text-blue-400" />,
     target: "_blank"
  },
  {
    id: 5,
    category: 'UI/UX',
    icon: '💻',
    iconColor: 'text-indigo-400',
    gradient: 'from-indigo-600/20 to-purple-600/20',
    label: 'Web Design',
    title: 'Landing Page Designs',
    description:
      'Modern, responsive Music Artist landing page designs with focus on conversion and user experience.',
    linkText: 'View Design',
    linkColor: 'text-indigo-400',
    href: 'https://gyakie-com.vercel.app/',
    iconComponent: <Code size={16} className="text-indigo-400" />,
     target: "_blank"
  },
  {
    id: 6,
    category: 'Graphics',
    icon: '📁',
    iconColor: 'text-pink-400',
    gradient: 'from-pink-600/20 to-rose-600/20',
    label: 'Flyers and Posters',
    title: 'Graphics Gallery',
    description:
      'Custom motion graphics and animations for web and mobile applications.',
    linkText: 'View Animation',
    linkColor: 'text-pink-400',
    href: '/graphics-gallery',
    iconComponent: <LucidePictureInPicture size={16} className="text-pink-400" />,
     target: ""
  },
  {
    id: 7,
    category: 'Graphics',
    icon: '✨',
    iconColor: 'text-pink-400',
    gradient: 'from-pink-600/20 to-rose-600/20',
    label: 'Motion Graphics',
    title: 'Animated Graphics',
    description:
      'Custom motion graphics and animations for web and mobile applications.',
    linkText: 'View Animation',
    linkColor: 'text-pink-400',
    href: 'https://youtu.be/PdAwLbixENQ',
    iconComponent: <Palette size={16} className="text-pink-400" />,
     target: "_blank"
  },

];

const categories = ['All', 'UI/UX', 'Graphics', 'Music', 'Videos'];

const CreativeSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projectData
      : projectData.filter((project) => project.category === activeTab);

  return (
    <section id="creatives" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Creative Portfolio
        </h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-colors mx-1 ${
                  activeTab === category
                    ? 'bg-purple-500/10 text-purple-400'
                    : 'hover:text-purple-400 text-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Creative Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl`}
              >
                {project.icon}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  {project.iconComponent}
                  <span className={`text-sm font-medium ${project.iconColor}`}>
                    {project.label}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex gap-4">
                  <div className="flex gap-4">
                  <a
                        href={project.href}
                        target={project.target}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 ${project.linkColor} hover:opacity-80 transition-colors`}
                      >
                        <ExternalLink size={16} />
                        {project.linkText}
                      </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreativeSection;
