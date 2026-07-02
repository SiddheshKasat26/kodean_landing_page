import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  Code2,
  Compass,
  FileText,
  Layers,
  Lightbulb,
  Sparkles,
  Target,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Toaster theme="dark" position="top-center" />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Comparison />
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
    { label: "Waitlist", href: "#waitlist" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <LogoMark />
          <span className="text-[15px] font-semibold tracking-tight">KODEAN</span>
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
          href="#waitlist"
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-20 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            An AI mentor, not another AI generator
          </div>
          <h1 className="mt-6 font-display text-[44px] font-semibold leading-[1.05] tracking-tight sm:text-[56px] lg:text-[64px]">
            Understand every line of{" "}
            <span className="text-gradient">AI-generated code.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
            AI can generate code in seconds. Understanding it takes much longer.
            KODEAN helps developers build real understanding and confidence —
            instead of blindly copying code.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#waitlist"
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
              See Vision
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
    <div className="relative">
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
            KODEAN
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
            <button className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-border-strong bg-surface px-3 py-2 text-[12px] font-medium text-foreground transition-colors hover:bg-surface-2">
              Confidence check
              <ArrowRight className="h-3 w-3" />
            </button>
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

function Problem() {
  const steps = [
    { label: "AI", desc: "Generates code", icon: Sparkles },
    { label: "Copy", desc: "Ctrl + C", icon: Layers },
    { label: "Paste", desc: "Ship it", icon: Code2 },
  ];
  return (
    <section id="vision" className="relative border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>The Problem</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          AI is making developers faster.
          <br />
          <span className="text-muted-foreground">Not necessarily better.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          The default workflow with AI is copy, paste, and move on. Days later,
          nobody remembers why the code works — or what would break if it changed.
        </p>

        <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {steps.map((s, i) => (
            <div key={s.label} className="flex flex-1 items-center gap-3">
              <div className="glass-card relative flex-1 rounded-2xl p-5">
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-strong bg-surface-2 text-foreground">
                  <s.icon className="h-4 w-4" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </div>
                <div className="mt-1 text-base font-semibold text-foreground">
                  {s.label}
                </div>
                <div className="text-xs text-muted-foreground">{s.desc}</div>
              </div>
              <ChevronRight className="hidden h-5 w-5 shrink-0 text-muted-foreground/50 lg:block" />
            </div>
          ))}

          {/* Distinct "Forget" card */}
          <div
            className="relative flex-1 overflow-hidden rounded-2xl p-5"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.65 0.22 25 / 0.10), oklch(0.65 0.22 25 / 0.02))",
              border: "1px solid oklch(0.65 0.22 25 / 0.35)",
              boxShadow: "0 20px 60px -30px oklch(0.65 0.22 25 / 0.5)",
            }}
          >
            <div
              aria-hidden
              className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-30 blur-3xl"
              style={{ background: "oklch(0.65 0.22 25 / 0.6)" }}
            />
            <div
              className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-white"
              style={{ background: "oklch(0.65 0.22 25 / 0.85)" }}
            >
              <X className="h-4 w-4" />
            </div>
            <div className="text-[11px] uppercase tracking-wider text-destructive/80">
              Two weeks later
            </div>
            <div className="mt-1 text-base font-semibold text-foreground">
              Forget
            </div>
            <div className="text-xs text-muted-foreground">
              Why does this even work?
            </div>
          </div>
        </div>

        <blockquote className="glass-card mx-auto mt-12 max-w-2xl rounded-2xl p-6 text-center">
          <p className="font-display text-lg leading-snug text-foreground sm:text-xl">
            "I shipped this last month. I have no idea why it works."
          </p>
          <div className="mt-2 text-xs text-muted-foreground">
            — every developer who's been honest, at least once
          </div>
        </blockquote>
      </div>
    </section>
  );
}

/* ---------------------------- SOLUTION ---------------------------- */

