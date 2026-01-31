
import { motion } from "framer-motion";

const features = [
  {
    title: "AI Curated Wardrobe",
    description: "Our algorithms analyze thousands of runway trends to suggest pieces that perfectly match your body type and personal aesthetic.",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/feature-wardrobe.png",
    align: "left"
  },
  {
    title: "Instant Virtual Try-On",
    description: "Upload a photo and see yourself in any outfit instantly. No more guessing how fabric drapes or fits.",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/feature-scan.png",
    align: "right"
  },
  {
    title: "Editorial Grade Styling",
    description: "Get complete look recommendations including accessories, shoes, and makeup styles, curated by top digital stylists.",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/feature-style.png",
    align: "left"
  }
];

const EditorialFeatures = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-4">The Atelier</h2>
          <p className="text-stone-500 max-w-xl mx-auto">Where technology meets haute couture styling.</p>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${feature.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-24`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-100 group">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-500" />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 space-y-6 text-center md:text-left"
              >
                <div className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase">
                  0{index + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-lg text-stone-500 font-light leading-relaxed">
                  {feature.description}
                </p>
                <button className="text-stone-900 font-medium border-b border-stone-300 hover:border-stone-900 transition-colors pb-1 text-sm uppercase tracking-wider">
                  Learn More
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialFeatures;
