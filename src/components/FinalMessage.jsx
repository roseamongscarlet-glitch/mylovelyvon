import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const FinalMessage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.7]);

  return (
    <section 
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 23, 68, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(255, 23, 68, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 80%, rgba(255, 23, 68, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 23, 68, 0.1) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div 
        style={{ scale, opacity }}
        className="max-w-5xl w-full text-center z-10 relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* Decorative hearts */}
          <div className="flex justify-center gap-6 mb-8 text-5xl">
            <motion.span 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }} 
              transition={{ duration: 3, repeat: Infinity, delay: 0 }}
            >
              💕
            </motion.span>
            <motion.span 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, -10, 10, 0]
              }} 
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            >
              💖
            </motion.span>
            <motion.span 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0]
              }} 
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              💝
            </motion.span>
          </div>

          <motion.h2 
            className="font-display text-6xl md:text-8xl font-black text-rose-night mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          >
            Until the Stars
            <br />
            Fade Away
          </motion.h2>

          <motion.div 
            className="font-body text-3xl md:text-4xl text-rose-deep space-y-6 leading-relaxed mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <p>
              In every sunrise, I see your radiance.
            </p>
            <p>
              In every sunset, I feel your warmth.
            </p>
            <p className="text-rose-heart font-semibold text-4xl md:text-5xl">
              You are my always, my forever, my everything.
            </p>
          </motion.div>

          <motion.div
            className="relative inline-block"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-heart via-rose-deep to-rose-night rounded-full blur-2xl opacity-30"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="relative font-display text-5xl md:text-7xl font-bold text-rose-heart px-12 py-6">
              I Love You, Yvon
            </div>
          </motion.div>

          {/* Final decorative element */}
          <motion.div
            className="mt-16 text-6xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 360]
            }}
            transition={{ 
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 10, repeat: Infinity, ease: 'linear' }
            }}
          >
            ❤️
          </motion.div>

          <motion.p
            className="font-body text-xl text-rose-deep/60 mt-8 italic"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Happy Valentine's Day 2026 💝
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 40 - 20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        >
          {['💕', '💖', '💝', '🌹', '✨', '💫'][i]}
        </motion.div>
      ))}
    </section>
  );
};

export default FinalMessage;
