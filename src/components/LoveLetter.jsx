import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LoveLetter = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);

  return (
    <section 
      id="love-letter"
      ref={ref} 
      className="min-h-screen flex items-center justify-center px-6 py-20 relative"
    >
      <motion.div 
        style={{ opacity, scale }}
        className="max-w-3xl bg-cream/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border-4 border-rose-blush relative"
      >
        <motion.div
          className="absolute -top-6 -right-6 text-5xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          💌
        </motion.div>

        <h2 className="font-display text-5xl md:text-6xl font-bold text-rose-night mb-8 text-center">
          My Dearest Yvon
        </h2>

        <div className="font-body text-xl md:text-2xl text-rose-deep space-y-6 leading-relaxed">
          <p className="first-letter:text-6xl first-letter:font-display first-letter:font-bold first-letter:text-rose-heart first-letter:mr-2 first-letter:float-left">
            From the moment our paths crossed, my world transformed into something 
            extraordinary. Every day with you feels like a gift wrapped in stardust 
            and tied with ribbons of joy.
          </p>

          <p>
            Your laughter is my favorite melody, your smile my greatest masterpiece, 
            and your presence the home I never knew I was searching for. In your eyes, 
            I found galaxies of wonder, and in your heart, I discovered my forever.
          </p>

          <p>
            Time stands still when I'm with you, yet somehow, every second feels 
            infinite. You are my yesterday's sweetest memory, today's greatest blessing, 
            and tomorrow's brightest promise.
          </p>

          <p className="text-center italic text-3xl text-rose-heart font-semibold mt-8">
            Forever yours, always and in all ways
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-8 text-4xl">
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }}>💕</motion.span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}>✨</motion.span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}>💖</motion.span>
          <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}>🌹</motion.span>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveLetter;
