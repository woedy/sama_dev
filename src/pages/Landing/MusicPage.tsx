import React from 'react';
import afro from '../../images/portfolio/AFRO.jpg';
import just from '../../images/portfolio/just.jpg';
import ragga from '../../images/portfolio/ragga.jpg';
import neofast from '../../images/portfolio/neofast.jpg';

import { ExternalLink } from 'lucide-react';
import Navigation from './Components/Navigation';

// musicData.ts (or define in the same file)
export const musicTracks = [
  {
    id: 1,
    title: 'Short Afro Beat',
    description: 'African style afro beat.',
    platform: 'SoundTrack',
    url: 'https://soundcloud.com/sama-beatz/short-afro?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    cover: afro,
  },
  {
    id: 2,
    title: 'Afro Reggae',
    description: 'Chill Raggae Instrumental Vibes.',
    platform: 'SoundTrack',
    url: 'https://soundcloud.com/sama-beatz/borgadre-2021?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    cover: ragga,
  },
  {
    id: 3,
    title: 'Just a girl ft.chydee',
    description: 'Music',
    platform: 'SoundTrack',
    url: 'https://soundcloud.com/sama-beatz/jx-a-girl-raggae?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    cover: just,
  },

  {
    id: 4,
    title: 'Neo-soul fast jam',
    description: 'Neo-soul inspired beat but a bit fast',
    platform: 'SoundTrack',
    url: 'https://soundcloud.com/sama-beatz/neo-soul-jam?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    cover: neofast,
  },
];

const MusicPage = () => {
  return (
    <>
      <Navigation />
      <div className="bg-slate-900 text-gray-200 min-h-screen py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
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
                  <p className="text-sm text-gray-400 mb-2">
                    {track.description}
                  </p>
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
    </>
  );
};

export default MusicPage;
