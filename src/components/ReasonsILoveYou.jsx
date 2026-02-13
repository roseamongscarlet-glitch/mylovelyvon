import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const reasons = [
  "Your smile lights up my entire universe 🌟",
  "The way you laugh makes everything better 😊",
  "Your kindness touches everyone around you 💝",
  "You make ordinary moments feel magical ✨",
  "Your strength inspires me every single day 💪",
  "The way you care about the little things 🌸",
  "Your dreams and ambitions excite me 🚀",
  "How you always know how to make me feel loved 💕",
  "Your creativity and unique perspective 🎨",
  "The comfort I feel just being near you 🏡",
  "Your beautiful soul that shines so bright 🌈",
  "Simply because you're YOU, and that's perfect 💖"
];

const ReasonsILoveYou = () => {
  const [revealed, setRevealed] = useState(false);
  const [currentReason, setCurrentReason] = useState(0);

  const handleReveal = () => {
    setRevealed(true);
  };

  const handleNext = () => {
    if (currentReason < reasons.length - 1) {
      setCurrentReason(currentReason + 1);
    } else {
      setCurrentReason(0);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative">
      <div className="max-w-4xl w-full text-center">
        <motion.h2 
          className="font-display text-5xl md:text-7xl font-bold text-rose-night mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Reasons I Love You
        </motion.h2>

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                onClick={handleReveal}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-heart to-rose-deep rounded-full blur-xl opacity-50 group-hover:opacity-75"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative font-body px-16 py-8 bg-rose-heart text-white text-2xl md:text-3xl rounded-full shadow-2xl">
                  Click to Reveal 💝
                </div>
              </motion.button>
              
              <motion.p 
                className="font-body text-xl text-rose-deep mt-8 italic"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                There are {reasons.length} reasons waiting for you...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="reasons"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <motion.div
                className="bg-cream/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-rose-blush min-h-[300px] flex items-center justify-center relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-dawn/50 to-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
                />
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReason}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -50, rotateX: 90 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className="z-10"
                  >
                    <div className="font-body text-4xl md:text-5xl text-rose-night font-semibold mb-4">
                      Reason #{currentReason + 1}
                    </div>
                    <div className="font-body text-2xl md:text-3xl text-rose-deep leading-relaxed">
                      {reasons[currentReason]}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>

              <div className="flex justify-center gap-4">
                <motion.button
                  onClick={handleNext}
                  className="font-body px-12 py-4 bg-rose-heart text-white text-xl rounded-full shadow-xl hover:bg-rose-deep transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentReason < reasons.length - 1 ? 'Next Reason →' : 'Start Over ↻'}
                </motion.button>
              </div>

              <motion.p 
                className="font-body text-lg text-rose-deep/70 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {currentReason + 1} of {reasons.length}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
