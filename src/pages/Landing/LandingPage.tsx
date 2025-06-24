import Navigation from './Components/Navigation';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import SkillsSection from './Components/Skills';
import ProjectsSection from './Components/ProjectsSection';
import CreativeSection from './Components/CreativeSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';
import DeploySection from './Components/Deployed';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}

      <Navigation />

      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />

      <DeploySection />

      {/* Creative Portfolio Section */}

      <CreativeSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}

      <FooterSection />
    </div>
  );
}
