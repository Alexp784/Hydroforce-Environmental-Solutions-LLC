import { Home, HardHat, Truck, Tv } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

const services = [
  {
    icon: Home,
    title: "Waste Removal",
    description: "Professional debris and waste removal for homes and businesses with responsible disposal practices.",
  },
  {
    icon: Truck,
    title: "Recycling Services",
    description: "Comprehensive recycling solutions to help reduce environmental impact and promote sustainability.",
  },
  {
    icon: HardHat,
    title: "Yard & Storm Cleanup",
    description: "Expert yard cleaning and post-storm cleanup services to restore your property safely and efficiently.",
  },
  {
    icon: Tv,
    title: "Environmental Support Services",
    description: "Specialized environmental support and cleanup services tailored to your specific needs.",
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-20">
    <div className="absolute inset-0 z-0">
     
      <div className="absolute inset-0 bg-surface-dark/90" />
    </div>

    <div className="container mx-auto relative z-10 px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">What We Do</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-surface-dark-foreground mt-3">Environmental Services</h2>
        <p className="text-surface-dark-foreground/70 mt-3 max-w-2xl mx-auto">
          From waste removal to storm cleanup, we serve Lee and Collier Counties with safe, reliable environmental solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group bg-surface-dark-foreground/5 border border-surface-dark-foreground/10 rounded-lg p-6 hover:border-accent/50 transition-all cursor-pointer"
          >
            <Icon className="w-8 h-8 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg text-surface-dark-foreground mb-2">{title}</h3>
            <p className="text-surface-dark-foreground/60 text-sm leading-relaxed mb-4">{description}</p>
            <span className="text-accent font-display font-bold text-sm uppercase group-hover:underline">Get a Free Quote →</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <a href="#contact" className="bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:brightness-110 transition-all">
          Get a Free Quote
        </a>
        <a href="tel:4783912675" className="border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all">
          786-482-1573
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