function Solution() {
  const flow = [
    {
      title: "Highlight",
      desc: "Select any snippet of AI-generated code — right where you found it.",
      icon: Layers,
    },
    {
      title: "Explain",
      desc: "Get a precise, line-by-line explanation in plain language.",
      icon: BookOpen,
    },
    {
      title: "Understand",
      desc: "Learn the why behind the code — patterns, tradeoffs, and context.",
      icon: Lightbulb,
    },
    {
      title: "Practice",
      desc: "Short, targeted questions turn passive reading into active recall.",
      icon: Target,
    },
    {
      title: "Remember",
      desc: "Save concepts to your notes and revisit them on the right cadence.",
      icon: FileText,
    },
    {
      title: "Confidence",
      desc: "Ship code you can actually explain, defend, and change later.",
      icon: Check,
    },
  ];
  const [active, setActive] = useState(0);
  const current = flow[active];
  return (
    <section id="solution" className="relative border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>The Solution</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Meet KODEAN.
          <br />
          <span className="text-gradient">The learning layer for AI development.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
          A single, focused workflow that turns any AI-generated snippet into
          durable understanding.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-[280px_1fr]">
          <ol className="glass-card flex flex-col rounded-2xl p-2">
            {flow.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.title}>
                  <button
                    onClick={() => setActive(i)}
                    className={`group relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors ${
                      isActive
                        ? "bg-surface-2 text-foreground"
                        : "text-muted-foreground hover:bg-surface/60 hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`grid h-7 w-7 shrink-0 place-items-center rounded-md font-mono text-[11px] ${
                        isActive
                          ? "text-primary-foreground"
                          : "border border-border-strong bg-background text-muted-foreground"
                      }`}
                      style={
                        isActive ? { background: "var(--gradient-brand)" } : undefined
                      }
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm font-medium">{step.title}</span>
                    {isActive && (
                      <ChevronRight className="ml-auto h-4 w-4 text-foreground/80" />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="glass-card relative overflow-hidden rounded-2xl p-8">
            <div
              aria-hidden
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />
            <div className="flex items-center gap-3">
              <div
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <current.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Step {active + 1} of {flow.length}
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  {current.title}
                </h3>
              </div>
            </div>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground/90">
              {current.desc}
            </p>

            <div className="mt-8 flex items-center gap-1.5">
              {flow.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to step ${i + 1}`}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    i <= active ? "" : "bg-border"
                  }`}
                  style={
                    i <= active ? { background: "var(--gradient-brand)" } : undefined
                  }
                />
              ))}
            </div>

            <div className="mt-4 flex justify-between text-[11px] font-mono text-muted-foreground">
              <button
                onClick={() => setActive((a) => Math.max(0, a - 1))}
                disabled={active === 0}
                className="disabled:opacity-40"
              >
                ← Prev
              </button>
              <button
                onClick={() => setActive((a) => Math.min(flow.length - 1, a + 1))}
                disabled={active === flow.length - 1}
                className="disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FEATURES ---------------------------- */

function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Explain",
      desc: "Understand what every line does — in plain, precise language.",
      accent: "oklch(0.72 0.17 250)",
    },
    {
      icon: Lightbulb,
      title: "Why",
      desc: "Learn why the code exists, not just what it says.",
      accent: "oklch(0.78 0.16 85)",
    },
    {
      icon: Compass,
      title: "Project context",
      desc: "See why this implementation fits this specific project.",
      accent: "oklch(0.70 0.18 165)",
    },
    {
      icon: Target,
      title: "Confidence check",
      desc: "Test yourself after learning with short, targeted questions.",
      accent: "oklch(0.66 0.19 275)",
    },
    {
      icon: FileText,
      title: "Notes",
      desc: "Save concepts to your personal knowledge base for future revision.",
      accent: "oklch(0.68 0.19 340)",
    },
    {
      icon: Brain,
      title: "Long-term recall",
      desc: "Revisit ideas on the right cadence so they actually stick.",
      accent: "oklch(0.72 0.17 30)",
    },
  ];
  return (
    <section id="features" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Features</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          A focused toolkit for real understanding.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40 p-6 transition-all hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface/70"
            >
              <div
                aria-hidden
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
                style={{ background: f.accent }}
              />
              <div
                className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
                style={{
                  background: `linear-gradient(135deg, ${f.accent}, oklch(0.55 0.18 275))`,
                  boxShadow: `0 8px 24px -12px ${f.accent}`,
                }}
              >
                <f.icon className="h-4.5 w-4.5" strokeWidth={2} />
              </div>
              <h3 className="text-[17px] font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-[12px] font-medium text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- COMPARISON ---------------------------- */

function Comparison() {
  const traditional = ["Generates code", "Answers questions", "Moves on"];
  const kodean = [
    "Teaches code",
    "Builds understanding",
    "Builds confidence",
    "Creates long-term knowledge",
  ];
  return (
    <section className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Why KODEAN</SectionEyebrow>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          AI writes code. KODEAN teaches it.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-8">
            <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Traditional AI
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-foreground">
              Generate & move on
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
              KODEAN
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-foreground">
              Learn as you build
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


/* ---------------------------- WAITLIST ---------------------------- */

function Waitlist() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("email")) return;
    setLoading(true);

    const GFORM_URL =
      "https://docs.google.com/forms/d/e/1FAIpQLSelvCoYi2TDxhg9cJ2S22zHxfjIc0lsdvhZJZHveyj6_xmSfg/formResponse";
    const payload = new FormData();
    payload.append("entry.1024178277", String(data.get("name") ?? ""));
    payload.append("entry.97894596", String(data.get("email") ?? ""));
    payload.append("entry.2144566332", String(data.get("challenge") ?? ""));

    try {
      await fetch(GFORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: payload,
      });
      setDone(true);
      toast.success("You're on the list. We'll be in touch soon.");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }


  return (
    <section id="waitlist" className="border-t border-border/60 py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <SectionEyebrow center>Early Access</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Join Early Access.
          </h2>
          <p className="mt-4 text-[17px] text-muted-foreground">
            Be among the first developers to try KODEAN. No spam — just launch updates.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="glass-card mt-12 rounded-2xl p-6 sm:p-8"
        >
          {done ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <div
                className="grid h-12 w-12 place-items-center rounded-full text-primary-foreground"
                style={{ background: "var(--gradient-brand)" }}
              >
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-semibold">You're on the list.</h3>
              <p className="text-sm text-muted-foreground">
                We'll email you as soon as early access opens.
              </p>
            </div>
          ) : (
            <div className="grid gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Ada Lovelace" />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                  required
                />
              </div>
              <label className="grid gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  What's the biggest challenge you face when learning AI-generated code?
                </span>
                <textarea
                  name="challenge"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border-strong bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="I paste it and it works — until it doesn't…"
                />
              </label>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-70"
                style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-glow)" }}
              >
                {loading ? "Joining…" : "Join Waitlist"}
                {!loading && <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border-strong bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
      />
    </label>
  );
}

/* ---------------------------- FOOTER ---------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <LogoMark />
          <span className="text-sm font-semibold tracking-tight">KODEAN</span>
        </div>
        <p className="text-center text-sm text-muted-foreground sm:text-right">
          Built for developers who believe AI should teach, not just generate.
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
