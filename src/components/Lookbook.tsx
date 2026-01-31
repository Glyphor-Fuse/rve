import { Button } from "@/components/ui/button";

const Lookbook = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
              Curated Collections
            </span>
            <h2 className="mt-2 font-serif text-4xl md:text-5xl">
              Editorial Looks, <br /> Generated Daily
            </h2>
          </div>
          <Button variant="link" className="text-lg underline-offset-4 decoration-1">
            View Full Gallery
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[400px]">
          {/* Item 1 - Large vertical */}
          <div className="md:row-span-2 relative group overflow-hidden bg-gray-100">
            <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/lookbook-1.jpg" 
              alt="Avant Garde Streetwear" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-2xl italic">Street Lux</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group overflow-hidden bg-gray-100">
             <img 
              src="https://raw.githubusercontent.com/Glyphor-Fuse/rve/main/public/images/lookbook-2.jpg" 
              alt="Minimalist Office" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-2xl italic">Modern Office</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group overflow-hidden bg-gray-100">
             <img 
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-ObmPid7Jk8f1WNEPDUdp0nUH.png?st=2026-01-31T15%3A29%3A31Z&se=2026-01-31T17%3A29%3A31Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=92b997d6-f0dd-439d-8087-b26c74d72365&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-31T16%3A29%3A31Z&ske=2026-02-01T16%3A29%3A31Z&sks=b&skv=2024-08-04&sig=EGF8hY6%2BNkde9VSHSZUU2lWibvCjiVKscm1fRvfKohE%3D" 
              alt="Evening Wear" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-2xl italic">Gala Ready</span>
            </div>
          </div>

          {/* Item 4 - Wide */}
          <div className="md:col-span-2 relative group overflow-hidden bg-gray-100">
             <img 
              src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-0H9f4Fo3r1zZ6GNW5iMv5B6X.png?st=2026-01-31T15%3A29%3A55Z&se=2026-01-31T17%3A29%3A55Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=67205dde-9780-4119-bbff-6343b48e42b6&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-01-31T16%3A10%3A26Z&ske=2026-02-01T16%3A10%3A26Z&sks=b&skv=2024-08-04&sig=5HTDvTNDBdBQ%2B7QLESaiNigksvFKhyvnoLtlQsf5ROQ%3D" 
              alt="Summer Collection" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
             <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-serif text-2xl italic">Summer Edit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lookbook;
