import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const DeploySection = () => {
  const [activeProjectTab, setActiveProjectTab] = useState('development');

  const projects = [
    {
      title: 'Libra - Send Money',
      description:
        'A sleek and simple app to quickly send money to contacts with just a swipe. Available on Android and iOS.',
      tech: ['Flutter', 'Firebase', 'RemitOne'],
      androidLink: 'https://play.google.com/store/apps/details?id=com.send_libra.app.send_libra', // ✅ Replace with actual URL
      iosLink: '#', // ✅ Replace with actual URL
      image: '💸',
    },
    {
      title: 'Tuaneka - Invoice Generator for Freelancers',
      description:
        'Create professional invoices on the go. Ideal for freelancers, consultants, and small businesses.',
      tech: ['Flutter', 'PDF Generation', 'Local Storage'],
      androidLink: 'https://play.google.com/store/apps/details?id=com.tuaneka.teamalfy', // ✅ Replace with actual URL
      iosLink: '#', // ✅ Replace with actual URL
      image: '🧾',
    },


  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          Deployed Apps
        </h2>

     

        {/* Projects */}
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

                  {project.androidLink && (
  <a
    href={project.androidLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mr-2"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Get it on Google Play"
      className="h-10"
    />
  </a>
)}
{project.iosLink && (
  <a
    href={project.iosLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block "
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
      alt="Download on the App Store"
      className="h-10"
    />
  </a>
)}

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DeploySection;
