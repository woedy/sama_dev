import React from 'react';
import afro from '../../images/portfolio/AFRO.jpg';

import { ExternalLink } from 'lucide-react';


// musicData.ts (or define in the same file)
export const musicTracks = [
    {
      id: 1,
      title: 'Short Afro Beat',
      description: 'African style afro beat.',
      platform: 'soundtrack',
      url: 'https://youtu.be/your-video-id',
      cover: afro,
    },
    {
      id: 2,
      title: 'Midnight Drive',
      description: 'Synthwave-inspired beat for late night vibes.',
      platform: 'Audiomack',
      url: 'https://audiomack.com/yourprofile/song/midnight-drive',
      cover: '/images/midnight-drive.jpg',
    },
    {
      id: 3,
      title: 'Elevation',
      description: 'Uplifting soundtrack with cinematic energy.',
      platform: 'Spotify',
      url: 'https://open.spotify.com/track/your-track-id',
      cover: '/images/elevation.jpg',
    },
  ];

  
const MusicPage = () => {
  return (
    <div className="bg-slate-900 text-gray-200 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink to-purple bg-clip-text text-transparent">
          Music & Sound Portfolio
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {musicTracks.map((track) => (
            <a
              key={track.id}
              href={track.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-purple-400/50 hover:scale-105 transition-all overflow-hidden shadow-md"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1 text-white">
                  {track.title}
                </h2>
                <p className="text-sm text-gray-400 mb-2">{track.description}</p>
                <div className="text-purple-400 text-xs flex items-center gap-2">
                  <ExternalLink size={14} />
                  Listen on {track.platform}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
