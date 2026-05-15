"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Shield,
  Lock,
  Globe,
  Server,
  ArrowRight,
  Mail,
  Check,
  ChevronDown,
  Users,
  Brain,
  Calendar,
  MessageCircle,
  Menu,
  X,
  SendHorizonal,
} from "lucide-react";

const heroVariants = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.75,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

function SignupForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/aidy-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "template" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl px-6 py-4">
        <Check className="w-4 h-4 text-[#22C55E]" />
        <p className="text-white text-sm font-[family-name:var(--font-space-grotesk)]">
          Thanks! We&apos;ll reach out at {email}.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-0 w-full max-w-lg">
      <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-l-xl h-12 px-4 flex-1">
        <Mail className="w-4 h-4 text-[#7A7A7A]" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="bg-transparent text-white text-sm font-[family-name:var(--font-space-grotesk)] placeholder:text-[#7A7A7A] outline-none flex-1"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-[#E42313] text-white text-sm font-medium font-[family-name:var(--font-space-grotesk)] h-12 px-6 flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors hover:bg-[#c91f10] shrink-0 rounded-r-xl"
      >
        {loading ? "..." : "Get started"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      {error && <p className="text-[#E42313] text-sm mt-1">{error}</p>}
    </form>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl bg-[#FAFAFA] mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
      >
        <span className="text-[#0D0D0D] text-sm font-medium font-[family-name:var(--font-space-grotesk)]">
          {q}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-[#B0B0B0] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-[#7A7A7A] text-sm leading-relaxed px-6 pb-5 font-[family-name:var(--font-inter)]">
          {a}
        </p>
      )}
    </div>
  );
}

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Security", href: "#security" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

