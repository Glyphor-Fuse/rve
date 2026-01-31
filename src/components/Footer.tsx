import { ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        <div className="max-w-sm">
          <h2 className="font-serif text-3xl text-gray-900 mb-6">Rêve</h2>
          <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
            Redefining the intersection of luxury fashion and artificial intelligence. 
            Join the movement towards a more personalized, sustainable wardrobe.
          </p>
          <div className="flex gap-4">
            {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">For Brands</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-light">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Press</a></li>
            </ul>
          </div>
          <div className="col-span-2 md:col-span-1">
             <h4 className="text-xs font-bold uppercase tracking-widest text-gray-900 mb-6">Newsletter</h4>
             <div className="flex border-b border-gray-200 py-2">
               <input 
                 type="email" 
                 placeholder="Email Address" 
                 className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-300"
               />
               <button className="text-gray-900 hover:text-gray-600">
                 <ArrowRight className="w-4 h-4" />
               </button>
             </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-light">
        <p>&copy; 2024 Rêve Intelligence Inc.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
