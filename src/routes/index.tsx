import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Compass,
  FileText,
  Layers,
  Lightbulb,
  PenLine,
  Sparkles,
  Target,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const WAITLIST_FORM_URL = "https://forms.gle/zBMqzP7ozLRUoHj89";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        {/* <Features /> */}
        <Comparison />
        <MessageSection />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------- NAV ---------------------------- */

function Navbar() {
  const links = [
    { label: "Vision", href: "#vision" },
    { label: "How it Works", href: "#solution" },
    { label: "Features", href: "#features" },
    { label: "Message", href: "#message" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">kodean</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WAITLIST_FORM_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
        >
          Join Waitlist
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div
      className="grid h-7 w-7 place-items-center rounded-lg"
      style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
    >
      <span className="text-[13px] font-bold text-white">K</span>
    </div>
  );
}

/* ---------------------------- HERO ---------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-12 pb-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-16 lg:pb-16">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            AI builds fast.
            Clarity builds to last.
          </div>
          <h1 className="mt-5 font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[52px] lg:text-[62px]">
            Stop shipping <span className="text-gradient">AI-generated code</span> you
            <br />
            can&apos;t explain.
            <br />
          </h1>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            Every developer has copied code they didn't fully understand. It works for now, but when it's time to modify, debug, or explain it, confidence turns into guesswork. <b><i>kodean</i></b> is your AI learning companion, helping you truly understand your code so every project leaves you a more confident engineer.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/60 px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              See the story
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>


        <ExtensionMockup />
      </div>
    </section>
  );
}

function ExtensionMockup() {
  return (
    <div className="relative float-slow">
      <div
        aria-hidden
        className="absolute -inset-8 -z-10 rounded-[36px] opacity-60 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="glass-card overflow-hidden rounded-2xl">
        {/* browser chrome */}
        <div className="flex items-center gap-2 border-b border-border/70 bg-surface/80 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/70" />
          <div className="ml-3 flex-1">
            <div className="mx-auto max-w-[220px] rounded-md border border-border/60 bg-background/70 px-3 py-1 text-center text-[11px] text-muted-foreground font-mono">
              chat.openai.com
            </div>
          </div>
          <div className="inline-flex items-center gap-1 rounded-md border border-border-strong bg-background/70 px-2 py-1 text-[10px] font-medium text-foreground">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--gradient-brand)" }}
            />
            kodean
          </div>
        </div>

        {/* code panel */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[1fr_260px]">
          <div className="border-b border-border/70 bg-background/40 p-5 font-mono text-[12.5px] leading-[1.7] lg:border-b-0 lg:border-r">
            <CodeLine n={1} tokens={[["const ", "text-[#c792ea]"], ["debounce ", "text-[#82aaff]"], ["= (fn, ", "text-foreground/80"], ["ms", "text-[#f78c6c]"], [") => {", "text-foreground/80"]]} />
            <CodeLine n={2} tokens={[["  ", ""], ["let ", "text-[#c792ea]"], ["t;", "text-foreground/80"]]} />
            <CodeLine
              n={3}
              highlighted
              tokens={[["  ", ""], ["return ", "text-[#c792ea]"], ["(...args) => {", "text-foreground/80"]]}
            />
            <CodeLine n={4} highlighted tokens={[["    ", ""], ["clearTimeout", "text-[#82aaff]"], ["(t);", "text-foreground/80"]]} />
            <CodeLine n={5} highlighted tokens={[["    t = ", "text-foreground/80"], ["setTimeout", "text-[#82aaff]"], ["(() => ", "text-foreground/80"], ["fn", "text-[#82aaff]"], ["(...args), ", "text-foreground/80"], ["ms", "text-[#f78c6c]"], [");", "text-foreground/80"]]} />
            <CodeLine n={6} tokens={[["  };", "text-foreground/80"]]} />
            <CodeLine n={7} tokens={[["};", "text-foreground/80"]]} />
          </div>

          {/* explanation sidebar */}
          <div className="space-y-4 p-5">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              <Sparkles className="h-3 w-3 text-accent" />
              Explanation
            </div>
            <p className="text-[13px] leading-relaxed text-foreground/90">
              These lines return a new function that{" "}
              <span className="text-gradient font-medium">cancels the previous timer</span> and
              starts a fresh one — so <span className="font-mono text-accent">fn</span> only runs
              after inputs settle.
            </p>
            <div className="rounded-lg border border-border/70 bg-surface/60 p-3">
              <div className="mb-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Why it exists
              </div>
              <p className="text-[12px] text-foreground/80">
                Prevents expensive work from firing on every keystroke.
              </p>
            </div>
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 py-2 text-[12px] font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Join waitlist
              <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CodeLine({
  n,
  tokens,
  highlighted,
}: {
  n: number;
  tokens: [string, string][];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`-mx-5 flex gap-4 px-5 ${
        highlighted ? "bg-primary/10 border-l-2 border-primary" : "border-l-2 border-transparent"
      }`}
    >
      <span className="w-4 select-none text-right text-muted-foreground/60">{n}</span>
      <div className="whitespace-pre">
        {tokens.map(([t, cls], i) => (
          <span key={i} className={cls || "text-foreground/90"}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------------------- PROBLEM ---------------------------- */

const CONVERSATION_SCENES = [
  {
    otherSpeaker: "Manager",
    otherMessage: "Can you quickly update this function?",
    selfSpeaker: "You",
    selfReply: "Sure...",
    selfRealization: "Wait... I don't actually remember why this works.",
  },
  {
    otherSpeaker: "Interviewer",
    otherMessage: "Can you explain why you chose this approach?",
    selfSpeaker: "You",
    selfReply: "I know it works...",
    selfRealization: "...but I can't explain why.",
  },
  {
    otherSpeaker: "Professor",
    otherMessage: "Walk me through your solution.",
    selfSpeaker: "Student",
    selfReply: "I wrote it last week...",
    selfRealization: "I don't remember the logic anymore.",
  },
  {
    otherSpeaker: "Teammate",
    otherMessage: "Can we extend this feature?",
    selfSpeaker: "You",
    selfReply: "We can...",
    selfRealization: "First I need to understand this part again.",
  },
] as const;

function Problem() {
  return (
    <section id="vision" className="relative border-t border-border/60 py-16 lg:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>A Familiar Feeling</SectionEyebrow>
        <h2 className="mt-5 max-w-3xl font-display text-[40px] font-semibold leading-[1.02] tracking-tight sm:text-[52px] lg:text-[56px]">
          Fast shipping feels good.
          <br />
          <span className="text-muted-foreground">Not understanding it doesn't.</span>
        </h2>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
          The hardest bugs aren't always in the code. Sometimes they're in the parts you never truly understood. That confidence gap grows with every feature you ship.
        </p>

        <div className="mt-12">
          <ConversationCard />
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center font-display text-xl leading-snug text-foreground/90 sm:text-2xl">
          &quot;Understanding your code shouldn&apos;t begin <u>when someone asks you about it.</u>&quot;
        </p>
      </div>
    </section>
  );
}

function ConversationCard() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const scene = CONVERSATION_SCENES[sceneIndex];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setSceneIndex((current) => (current + 1) % CONVERSATION_SCENES.length);
        setVisible(true);
      }, 320);
    }, 5500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="glass-card mx-auto max-w-2xl overflow-hidden rounded-2xl">
      <div className="flex items-center gap-2 border-b border-border/70 bg-surface/80 px-5 py-3">
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
        <span className="ml-2 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          Messages
        </span>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div className="max-w-[85%]">
          <div
            className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
          >
            <div className="mb-1.5 text-[11px] font-medium text-muted-foreground">
              {scene.otherSpeaker}
            </div>
            <div className="min-h-[52px] rounded-2xl rounded-tl-md border border-border/70 bg-surface/60 px-4 py-3 text-sm leading-relaxed text-foreground/90">
              {scene.otherMessage}
            </div>
          </div>
        </div>

        <div className="ml-auto max-w-[85%]">
          <div
            className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={{ transitionDelay: visible ? "40ms" : "0ms" }}
          >
            <div className="mb-1.5 text-right text-[11px] font-medium text-muted-foreground">
              {scene.selfSpeaker}
            </div>
            <div className="min-h-[44px] rounded-2xl rounded-tr-md border border-border/70 bg-surface-2/80 px-4 py-3 text-sm leading-relaxed text-foreground/90">
              {scene.selfReply}
            </div>
          </div>
        </div>

        <div className="ml-auto max-w-[85%]">
          <div
            className={`flex justify-end transition-opacity duration-300 ease-out motion-reduce:transition-none ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: visible ? "80ms" : "0ms" }}
          >
            <TypingIndicator />
          </div>
        </div>

        <div className="ml-auto max-w-[85%]">
          <div
            className={`transition-all duration-300 ease-out motion-reduce:transition-none ${
              visible ? "translate-y-0 opacity-100" : "translate-y-1 opacity-0"
            }`}
            style={{ transitionDelay: visible ? "120ms" : "0ms" }}
          >
            <div className="mb-1.5 text-right text-[11px] font-medium text-muted-foreground">
              {scene.selfSpeaker}
            </div>
            <div className="min-h-[52px] rounded-2xl rounded-tr-md border border-border/70 bg-surface-2/80 px-4 py-3 text-sm leading-relaxed text-muted-foreground">
              {scene.selfRealization}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 bg-surface/50 px-3 py-1.5 text-[12px] text-muted-foreground/80">
      (typing
      <span aria-hidden className="inline-block w-[1.1em] text-left">
        ...
      </span>
      )
    </span>
  );
}

/* ---------------------------- SOLUTION ---------------------------- */

function Solution() {
  const journey = [
    {
      title: "Start with curiosity",
      desc: "Instead of moving on, pause for a moment and ask, Why does this work?",
      icon: Brain,
    },
    {
      title: "Understand the reasoning",
      desc: "Learn what each line is doing, why it exists, and how it fits into the bigger picture.",
      icon: BookOpen,
    },
    {
      title: "Connect the ideas",
      desc: "Turn unfamiliar syntax into concepts you'll recognize the next time you see them.",
      icon: Lightbulb,
    },
    {
      title: "Learn from mistakes",
      desc: "Discover the common pitfalls before they become bugs in your own code.",
      icon: Target,
    },
    {
      title: "Practice what you learned",
      desc: "Answer a few quick questions to check that you've understood the idea, not just read it.",
      icon: FileText,
    },
    {
      title: "Keep growing",
      desc: "Leave every explanation knowing a little more than before, and let those small wins compound into lasting confidence.",
      icon: Layers,
    },
  ];
  return (
    <section id="solution" className="relative border-t border-border/60 py-16 lg:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>The Learning Journey</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Every explanation leaves you 
          <br className="hidden sm:block" /> knowing a little more than before.
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          Learning doesn't happen all at once. It happens one snippet, one question, and one moment of understanding at a time.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4">
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {journey.map((step, i) => (
              <li
                key={step.title}
                className={`glass-card group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-border-strong ${
                  i % 2 !== 0 ? "lg:translate-y-8" : ""
                }`}
              >
                <div
                  aria-hidden
                  className="absolute -right-16 -top-16 h-36 w-36 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
                  style={{ background: "var(--gradient-brand)" }}
                />
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-primary-foreground"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <step.icon className="h-4 w-4" />
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-2 flex justify-center">
            <a
              href={WAITLIST_FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2"
            >
              Start learning with <i><b>kodean</b></i>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FEATURES ---------------------------- */

// function Features() {
//   const features = [
//     {
//       icon: BookOpen,
//       title: "See the logic",
//       desc: "Understand each line so you can reason before you refactor.",
//       accent: "oklch(0.72 0.17 250)",
//     },
//     {
//       icon: Lightbulb,
//       title: "Know the why",
//       desc: "Learn tradeoffs, assumptions, and intent behind the snippet.",
//       accent: "oklch(0.78 0.16 85)",
//     },
//     {
//       icon: Compass,
//       title: "Think in context",
//       desc: "Connect generated code to your architecture and constraints.",
//       accent: "oklch(0.70 0.18 165)",
//     },
//     {
//       icon: Target,
//       title: "Practice actively",
//       desc: "Quick checks verify understanding before confidence is assumed.",
//       accent: "oklch(0.66 0.19 275)",
//     },
//     {
//       icon: PenLine,
//       title: "Capture patterns",
//       desc: "Save reusable ideas you can apply in future decisions.",
//       accent: "oklch(0.68 0.19 340)",
//     },
//     {
//       icon: Brain,
//       title: "Remember longer",
//       desc: "Turn one-off explanations into lasting engineering knowledge.",
//       accent: "oklch(0.72 0.17 30)",
//     },
//   ];
//   return (
//     <section id="features" className="border-t border-border/60 py-16 lg:py-18">
//       <div className="mx-auto max-w-6xl px-6">
//         <SectionEyebrow>Outcomes</SectionEyebrow>
//         <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
//           Learn faster, forget less, build with confidence.
//         </h2>
//         <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((f) => (
//             <div
//               key={f.title}
//                 className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:bg-surface/70"
//             >
//               <div
//                 aria-hidden
//                 className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
//                 style={{ background: f.accent }}
//               />
//               <div
//                 className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
//                 style={{
//                   background: `linear-gradient(135deg, ${f.accent}, oklch(0.55 0.18 275))`,
//                   boxShadow: `0 8px 24px -12px ${f.accent}`,
//                 }}
//               >
//                 <f.icon className="h-4.5 w-4.5" strokeWidth={2} />
//               </div>
//               <h3 className="text-[18px] font-semibold text-foreground">
//                 {f.title}
//               </h3>
//               <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
//                 {f.desc}
//               </p>
//               <div className="mt-5 flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
//                 Learn more
//                 <ArrowRight className="h-3.5 w-3.5" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ---------------------------- COMPARISON ---------------------------- */

function Comparison() {
  const traditional = ["You find or generate code that solves it", "You adjust it until it runs", "You move on once it works", "Some parts still feel unclear"];
  const kodean = [
    "Highlight the code you want to understand",
    "Get a structured explanation in plain language",
    "Explore why it works, not just what it does",
    "Leave the snippet knowing more than when you found it",
  ];
  return (
    <section className="border-t border-border/60 py-16 lg:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Why <i><b>kodean</b></i>?</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          AI helps you move faster.
          <br />
          <i>kodean</i> helps you understand as you go.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              A FAMILIAR WAY OF WORKING
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-foreground">
              Working code.
Missing context.
            </div>
            <ul className="mt-6 space-y-3">
              {traditional.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-border-strong">
                    <X className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-card relative overflow-hidden rounded-2xl p-8"
            style={{ borderColor: "oklch(0.66 0.19 275 / 0.4)" }}
          >
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="text-xs font-medium uppercase tracking-wider text-accent">
              WITH <i><b>kodean</b></i>
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-foreground">
              Understanding happens as you build
            </div>
            <ul className="mt-6 space-y-3">
              {kodean.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full text-primary-foreground"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- MESSAGE ---------------------------- */

function MessageSection() {
  return (
    <section id="message" className="border-t border-border/60 py-16 lg:py-18">
      <div className="mx-auto max-w-6xl px-6">
        <div className="glass-card relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <div
            aria-hidden
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-35 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <SectionEyebrow center>Brand Message</SectionEyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Every line has a reason.
            <br />
            kodean helps you discover it.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
            Understand. Think. Remember. Grow. The future belongs to engineers
            who can explain their systems, not only ship them.
          </p>
          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            Join waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------- WAITLIST ---------------------------- */

function Waitlist() {
  return (
    <section id="waitlist" className="border-t border-border/60 py-16 lg:py-18">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionEyebrow center>Early Access</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Understand your code before production teaches you.
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground">
            Join developers choosing understanding over dependency.
          </p>
        </div>

        <div className="glass-card mt-10 rounded-2xl p-8 text-center sm:p-10">
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground">
            Click below to join the waitlist. We&apos;ll share launch updates and
            early access details.
          </p>
          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01]"
            style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
          >
            Join Waitlist
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FOOTER ---------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight">kodean</span>
        </div>
        <p className="text-center text-sm text-muted-foreground sm:text-right">
          Understanding is the ultimate developer tool.
        </p>
      </div>
    </footer>
  );
}

/* ---------------------------- UI HELPERS ---------------------------- */

function SectionEyebrow({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground ${
        center ? "mx-auto" : ""
      }`}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: "var(--gradient-brand)" }}
      />
      {children}
    </div>
  );
}
