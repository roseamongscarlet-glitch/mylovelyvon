import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Poems array
const poems = [
  "Your laughter is the sunrise in my day, and your smile the stars that guide me.",
  "Every moment with you is a verse, every touch a melody, every glance a poem.",
  "Even in silence, your presence writes symphonies across the canvas of my heart.",
  "Your eyes hold the depth of galaxies, and your voice carries the warmth of every sunrise.",
  "In the quiet, I feel your heartbeat echoing inside me, a rhythm I will follow forever.",
  "With every breath, I am reminded that loving you is the purest truth of my existence.",
  "The world may change, stars may fade, but my devotion to you remains eternal.",
  "Every memory with you is a chapter in the most beautiful story ever told.",
];

// Playlist array
const playlist = [
  {
    title: "Song 1",
    embed: "https://open.spotify.com/embed/track/70MgcT507FGdoDBBLdmsqu",
  },
  {
    title: "Song 2",
    embed: "https://open.spotify.com/embed/track/3ODkrhZR29WfbbWpHEGGud",
  },
];

// Surprise photos
const surprisePhotos = ["/us1.jpg", "/us2.jpg", "/us3.jpg"];

// Particle hearts/roses
const NUM_HEARTS = 8;
const NUM_ROSES = 12;
const hearts = [...Array(NUM_HEARTS)].map(() => ({
  left: Math.random() * 90,
  top: Math.random() * 90,
  duration: 2 + Math.random() * 2,
  rotate: [0, 10, 0],
}));
const roses = [...Array(NUM_ROSES)].map(() => ({
  left: Math.random() * 100,
  size: 12 + Math.random() * 24,
  duration: 8 + Math.random() * 5,
  delay: Math.random() * 5,
}));

