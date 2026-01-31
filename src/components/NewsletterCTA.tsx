
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterCTA = () => {
  return (
    <section className="py-24 bg-stone-900 text-stone-50 relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-spin-slow" style={{ animationDuration: '60s' }}></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif font-medium leading-tight">
            Join the Exclusive <br/><span className="italic text-stone-400">Beta Access</span>
          </h2>
          <p className="text-stone-400 text-lg font-light max-w-lg mx-auto">
            Be among the first to experience the future of personal styling. Limited spots available for our upcoming launch.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4" onSubmit={(e) => e.preventDefault()}>
            <Input 
              type="email" 
              placeholder="Enter your email address" 
              className="bg-white/5 border-white/10 text-white placeholder:text-stone-500 h-12 rounded-none focus-visible:ring-1 focus-visible:ring-stone-400"
            />
            <Button type="submit" className="h-12 px-8 bg-white text-stone-900 hover:bg-stone-200 rounded-none font-medium tracking-wide">
              Request Access
            </Button>
          </form>

          <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm text-stone-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-stone-400" /> No spam, ever
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-stone-400" /> Early bird perks
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-stone-400" /> Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
