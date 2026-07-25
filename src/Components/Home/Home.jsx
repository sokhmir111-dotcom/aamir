import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { SiCanva, SiGoogleslides } from 'react-icons/si';

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
            <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
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

            {/* Software / Tools Section */}
            <motion.div 
              className="mt-8 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 max-w-2xl">
                {/* 1st: Photoshop */}
                <div 
                  title="Photoshop"
                  className="w-9 h-9 rounded-lg bg-[#001e36] border border-[#0074a6]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="text-[#38bdf8] font-bold text-sm tracking-tight font-sans">Ps</span>
                </div>

                {/* 2nd: Illustrator */}
                <div 
                  title="Illustrator"
                  className="w-9 h-9 rounded-lg bg-[#280c03] border border-[#ff9a00]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="text-[#ff9a00] font-bold text-sm tracking-tight font-sans">Ai</span>
                </div>

                {/* 3rd: Adobe After Effects */}
                <div 
                  title="Adobe After Effects"
                  className="w-9 h-9 rounded-lg bg-[#0a0726] border border-[#9999ff]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="text-[#9999ff] font-bold text-sm tracking-tight font-sans">Ae</span>
                </div>

                {/* 4th: InDesign */}
                <div 
                  title="InDesign"
                  className="w-9 h-9 rounded-lg bg-[#2b0017] border border-[#ff3366]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="text-[#ff3366] font-bold text-sm tracking-tight font-sans">Id</span>
                </div>

                {/* 5th: Figma */}
                <div 
                  title="Figma"
                  className="w-9 h-9 rounded-lg bg-[#1e1e1e] border border-white/10 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <svg className="w-4 h-5" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                    <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                    <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                    <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                    <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                  </svg>
                </div>

                {/* 6th: Canva */}
                <div 
                  title="Canva"
                  className="w-9 h-9 rounded-lg bg-[#002b36] border border-[#00c4cc]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <SiCanva className="text-[#00c4cc] text-lg" />
                </div>

                {/* 7th: PowerPoint */}
                <div 
                  title="PowerPoint"
                  className="w-9 h-9 rounded-lg bg-[#260b05] border border-[#d24726]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <span className="text-[#d24726] font-bold text-sm tracking-tight font-sans">Pp</span>
                </div>

                {/* 8th: Google Slides */}
                <div 
                  title="Google Slides"
                  className="w-9 h-9 rounded-lg bg-[#261f00] border border-[#f4b400]/50 shadow-sm flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                >
                  <SiGoogleslides className="text-[#f4b400] text-lg" />
                </div>
              </div>
            </motion.div>
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