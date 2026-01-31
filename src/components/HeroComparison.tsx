
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroComparison = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    
    let position = ((clientX - containerRect.left) / containerRect.width) * 100;
    position = Math.min(100, Math.max(0, position));
    
    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-stone-50 pt-20">
      <div className="container px-4 md:px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-stone-100 border border-stone-200 text-xs font-medium tracking-wider text-stone-600 mb-4 uppercase">
              The Future of Fitting
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-medium text-stone-900 tracking-tight leading-[1.1]">
              Redefine your <br />
              <span className="italic text-stone-600">virtual style.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-500 max-w-lg mx-auto md:mx-0 font-light"
          >
            Experience the Magic Mirror. Transform editorial inspiration into your personalized wardrobe with a single swipe.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.4 }}
             className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <Button className="h-12 px-8 rounded-full bg-stone-900 text-white hover:bg-stone-800 text-base">
              Try the Mirror
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full border-stone-300 hover:bg-stone-100 text-base">
              View Collection
            </Button>
          </motion.div>
        </div>

        {/* Comparison Slider */}
        <div className="flex-1 w-full max-w-lg aspect-[3/4] relative shadow-2xl rounded-2xl overflow-hidden border-4 border-white select-none"
             ref={containerRef}
             onMouseMove={handleMove}
             onTouchMove={handleMove}
             onMouseDown={handleMouseDown}
             onTouchStart={handleMouseDown}
        >
          {/* Image 2 (After) - Underneath */}
          <img 
            src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/hero-after.png" 
            alt="Styled Look" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Image 1 (Before) - Overlay */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/hero-before.png" 
              alt="Original Look" 
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: containerRef.current?.offsetWidth || '100%' }}
            />
            
            {/* Overlay Label */}
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm">
              Original
            </div>
          </div>

          {/* Label for After */}
          <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm z-10 pointer-events-none">
            Rêve Styled
          </div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-stone-900" />
            </div>
          </div>

          {/* Drag Instruction */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/30 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium pointer-events-none opacity-80">
            Drag to Transform
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-200/50 via-transparent to-transparent opacity-50"></div>
    </section>
  );
};

export default HeroComparison;
