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
        I'm always open to discussing product roles, interesting projects,
        or opportunities to collaborate.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild className="rounded-full px-6 gap-2 h-12">
          <a href="mailto:hello@saaniya.dev">
            <Mail size={18} />
            hello@saaniya.dev
          </a>
        </Button>
        <Button asChild variant="outline" className="rounded-full px-6 gap-2 h-12">
          <a href="https://www.linkedin.com/in/saaniya-afreen" target="_blank" rel="noopener noreferrer">
            <Linkedin size={18} />
            LinkedIn Profile
          </a>
        </Button>
      </div>
    </motion.div>
  </section>
);

export default Contact;
