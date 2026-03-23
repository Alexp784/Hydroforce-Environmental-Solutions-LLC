import { Clock, DollarSign, Users, Recycle, Shield, MapPin } from "lucide-react";

const steps = [
  { num: "01", title: "Get a Free Quote", desc: "Call us or request a free estimate online." },
  { num: "02", title: "Schedule Service", desc: "We arrive on time with a professional team." },
  { num: "03", title: "We Handle It", desc: "Professional service with eco-friendly practices and cleanup." },
];

const features = [
  { icon: Clock, title: "Quick Response", desc: "Need immediate assistance? We offer same-day and next-day service for urgent cleanup needs." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No hidden fees. We provide clear quotes upfront with all costs included." },
  { icon: Users, title: "Professional Team", desc: "Trained and experienced crew that handles all aspects of environmental cleanup." },
  { icon: Recycle, title: "Eco-Friendly Disposal", desc: "We prioritize environmentally responsible disposal and recycling practices." },
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed and insured for your peace of mind and protection." },
  { icon: MapPin, title: "Local Commitment", desc: "Based in South Florida, serving the communities we're part of with pride and responsibility." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-surface-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">The Hydroforce Environmental Difference</h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          We're committed to providing reliable, responsible environmental solutions. Fast, professional, and always dedicated to a cleaner, more sustainable future.
        </p>
      </div>

      {/* Steps */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {steps.map(({ num, title, desc }) => (
          <div key={num} className="text-center">
            <div className="text-accent font-display font-bold text-xs uppercase tracking-wider mb-2">Step {num}</div>
            <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{desc}</p>
          </div>
        ))}
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-card rounded-lg p-6 shadow-sm">
            <Icon className="w-6 h-6 text-accent mb-3" />
            <h3 className="font-display font-bold text-base text-foreground mb-1.5">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="inline-block bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-8 py-3 rounded hover:brightness-110 transition-all">
          Get a Free Quote
        </a>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
