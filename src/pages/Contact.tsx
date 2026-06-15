import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Contact = () => (
  <section className="max-w-6xl mx-auto px-6 flex items-center justify-center min-h-[70vh]">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="text-center max-w-xl"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
        Contact
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
        Let's work together
      </h1>
      <p className="text-muted-foreground mb-10">
        I'm open to PM roles at ambitious teams building AI, developer tools, or 0→1 products.
        Feel free to reach out — I'm always happy to chat about what you're building.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild className="rounded-full px-6 gap-2 h-12">
          <a href="mailto:saaniyaafreen2000@gmail.com">
            <Mail size={18} />
            saaniyaafreen2000@gmail.com
          </a>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6 gap-2 h-12">
          <a href="https://www.linkedin.com/in/saaniya-afreen-527322197" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LinkedIn Profile
          </a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default Contact;
