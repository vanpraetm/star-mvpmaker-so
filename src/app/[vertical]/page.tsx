"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { AnimatedGroup } from "@/components/ui/animated-group";
import {
  Activity,
  Stethoscope,
  Scale,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  Clock,
  Users,
  ArrowRight,
  Mail,
  Check,
  Lock,
  Globe,
  Server,
  ChevronDown,
  Menu,
  X,
  SendHorizonal,
  Brain,
  Calculator,
  Smile,
  FileText,
} from "lucide-react";
import type { ReactNode } from "react";
import { verticals } from "../verticals";

/* ─── Icon map ─── */
const iconMap: Record<string, React.ElementType> = {
  Activity,
  Stethoscope,
  Scale,
  Building2,
  Calendar,
  MessageSquare,
  Shield,
  Clock,
  Users,
  Brain,
  Calculator,
  Smile,
  FileText,
};

const iconRenderMap: Record<string, (cls: string) => ReactNode> = {
  Activity: (cls) => <Activity className={cls} />,
  Stethoscope: (cls) => <Stethoscope className={cls} />,
  Scale: (cls) => <Scale className={cls} />,
  Building2: (cls) => <Building2 className={cls} />,
  Calendar: (cls) => <Calendar className={cls} />,
  MessageSquare: (cls) => <MessageSquare className={cls} />,
  Shield: (cls) => <Shield className={cls} />,
  Clock: (cls) => <Clock className={cls} />,
  Users: (cls) => <Users className={cls} />,
  Brain: (cls) => <Brain className={cls} />,
  Calculator: (cls) => <Calculator className={cls} />,
  Smile: (cls) => <Smile className={cls} />,
  FileText: (cls) => <FileText className={cls} />,
};

import type { Variants } from "framer-motion";

