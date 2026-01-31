import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const MagicMirror = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
              The Magic Mirror
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
              Instant Transformation, <br/>
              <span className="italic text-muted-foreground">Zero Effort</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Upload a single photo and watch as our AI reimagines your look. 
              From casual street style to avant-garde luxury, explore infinite versions of yourself without changing clothes.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="rounded-none border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors">
                Try The Demo
              </Button>
            </div>
          </div>

          {/* Interactive Slider */}
          <div className="order-1 lg:order-2">
            <div 
              className="relative aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-sm shadow-2xl cursor-ew-resize select-none"
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleTouchMove}
            >
              {/* "After" Image (Background) */}
              <img 
                src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/mirror-after.jpg" 
                alt="Styled Outfit" 
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* "Before" Image (Foreground with Clip) */}
              <div 
                className="absolute inset-0 overflow-hidden bg-background"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/mirror-before.jpg" 
                  alt="Original Outfit" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* Slider Handle */}
              <div 
                className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <div className="flex gap-[2px]">
                    <div className="h-3 w-[1px] bg-black/40" />
                    <div className="h-3 w-[1px] bg-black/40" />
                  </div>
                </div>
              </div>
              
              {/* Labels */}
              <div className="absolute bottom-4 left-4 text-xs font-bold text-white bg-black/50 px-2 py-1 uppercase tracking-widest backdrop-blur-sm z-10">
                Original
              </div>
              <div className="absolute bottom-4 right-4 text-xs font-bold text-white bg-black/50 px-2 py-1 uppercase tracking-widest backdrop-blur-sm z-10">
                Styled
              </div>
            </div>
            <p className="mt-4 text-center text-xs text-muted-foreground uppercase tracking-widest">
              Drag to compare
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MagicMirror;
