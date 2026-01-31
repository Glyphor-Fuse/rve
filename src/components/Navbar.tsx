import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="font-serif text-2xl text-gray-900 font-bold z-50 relative">
          Rêve
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Features', 'Lookbook', 'Pricing', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-xs uppercase tracking-widest text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-gray-800 transition-colors">
            Get Access
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 md:hidden">
            {['Features', 'Lookbook', 'Pricing', 'About'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-serif text-3xl text-gray-900 hover:italic transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
             <button className="mt-8 px-8 py-3 bg-gray-900 text-white text-sm uppercase tracking-widest">
              Get Access
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
