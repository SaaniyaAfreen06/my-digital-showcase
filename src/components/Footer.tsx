import { Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Saaniya Afreen. All rights reserved.
      </p>
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/saaniya-afreen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:hello@saaniya.dev"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Mail size={20} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
