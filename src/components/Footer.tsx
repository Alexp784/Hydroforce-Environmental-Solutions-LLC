import { Phone, Mail } from "lucide-react";
import mpsLogo from "@/assets/655762774_122162625368929322_3718722894101463163_n-removebg-preview.png";

const Footer = () => (
  <footer className="bg-surface-dark py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <img src={mpsLogo} alt="Stevie Marshall Movers logo" className="h-16 w-auto mb-4" />
          <p className="text-accent font-display font-bold text-lg leading-tight mb-1">Stevie Marshall Movers</p>
          <p className="text-surface-dark-foreground/60 text-sm leading-relaxed">Furniture disassembly, small moves, heavy item moving</p>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            <a href="#home" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Home</a>
            <a href="#services" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Services</a>
            <a href="#why-us" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">About</a>
            <a href="#gallery" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Gallery</a>
            <a href="#contact" className="text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">Contact Us</a>
          </nav>
        </div>

        <div>
          <h4 className="font-display font-bold text-surface-dark-foreground text-sm uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:4783912675" className="flex items-center gap-2 text-accent font-bold text-sm">
              <Phone className="w-4 h-4" /> 786-482-1573
            </a>
            <a href="mailto:noslienusa11@gmail.com  " className="flex items-center gap-2 text-surface-dark-foreground/60 hover:text-accent transition-colors text-sm">
              <Mail className="w-4 h-4" /> noslienusa11@gmail.com  
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-dark-foreground/10 mt-12 pt-6 text-center">
        <p className="text-surface-dark-foreground/40 text-xs">
          © {new Date().getFullYear()} Randalls Junk Removal. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
