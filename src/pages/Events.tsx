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

interface EventSection {
  heading: string;
  body: string;
  media?: EventMedia[];
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
  sections: EventSection[];
  highlights: string[];
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
      "This was the first of two events I helped host as part of OneAI Community — the community OneInbox runs for the Voice AI ecosystem. The whole point was to get founders, builders, and operators into one physical room in Bangalore, because the most useful conversations about voice AI simply don't happen on a Twitter thread.",
    sections: [
      {
        heading: "Why this meetup existed",
        body: "Voice AI was moving fast, and everyone was learning in their own silo — one team solving latency, another fighting telephony, a third tuning prompts, none of them comparing notes. OneAI Community was our answer to that: a recurring, in-person home for the Voice AI ecosystem, run by OneInbox. This first edition was about proving there was real appetite for it — a room where people swap what's actually working instead of what's being announced.",
      },
      {
        heading: "What I owned",
        body: "I shaped the theme and the panel format, decided who belonged on stage, drove the outreach that filled the room, and ran the attendee experience on the day. We had 300+ registrations and around 150 people show up — a strong turnout for a niche, technical community, and proof that there's a hungry audience for this kind of gathering in Bangalore.",
        media: [
          { src: "/screenshots/oneai-meetup-1.jpg", caption: "The room at the end of the night — founders, builders, and operators from across the Voice AI stack." },
        ],
      },
      {
        heading: "What actually happened in the room",
        body: "The panel went deep on the unglamorous parts — real-world use cases, infrastructure, and agent orchestration — the things people rarely post about but always struggle with. The networking afterward was the real product: founders building voice agents met the operators running them at scale, and a couple of collaborations started right there on the floor.",
      },
    ],
    highlights: [
      "Shaped the theme and format for a panel with Voice AI builders and operators",
      "Drove outreach to 300+ registrations and a 150-strong turnout",
      "Curated topics around real-world use cases, infrastructure, and agent orchestration",
      "Turned a one-off into the start of a recurring community",
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
      "The second of the two OneAI Community events I co-hosted (OneInbox's Voice AI community). After the first meetup proved the appetite, we deliberately ran this one smaller and more intimate — a builder-first room where the conversation could get specific instead of staying at keynote altitude.",
    sections: [
      {
        heading: "The second edition, on purpose smaller",
        body: "The first meetup proved there was demand; this one was about depth. We kept the guest list tighter so the room could actually talk to each other — fewer chairs, more candour, and the kind of questions people only ask when they trust who's listening.",
        media: [
          { src: "/screenshots/oneai-meetup-2.jpg", caption: "A tighter, builder-first room — the second OneAI Community session." },
        ],
      },
      {
        heading: "Format: production over pitches",
        body: "No launch announcements, no demos-as-marketing. We kept it to what's genuinely working in production — latency, reliability, where things break, and what's overhyped versus what actually moves the needle. The value was in the honesty, not the polish.",
      },
      {
        heading: "Why it matters",
        body: "Running a second edition is what turns an event into a community. Two gatherings meant the same faces started showing up, recognising each other, and trading help — and that repetition is exactly how a real ecosystem forms around a category.",
      },
    ],
    highlights: [
      "Co-hosted and curated a focused, builder-first format",
      "Kept it practical — production lessons over launch announcements",
      "Made OneAI Community a recurring home for Voice AI builders in Bangalore",
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
      "Predict Growth was the Investment Readiness Partner at SaaS.Connect 2025 in Coimbatore, in partnership with Start Insights to back Tamil Nadu's founders. I ran the Predict Growth stall and joined the Demo Day panel — both aimed at the same thing: helping early-stage founders fix the part of fundraising they usually overlook, which is being ready before they ever walk into the room.",
    sections: [
      {
        heading: "The partnership",
        body: "Predict Growth came on as the official Investment Readiness Partner for SaaS.Connect 2025, alongside Start Insights, to support the Tamil Nadu startup ecosystem. The brief wasn't to help founders make a prettier deck — it was to get more of them genuinely investor-ready, which is a very different (and much harder) bar.",
        media: [
          { src: "/screenshots/saas-connect-partners.png", caption: "Predict Growth featured among the SaaS.Connect partners as the Investment Readiness Partner." },
        ],
      },
      {
        heading: "At the stall",
        body: "I ran the Predict Growth stall — the 'Pitch for Cash' setup — and spent the day in back-to-back conversations with early-stage founders. The pattern was clear: most had a deck, very few had the underlying readiness investors actually screen for. That gap, between 'I have a pitch' and 'I'm ready to be funded', is exactly what Predict Growth exists to close.",
      },
      {
        heading: "On the Demo Day panel",
        body: "I joined the Demo Day panel to give founders direct, specific feedback on investment readiness and pitch structure — what's missing, what's hand-wavy, and what a real investor would push back on. Less 'great job', more 'here's the question that's going to sink you in the room, and how to answer it'.",
      },
    ],
    highlights: [
      "Hosted the Predict Growth stall and engaged early-stage founders directly",
      "Joined the Demo Day panel, giving feedback on investment readiness and pitch structure",
      "Partnered with Start Insights to support the Tamil Nadu startup ecosystem",
      "Carried Predict Growth's mission into the room: take founders from idea to investor-ready",
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
      "A Women's Day event I hosted for Predict Growth — but built for founders, not just for the occasion. We filled the room with early-stage founders as the audience and put a panel on stage to dig into the thing that actually decides a raise: being investment-ready. I hosted from the mic, keeping the conversation moving between the panel and the founders in the room.",
    sections: [
      {
        heading: "The idea",
        body: "It would have been easy to make this a feel-good Women's Day mixer. We made it useful instead. The whole event was designed around founders — bring them in as the audience, and give them a stage full of people who could answer the questions that keep early founders up at night about money and investors.",
        media: [
          { src: "/screenshots/womens-day-mic.jpg", caption: "Hosting from the mic — keeping the conversation moving between the panel and the founders in the room." },
        ],
      },
      {
        heading: "The panel",
        body: "We curated a panel of investors and operators to go deep on fundraising — what investors actually look for, how to tell a story that's fundable, and the quiet mistakes that kill a round before it starts. The goal was for every founder to leave with a clearer picture of what 'ready' really means.",
      },
      {
        heading: "Hosting it",
        body: "I ran the event from the front — the run of show, the introductions, and the mic on the day. My job was to keep it moving and keep it honest: drawing out concrete answers from the panel and pulling real questions from the founders, so people walked out with things they could act on the next week, not just notes.",
      },
    ],
    highlights: [
      "Hosted the event end to end — from run of show to working the mic on the day",
      "Curated a panel of investors and operators around investment and fundraising",
      "Programmed it for founders: a founder audience with takeaways they could use immediately",
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
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-[11px] font-semibold text-primary">
                  <Icon size={12} /> {event.type}
                </span>
                <h2 className="absolute bottom-3 left-4 right-4 text-white font-display font-bold text-lg leading-snug">
                  {event.title}
                </h2>
              </div>
              <div className="p-5">
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-3">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {event.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="secondary" className="rounded-full text-[11px]">{tag}</Badge>
                    ))}
                  </div>
                  <span className="text-xs font-medium text-primary inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    View event <ArrowRight size={13} />
                  </span>
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

        {/* Detailed sections — blog style */}
        <div className="space-y-10">
          {event.sections.map((section, i) => (
            <Fragment key={i}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-display font-bold text-foreground mb-3">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.body}</p>
              </motion.div>
              {section.media?.map((m, mi) => (
                <EventFigure key={mi} src={m.src} alt={m.caption ?? section.heading} caption={m.caption} className="mt-6" />
              ))}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 border border-border rounded-lg p-6 bg-muted/30">
          <h2 className="text-lg font-display font-bold text-foreground mb-4">Highlights</h2>
          <ul className="space-y-3">
            {event.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 size={16} className="text-primary flex-shrink-0 mt-0.5" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 pt-10 border-t border-border">
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
