import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Home = () => {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Background image with responsive sizing */}
      <div
        className="absolute inset-0 bg-[url(/image/bg2.png)] bg-cover bg-center bg-no-repeat opacity-80"
      />

      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="flex-1 w-full md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-4">
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-200 font-medium mb-2">Hello, I'm</span>
              <span className="text-[#cde633] text-5xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight block">
                Aamir Khan
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-white font-semibold leading-tight">
              Senior <span className="text-[#cde633]">Graphic</span> Designer &amp; <br className="hidden sm:inline" />
              Brand <span className="text-[#cde633]">Identity</span> Designer
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Crafting Strategic Brand Identities That Inspire Trust, Drive Growth, and Make Businesses Unforgettable.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
              <motion.a
                href="https://www.upwork.com/freelancers/aamirkhan54?mp_source=share" // Changed href to your Upwork profile
                target="_blank" // Opens in a new tab
                rel="noopener noreferrer" // Recommended for security when using target="_blank"
                className="flex items-center justify-center bg-[#cde633] border-2 border-emerald-400 hover:bg-emerald-700 hover:text-[#fff] text-emerald-700 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold transition-all group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Hire Me</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.a>

            </div>
          </motion.div>

          <motion.div
            className="relative w-full max-w-lg md:max-w-xl lg:max-w-xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Profile image container with shadow effect */}
            <div className="relative aspect-square w-full max-h-[480px] lg:max-h-[540px] overflow-hidden">
              {/* Main image */}
              <img
                src="/image/amir.png"
                alt="Aamir Khan"
                className="w-full h-full object-contain"
              />
              {/* Bottom shadow gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 " />
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating specks (like stars) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-emerald-400 rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Home;