const heroVariants: { container: Variants; item: Variants } = {
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
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

/* ─── Signup form ─── */
function SignupForm({ verticalId }: { verticalId: string }) {
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
        body: JSON.stringify({ email, source: verticalId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error);
        return;
      }
      setSuccess(true);
    } catch {
      setError("Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 bg-[#1a1a1a] rounded-xl px-6 py-4">
        <Check className="w-4 h-4 text-[#22C55E]" />
        <p className="text-white text-sm font-[family-name:var(--font-space-grotesk)]">
          Bedankt! We nemen snel contact op via {email}.
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
          placeholder="Je e-mailadres"
          className="bg-transparent text-white text-sm font-[family-name:var(--font-space-grotesk)] placeholder:text-[#7A7A7A] outline-none flex-1"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-[#E42313] text-white text-sm font-medium font-[family-name:var(--font-space-grotesk)] h-12 px-6 flex items-center gap-2 cursor-pointer disabled:opacity-50 transition-colors hover:bg-[#c91f10] shrink-0 rounded-r-xl"
      >
        {loading ? "..." : "Start gratis"}
        {!loading && <ArrowRight className="w-4 h-4" />}
      </button>
      {error && <p className="text-[#E42313] text-sm mt-1">{error}</p>}
    </form>
  );
}

/* ─── FAQ Item ─── */
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

/* ─── Scroll Header ─── */
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
                  href="#signup"
                  className={`bg-[#E42313] text-white text-sm font-medium h-9 px-5 flex items-center justify-center rounded-xl hover:bg-[#c91f10] transition-colors ${
                    scrolled ? "lg:hidden" : ""
                  }`}
                >
                  Start gratis
                </a>
                <a
                  href="#signup"
                  className={`bg-[#E42313] text-white text-sm font-medium h-9 px-5 items-center justify-center rounded-xl hover:bg-[#c91f10] transition-colors hidden ${
                    scrolled ? "lg:inline-flex" : ""
                  }`}
                >
                  Start gratis
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

/* ─── Chat Preview (for bento card background) ─── */
function ChatPreview({
  fontBody,
  messages,
}: {
  fontBody: string;
  messages: { from: "bot" | "user"; text: string }[];
}) {
  return (
    <div className="absolute right-4 top-4 w-[220px] rounded-xl overflow-hidden opacity-80 transition-opacity duration-300 group-hover:opacity-100 shadow-sm shadow-black/10">
      <div className="bg-[#0D0D0D] px-3 py-1.5 flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-[#E42313] flex items-center justify-center">
          <span className="text-white text-[7px] font-bold">A</span>
        </div>
        <span className="text-white text-[10px] font-medium">Aidy</span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
      </div>
      <div className="p-2 space-y-1.5 bg-white">
        {messages.map((msg, i) =>
          msg.from === "bot" ? (
            <div
              key={i}
              className="bg-[#F5F5F5] px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]"
            >
              <p
                className={`text-[#0D0D0D] text-[10px] leading-snug ${fontBody}`}
              >
                {msg.text}
              </p>
            </div>
          ) : (
            <div
              key={i}
              className="bg-[#E42313] px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[70%] ml-auto"
            >
              <p className="text-white text-[10px] leading-snug">{msg.text}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

/* ─── Chat messages per vertical ─── */
const chatMessages: Record<
  string,
  { from: "bot" | "user"; text: string }[]
> = {
  therapeut: [
    {
      from: "bot",
      text: "Sophie V. wil haar afspraak van donderdag verplaatsen. Zal ik vrijdag 10u voorstellen?",
    },
    { from: "user", text: "Ja, plan maar in" },
    {
      from: "bot",
      text: "Gedaan. Sophie krijgt een bevestiging. Wachtlijst-plek donderdag is ingevuld door Thomas D.",
    },
  ],
  advocaat: [
    {
      from: "bot",
      text: "Dossier Claeys: KYC-documenten nog niet ontvangen. Zal ik een herinnering sturen?",
    },
    { from: "user", text: "Ja, via WhatsApp" },
    {
      from: "bot",
      text: "Verstuurd. Ik volg op als er na 3 dagen geen reactie is.",
    },
  ],
  accountant: [
    {
      from: "bot",
      text: "BTW-kwartaal: 12 cliënten hebben nog ontbrekende facturen. Herinneringen versturen?",
    },
    { from: "user", text: "Ja, stuur ze allemaal" },
    {
      from: "bot",
      text: "12 herinneringen verstuurd via WhatsApp. Ik rapporteer wie niet reageert binnen 48u.",
    },
  ],
  tandarts: [
    {
      from: "bot",
      text: "Annulatie: mevr. Peeters kan niet om 14u. Wachtlijst-patiënt De Smedt is beschikbaar.",
    },
    { from: "user", text: "Plan De Smedt in" },
    {
      from: "bot",
      text: "Ingepland. De Smedt krijgt een bevestiging. Geen lege stoel.",
    },
  ],
  kinesist: [
    {
      from: "bot",
      text: "Nieuwe doorverwijzing: 18 sessies voor Jan Willems. Zal ik de reeks inplannen?",
    },
    { from: "user", text: "Ja, dinsdag en donderdag 9u" },
    {
      from: "bot",
      text: "Reeks ingepland. Jan krijgt een bevestiging met alle data. Voorschrift vervalt op 15/06.",
    },
  ],
};

/* ─── Main page ─── */
export default function VerticalLandingPage() {
  const params = useParams();
  const slug = params.vertical as string;
  const v = verticals[slug];
  const font = "font-[family-name:var(--font-space-grotesk)]";
  const fontBody = "font-[family-name:var(--font-inter)]";

  if (!v) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className={`text-2xl font-bold text-[#0D0D0D] mb-2 ${font}`}>
            Pagina niet gevonden
          </h1>
          <Link
            href="/"
            className={`text-[#7A7A7A] text-sm hover:text-[#0D0D0D] ${fontBody}`}
          >
            Terug naar overzicht
          </Link>
        </div>
      </div>
    );
  }

  const getIcon = (name: string, cls: string) =>
    iconRenderMap[name]?.(cls) ?? null;

  // Determine bento grid layout for features
  // Feature 0 = tall left (chat card with mockup), 1 = top center, 2 = bottom center or top right, 3 = bottom right tall
  const feats = v.features;

  return (
    <div className={`min-h-screen bg-white ${font}`}>
      <ScrollHeader font={font} />

      {/* ══════ Hero ══════ */}
      <section className="overflow-hidden">
        <div className="relative mx-auto max-w-6xl px-6 pt-32 lg:pb-16 lg:pt-48">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <AnimatedGroup variants={heroVariants}>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ backgroundColor: v.accentColorHex }}
                />
                <span
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: v.accentColorHex }}
                >
                  {v.tagline}
                </span>
              </div>

              <h1 className="text-balance text-[#0D0D0D] text-4xl font-medium sm:text-5xl md:text-6xl lg:text-[72px] tracking-[-2px] leading-[1.05] whitespace-pre-line">
                {v.headline}
              </h1>

              <p
                className={`mx-auto mt-6 max-w-2xl text-pretty text-lg text-[#7A7A7A] leading-relaxed ${fontBody}`}
              >
                {v.subheadline}
              </p>

              <form
                action=""
                className="mt-12 mx-auto max-w-sm"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="bg-white has-[input:focus]:ring-[#E8E8E8] relative grid grid-cols-[1fr_auto] pr-1.5 items-center rounded-[1rem] border border-[#E8E8E8] shadow shadow-black/5 has-[input:focus]:ring-2">
                  <Mail className="pointer-events-none absolute inset-y-0 left-4 my-auto size-4 text-[#B0B0B0]" />
                  <input
                    placeholder="Je e-mailadres"
                    className={`h-12 w-full bg-transparent pl-12 focus:outline-none text-sm text-[#0D0D0D] placeholder:text-[#B0B0B0] ${fontBody}`}
                    type="email"
                  />
                  <div>
                    <a
                      href="#signup"
                      className="text-white text-sm font-medium h-9 px-4 inline-flex items-center gap-2 rounded-[0.5rem] transition-colors"
                      style={{ backgroundColor: v.accentColorHex }}
                    >
                      <span className="hidden md:block">Start gratis</span>
                      <SendHorizonal
                        className="relative mx-auto size-5 md:hidden"
                        strokeWidth={2}
                      />
                    </a>
                  </div>
                </div>
              </form>

              <p className="text-[#B0B0B0] text-xs mt-4">
                Gratis starten. Geen creditcard nodig.
              </p>
            </AnimatedGroup>
          </div>
        </div>

        {/* Trust badges */}
        <div
          className={`flex items-center justify-center gap-6 text-[#B0B0B0] text-xs pb-16 ${fontBody}`}
        >
          <span className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5" />
            Gebouwd en gehost in Europa
          </span>
          <span className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" />
            GDPR-compliant
          </span>
          <span className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" />
            Data-isolatie per gebruiker
          </span>
        </div>
      </section>

      {/* ══════ Pain points ══════ */}
      <section>
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: v.accentColorHex }}
          >
            Het probleem
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-14">
            Herkenbaar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {v.painPoints.map((pain, i) => (
              <div
                key={pain.title}
                className="rounded-xl shadow-sm shadow-black/5 p-8 bg-white"
              >
                <div
                  className="w-10 h-10 text-white flex items-center justify-center text-sm font-semibold mb-6 rounded-lg"
                  style={{ backgroundColor: v.accentColorHex }}
                >
                  {i + 1}
                </div>
                <h3 className="text-[#0D0D0D] text-base font-semibold mb-2">
                  {pain.title}
                </h3>
                <p
                  className={`text-[#7A7A7A] text-sm leading-relaxed ${fontBody}`}
                >
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ How it works ══════ */}
      <section>
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: v.accentColorHex }}
          >
            Hoe het werkt
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-14">
            In 3 stappen actief
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {v.howItWorks.map((s) => (
              <div
                key={s.step}
                className="rounded-xl shadow-sm shadow-black/5 p-8 bg-white"
              >
                <div
                  className="w-10 h-10 text-white flex items-center justify-center text-sm font-semibold mb-6 rounded-lg"
                  style={{ backgroundColor: v.accentColorHex }}
                >
                  {s.step}
                </div>
                <h3 className="text-[#0D0D0D] text-base font-semibold mb-2">
                  {s.title}
                </h3>
                <p
                  className={`text-[#7A7A7A] text-sm leading-relaxed ${fontBody}`}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ Features — Bento Grid ══════ */}
      <section id="features" className="bg-[#FAFAFA]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: v.accentColorHex }}
          >
            Wat Aidy doet
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Gebouwd voor jouw werkdag
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            {v.subheadline}
          </p>

          <BentoGrid className="lg:grid-rows-3">
            {/* Feature 0 — tall left card with chat mockup */}
            {feats[0] && (
              <BentoCard
                name={feats[0].title}
                description={feats[0].description}
                Icon={iconMap[feats[0].iconName] || MessageSquare}
                href="#signup"
                cta="Start gratis"
                className="lg:row-start-1 lg:row-end-4 lg:col-start-1 lg:col-end-2"
                background={
                  <ChatPreview
                    fontBody={fontBody}
                    messages={chatMessages[slug] || chatMessages.kinesist}
                  />
                }
              />
            )}

            {/* Feature 1 — top center (tall) */}
            {feats[1] && (
              <BentoCard
                name={feats[1].title}
                description={feats[1].description}
                Icon={iconMap[feats[1].iconName] || Clock}
                href="#signup"
                cta="Start gratis"
                className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3"
                background={
                  <div className="absolute right-4 top-4 flex gap-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[#0D0D0D] text-[10px] font-medium bg-white shadow-sm shadow-black/5 rounded-lg px-2.5 py-1">
                      24u vooraf
                    </span>
                    <span className="text-[#0D0D0D] text-[10px] font-medium bg-white shadow-sm shadow-black/5 rounded-lg px-2.5 py-1">
                      1u vooraf
                    </span>
                    <span className="text-[#0D0D0D] text-[10px] font-medium bg-white shadow-sm shadow-black/5 rounded-lg px-2.5 py-1">
                      WhatsApp
                    </span>
                  </div>
                }
              />
            )}

            {/* Feature 2 — bottom center */}
            {feats[2] && (
              <BentoCard
                name={feats[2].title}
                description={feats[2].description}
                Icon={iconMap[feats[2].iconName] || Calendar}
                href="#signup"
                cta="Start gratis"
                className="lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4"
                background={<div />}
              />
            )}

            {/* Feature 3 — right side (tall bottom) */}
            {feats[3] && (
              <BentoCard
                name={feats[3].title}
                description={feats[3].description}
                Icon={iconMap[feats[3].iconName] || Shield}
                href="#signup"
                cta="Start gratis"
                className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4"
                background={
                  <div className="absolute right-4 top-4 space-y-2 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex items-center gap-2 bg-white shadow-sm shadow-black/5 rounded-lg px-3 py-1.5">
                      <Lock className="w-3 h-3 text-[#0D0D0D]" />
                      <span className="text-[#0D0D0D] text-[10px] font-medium">
                        EU Servers
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white shadow-sm shadow-black/5 rounded-lg px-3 py-1.5">
                      <Shield className="w-3 h-3 text-[#0D0D0D]" />
                      <span className="text-[#0D0D0D] text-[10px] font-medium">
                        GDPR-compliant
                      </span>
                    </div>
                    <div className="flex items-center gap-2 bg-white shadow-sm shadow-black/5 rounded-lg px-3 py-1.5">
                      <Globe className="w-3 h-3 text-[#0D0D0D]" />
                      <span className="text-[#0D0D0D] text-[10px] font-medium">
                        Data-isolatie
                      </span>
                    </div>
                  </div>
                }
              />
            )}
          </BentoGrid>
        </div>
      </section>

      {/* ══════ Security ══════ */}
      <section id="security" className="bg-[#0D0D0D]">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: v.accentColorHex }}
          >
            Veiligheid
          </p>
          <h2 className="text-white text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Privacy ingebouwd, niet opgeplakt
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            Elke bot draait in complete isolatie. Geen gedeelde data, geen
            compromissen.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Data-isolatie",
                desc: "Elke gebruiker krijgt een eigen geïsoleerde omgeving. Jouw data raakt nooit die van iemand anders.",
              },
              {
                icon: <Shield className="w-5 h-5" />,
                title: "GDPR-compliant",
                desc: "Voldoet aan alle Europese privacywetgeving. Standaard, niet optioneel.",
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Europese hosting",
                desc: "Alle data opgeslagen en verwerkt in Europa. Geen Amerikaanse servers.",
              },
              {
                icon: <Server className="w-5 h-5" />,
                title: "Encryptie overal",
                desc: "Data versleuteld in transit en at rest. Industriestandaard beveiliging.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 bg-[#1a1a1a] rounded-xl">
                <div className="w-10 h-10 bg-[#252525] flex items-center justify-center text-[#E42313] mb-4 rounded-lg">
                  {item.icon}
                </div>
                <h3 className="text-white text-sm font-semibold mb-2">
                  {item.title}
                </h3>
                <p
                  className={`text-[#7A7A7A] text-xs leading-relaxed ${fontBody}`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a
              href="#signup"
              className="text-sm font-medium inline-flex items-center gap-2 hover:underline"
              style={{ color: v.accentColorHex }}
            >
              Start gratis
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ══════ Pricing ══════ */}
      <section id="pricing">
        <div className="max-w-[1280px] mx-auto px-10 py-24">
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-3"
            style={{ color: v.accentColorHex }}
          >
            Pricing
          </p>
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-4">
            Plannen voor iedereen
          </h2>
          <p className={`text-[#7A7A7A] text-base mb-14 ${fontBody}`}>
            {v.roiLine}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Free */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
              <p className="text-[#7A7A7A] text-xs mb-1">
                Om te starten
              </p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">
                Free
              </h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                &euro;0
              </p>
              <ul
                className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}
              >
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Persoonlijke
                  bot
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Pay-as-you-go
                  credits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Community
                  support
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Start gratis
              </a>
            </div>

            {/* Pro */}
            <div
              className="p-8 rounded-xl shadow-md shadow-black/10 bg-white ring-2 relative"
              style={
                {
                  "--tw-ring-color": `${v.accentColorHex}20`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between mb-1">
                <p className="text-[#7A7A7A] text-xs">Meest gekozen</p>
                <span
                  className="text-xs font-semibold rounded-full px-3 py-0.5"
                  style={{
                    color: v.accentColorHex,
                    backgroundColor: `${v.accentColorHex}15`,
                  }}
                >
                  Populair
                </span>
              </div>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">
                Pro
              </h3>
              <p className="text-[#0D0D0D] text-4xl font-semibold tracking-[-1px] mb-8">
                &euro;9
                <span className="text-[#B0B0B0] text-base font-normal">
                  /maand
                </span>
              </p>
              <ul
                className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}
              >
                <li className="flex items-center gap-2">
                  <Check
                    className="w-4 h-4"
                    style={{ color: v.accentColorHex }}
                  />{" "}
                  Alles in Free
                </li>
                <li className="flex items-center gap-2">
                  <Check
                    className="w-4 h-4"
                    style={{ color: v.accentColorHex }}
                  />{" "}
                  Tot 10 leden
                </li>
                <li className="flex items-center gap-2">
                  <Check
                    className="w-4 h-4"
                    style={{ color: v.accentColorHex }}
                  />{" "}
                  Priority support
                </li>
                <li className="flex items-center gap-2">
                  <Check
                    className="w-4 h-4"
                    style={{ color: v.accentColorHex }}
                  />{" "}
                  Eigen bot per lid
                </li>
                <li className="flex items-center gap-2">
                  <Check
                    className="w-4 h-4"
                    style={{ color: v.accentColorHex }}
                  />{" "}
                  Custom domein
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-white text-sm font-medium py-3 transition-colors rounded-xl"
                style={{ backgroundColor: v.accentColorHex }}
              >
                Start gratis
              </a>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-xl shadow-sm shadow-black/5 bg-white">
              <p className="text-[#7A7A7A] text-xs mb-1">
                Voor grote organisaties
              </p>
              <h3 className="text-[#0D0D0D] text-xl font-semibold mb-4">
                Enterprise
              </h3>
              <p className="text-[#0D0D0D] text-2xl font-semibold mb-8">
                Contacteer ons
              </p>
              <ul
                className={`space-y-3 text-[#7A7A7A] text-sm ${fontBody}`}
              >
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Onbeperkte
                  leden
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" />{" "}
                  Volumekorting
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> SSO / SAML
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Dedicated
                  support
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0D0D0D]" /> Custom SLA
                </li>
              </ul>
              <a
                href="#signup"
                className="mt-8 block text-center text-[#0D0D0D] text-sm font-medium border border-[#E8E8E8] py-3 hover:bg-[#FAFAFA] transition-colors rounded-xl"
              >
                Contacteer ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      <section id="faq">
        <div className="max-w-[800px] mx-auto px-10 py-24">
          <h2 className="text-[#0D0D0D] text-3xl lg:text-[40px] font-medium tracking-[-1px] mb-10">
            Veelgestelde vragen
          </h2>
          {v.faq.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </section>

      {/* ══════ CTA ══════ */}
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
              {v.ctaText}
            </h2>
            <p className={`text-[#7A7A7A] text-base mb-8 ${fontBody}`}>
              Laat je e-mailadres achter en we helpen je op weg. Gratis starten,
              geen creditcard nodig.
            </p>
            <SignupForm verticalId={v.id} />
          </div>
        </div>
      </section>

      {/* ══════ Footer ══════ */}
      <footer>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between h-[60px] px-10">
          <div className="flex items-center gap-6">
            <span className="text-[#0D0D0D] text-sm font-semibold">Aidy</span>
            <div
              className={`flex items-center gap-4 text-[#7A7A7A] text-xs ${fontBody}`}
            >
              <Link
                href="#"
                className="hover:text-[#0D0D0D] transition-colors"
              >
                Voorwaarden
              </Link>
              <Link
                href="#"
                className="hover:text-[#0D0D0D] transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="hover:text-[#0D0D0D] transition-colors"
              >
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
