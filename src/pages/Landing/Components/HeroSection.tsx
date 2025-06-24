// components/Hotspot.jsx
import LogoIcon from '../../../images/user/me.jpg';

import { useEffect, useState } from 'react';
import { ChevronDown, Github, YoutubeIcon } from 'lucide-react';

const HeroSection = ({}) => {
  const [typedText, setTypedText] = useState('');

  const roles = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Frontend Developer',
    'Mobile App Developer',
    'DevOps',
    "Graphic Designer",
    'Problem Solver',
  ];
  const [currentRole, setCurrentRole] = useState(0);

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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-emerald-400 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl">
              <img
                className="w-full h-full rounded-full object-cover border-4 border-white shadow"
                src={LogoIcon}
                alt="Avatar"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Asamoah Etornam Theophilus (Sama)
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-6">
            <span className="text-blue-400">{typedText}</span>
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Crafting digital experiences through code and design. Full-stack
            developer with a passion for creating intuitive user interfaces and
            robust backend systems.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/woedy" target='_blank'
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              My Github
            </a>
            <a
              href="https://www.youtube.com/watch?v=lvjfaL-MHiw&list=PLOvNa3sdza-1zsWfJvDKdXrMVk0-vOYzf&pp=gAQB0gcJCWMEOCosWNin"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <YoutubeIcon size={18} />
              Youtube UI Playlist
            </a>

          </div>
        </div>
        <div className="animate-bounce mt-16">
          <ChevronDown size={32} className="mx-auto text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
