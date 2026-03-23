import { MapPin } from "lucide-react";

const communities = [
  { name: "Riverdale", tag: "HQ" },
  { name: "Griffin" },
  { name: "Jonesboro" },
  { name: "Morrow" },
  { name: "Fayetteville" },
  { name: "Stockbridge" },
  { name: "McDonough" },
  { name: "College Park" },
  { name: "East Point" },
  { name: "Union City" },
  { name: "Hapeville" },
  { name: "Riverdale" },
];

const ServiceArea = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Service Area</span>
        <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground mt-3">
          Serving Riverdale 30274, Griffin, and South Metro Atlanta
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Based in Riverdale / Griffin, GA, we provide furniture disassembly, small moves, heavy-item moving, and TV services for local homes and apartments.
        </p>
      </div>

      <div className="bg-surface-dark rounded-lg p-8 md:p-12 max-w-3xl mx-auto">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-5 h-5 text-accent" />
          <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Same Day Service</span>
        </div>
        <p className="text-surface-dark-foreground/60 text-sm mb-6">Available in most areas — call for availability</p>

        <h3 className="font-display font-bold text-lg text-surface-dark-foreground mb-4">Communities We Serve</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {communities.map(({ name, tag }) => (
            <div key={name} className="flex items-center gap-2">
              <span className="text-surface-dark-foreground text-sm font-medium">{name}</span>
              {tag && <span className="text-accent text-xs font-display font-bold uppercase">{tag}</span>}
            </div>
          ))}
        </div>
        <p className="text-surface-dark-foreground/50 text-sm mt-4">+ Surrounding DFW communities</p>

        <div className="flex flex-wrap gap-4 mt-8">
          <a href="#contact" className="bg-accent text-accent-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:brightness-110 transition-all">
            Get a Free Quote
          </a>
          <a href="tel:4783912675" className="border-2 border-surface-dark-foreground/30 text-surface-dark-foreground font-display font-bold uppercase text-sm px-6 py-3 rounded hover:border-accent hover:text-accent transition-all">
            478-391-2675
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ServiceArea;
