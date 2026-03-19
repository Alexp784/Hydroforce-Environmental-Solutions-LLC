import { Phone, MessageSquare } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import QuoteForm from "./QuoteForm";

const ContactUs = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background */}
      <div className="flex justify-center lg:justify-end">
          <QuoteForm />
        </div>
    </section>
  );
};

export default ContactUs;
