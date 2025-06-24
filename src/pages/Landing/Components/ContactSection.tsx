import { Linkedin, Mail, Phone } from 'lucide-react';

const ContactSection = ({}) => {
  return (
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
              href="https://www.linkedin.com/in/theophilus-asamoah-b09954124/"
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
  );
};

export default ContactSection;
