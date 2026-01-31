import { motion } from 'motion/react';
import { Star, Layers, Zap, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: "AI Precision",
    description: "Our proprietary neural engine maps fabrics to your body with 99.8% geometric accuracy."
  },
  {
    icon: Layers,
    title: "Layering Logic",
    description: "Understand complex outfit compositions. Tuck, layer, and drape virtual garments realistically."
  },
  {
    icon: UserCheck,
    title: "Personal Curator",
    description: "The algorithm learns your taste profile over time, suggesting pieces you'll actually love."
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "No waiting for renders. See your new look in under 2 seconds with our edge-computing network."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Technology meets <br/> 
              <span className="italic text-gray-500">Haute Couture</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 text-sm mt-4 md:mt-0 font-light leading-relaxed">
            We've deconstructed the styling process to build a tool that understands fashion as deeply as you do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="w-12 h-12 bg-[#F9F9F7] flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
