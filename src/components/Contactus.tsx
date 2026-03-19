import QuoteForm from "./QuoteForm";

const ContactUs = () => {
  return (
    <section id="contact" className="bg-surface py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-[0.28em] font-display text-accent font-bold mb-2">Contact</p>
          <h2 className="font-display font-800 text-3xl md:text-4xl text-foreground">Ready to Clear Space?</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Reach out today for fast, reliable junk removal. Strong service, clean results—here when you need us.
          </p>
        </div>
        <div className="mx-auto max-w-3xl">
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
