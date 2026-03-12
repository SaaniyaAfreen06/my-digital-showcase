import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        {/* Left */}
        <div className="max-w-xs">
          <p className="text-xl font-display font-bold text-foreground mb-2">
            Saaniya<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Product manager building user-centered, data-driven products.
          </p>
        </div>

        {/* Right columns */}
        <div className="flex gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Navigate
            </p>
            <div className="flex flex-col gap-2.5">
              <Link to="/work" className="text-sm text-foreground hover:text-primary transition-colors">Work</Link>
              <Link to="/about" className="text-sm text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-foreground hover:text-primary transition-colors">Contact</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Connect
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:hello@saaniya.dev"
                className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Email <ExternalLink size={12} />
              </a>
              <a
                href="https://www.linkedin.com/in/saaniya-afreen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                LinkedIn <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saaniya Afreen. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
