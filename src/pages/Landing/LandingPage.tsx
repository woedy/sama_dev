import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Brain,
  Music,
  ChevronDown,
  MapPin,
} from 'lucide-react';

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [activeProjectTab, setActiveProjectTab] = useState('development');

  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Mobile App Developer',
    'Problem Solver',
  ];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const typeRole = () => {
      const role = roles[currentRole];
      let i = 0;
      setTypedText('');
      const timer = setInterval(() => {
        if (i < role.length) {
          setTypedText(role.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }
      }, 100);
    };
    typeRole();
  }, [currentRole]);

  const skills = {
    frontend: ['React', 'Flutter', 'HTML/CSS', 'JavaScript', 'Tailwind CSS'],
    backend: ['Django', 'Python', 'C#', 'SQL', 'RESTful APIs'],
    design: ['UI/UX Design', 'Graphic Design', 'Figma', 'Adobe Creative Suite'],
    other: ['Machine Learning', 'Unity', 'Sound Engineering', 'Git'],
  };

  const creativeProjects = [
    {
      title: 'Mobile App Interface',
      description:
        'User interface design for e-commerce mobile application with modern aesthetics and intuitive user flow.',
      category: 'UI/UX Design',
      link: '#',
      icon: '🎨',
      color: 'purple',
    },
    {
      title: 'Brand Identity Design',
      description:
        'Complete brand identity package including logo design, color schemes, and marketing materials.',
      category: 'Graphic Design',
      link: '#',
      icon: '🖼️',
      color: 'emerald',
    },
    {
      title: 'Sound Engineering',
      description:
        'Original music composition and sound engineering for various projects and media.',
      category: 'Music Production',
      link: '#',
      icon: '🎵',
      color: 'orange',
    },
    {
      title: 'App Demo Videos',
      description:
        'Professional demo videos showcasing app features and user interactions.',
      category: 'Video Production',
      link: '#',
      icon: '🎬',
      color: 'blue',
    },
    {
      title: 'Landing Page Designs',
      description:
        'Modern, responsive landing page designs with focus on conversion and user experience.',
      category: 'Web Design',
      link: '#',
      icon: '💻',
      color: 'indigo',
    },
    {
      title: 'Animated Graphics',
      description:
        'Custom motion graphics and animations for web and mobile applications.',
      category: 'Motion Graphics',
      link: '#',
      icon: '✨',
      color: 'pink',
    },
  ];
  const projects = [
    {
      title: 'Barter Trade App',
      description:
        'A comprehensive mobile application with trade-up features built using Django backend and Flutter frontend.',
      tech: ['Django', 'Flutter', 'SQL', 'REST API'],
      demo: 'https://www.youtube.com/watch?v=lvjfaL-MHiw',
      github: '#',
      image: '🔄',
    },
    {
      title: 'Interactive Screencast Platform',
      description:
        'Full-stack web application for creating and sharing interactive screencasts with real-time collaboration.',
      tech: ['Django', 'React', 'WebSocket', 'PostgreSQL'],
      demo: '#',
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/90 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              SAMA.DEV
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`hover:text-blue-400 transition-colors ${
                      activeSection === item.toLowerCase()
                        ? 'text-blue-400'
                        : 'text-gray-300'
                    }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl">
                👨‍💻
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Asemoah Etornam
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6">
              <span className="text-blue-400">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Crafting digital experiences through code and design. Full-stack
              developer with a passion for creating intuitive user interfaces
              and robust backend systems.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:etornamasamoah@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <Mail size={18} />
                Get In Touch
              </a>
              <a
                href="https://www.youtube.com/watch?v=lvjfaL-MHiw"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View Work
              </a>
            </div>
          </div>
          <div className="animate-bounce mt-16">
            <ChevronDown size={32} className="mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a versatile full-stack developer with over 4 years of
                experience building web and mobile applications. My journey
                spans from backend architecture to frontend design, always
                focusing on creating seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Based in Accra, Ghana, I've worked on diverse projects ranging
                from interactive platforms to mobile commerce apps, combining
                technical expertise with creative problem-solving.
              </p>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Accra, Greater Accra, Ghana</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <Code className="text-blue-400 mb-4" size={32} />
                <h3 className="font-semibold mb-2">4+ Years</h3>
                <p className="text-gray-400 text-sm">Development Experience</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <Palette className="text-emerald-400 mb-4" size={32} />
                <h3 className="font-semibold mb-2">UI/UX</h3>
                <p className="text-gray-400 text-sm">Design Expertise</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <Smartphone className="text-purple-400 mb-4" size={32} />
                <h3 className="font-semibold mb-2">Mobile</h3>
                <p className="text-gray-400 text-sm">App Development</p>
              </div>
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <Brain className="text-orange-400 mb-4" size={32} />
                <h3 className="font-semibold mb-2">ML & AI</h3>
                <p className="text-gray-400 text-sm">Data Science</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-400/50 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize text-blue-400">
                  {category}
                </h3>
                <div className="space-y-2">
                  {skillList.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-300">{skill}</span>
                      <div className="w-16 bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-400 to-emerald-400 h-2 rounded-full"
                          style={{ width: '85%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
              <button
                onClick={() => setActiveProjectTab('creative')}
                className={`px-8 py-3 rounded-md font-medium transition-all ${
                  activeProjectTab === 'creative'
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'text-gray-400 hover:text-purple-400'
                }`}
              >
                Creative Portfolio
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

      {/* Creative Portfolio Section */}
      <section id="creative" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Creative Portfolio
          </h2>

          {/* Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-800/50 rounded-lg p-1 border border-slate-700">
              {['All', 'UI/UX', 'Graphics', 'Music', 'Videos'].map(
                (category) => (
                  <button
                    key={category}
                    className="px-6 py-2 rounded-md text-sm font-medium transition-colors hover:text-purple-400 mx-1"
                  >
                    {category}
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Creative Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* UI/UX Design Projects */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center text-6xl">
                🎨
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Palette size={16} className="text-purple-400" />
                  <span className="text-purple-400 text-sm font-medium">
                    UI/UX Design
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Mobile App Interface
                </h3>
                <p className="text-gray-400 mb-4">
                  User interface design for e-commerce mobile application with
                  modern aesthetics and intuitive user flow.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Design
                  </a>
                </div>
              </div>
            </div>

            {/* Graphic Design Projects */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-emerald-600/20 to-blue-600/20 flex items-center justify-center text-6xl">
                🖼️
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Palette size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">
                    Graphic Design
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Brand Identity Design
                </h3>
                <p className="text-gray-400 mb-4">
                  Complete brand identity package including logo design, color
                  schemes, and marketing materials.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Music Production */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-600/20 to-red-600/20 flex items-center justify-center text-6xl">
                🎵
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Music size={16} className="text-orange-400" />
                  <span className="text-orange-400 text-sm font-medium">
                    Music Production
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Sound Engineering
                </h3>
                <p className="text-gray-400 mb-4">
                  Original music composition and sound engineering for various
                  projects and media.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Listen
                  </a>
                </div>
              </div>
            </div>

            {/* Video/Demo Projects */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-600/20 to-cyan-600/20 flex items-center justify-center text-6xl">
                🎬
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <ExternalLink size={16} className="text-blue-400" />
                  <span className="text-blue-400 text-sm font-medium">
                    Video Demo
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">App Demo Videos</h3>
                <p className="text-gray-400 mb-4">
                  Professional demo videos showcasing app features and user
                  interactions.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>

            {/* Web Design */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-600/20 to-purple-600/20 flex items-center justify-center text-6xl">
                💻
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Code size={16} className="text-indigo-400" />
                  <span className="text-indigo-400 text-sm font-medium">
                    Web Design
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Landing Page Designs
                </h3>
                <p className="text-gray-400 mb-4">
                  Modern, responsive landing page designs with focus on
                  conversion and user experience.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Design
                  </a>
                </div>
              </div>
            </div>

            {/* Motion Graphics */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 transition-all hover:transform hover:scale-105 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-pink-600/20 to-rose-600/20 flex items-center justify-center text-6xl">
                ✨
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Palette size={16} className="text-pink-400" />
                  <span className="text-pink-400 text-sm font-medium">
                    Motion Graphics
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Animated Graphics
                </h3>
                <p className="text-gray-400 mb-4">
                  Custom motion graphics and animations for web and mobile
                  applications.
                </p>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    View Animation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-300 mb-12">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Mail className="text-blue-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:etornamasamoah@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                etornamasamoah@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="text-emerald-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+233240242743"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                +233 24 024 27 43
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Linkedin className="text-purple-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                Connect with me
              </a>
            </div>
          </div>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:etornamasamoah@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Send Message
            </a>
            <a
              href="tel:+233240242743"
              className="border border-gray-600 hover:border-emerald-400 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-700">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Asemoah Etornam Theophilus. All rights reserved.</p>
          <p className="mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>



      
    </div>
  );
}
