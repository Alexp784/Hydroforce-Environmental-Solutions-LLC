import { Phone, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteForm from "./QuoteForm";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-surface-dark/75" />
      </div>

      <div className="container mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16 px-4">
        {/* Left: Copy */}
        <div>
          <div className="inline-block bg-accent/20 border border-accent/40 rounded px-4 py-1.5 mb-6">
            <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">
              Riverdale / Griffin Moving Services
            </span>
          </div>

          <h1 className="font-display font-900 text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-surface-dark-foreground mb-6 text-shadow-hero">
            Need Junk Gone Fast?
            <br />
            <span className="text-accent">We Haul It All.</span>
          </h1>

          <p className="text-lg text-surface-dark-foreground/80 max-w-lg mb-8 font-body">
            Expert furniture disassembly, small moves, heavy item transport, and TV mounting in Fort Myers, Fl United States.
            We handle the logistics so you can focus on settling smoothly.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-display font-bold uppercase tracking-wider text-surface-dark-foreground/90 mb-8">
            <span>Same Day Service</span>
            <span className="text-accent">•</span>
            <span>Free Estimates</span>
            <span className="text-accent">•</span>
            <span>We Do the Heavy Lifting</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="tel:4783912675"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-display font-bold uppercase px-6 py-3 rounded hover:brightness-110 transition-all text-sm"
            >
              <Phone className="w-4 h-4" />
              Call 786-482-1573
            </a>
            <a
              href="sms:4783912675"
              className="inline-flex items-center gap-2 border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase px-6 py-3 rounded hover:border-accent hover:text-accent transition-all text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Text Us for a Quote
            </a>
          </div>
        </div>

        {/* Right: Quote Form */}
        <div className="flex justify-center lg:justify-end">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
