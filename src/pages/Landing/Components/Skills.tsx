const SkillsSection = ({}) => {
  const skills = {
    frontend: [
      { name: 'Flutter', level: 90 },
      { name: 'React/JavaScript/Nextjs', level: 80 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'HTML/CSS', level: 95 },


    ],
    backend: [
      { name: 'Django/Python', level: 88 },
      { name: 'C#', level: 60 },
      { name: 'SQL', level: 85 },
      { name: 'Postgres', level: 85 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'DevOps/Cloud Eng.', level: 60 },
    ],
    design: [
      { name: 'UI/UX Design', level: 80 },
      { name: 'Graphic Design', level: 80 },
      { name: 'Figma', level: 80 },
      { name: 'Adobe Creative Suite', level: 80 },
    ],
    other: [
      { name: 'Machine Learning', level: 65 },
      { name: 'Unity', level: 70 },
      { name: 'Sound Engineering', level: 85 },
      { name: 'Git', level: 80 },
    ],
  };
  return (
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
                {skillList.map(({ name, level }) => (
                  <div key={name} className="flex items-center justify-between">
                    <span className="text-gray-300">{name}</span>
                    <div className="w-16 bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-emerald-400 h-2 rounded-full"
                        style={{ width: `${level}%` }}
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
  );
};

export default SkillsSection;
