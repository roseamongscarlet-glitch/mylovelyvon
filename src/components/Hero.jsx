import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.h1 
            className="font-display text-6xl md:text-8xl font-bold text-rose-night mb-6"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255, 23, 68, 0.3)',
                '0 0 40px rgba(255, 23, 68, 0.5)',
                '0 0 20px rgba(255, 23, 68, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Welcome to
          </motion.h1>
          <motion.h2 
            className="font-display text-7xl md:text-9xl font-black text-rose-heart mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            MyLovelyYvon
          </motion.h2>
          <motion.div
            className="text-6xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, -10, 10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💖
          </motion.div>
        </motion.div>

        <motion.p
          className="font-body text-2xl md:text-3xl text-rose-deep mt-8 max-w-2xl mx-auto italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          A celebration of endless love and cherished moments
        </motion.p>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.button
            onClick={() => document.getElementById('love-letter').scrollIntoView({ behavior: 'smooth' })}
            className="font-body px-10 py-4 bg-rose-heart text-white text-xl rounded-full shadow-2xl hover:bg-rose-deep transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Scroll to discover more
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-30"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🌹
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-6xl opacity-30"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        💝
      </motion.div>
    </section>
  );
};

export default Hero;
