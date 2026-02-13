import React, { useState, useEffect } from "react";
import "./App.css";

// Example images for surprise tab
import photo1 from "./images/photo1.jpg";
import photo2 from "./images/photo2.jpg";
import photo3 from "./images/photo3.jpg";

const tabs = ["Poems", "Playlists", "Love Letter", "Surprise", "For You"];

const poems = [
  "The stars whisper your name as I dream, a gentle tide of endless gleam...",
  "In twilight's hush, your eyes ignite, turning shadow into golden light...",
  "Roses bloom and fade, yet our love remains, eternal, endless, breaking chains...",
  "Through every storm and every fight, your soul guides me to the purest light...",
];

const playlists = [
  "https://open.spotify.com/track/70MgcT507FGdoDBBLdmsqu",
  "https://open.spotify.com/track/3ODkrhZR29WfbbWpHEGGud",
];

const loveLetter = `
My Dearest Love,

Every moment I think of you, my heart swells like the tide under a silver moon. 
Your laughter, your gaze, your very essence is a symphony that fills the chambers of my soul. 
I am endlessly grateful for the universe that brought your light into my life, illuminating the shadows and making every breath a song of joy.
No words could capture the depth of my feelings, yet I write this, hoping you feel the intensity of my love across these lines.
I am yours in every heartbeat, in every dream, in every moment I exist.
Forever entwined with your soul,
Yours eternally.
`;

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Rotate photos for surprise tab
  useEffect(() => {
    if (activeTab === 3) {
      const interval = setInterval(() => {
        setPhotoIndex((prev) => (prev + 1) % 3);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Falling hearts/roses effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      particle.style.left = `${Math.random() * window.innerWidth}px`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(particle);
      setTimeout(() => particle.remove(), 5000);
    };
    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {/* Tab content */}
      <div className="content-container p-4 md:p-8">
        {activeTab === 0 && (
          <div className="poems-container space-y-4">
            {poems.map((poem, i) => (
              <p key={i} className="text-lg md:text-xl">{poem}</p>
            ))}
          </div>
        )}

        {activeTab === 1 && (
          <div className="playlists-container space-y-4">
            {playlists.map((song, i) => (
              <iframe
                key={i}
                src={song.replace("open.spotify.com", "open.spotify.com/embed")}
                width="300"
                height="80"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title={`spotify-${i}`}
              ></iframe>
            ))}
          </div>
        )}

        {activeTab === 2 && (
          <div className="loveletter-container text-left max-w-2xl mx-auto text-lg md:text-xl">
            {loveLetter.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        )}

        {activeTab === 3 && (
          <div className="surprise-container flex justify-center items-center">
            <img
              src={
                photoIndex === 0
                  ? photo1
                  : photoIndex === 1
                  ? photo2
                  : photo3
              }
              alt="Surprise"
              className="rounded-xl shadow-2xl w-80 md:w-96 transition-all duration-700"
            />
          </div>
        )}

        {activeTab === 4 && (
          <div className="foryou-container flex flex-col justify-center items-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-red-500">
              For You
            </h2>
            <div className="flower-boquete w-32 h-32 md:w-48 md:h-48 bg-pink-400 rounded-full shadow-xl animate-pulse"></div>
            <p className="text-center text-lg md:text-xl">
              A magical flower, just for you 🌸
            </p>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center space-x-2 md:space-x-4 z-20 p-2 md:p-4 bg-red-700/20 backdrop-blur-sm safe-bottom">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-lg font-bold transition-colors ${
              activeTab === index
                ? "bg-red-500 text-white shadow-xl"
                : "bg-red-700/70 text-white/80 hover:bg-red-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
