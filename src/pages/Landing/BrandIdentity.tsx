import React from 'react';
import sama1 from '../../images/brand/sama1.jpg';
import sama2 from '../../images/brand/sama2.jpg';
import sama3 from '../../images/brand/sama3.jpg';
import sama4 from '../../images/brand/sama4.jpg';
import sama5 from '../../images/brand/sama5.jpg';
import sama6 from '../../images/brand/sama6.jpg';
import sama7 from '../../images/brand/sama7.jpg';
import sama8 from '../../images/brand/sama8.jpg';
import sama9 from '../../images/brand/sama9.jpg';
import sama10 from '../../images/brand/sama10.jpg';
import sama11 from '../../images/brand/sama11.jpg';
import sama12 from '../../images/brand/sama12.jpg';
import sama13 from '../../images/brand/sama13.jpg';
import sama14 from '../../images/brand/sama14.jpg';
import sama15 from '../../images/brand/sama15.jpg';
import Navigation from './Components/Navigation';

const BrandIdentity = () => {
  return (
    <>
      <Navigation />
      <div className="bg-slate-900 text-gray-200 min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={sama1} // Replace with actual cover
            alt="Project Cover"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              SwapWing
            </h1>
            <p className="text-lg text-white">
              Barter Trade App Brand Identity · 2024
            </p>
          </div>
        </div>

        {/* Description Section */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p className="text-gray leading-relaxed mb-6">
            This project involved redesigning the user interface for a modern
            e-commerce app, focusing on accessibility, interaction patterns, and
            visual hierarchy.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray mb-12">
            <div>
              <p className="font-semibold text-gray">Client</p>
              <p>SamaLTE</p>
            </div>
            <div>
              <p className="font-semibold text-gray-200">Tools</p>
              <p>Figma, Adobe Photoshop, Framer</p>
            </div>
            <div>
              <p className="font-semibold text-gray-200">Duration</p>
              <p>6 Weeks</p>
            </div>
          </div>
        </div>

        {/* Image Showcase */}
        <div className="max-w-5xl mx-auto px-4 space-y-10">
          {[
            sama2,
            sama3,
            sama4,
            sama5,
            sama6,
            sama7,
            sama8,
            sama9,
            sama10,
            sama11,
            sama12,
            sama13,
            sama14,
            sama15,
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="w-full rounded-lg shadow-lg"
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="border-t border-slate-700 mt-20 py-12 px-6 text-center">
          <a
            href="/#creatives"
            className="text-purple-400 hover:text-purple-300 transition"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </>
  );
};

export default BrandIdentity;
