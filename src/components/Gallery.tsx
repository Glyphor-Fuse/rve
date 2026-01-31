import { motion } from 'motion/react';

const Gallery = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase mb-4">
            Curated by Intelligence
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-white">
            The Edit
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
          {/* Large Featured Item */}
          <motion.div 
            className="md:col-span-6 lg:col-span-5 h-[500px] md:h-full relative overflow-hidden group"
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/gallery-1.png" 
              alt="Editorial Shot 1" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
            <div className="absolute bottom-6 left-6">
              <p className="font-serif text-2xl italic">Summer Avant-Garde</p>
              <p className="text-xs tracking-widest uppercase mt-1 text-gray-300">Collection 04</p>
            </div>
          </motion.div>

          {/* Right Column Grid */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-4 h-full">
            <div className="flex-1 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/gallery-2.png" 
                  alt="Editorial Shot 2" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                />
              </div>
              <div className="relative overflow-hidden group bg-gray-900 flex items-center justify-center p-8">
                 <div className="text-center">
                    <h3 className="font-serif text-3xl mb-2">94%</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-widest">Match Accuracy</p>
                 </div>
              </div>
            </div>
            
            <div className="flex-[1.5] relative overflow-hidden group">
              <img 
                src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/gallery-3.png" 
                alt="Editorial Shot 3" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute top-6 right-6 text-right">
                <p className="font-serif text-xl italic">Urban Minimalist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
