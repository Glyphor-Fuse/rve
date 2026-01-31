import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-secondary blur-3xl" />
        <div className="absolute top-1/2 right-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      
      <div className="container relative z-10 px-4 text-center">
        <h2 className="mx-auto mb-6 max-w-2xl font-serif text-4xl font-medium md:text-6xl">
          Ready to Meet Your <br />
          <span className="italic">New Stylist?</span>
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-lg text-primary-foreground/80">
          Join thousands of early adopters shaping the future of fashion. 
          Download Rêve today and step into your digital wardrobe.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button 
            size="lg" 
            variant="secondary" 
            className="h-14 min-w-[200px] rounded-full text-base"
          >
            Download for iOS
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-14 min-w-[200px] rounded-full border-primary-foreground/20 text-base hover:bg-primary-foreground/10 hover:text-primary-foreground bg-transparent text-primary-foreground"
          >
            Download for Android
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
