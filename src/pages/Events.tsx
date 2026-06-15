import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Mic, Handshake } from "lucide-react";

const events = [
  {
    id: 1,
    title: "Building Community in the Voice AI Ecosystem",
    role: "Co-Host",
    type: "Community Meetup",
    tags: ["Voice AI", "Community", "Co-Host"],
    icon: Mic,
    image: "/screenshots/event-1.jpg",
    stats: [
      { label: "Registrations", value: "300+" },
      { label: "Attendees", value: "150" },
      { label: "Format", value: "Panel + Networking" },
    ],
    description:
      "Co-hosted a community meetup focused on the emerging Voice AI ecosystem, bringing together founders, builders, and product leaders in Bangalore to discuss the future of conversational interfaces and voice-driven products.",
    highlights: [
      "Shaped the theme and format for a panel discussion with Voice AI industry leaders",
      "Curated topics around real-world use cases, infrastructure, and agent orchestration",
      "Coordinated with speakers, drove outreach, and managed attendee experience",
      "Sparked conversations that don't happen online — from founders building in the space to operators running it at scale",
    ],
  },
  {
    id: 2,
    title: "Closed-Door Telephony Roundtable — EkStep Foundation",
    role: "Participant (OneInbox AI)",
    type: "Roundtable",
    tags: ["Telephony", "Voice AI", "Government", "CPaaS"],
    icon: Users,
    image: "/screenshots/event-2.png",
    stats: [
      { label: "Format", value: "Closed-Door" },
      { label: "Host", value: "EkStep Foundation" },
      { label: "Duration", value: "2 Hours" },
    ],
    description:
      "Participated in a closed-door telephony roundtable hosted by Santosh Kevlani and BalaKrishnan A at EkStep Foundation — CPaaS providers, Voice AI builders, and government teams deploying at scale all in one room. No pitches, no decks. Just solving hard problems.",
    highlights: [
      "Discussed number portability, latency, protocols, spam, and RFP specs with practitioners who actually run the infrastructure",
      "Every topic had an answer nobody talks about publicly — and assumptions that don't hold up in production",
      "Represented OneInbox AI (Techstars '25) in a room that included teams deploying voice AI at national scale",
      "Came away with clarity on Voice AI infrastructure that only exists when builders and operators share a room",
    ],
  },
  {
    id: 3,
    title: "SaaS.Connect 2025 — Investment Readiness Partner",
    role: "Panelist & Exhibitor (PredictGrowth)",
    type: "Conference",
    tags: ["SaaS", "Startups", "Demo Day", "Tamil Nadu"],
    icon: Handshake,
    image: "/screenshots/event-3.png",
    stats: [
      { label: "Location", value: "Coimbatore" },
      { label: "Format", value: "Stall + Demo Day Panel" },
      { label: "Partner", value: "Start Insights" },
    ],
    description:
      "Represented PredictGrowth as the Investment Readiness Partner at SaaS.Connect 2025 in Coimbatore, in partnership with Start Insights to empower Tamil Nadu's founders. Manned the PredictGrowth stall and joined the Demo Day panel to help early-stage founders sharpen their investment pitch.",
    highlights: [
      "Joined hands with Start Insights to support Tamil Nadu's startup ecosystem",
      "Hosted the PredictGrowth stall and engaged directly with early-stage founders",
      "Participated as a Demo Day panelist, giving feedback on investment readiness and pitch structure",
      "Represented PredictGrowth's mission of helping founders go from idea to investor-ready",
    ],
  },
];

const Events = () => (
  <section className="max-w-4xl mx-auto px-6 py-20">
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Community & Events
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
        Events
      </h1>
      <p className="text-muted-foreground max-w-lg">
        Panels, meetups, and roundtables — building community at the intersection of Voice AI, product, and startups.
      </p>
    </motion.div>

    <div className="space-y-14">
      {events.map((event, i) => {
        const Icon = event.icon;
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="border border-border rounded-xl overflow-hidden bg-card"
          >
            <div className="aspect-[16/7] bg-muted overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-7">
              <div className="flex items-start gap-3 mb-4">
                <div className="mt-0.5 p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
                    {event.type} · {event.role}
                  </p>
                  <h2 className="text-xl font-display font-bold text-foreground leading-snug">
                    {event.title}
                  </h2>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 mb-6 bg-muted/40 rounded-lg p-4">
                {event.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-5 text-sm">
                {event.description}
              </p>

              <ul className="space-y-2">
                {event.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export default Events;
