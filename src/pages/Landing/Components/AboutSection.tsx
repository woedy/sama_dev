import {
  Code,
  Palette,
  Smartphone,
  Brain,
  MapPin,
  Music,
} from 'lucide-react';

const AboutSection = ({}) => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a versatile full-stack developer with over 7+ years of
              experience building web and mobile applications. My journey spans
              from backend architecture to frontend design, always focusing on
              creating seamless user experiences.
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
              <h3 className="font-semibold mb-2">7+ Years</h3>
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
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
              <Music className="text-orange-400 mb-4" size={32} />
              <h3 className="font-semibold mb-2">Sound Engineering</h3>
              <p className="text-gray-400 text-sm">Music Production/Sound Design</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
