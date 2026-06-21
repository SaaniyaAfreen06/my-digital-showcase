import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Mic, Handshake, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Seo from "@/components/Seo";

interface EventMedia {
  src: string;
  caption?: string;
}

interface EventItem {
  id: string;
  title: string;
  role: string;
  type: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
  stats: { label: string; value: string }[];
  description: string;
  overview: string;
  highlights: string[];
  media?: EventMedia[];
}

export const events: EventItem[] = [
  {
    id: "oneai-voice-ai-meetup",
    title: "Building the Voice AI Ecosystem — OneAI Community Meetup",
    role: "Co-Host · OneAI Community (by OneInbox)",
    type: "Community Meetup",
    tags: ["Voice AI", "Community", "Co-Host", "OneInbox"],
    icon: Mic,
    image: "/screenshots/oneai-meetup-1.jpg",
    stats: [
      { label: "Registrations", value: "300+" },
      { label: "Attendees", value: "150" },
      { label: "Format", value: "Panel + Networking" },
    ],
    description:
      "Co-hosted a Voice AI ecosystem meetup under OneAI Community (run by OneInbox) — founders, builders, and operators in one room to talk about where conversational AI is actually heading.",
    overview:
      "One of two events I helped host as part of OneAI Community, OneInbox's community for the Voice AI ecosystem. This one brought together founders, builders, and product leaders in Bangalore to talk about the future of conversational interfaces and voice-driven products — the kind of conversation that doesn't happen on a Twitter thread.",
    highlights: [
      "Shaped the theme and format for a panel with Voice AI builders and operators",
      "Curated topics around real-world use cases, infrastructure, and agent orchestration",
      "Drove outreach and managed the attendee experience end to end",
      "Sparked conversations across the stack — from founders building in the space to teams running it at scale",
    ],
  },
  {
    id: "oneai-builders-meetup",
    title: "OneAI Community — Voice AI Builders Session",
    role: "Co-Host · OneAI Community (by OneInbox)",
    type: "Community Meetup",
    tags: ["Voice AI", "Community", "Builders"],
    icon: Users,
    image: "/screenshots/oneai-meetup-2.jpg",
    stats: [
      { label: "Host", value: "OneAI Community" },
      { label: "Format", value: "Builder Session" },
      { label: "Focus", value: "Voice AI" },
    ],
    description:
      "The second OneAI Community gathering — a smaller, hands-on session for the Voice AI crowd to swap what's actually working in production.",
    overview:
      "The second of the two OneAI Community events (OneInbox's Voice AI community). A more intimate, builder-first room — fewer slides, more real talk about what teams are shipping, where the hard problems are, and what's overhyped. The kind of session where people compare notes instead of pitching.",
    highlights: [
      "Co-hosted and curated a focused, builder-first format",
      "Kept it practical — production lessons over launch announcements",
      "Grew the OneAI Community as a recurring home for Voice AI builders in Bangalore",
      "Connected founders and operators who'd only ever met online",
    ],
  },
  {
    id: "saas-connect-2025",
    title: "SaaS.Connect 2025 — Investment Readiness Partner",
    role: "Panelist & Exhibitor · Predict Growth",
    type: "Conference",
    tags: ["SaaS", "Startups", "Demo Day", "Fundraising"],
    icon: Handshake,
    image: "/screenshots/saas-connect-stall.jpg",
    stats: [
      { label: "Location", value: "Coimbatore" },
      { label: "Format", value: "Stall + Demo Day Panel" },
      { label: "Partner", value: "Start Insights" },
    ],
    description:
      "Represented Predict Growth as the Investment Readiness Partner at SaaS.Connect 2025 — ran the stall and joined the Demo Day panel to help Tamil Nadu's founders get investor-ready.",
    overview:
      "Predict Growth was the Investment Readiness Partner at SaaS.Connect 2025 in Coimbatore, in partnership with Start Insights to back Tamil Nadu's founders. I manned the Predict Growth stall — the 'Pitch for Cash' setup — and joined the Demo Day panel to help early-stage founders sharpen the part of fundraising they usually get wrong: being ready before they walk into the room.",
    highlights: [
      "Hosted the Predict Growth stall and engaged early-stage founders directly",
      "Joined the Demo Day panel, giving feedback on investment readiness and pitch structure",
      "Partnered with Start Insights to support the Tamil Nadu startup ecosystem",
      "Carried Predict Growth's mission into the room: take founders from idea to investor-ready",
    ],
    media: [
      { src: "/screenshots/saas-connect-partners.png", caption: "Predict Growth featured among the SaaS.Connect partners as the Investment Readiness Partner." },
    ],
  },
  {
    id: "womens-day-founders-panel",
    title: "Women's Day Founders Panel — Predict Growth",
    role: "Host · Predict Growth",
    type: "Panel + Networking",
    tags: ["Women's Day", "Founders", "Fundraising", "Panel"],
    icon: Mic,
    image: "/screenshots/womens-day-mic.jpg",
    stats: [
      { label: "Audience", value: "Founders" },
      { label: "Theme", value: "Investment Readiness" },
      { label: "Host", value: "Predict Growth" },
    ],
    description:
      "Hosted a Women's Day founders' event for Predict Growth — founders in the audience, a panel of investors and operators unpacking fundraising and investment.",
    overview:
      "A Women's Day event I hosted for Predict Growth, built for founders. We filled the room with early-stage founders as the audience and put a panel on stage to dig into the things that actually move a raise — investment readiness, what investors look for, and how to tell a fundable story. I hosted from the mic, keeping the conversation moving between panelists and the founders in the room.",
    highlights: [
      "Hosted the event end to end — from the run of show to working the mic on the day",
      "Curated a panel of investors and operators around investment and fundraising",
      "Programmed it for founders: a founder audience, with takeaways they could use the next week",
      "Tied it back to Predict Growth's mission of getting founders investor-ready",
    ],
  },
];

