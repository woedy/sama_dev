import React, { useState } from 'react';
import { X } from 'lucide-react';
import mtnhome from '../../images/portfolio/mtnhome.jpg';
import charge from '../../images/portfolio/charge.jpg';
import hubtel from '../../images/portfolio/hubtel.jpg';
import bkr from '../../images/portfolio/bkr.jpg';
import samahat from '../../images/portfolio/samahat.jpg';
import tika1 from '../../images/portfolio/tika1.jpg';
import tika2 from '../../images/portfolio/tika2.jpg';
import tika3 from '../../images/portfolio/tika3.jpg';
import tika4 from '../../images/portfolio/tika4.jpg';
import tika5 from '../../images/portfolio/tika5.jpg';
import tika6 from '../../images/portfolio/tika6.jpg';

// graphicGalleryData.ts
export const graphicGallery = [
    {
      id: 1,
      title: 'Brand Poster',
      image: mtnhome,
    },
    {
      id: 2,
      title: 'Social Media Ad',
      image: charge,
    },
    {
      id: 3,
      title: 'Event Flyer',
      image:hubtel,
    },
    {
      id: 4,
      title: 'Infographic',
      image: bkr,
    },
    {
      id: 5,
      title: 'Logo Concept',
      image: samahat,
    },
    {
      id: 6,
      title: 'Logo Concept',
      image: tika1,
    },
    {
      id: 7,
      title: 'Logo Concept',
      image: tika2,
    },
    {
      id: 8,
      title: 'Logo Concept',
      image: tika3,
    },
    {
      id: 9,
      title: 'Logo Concept',
      image: tika4,
    },
    {
      id: 10,
      title: 'Logo Concept',
      image: tika5,
    },

    {
      id: 11,
      title: 'Logo Concept',
      image: tika6,
    },
  ];
  

const GraphicsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<null | typeof graphicGallery[0]>(null);

  return (
    <div className="bg-slate-900 text-gray-200 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Graphic Design Gallery
        </h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {graphicGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="cursor-zoom-in overflow-hidden rounded-lg border border-slate-700 hover:border-purple-400/50 hover:scale-105 transition-transform"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-60 object-cover"
              />
              <p className="text-sm text-center py-2 text-gray-400">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-lg shadow-xl max-h-[80vh] object-contain"
            />
            <p className="text-center text-sm text-gray-400 mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicsGallery;