function App() {
  const tabs = ["Love Letter", "Poems", "Playlist", "Surprise", "For You"];
  const [activeTab, setActiveTab] = useState(0);

  // Love Letter typing
  const loveLetter =
    "My dearest Yvon, your presence is the symphony that makes my soul dance, the gentle dawn that brightens my every day. Every glance you give, every touch, is etched in the fibers of my being, and every heartbeat whispers your name. In this vast universe, our worlds collided like stars destined to shine together. I am endlessly grateful for your love, your laughter, and the magic that you bring into my life. You are my dawn, my heart, my forever muse. From the quiet whispers in the night to the brilliant sunlight of day, I am captivated by every part of you. The way you see the world, the way you make everyone around you feel special, it all leaves me in awe. Loving you is both the simplest and most profound truth I have ever known. Each moment with you is a treasure, a story, a lifetime in a heartbeat. I vow to cherish, honor, and adore you always. 💖";

  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (activeTab === 0 && typingIndex < loveLetter.length) {
      const interval = setInterval(() => {
        setTypedText((prev) => prev + loveLetter[typingIndex]);
        setTypingIndex((prev) => prev + 1);
      }, 20);
      return () => clearInterval(interval);
    } else if (activeTab !== 0) {
      setTypedText("");
      setTypingIndex(0);
    }
  }, [activeTab, typingIndex]);

  // Surprise slideshow
  const [currentPhoto, setCurrentPhoto] = useState(0);
  useEffect(() => {
    if (activeTab === 3) {
      const interval = setInterval(() => {
        setCurrentPhoto((prev) => (prev + 1) % surprisePhotos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Swipe handler
  const handleSwipe = (offsetX) => {
    if (offsetX < -50 && activeTab < tabs.length - 1) setActiveTab(activeTab + 1);
    else if (offsetX > 50 && activeTab > 0) setActiveTab(activeTab - 1);
  };

  // Beat-sync: simple pulse simulation
  const [beatPulse, setBeatPulse] = useState(false);
  useEffect(() => {
    if (activeTab === 2) {
      const interval = setInterval(() => setBeatPulse((prev) => !prev), 500);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Flower Boquete pulse
  const [flowerPulse, setFlowerPulse] = useState(1);
  useEffect(() => {
    if (activeTab === 4) {
      const interval = setInterval(() => setFlowerPulse(1 + Math.random() * 0.2), 500);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  // Tab background gradients
  const tabBg = [
    "from-pink-200 via-pink-300 to-yellow-100",
    "from-purple-200 via-blue-200 to-green-100",
    "from-blue-200 via-indigo-200 to-purple-100",
    "from-pink-100 via-red-200 to-yellow-100",
    "from-yellow-100 via-pink-200 to-red-200",
  ];

  return (
    <div
      className={`min-h-screen w-full flex flex-col items-center justify-start px-4 py-6 overflow-hidden bg-gradient-to-br ${tabBg[activeTab]}`}
    >
      {/* Falling roses */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {roses.map((r, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl md:text-3xl"
            style={{ left: `${r.left}%`, fontSize: `${r.size}px`, color: "#ff1744" }}
            animate={{ y: ["-10vh", "110vh"], rotate: [0, 360] }}
            transition={{ duration: r.duration, repeat: Infinity, ease: "linear", delay: r.delay }}
          >
            🌹
          </motion.div>
        ))}
      </div>

      {/* Floating Hearts */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
        {hearts.map((h, i) => (
          <motion.div
            key={i}
            className="heart absolute text-2xl md:text-4xl text-red-500"
            style={{ left: `${h.left}%`, top: `${h.top}%`, scale: beatPulse ? 1.3 : 1 }}
            animate={{ y: ["0%", "-20%", "0%"], rotate: h.rotate }}
            transition={{ duration: h.duration, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Swipeable content */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(e, info) => handleSwipe(info.offset.x)}
        className="w-full max-w-md z-20 flex-1 flex items-center justify-center"
      >
        {/* Love Letter */}
        {activeTab === 0 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-xl md:text-2xl text-red-700 p-4 space-y-4"
          >
            <p>{typedText}</p>
          </motion.section>
        )}

        {/* Poems */}
        {activeTab === 1 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-lg md:text-xl text-red-700 p-4 space-y-4 max-h-[60vh] overflow-y-auto"
          >
            {poems.map((poem, i) => (
              <p key={i}>{poem}</p>
            ))}
          </motion.section>
        )}

        {/* Playlist */}
        {activeTab === 2 && (
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-4 p-4"
          >
            {playlist.map((song, i) => (
              <iframe
                key={i}
                src={song.embed}
                width="300"
                height="80"
                frameBorder="0"
                allow="encrypted-media"
                className="rounded-lg shadow-lg"
                title={song.title}
              ></iframe>
            ))}
          </motion.section>
        )}

        {/* Surprise */}
        {activeTab === 3 && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center p-4 space-y-4"
          >
            <AnimatePresence>
              <motion.img
                key={currentPhoto}
                src={surprisePhotos[currentPhoto]}
                alt="Us"
                className="rounded-xl shadow-lg max-w-sm"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
          </motion.section>
        )}

        {/* For You - Magical Flower */}
        {activeTab === 4 && (
          <motion.section
            className="flex flex-col items-center justify-center p-4 h-[60vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="text-6xl md:text-8xl select-none"
              style={{ color: "#ff1744" }}
              animate={{ scale: [flowerPulse, flowerPulse + 0.05, flowerPulse], rotate: [0, 360, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🌸
            </motion.div>
            <p className="text-red-700 text-xl md:text-2xl mt-4 font-semibold animate-pulse">
              Just for you, my love ❤️
            </p>
          </motion.section>
        )}
      </motion.div>

      {/* Tabs at bottom */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center items-center space-x-4 z-20">
        {tabs.map((tab, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveTab(index)}
            whileHover={{ scale: 1.2, rotate: 3 }}
            whileTap={{ scale: 0.95, rotate: -3 }}
            className={`px-6 py-3 rounded-full text-lg md:text-xl font-bold transition-colors ${
              activeTab === index
                ? "bg-red-500 text-white shadow-xl"
                : "bg-red-700/70 text-white/80 hover:bg-red-500"
            }`}
          >
            {tab}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default App;