function ScrollHeader({ font }: { font: string }) {
  const [menuState, setMenuState] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={font}>
      <nav
        data-state={menuState ? "active" : undefined}
        className="fixed group z-50 w-full px-2"
      >
        <div
          className={`mx-auto mt-2 max-w-[1280px] px-6 transition-all duration-300 lg:px-12 ${
            scrolled
              ? "max-w-4xl rounded-2xl border border-[#E8E8E8] bg-white/50 backdrop-blur-lg px-5 shadow-sm shadow-black/5 lg:px-5"
              : ""
          }`}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <span className="text-[#0D0D0D] text-lg font-semibold tracking-tight">
                Aidy
              </span>
              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-[#7A7A7A] hover:text-[#0D0D0D] block duration-150"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border border-[#E8E8E8] p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-[#7A7A7A] hover:text-[#0D0D0D] block duration-150"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <a
                  href="#"
                  className={`text-[#7A7A7A] text-sm font-medium h-9 px-4 flex items-center justify-center border border-[#E8E8E8] rounded-xl hover:bg-[#FAFAFA] transition-colors ${
                    scrolled ? "lg:hidden" : ""
                  }`}
                >
                  Sign in
                </a>
                <a
                  href="#signup"
                  className={`bg-[#E42313] text-white text-sm font-medium h-9 px-5 flex items-center justify-center rounded-xl hover:bg-[#c91f10] transition-colors ${
                    scrolled ? "lg:hidden" : ""
                  }`}
                >
                  Get started
                </a>
                <a
                  href="#signup"
                  className={`bg-[#E42313] text-white text-sm font-medium h-9 px-5 items-center justify-center rounded-xl hover:bg-[#c91f10] transition-colors hidden ${
                    scrolled ? "lg:inline-flex" : ""
                  }`}
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function AidyChatPreview({ fontBody }: { fontBody: string }) {
  return (
    <div className="relative space-y-3 rounded-[1rem] bg-[#FAFAFA] p-4">
      <div className="flex items-center gap-1.5 text-[#E42313]">
        <MessageCircle className="size-5" />
        <div className="text-sm font-medium">Recent chats</div>
      </div>
      <div className="space-y-3">
        <div className={`text-[#0D0D0D] border-b border-[#E8E8E8] pb-3 text-sm font-medium ${fontBody}`}>
          Aidy handled 12 messages today across 3 channels.
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-[#0D0D0D] align-baseline text-xl font-medium">
                47
              </span>
              <span className="text-[#7A7A7A] text-xs">Messages/day</span>
            </div>
            <div className="flex h-5 items-center rounded-lg bg-gradient-to-l from-[#E42313] to-[#ff6b5e] px-2 text-xs text-white">
              This week
            </div>
          </div>
          <div className="space-y-1">
            <div className="space-x-1">
              <span className="text-[#0D0D0D] align-baseline text-xl font-medium">
                23
              </span>
              <span className="text-[#7A7A7A] text-xs">Messages/day</span>
            </div>
            <div className="text-[#7A7A7A] bg-[#F0F0F0] flex h-5 w-2/3 items-center rounded-lg px-2 text-xs">
              Last week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplatePage() {
  const font = "font-[family-name:var(--font-space-grotesk)]";
  const fontBody = "font-[family-name:var(--font-inter)]";

  return (
    <div className={`min-h-screen bg-white ${font}`}>
      {/* Header */}
      <ScrollHeader font={font} />

      {/* Hero */}
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <AnimatedGroup variants={heroVariants}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E42313] animate-pulse" />
                <span className="text-[#E42313] text-xs font-semibold tracking-widest uppercase">
                  Enterprise grade security
                </span>
              </div>

              <h1 className="text-balance text-[#0D0D0D] text-4xl font-medium sm:text-5xl md:text-6xl lg:text-[72px] tracking-[-2px] leading-[1.05]">
                Your personal AI agent in the cloud
              </h1>

              <p className={`mx-auto mt-6 max-w-2xl text-pretty text-lg text-[#7A7A7A] leading-relaxed ${fontBody}`}>
                Secure, private AI bot hosting for individuals and teams. Every
                user gets their own isolated bot.
              </p>

              <form
                action=""
                className="mt-12 mx-auto max-w-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="bg-white has-[input:focus]:ring-[#E8E8E8] relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border border-[#E8E8E8] shadow shadow-black/5 has-[input:focus]:ring-2">
                  <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4 text-[#B0B0B0]" />
                  <input
                    placeholder="Your mail address"
                    className={`h-12 w-full bg-transparent pl-12 focus:outline-none text-sm text-[#0D0D0D] placeholder:text-[#B0B0B0] ${fontBody}`}
                    type="email"
                  />
                  <div>
                    <a
                      href="#signup"
                      className="bg-[#E42313] text-white text-sm font-medium h-9 px-4 inline-flex items-center gap-2 rounded-[0.5rem] hover:bg-[#c91f10] transition-colors"
                    >
                      <span className="hidden md:block">Get Started</span>
                      <SendHorizonal
                        className="relative mx-auto size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </a>
                  </div>
                </div>
              </form>

              <div
                aria-hidden
                className="relative mx-auto mt-32 max-w-2xl text-left"
              >
                <div className="bg-white border-[#E8E8E8]/50 absolute inset-0 mx-auto w-80 -translate-x-3 -translate-y-12 rounded-[2rem] border p-2 [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:-translate-x-6">
                  <div className="relative h-96 overflow-hidden rounded-[1.5rem] border border-[#E8E8E8] p-2 pb-12 before:absolute before:inset-0 before:bg-[repeating-linear-gradient(-45deg,#E8E8E8,#E8E8E8_1px,transparent_1px,transparent_6px)] before:opacity-50" />
                </div>
                <div className="bg-[#FAFAFA] border-[#E8E8E8]/50 mx-auto w-80 translate-x-4 rounded-[2rem] border p-2 backdrop-blur-3xl [mask-image:linear-gradient(to_bottom,#000_50%,transparent_90%)] sm:translate-x-8">
                  <div className="bg-white space-y-2 overflow-hidden rounded-[1.5rem] border border-[#E8E8E8] p-2 shadow-xl">
                    <AidyChatPreview fontBody={fontBody} />
                    <div className="bg-[#FAFAFA] rounded-[1rem] p-4 pb-16" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mix-blend-overlay [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
              </div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Trust badges */}
        <div className={`flex items-center justify-center gap-6 text-[#B0B0B0] text-xs pb-16 ${fontBody}`}>
          <span className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            Built and hosted in Europe
          </span>
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            Secure infrastructure
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            Designed for privacy
          </span>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-14">
            Up and running in minutes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                title: "Sign up",
                desc: "Create your account and tell Aidy your name. Your personal bot is ready in seconds.",
              },
              {
                step: "2",
                title: "Your bot is provisioned",
                desc: "Aidy spins up a private, isolated environment just for you. Enterprise-grade security from day one.",
              },
              {
                step: "3",
                title: "Connect your channels",
                desc: "Link Gmail, WhatsApp, Telegram, Discord and more. Aidy works where you already are.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-xl shadow-sm shadow-black/5 p-8 bg-white">
                <div className="w-10 h-10 bg-[#E42313] text-white flex items-center justify-center text-sm font-semibold mb-6 rounded-lg">
                  {s.step}
                </div>
                <h3 className="text-[#0D0D0D] text-base font-semibold mb-2">
                  {s.title}
                </h3>
                <p className={`text-[#7A7A7A] text-sm leading-relaxed ${fontBody}`}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features — Bento Grid */}
      <section id="features" className="bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            What Aidy can do for you
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            A personal AI agent that connects to your tools and works the way
            you do.
          </p>

          <BentoGrid className="lg:grid-rows-3">
            {/* Chat — tall left card with mock chat UI */}
            <BentoCard
              name="Your personal AI, always ready"
              description="Chat in real time with your own private bot. It remembers context and gets smarter over time."
              Icon={MessageCircle}
              href="#signup"
              cta="Try it free"
              className="lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2"
              background={
                <div className="absolute right-4 top-4 w-[220px] rounded-xl overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100 shadow-sm shadow-black/10">
                  <div className="bg-[#0D0D0D] px-3 py-1.5 flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-[#E42313] flex items-center justify-center">
                      <span className="text-white text-[7px] font-bold">A</span>
                    </div>
                    <span className="text-white text-[10px] font-medium">Aidy</span>
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  </div>
                  <div className="p-2 space-y-1.5 bg-white">
                    <div className="bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <p className={`text-[#0D0D0D] text-[10px] leading-snug ${fontBody}`}>
                        Good morning! You have 3 unread emails and a meeting at 2pm.
                      </p>
                    </div>
                    <div className="bg-[#E42313] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[70%] ml-auto">
                      <p className="text-white text-[10px] leading-snug">Summarize the emails</p>
                    </div>
                    <div className="bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      <p className={`text-[#0D0D0D] text-[10px] leading-snug ${fontBody}`}>
                        Done! Here&apos;s your summary...
                      </p>
                    </div>
                  </div>
                </div>
              }
            />

            {/* Personality — top center */}
            <BentoCard
              name="Make it yours"
              description="Shape your bot's personality to match your style."
              Icon={Brain}
              href="#signup"
              cta="Get started"
              className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
              background={
                <div className="absolute right-4 top-4 flex gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                  {["Friendly", "Professional", "Playful"].map((t) => (
                    <span
                      key={t}
                      className="text-[#0D0D0D] text-[10px] font-medium bg-white shadow-sm shadow-black/5 rounded-lg px-2.5 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              }
            />

            {/* Teams — bottom center */}
            <BentoCard
              name="Built for teams"
              description="Everyone gets their own isolated bot. Invite members, manage access."
              Icon={Users}
              href="#pricing"
              cta="View plans"
              className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
              background={<div />}
            />

            {/* Calendar — top right */}
            <BentoCard
              name="Your schedule, sorted"
              description="Views your calendar and helps manage events."
              Icon={Calendar}
              href="#signup"
              cta="Connect calendar"
              className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2"
              background={<div />}
            />

            {/* Adaptive reasoning — bottom right tall */}
            <BentoCard
              name="Adaptive reasoning"
              description="Use standard reasoning for speed. Switch to advanced for complex tasks."
              Icon={Brain}
              href="#signup"
              cta="Learn more"
              className="lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-4"
              background={<div />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Security */}
      <section id="security" className="bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Built for security
          </p>
          <h2 className="text-white text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Your data stays yours
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            Every bot runs in complete isolation. No shared resources, no data
            mixing, no compromises.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Complete isolation",
                desc: "Each user's bot runs in its own secure sandbox. Your data never touches anyone else's infrastructure.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "AI with standards",
                desc: "Aidy runs on EU infrastructure and is built with strict privacy standards in mind.",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Encryption everywhere",
                desc: "All data encrypted at rest and in transit. Your API keys and secrets are protected with industry-standard encryption.",
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: "Network security",
                desc: "Default-deny network policies. Your bot only connects to services you explicitly allow.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-[#1a1a1a] rounded-xl"
              >
                <div className="w-10 h-10 bg-[#252525] flex items-center justify-center text-[#E42313] mb-4 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">
                  {item.title}
                </h3>
                <p className={`text-[#7A7A7A] text-xs leading-relaxed ${fontBody}`}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#signup"
              className="text-[#E42313] text-sm font-medium inline-flex items-center gap-2 hover:underline"
            >
              Get started for free
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p className="text-[#E42313] text-xs font-semibold tracking-widest uppercase mb-3">
            Pricing
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Plans for everyone
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            From individuals to enterprises. Everyone gets their own private
            bot.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
              <p className="text-[#7A7A7A] text-xs mb-1">For personal projects</p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">Free</h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                $0
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Personal bot
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Pay-as-you-go
                  credits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Community support
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Get started
              </a>
            </div>

            {/* Pro */}
            <div className="p-8 rounded-xl shadow-md shadow-black/10 bg-white ring-2 ring-[#E42313]/10 relative">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[#7A7A7A] text-xs">For growing teams</p>
                <span className="text-[#E42313] text-xs font-semibold bg-[#E42313]/10 rounded-full px-3 py-0.5">
                  Most popular
                </span>
              </div>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">Pro</h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                $9<span className="text-[#B0B0B0] text-base font-normal">/mo</span>
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Everything in Free
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Up to 10 members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Individual bots per
                  member
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#E42313]" /> Custom domains
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center bg-[#E42313] text-white text-sm font-medium py-3 hover:bg-[#c91f10] transition-colors rounded-xl"
              >
                Get started
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
              <p className="text-[#7A7A7A] text-xs mb-1">For large organizations</p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">
                Enterprise
              </h3>
              <p className="text-[#0D0D0D] text-2xl font-semibold mb-8">
                Contact us
              </p>
              <ul className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Unlimited members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Volume discounts
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> SSO / SAML
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Custom SLA
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="max-w-[800px] mx-auto px-10 py-24">
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-10">
            Got questions?
          </h2>
          <FAQItem
            q="What is Aidy?"
            a="Aidy is your personal AI agent in the cloud. It connects to your tools, manages your schedule, and handles communication — all from a secure, isolated environment."
          />
          <FAQItem
            q="How does it work?"
            a="Sign up, and Aidy provisions a private bot just for you. Connect your channels (Gmail, WhatsApp, Telegram) and Aidy starts working immediately."
          />
          <FAQItem
            q="Is there a free plan?"
            a="Yes. The free plan includes a personal bot with pay-as-you-go credits and community support. No credit card required."
          />
          <FAQItem
            q="How do credits work?"
            a="Credits are consumed based on usage — messages processed, integrations used, and reasoning complexity. Standard reasoning uses fewer credits than advanced."
          />
          <FAQItem
            q="Where is my data stored?"
            a="All data is stored and processed in Europe on EU infrastructure. Each user gets complete data isolation. No shared resources."
          />
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="relative bg-[#0D0D0D] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-[1280px] mx-auto px-10 py-24">
          <div className="max-w-xl">
            <h2 className="text-white text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-3">
              Ready to get started?
            </h2>
            <p className={`text-[#7A7A7A] text-base mb-8 ${fontBody}`}>
              Start free. No credit card required. Upgrade any time.
            </p>
            <SignupForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[60px] px-10">
          <div className="flex items-center gap-6">
            <span className="text-[#0D0D0D] text-sm font-semibold">Aidy</span>
            <div className={`flex items-center gap-4 text-[#7A7A7A] text-xs ${fontBody}`}>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#0D0D0D] transition-colors">
                Support
              </Link>
            </div>
          </div>
          <span className={`text-[#B0B0B0] text-xs ${fontBody}`}>
            &copy; 2026 StarApps BV
          </span>
        </div>
      </footer>
    </div>
  );
}
