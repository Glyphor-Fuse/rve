import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col lg:flex-row bg-[#F9F9F7] overflow-hidden">
      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-4 block">
            The Future of Personal Styling
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-gray-900 mb-8">
            Wear the <br/>
            <span className="italic font-light text-gray-600">Impossible.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md mb-10 leading-relaxed font-light">
            Experience the world's most advanced AI styling engine. 
            Transform your wardrobe with a single tap.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white rounded-none hover:bg-gray-800 transition-all flex items-center justify-center gap-2 group">
              Start Your Transformation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-900 rounded-none hover:bg-gray-100 transition-all">
              View Lookbook
            </button>
          </div>
        </motion.div>
      </div>

      {/* Interactive Slider */}
      <div 
        className="w-full lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden cursor-col-resize group"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleMouseMove}
      >
        {/* 'After' Image (Background) */}
        <div className="absolute inset-0 bg-gray-200">
          <img 
            src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/hero-after.png" 
            alt="Styled Outcome" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-4 py-2 text-xs tracking-widest uppercase font-bold">
            Rêve Styled
          </div>
        </div>

        {/* 'Before' Image (Foreground with Clip Path) */}
        <div 
          className="absolute inset-0 bg-gray-300"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img 
            src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/hero-before.png" 
            alt="Original" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-black/80 text-white backdrop-blur px-4 py-2 text-xs tracking-widest uppercase font-bold">
            Original
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_20px_rgba(0,0,0,0.3)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-gray-900" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