function EventFigure({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={className}>
      <div className="rounded-lg overflow-hidden border border-border bg-muted">
        <img src={src} alt={alt} className="w-full max-h-[540px] object-contain mx-auto" />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-muted-foreground text-center italic px-4">{caption}</figcaption>
      )}
    </figure>
  );
}

export const EventsIndex = () => (
  <section className="max-w-4xl mx-auto px-6 py-20">
    <Seo
      title="Events & Community"
      path="/events"
      description="Events and community work by Saaniya Afreen — co-hosting OneAI Community Voice AI meetups, exhibiting at SaaS.Connect, and hosting a Women's Day founders panel for Predict Growth."
    />
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-14"
    >
      <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">
        Community & Events
      </p>
      <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">Events</h1>
      <p className="text-muted-foreground max-w-lg">
        Meetups, panels, and demo days — building community at the intersection of Voice AI, product, and startups.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 gap-6">
      {events.map((event, i) => {
        const Icon = event.icon;
        return (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Link
              to={`/events/${event.id}`}
              className="group block h-full rounded-xl border border-border overflow-hidden bg-card hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] bg-muted overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-md bg-primary/10 text-primary flex-shrink-0">
                    <Icon size={14} />
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                    {event.type}
                  </p>
                </div>
                <h2 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug mb-1.5">
                  {event.title}
                  <ArrowRight size={14} className="inline ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-3">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">{tag}</Badge>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  </section>
);

export const EventDetail = () => {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-display font-bold mb-4">Event not found</h1>
        <Button asChild variant="outline" className="rounded-full">
          <Link to="/events"><ArrowLeft size={16} /> Back to Events</Link>
        </Button>
      </div>
    );
  }

  const Icon = event.icon;

  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <Seo title={event.title} path={`/events/${event.id}`} description={event.description} image={event.image} />
      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Button asChild variant="ghost" className="mb-8 -ml-3 text-muted-foreground">
          <Link to="/events"><ArrowLeft size={16} /> Back to Events</Link>
        </Button>

        <div className="flex items-center gap-2 mb-3">
          <span className="p-1.5 rounded-md bg-primary/10 text-primary"><Icon size={15} /></span>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
            {event.type} · {event.role}
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {event.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">{tag}</Badge>
          ))}
        </div>
        <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{event.title}</h1>
        <p className="text-muted-foreground leading-relaxed mb-8">{event.overview}</p>

        <div className="grid grid-cols-3 gap-4 mb-10 border border-border rounded-lg p-5">
          {event.stats.map((s) => (
            <div key={s.label}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">{s.label}</p>
              <p className="text-sm font-medium text-foreground">{s.value}</p>
            </div>
          ))}
        </div>

        <EventFigure src={event.image} alt={event.title} className="mb-12" />

        <h2 className="text-xl font-display font-bold text-foreground mb-4">Highlights</h2>
        <ul className="space-y-3 mb-10">
          {event.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
              <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
              {h}
            </li>
          ))}
        </ul>

        {event.media?.map((m, i) => (
          <EventFigure key={i} src={m.src} alt={m.caption ?? event.title} caption={m.caption} className="mb-10" />
        ))}

        <div className="mt-4 pt-10 border-t border-border">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">More events</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {events.filter((e) => e.id !== event.id).slice(0, 4).map((e) => (
              <Link key={e.id} to={`/events/${e.id}`} className="group border border-border rounded-lg p-4 hover:shadow-sm transition-all">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">{e.type}</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{e.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EventsIndex;
