"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  SendHorizonal,
  Menu,
  X,
} from "lucide-react";

/* ─── constants ─── */
const GRADIENT =
  "linear-gradient(270deg, #f0532a, #ed4485 32%, #b360a6 68%, #4585c5)";
const DARK = "#1F0066";
const MUTED = "rgba(57, 37, 102, 0.6)";
const BORDER = "rgba(57, 37, 102, 0.2)";

const characters = [
  { src: "/aidy/aidy_female.webp", h: 130 },
  { src: "/aidy/aidy_pink.webp", h: 140 },
  { src: "/aidy/aidy_floral.webp", h: 155 },
  { src: "/aidy/aidy_gogogadet.webp", h: 175 },
  { src: "/aidy/aidy_yellow.webp", h: 135 },
  { src: "/aidy/aidy_woody.webp", h: 160 },
  { src: "/aidy/aidy_purple.webp", h: 135 },
  { src: "/aidy/aidy_yellow_knit.webp", h: 160 },
  { src: "/aidy/aidy_hat.webp", h: 175 },
  { src: "/aidy/aidy_sparkly_red.webp", h: 140 },
];

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Security", href: "#security" },
  { name: "Pricing", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

/* ─── sub-components ─── */

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed left-1/2 z-50 -translate-x-1/2 w-full max-w-[1488px] px-4 sm:px-8 lg:px-[120px]"
      style={{ top: "clamp(16px, 4vw, 40px)" }}
    >
      <nav className="navbar-glass flex items-center justify-between py-2 pr-2 pl-4 sm:py-3 sm:pr-3 sm:pl-6">
        <Link href="/template1" className="flex items-center">
          <Image src="/aidy/aidy-logo.webp" alt="Aidy" width={120} height={32} className="h-5 sm:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="font-satoshi text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: DARK }}>
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="font-satoshi text-xs sm:text-base font-bold hover:opacity-70 transition-opacity" style={{ color: DARK }}>
            Sign in
          </a>
          <a href="#signup" className="btn-gradient-sm inline-flex items-center gap-2 text-white font-satoshi font-bold text-xs sm:text-base cursor-pointer transition-all hover:opacity-90 hover:-translate-y-px">
            <span className="hidden sm:inline">Get started</span>
            <span className="sm:hidden">Start</span>
          </a>

          {/* Mobile menu button */}
          <button onClick={() => setOpen(!open)} className="md:hidden -m-2 p-2 cursor-pointer" aria-label="Toggle menu">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mt-2 bg-white/90 backdrop-blur-xl rounded-2xl border p-6 space-y-4 shadow-xl" style={{ borderColor: BORDER }}>
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block font-satoshi text-base font-medium" style={{ color: DARK }}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function GradientPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="pill-gradient-border flex items-center gap-1 !py-2 !px-3">
      {children}
    </div>
  );
}

function SectionHeader({ pill, title, subtitle }: { pill: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <GradientPill>{pill}</GradientPill>
      <h2
        className="font-satoshi font-bold text-center"
        style={{ fontSize: "clamp(28px, 4.5vw, 64px)", lineHeight: 1.35, color: DARK }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-center max-w-[840px]" style={{ fontSize: 16, lineHeight: 1.5, color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

function GradientButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`btn-gradient inline-flex items-center gap-3 ${className}`}>
      {children}
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4.167 10h11.666M10 4.167 15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </a>
  );
}

function OutlineButton({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} className={`btn-outline-glass inline-flex items-center gap-2 ${className}`}>
      {children}
    </a>
  );
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-[6px]">
      {icon}
      <span className="font-satoshi text-sm font-medium" style={{ color: DARK }}>{text}</span>
    </div>
  );
}

function GradientIcon({ d, id }: { d: string; id: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d={d} fill={`url(#${id})`} />
      <defs>
        <linearGradient id={id} x1="4" y1="12" x2="20" y2="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4585C5" /><stop offset="0.68" stopColor="#B360A6" /><stop offset="1" stopColor="#F0532A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function CharacterMarquee() {
  const doubled = [...characters, ...characters];
  return (
    <div className="hero-characters-row mt-10 sm:mt-14">
      <div className="hero-characters-marquee">
        {doubled.map((c, i) => (
          <img key={i} alt="" className="hero-char w-auto flex-shrink-0" loading={i < 10 ? "eager" : "lazy"} src={c.src} style={{ height: `clamp(${c.h * 0.5}px, ${c.h * 0.075}vw, ${c.h}px)` }} aria-hidden={i >= 10 ? true : undefined} />
        ))}
      </div>
    </div>
  );
}

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
        body: JSON.stringify({ email, source: "template1" }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error); return; }
      setSuccess(true);
    } catch {
      setError("Something went wrong. Try again later.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-full px-6 py-4 border" style={{ borderColor: BORDER }}>
        <Check className="w-4 h-4 text-green-500" />
        <p className="text-sm font-satoshi" style={{ color: DARK }}>Thanks! We&apos;ll reach out at {email}.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full pl-4 pr-2 py-2" style={{ background: "rgba(31,0,102,0.06)", border: `1px solid ${BORDER}` }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-[rgba(57,37,102,0.4)]"
          style={{ color: DARK }}
        />
        <button
          type="submit"
          disabled={loading}
          className="shrink-0 flex items-center justify-center rounded-full h-9 w-9 text-white transition-opacity disabled:opacity-40 cursor-pointer"
          style={{ background: GRADIENT, boxShadow: "inset 0 0 8px rgba(255,255,255,0.8)" }}
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </form>
  );
}

/* ─── FAQ ─── */
const faqData = [
  { q: "What is Aidy?", a: "Aidy is your personal AI agent in the cloud. It connects to your tools, manages your schedule, and handles communication — all from a secure, isolated environment." },
  { q: "How does it work?", a: "Sign up, and Aidy provisions a private bot just for you. Connect your channels (Gmail, WhatsApp, Telegram) and Aidy starts working immediately." },
  { q: "Is there a free plan?", a: "Yes. The free plan includes a personal bot with pay-as-you-go credits and community support. No credit card required." },
  { q: "How do credits work?", a: "Credits are consumed based on usage — messages processed, integrations used, and reasoning complexity. Standard reasoning uses fewer credits than advanced." },
  { q: "Where is my data stored?", a: "All data is stored and processed in Europe on EU infrastructure. Each user gets complete data isolation. No shared resources." },
];

function FAQChat() {
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Hi! I'm Aidy. Ask me anything about the platform, pricing, or security." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function askQuestion(q: string) {
    const faq = faqData.find((f) => f.q === q);
    if (!faq) return;
    setMessages((prev) => [...prev, { role: "user", text: q }, { role: "bot", text: faq.a }]);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    const match = faqData.find((f) => f.q.toLowerCase().includes(input.toLowerCase()) || input.toLowerCase().includes(f.q.toLowerCase().replace("?", "")));
    if (match) {
      setMessages((prev) => [...prev, { role: "user", text: input }, { role: "bot", text: match.a }]);
    } else {
      setMessages((prev) => [...prev, { role: "user", text: input }, { role: "bot", text: "Good question! Sign up for free and I can help you with that directly." }]);
    }
    setInput("");
  }

  const asked = messages.filter((m) => m.role === "user").map((m) => m.text);
  const suggestions = faqData.filter((f) => !asked.includes(f.q)).map((f) => f.q);

  return (
    <div className="w-full max-w-[720px] rounded-2xl bg-white overflow-hidden flex flex-col" style={{ border: `1px solid ${BORDER}`, boxShadow: "0 8px 40px rgba(31,0,102,0.1)", height: "min(600px, 75vh)" }}>
      <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-4 sm:py-6 space-y-3" style={{ backgroundColor: "#f9f9f9" }}>
        {messages.map((msg, i) =>
          msg.role === "bot" ? (
            <div key={i} className="flex items-start gap-2.5 animate-faq-bubble-in">
              <Image src="/aidy/aidy_purple_avatar.webp" alt="Aidy" width={32} height={32} className="h-8 w-8 rounded-md object-cover shrink-0 mt-0.5" />
              <div className="max-w-[80%]">
                <div className="rounded-2xl rounded-bl-md px-4 py-2.5 text-sm leading-normal break-words" style={{ background: "rgba(230,222,245,0.9)", color: DARK }}>
                  {msg.text}
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end animate-faq-bubble-in">
              <div className="max-w-[80%] rounded-2xl rounded-br-md px-4 py-2.5 text-sm text-white leading-normal break-words" style={{ background: GRADIENT }}>
                {msg.text}
              </div>
            </div>
          )
        )}
      </div>

      <div style={{ borderTop: `1px solid rgba(57,37,102,0.12)` }}>
        {suggestions.length > 0 && (
          <div className="px-4 sm:px-6 pt-4 pb-2 flex flex-wrap gap-2">
            {suggestions.map((q) => (
              <button key={q} onClick={() => askQuestion(q)} className="inline-flex items-center rounded-full px-3.5 py-2 text-xs sm:text-sm font-medium transition-all hover:opacity-80 hover:-translate-y-px cursor-pointer" style={{ background: "rgba(57,37,102,0.06)", border: "1px solid rgba(57,37,102,0.15)", color: DARK, fontFamily: "var(--font-space-grotesk), Satoshi, sans-serif" }}>
                {q}
              </button>
            ))}
          </div>
        )}
        <form onSubmit={handleSubmit} className="px-4 sm:px-6 pb-4 sm:pb-6 pt-1">
          <div className="flex items-center gap-2 rounded-full pl-4 pr-2 py-2" style={{ background: "rgba(31,0,102,0.06)", border: "1px solid rgba(57,37,102,0.12)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-[rgba(57,37,102,0.4)]"
              maxLength={200}
              style={{ color: DARK }}
            />
            <button type="submit" disabled={!input.trim()} className="shrink-0 flex items-center justify-center rounded-full h-8 w-8 text-white transition-opacity disabled:opacity-40 cursor-pointer" style={{ background: GRADIENT, boxShadow: "inset 0 0 8px rgba(255,255,255,0.8)" }}>
              <SendHorizonal className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─── MAIN PAGE ─── */
export default function Template1Page() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-space-grotesk)]">
      <style jsx global>{`
        /* ─── fonts ─── */
        .font-satoshi { font-family: var(--font-space-grotesk), Satoshi, sans-serif; }

        /* ─── navbar ─── */
        .navbar-glass {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          background: rgba(255,255,255,0.4);
          border: 1px solid rgba(0,38,114,0.2);
          border-radius: 140px;
          box-shadow: 0 2px 16px rgba(0,38,114,0.15);
        }

        /* ─── pill ─── */
        .pill-gradient-border {
          background: #fff;
          border: 1px solid transparent;
          border-radius: 60px;
          padding: 8px 20px;
          position: relative;
        }
        .pill-gradient-border::before {
          content: "";
          position: absolute;
          inset: -1px;
          padding: 1px;
          border-radius: 60px;
          background: ${GRADIENT};
          mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
          mask-position: 0 0, 0 0;
          mask-size: auto, auto;
          mask-repeat: repeat, repeat;
          mask-clip: content-box, border-box;
          mask-composite: exclude;
          -webkit-mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
          -webkit-mask-position: 0 0, 0 0;
          -webkit-mask-size: auto, auto;
          -webkit-mask-repeat: repeat, repeat;
          -webkit-mask-clip: content-box, border-box;
          -webkit-mask-composite: xor;
        }

        /* ─── gradient text ─── */
        .text-gradient-aidy {
          -webkit-text-fill-color: transparent;
          background: ${GRADIENT};
          -webkit-background-clip: text;
          background-clip: text;
        }
        .text-gradient-warm {
          -webkit-text-fill-color: transparent;
          background: linear-gradient(90deg, #f0532a, #ed4485);
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* ─── buttons ─── */
        .btn-gradient {
          color: #fff;
          cursor: pointer;
          background: ${GRADIENT};
          border: none;
          border-radius: 100px;
          padding: 16px 28px;
          font-family: var(--font-space-grotesk), Satoshi, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        @media (min-width: 640px) { .btn-gradient { padding: 20px 40px; font-size: 18px; } }
        .btn-gradient:hover { opacity: 0.9; transform: translateY(-1px); }

        .btn-gradient-sm {
          color: #fff;
          cursor: pointer;
          background: ${GRADIENT};
          border: none;
          border-radius: 100px;
          padding: 10px 20px;
          font-family: var(--font-space-grotesk), Satoshi, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.35;
          text-decoration: none;
          transition: opacity 0.2s, transform 0.2s;
        }
        @media (min-width: 640px) { .btn-gradient-sm { padding: 12px 24px; font-size: 16px; } }
        .btn-gradient-sm:hover { opacity: 0.9; transform: translateY(-1px); }

        .btn-outline-glass {
          color: ${DARK};
          cursor: pointer;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          background: rgba(255,255,255,0.6);
          border: 1px solid rgba(0,38,114,0.3);
          border-radius: 100px;
          padding: 16px 28px;
          font-family: var(--font-space-grotesk), Satoshi, sans-serif;
          font-size: 16px;
          font-weight: 700;
          line-height: 1.35;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .btn-outline-glass:hover { background: rgba(255,255,255,0.9); transform: translateY(-1px); }

        /* ─── animations ─── */
        @keyframes cloud-drift {
          0% { transform: translate(-12%); }
          50% { transform: translate(12%); }
          100% { transform: translate(-12%); }
        }
        .animate-cloud-drift { animation: 40s ease-in-out infinite cloud-drift; }

        @keyframes marquee-scroll {
          0% { transform: translate(0); }
          100% { transform: translate(-50%); }
        }

        @keyframes faq-bubble-in {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-faq-bubble-in { animation: 0.35s cubic-bezier(0.22,1,0.36,1) both faq-bubble-in; }

        @keyframes spin-slow {
          0% { transform: rotate(0); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: 60s linear infinite spin-slow; }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink { animation: 1s step-end infinite blink; }

        /* ─── hero marquee ─── */
        .hero-characters-row {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, #000 5% 95%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 5% 95%, transparent);
        }
        .hero-characters-marquee {
          display: flex;
          align-items: flex-end;
          width: max-content;
          animation: 30s linear infinite marquee-scroll;
        }
        .hero-characters-marquee > .hero-char {
          margin-right: clamp(40px, 6vw, 64px);
        }
        .hero-char { object-fit: contain; flex-shrink: 0; width: auto; }

        /* ─── step cards ─── */
        .step-card {
          background: #f9f9f9;
          border: 1px solid rgba(57,37,102,0.2);
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .step-number {
          position: absolute;
          top: 24px;
          left: 24px;
          z-index: 20;
          width: 32px;
          height: 32px;
          background: #392566;
          color: #fff;
          border-radius: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: var(--font-space-grotesk), Satoshi, sans-serif;
          font-size: 16px;
          font-weight: 700;
        }
        .step-card-text {
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 0 24px 24px;
        }
        @media (min-width: 640px) { .step-card-text { padding: 0 32px 32px; } }

        /* ─── icon box ─── */
        .icon-box {
          background: #fff;
          border: 1px solid rgba(57,37,102,0.2);
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 56px;
          height: 56px;
          box-shadow: 0 2px 6px rgba(57,37,102,0.1);
        }

        /* ─── integration icon ─── */
        .integration-icon {
          z-index: 15;
          background: #fff;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 56px;
          height: 56px;
          animation: 3s ease-in-out infinite float-gentle;
          box-shadow: 0 4px 12px rgba(57,37,102,0.15), inset 0 1px 3px rgba(57,37,102,0.1);
        }
        @media (min-width: 640px) { .integration-icon { width: 64px; height: 64px; } }

        /* ─── hp card ─── */
        .hp-card {
          background: #f9f9f9;
          border: 1px solid rgba(57,37,102,0.2);
          border-radius: 16px;
          padding: 40px;
        }

        /* ─── pricing pro card ─── */
        .pricing-card-pro {
          background: #fff;
          border: 1px solid transparent;
          border-radius: 16px;
          padding: 32px;
          position: relative;
          box-shadow: 0 6px 16px rgba(57,37,102,0.15);
        }
        .pricing-card-pro::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: 0;
          padding: 1px;
          border-radius: 16px;
          background: ${GRADIENT};
          mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
          mask-position: 0 0, 0 0;
          mask-size: auto, auto;
          mask-repeat: repeat, repeat;
          mask-clip: content-box, border-box;
          mask-composite: exclude;
          -webkit-mask-image: linear-gradient(#fff 0 0), linear-gradient(#fff 0 0);
          -webkit-mask-position: 0 0, 0 0;
          -webkit-mask-size: auto, auto;
          -webkit-mask-repeat: repeat, repeat;
          -webkit-mask-clip: content-box, border-box;
          -webkit-mask-composite: xor;
        }

        /* ─── gradient bullet ─── */
        .gradient-bullet {
          background: ${GRADIENT};
          border-radius: 60px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 16px;
          height: 16px;
        }
        .gradient-bullet img { width: 9.33px; height: 9.33px; }

        /* ─── bento grid ─── */
        .bento-grid-custom {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .bento-grid-custom { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .bento-grid-custom { grid-template-columns: repeat(4, 1fr); }
          .bento-pos-chat { grid-area: 1 / 1 / 3; }
          .bento-center { grid-area: 1 / 2 / 3 / 4; }
          .bento-pos-personality { grid-area: 1 / 4 / 3; }
          .bento-pos-team { grid-area: 3 / 1; }
          .bento-pos-model { grid-area: 3 / 2; }
          .bento-pos-calendar { grid-area: 3 / 3; }
          .bento-pos-messaging { grid-area: 3 / 4; }
          .bento-pos-team, .bento-pos-model, .bento-pos-calendar, .bento-pos-messaging { min-height: 280px; }
        }
        .bento-card-custom {
          background: #f9f9f9;
          border: 1px solid rgba(57,37,102,0.2);
          border-radius: 12px;
          padding: 20px;
          transition: border-color 0.3s, box-shadow 0.3s, opacity 0.3s;
          position: relative;
          overflow: hidden;
        }
        @media (min-width: 640px) { .bento-card-custom { padding: 24px; } }
        @media (hover: hover) {
          .bento-grid-custom:hover .bento-card-custom { opacity: 0.6; }
          .bento-grid-custom:hover .bento-card-custom:hover { opacity: 1; border-color: rgba(57,37,102,0.35); box-shadow: 0 8px 32px rgba(31,0,102,0.08); }
        }
        .bento-center {
          border: 1px solid rgba(57,37,102,0.2);
          border-radius: 16px;
          min-height: 280px;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s, opacity 0.3s;
        }
        .bento-grid-custom:hover .bento-center { opacity: 1; }
        @media (min-width: 1024px) { .bento-center { min-height: 360px; } }

        /* ─── bento chat animation ─── */
        .bento-chat-msgs { min-height: 0; position: relative; }
        .bento-chat-inner {
          display: flex; flex-direction: column; justify-content: flex-end;
          position: absolute; inset: 0; overflow: hidden;
          mask-image: linear-gradient(transparent 0%, #000 25% 100%);
          -webkit-mask-image: linear-gradient(transparent 0%, #000 25% 100%);
        }
        .chat-step {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .chat-step-0 { grid-template-rows: 1fr; }
        .chat-step > * { min-height: 0; overflow: hidden; }
        .chat-dots { opacity: 1; transition: opacity 0.3s; }
        .chat-reply { opacity: 0; transition: opacity 0.35s; }

        .bento-card-chat:hover .chat-step-1 { grid-template-rows: 1fr; transition-delay: 0.3s; }
        .bento-card-chat:hover .chat-step-1 .chat-dots { opacity: 0; transition-delay: 1.2s; }
        .bento-card-chat:hover .chat-step-1 .chat-reply { opacity: 1; transition-delay: 1.2s; }
        .bento-card-chat:hover .chat-step-2 { grid-template-rows: 1fr; transition-delay: 1.8s; }
        .bento-card-chat:hover .chat-step-3 { grid-template-rows: 1fr; transition-delay: 2.4s; }
        .bento-card-chat:hover .chat-step-3 .chat-dots { opacity: 0; transition-delay: 3.3s; }
        .bento-card-chat:hover .chat-step-3 .chat-reply { opacity: 1; transition-delay: 3.3s; }

        /* ─── bento calendar animation ─── */
        .bento-cal-msgs { min-height: 0; position: relative; }
        .bento-cal-inner {
          display: flex; flex-direction: column; justify-content: flex-end;
          position: absolute; inset: 0; overflow: hidden;
          mask-image: linear-gradient(transparent 0%, #000 30% 100%);
          -webkit-mask-image: linear-gradient(transparent 0%, #000 30% 100%);
        }
        .bento-cal-item { border-radius: 3px 6px 6px 3px; }
        .cal-step {
          display: grid; grid-template-rows: 0fr;
          transition: grid-template-rows 0.5s cubic-bezier(0.22,1,0.36,1);
        }
        .cal-step > * { min-height: 0; overflow: hidden; }
        .bento-card-calendar:hover .cal-step-1 { grid-template-rows: 1fr; transition-delay: 0.3s; }
        .bento-card-calendar:hover .cal-step-2 { grid-template-rows: 1fr; transition-delay: 0.9s; }

        /* ─── bento model toggle ─── */
        .bento-card-model .bento-toggle-track {
          background: rgba(57,37,102,0.15);
        }
        .bento-card-model .bento-toggle-track::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: ${GRADIENT};
          opacity: 0;
          transition: opacity 0.5s;
        }
        .bento-card-model .bento-toggle-knob { z-index: 1; position: relative; }
        .bento-card-model:hover .bento-toggle-track::after { opacity: 1; }
        .bento-card-model:hover .bento-toggle-knob { transform: translateX(32px); }
        .bento-card-model:hover .bento-toggle-label-left { opacity: 0.3; }
        .bento-card-model:hover .bento-toggle-label-right { opacity: 1; }

        /* ─── bento team marquee ─── */
        .bento-team-slider { overflow: hidden; mask-image: linear-gradient(90deg, transparent, #000 10% 90%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, #000 10% 90%, transparent); }
        .bento-team-track { display: flex; align-items: flex-end; width: max-content; animation: 20s linear infinite marquee-scroll; gap: 12px; }

        /* ─── bento personality ─── */
        @keyframes persona-1 { 0%, 27% { opacity: 1; } 33%, 94% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes persona-2 { 0%, 27% { opacity: 0; } 33%, 60% { opacity: 1; } 67%, 100% { opacity: 0; } }
        @keyframes persona-3 { 0%, 60% { opacity: 0; } 67%, 94% { opacity: 1; } 100% { opacity: 0; } }
        .bento-persona-1 { animation: 5s linear infinite paused persona-1; }
        .bento-persona-2 { animation: 5s linear infinite paused persona-2; }
        .bento-persona-3 { animation: 5s linear infinite paused persona-3; }
        .bento-chip { isolation: isolate; color: ${DARK}; background: rgba(57,37,102,0.08); position: relative; }
        .bento-chip::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: ${GRADIENT};
          opacity: 0;
          z-index: -1;
        }
        .bento-chip-1 { color: #fff; }
        .bento-chip-1::after { opacity: 1; }
        .bento-card-personality:hover .bento-persona,
        .bento-card-personality:hover .bento-chip::after { animation-play-state: running; }
      `}</style>

      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero-section relative flex flex-col items-center px-4 sm:px-8 lg:px-[120px] pt-[120px] sm:pt-[160px] lg:pt-[200px]" style={{ paddingBottom: "clamp(60px, 8vw, 120px)" }}>
        {/* Cloud background */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
          <img alt="" className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[160vw] max-w-none object-cover animate-cloud-drift" loading="eager" src="/aidy/aidy-clouds.webp" />
          <div className="absolute bottom-0 left-0 w-full" style={{ height: "40%", background: "linear-gradient(0deg, #fff 0%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[1488px]">
          <div className="flex flex-col items-center gap-4 w-full">
            <GradientPill>
              <Image src="/aidy/icon-shield-blue.svg" alt="" width={16} height={16} />
              <span className="text-gradient-aidy text-xs sm:text-sm" style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>Enterprise grade security</span>
            </GradientPill>

            <h1 className="text-center font-bold" style={{ fontSize: "clamp(32px, 5.5vw, 80px)", lineHeight: 1.15, color: DARK, fontFamily: "var(--font-space-grotesk), Satoshi, sans-serif" }}>
              Your personal <span className="text-gradient-warm">AI agent</span> in the cloud
            </h1>

            <p className="text-center w-full max-w-[1000px]" style={{ fontSize: "clamp(14px, 1.4vw, 20px)", lineHeight: 1.5, color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>
              Secure, private AI bot hosting for individuals and teams.<br className="hidden sm:block" />Every user gets their own isolated bot.
            </p>
          </div>

          <CharacterMarquee />

          <div className="flex flex-col items-center gap-8 sm:gap-10 mt-12 sm:mt-16">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <OutlineButton href="#pricing" className="w-full sm:w-auto justify-center">View plans</OutlineButton>
              <GradientButton href="#signup" className="w-full sm:w-auto justify-center">Get started for free</GradientButton>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-14">
              <TrustBadge icon={<GradientIcon d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C12.95 21.5 20 15.4 20 10a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" id="pin-grad" />} text="Built and hosted in Europe" />
              <TrustBadge icon={<GradientIcon d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4Zm-2 15-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8l-8 8Z" id="shield-grad" />} text="Secure infrastructure" />
              <TrustBadge icon={<GradientIcon d="M18 8h-1V6A5 5 0 0 0 7 6v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM12 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM15 8H9V6a3 3 0 0 1 6 0v2Z" id="lock-grad" />} text="Designed for privacy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="relative px-4 sm:px-8 lg:px-[120px] py-16 sm:py-20">
        <div className="flex flex-col items-center w-full max-w-[1488px] mx-auto gap-12 sm:gap-20">
          <SectionHeader
            pill={<span className="text-gradient-aidy font-satoshi text-sm font-medium">How it works</span>}
            title="Up and running in minutes"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="relative flex-1 flex flex-col items-center">
                <img alt="" className="h-[100px] sm:h-[120px] w-auto mt-8" src="/aidy/aidy_purple_upsidedown.webp" />
                <div className="relative z-10 w-[85%] max-w-[300px] flex-1 flex flex-col justify-center py-6 sm:py-8">
                  <p className="text-sm font-satoshi mb-2" style={{ color: DARK }}>What&apos;s your name?</p>
                  <div className="relative w-full h-[42px] rounded-lg flex items-center px-3" style={{ background: "linear-gradient(#fff,#fff) padding-box, linear-gradient(270deg, #f0532a, #ed4485 32%, #b360a6 68%, #4585c5) border-box", border: "1.5px solid transparent", boxShadow: "0 16px 30px rgba(57,37,102,0.2)" }}>
                    <div className="w-[1.5px] h-[18px] bg-[#392566] animate-blink" />
                  </div>
                </div>
              </div>
              <div className="step-card-text">
                <h3 className="font-satoshi text-[20px] sm:text-[24px] font-bold" style={{ color: DARK }}>Sign up</h3>
                <p className="font-satoshi text-sm sm:text-base" style={{ color: MUTED }}>Create your account in seconds</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="relative z-0 h-[220px] sm:h-[260px] flex items-center justify-center">
                <img alt="" className="pointer-events-none absolute w-[600px] sm:w-[800px] opacity-80 animate-spin-slow" aria-hidden="true" src="/aidy/decoration-starburst.webp" />
                <img alt="" className="relative z-10 h-[120px] sm:h-[160px] w-auto object-contain" src="/aidy/aidy_purple.webp" />
              </div>
              <div className="step-card-text relative z-10">
                <h3 className="font-satoshi text-[20px] sm:text-[24px] font-bold" style={{ color: DARK }}>Your bot is provisioned</h3>
                <p className="font-satoshi text-sm sm:text-base" style={{ color: MUTED }}>A personal bot is instantly created for you</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="relative h-[220px] sm:h-[260px] flex items-center justify-center">
                <div className="relative w-full max-w-[400px] lg:max-w-none h-full flex items-center justify-center">
                  <img alt="" className="relative z-10 h-[140px] sm:h-[176px] w-auto object-contain" src="/aidy/aidy_manage.webp" />
                  <div className="integration-icon absolute top-4 right-4 sm:right-8" style={{ animationDelay: "0s" }}>
                    <Image src="/aidy/logo-gmail.svg" alt="Gmail" width={34} height={26} />
                  </div>
                  <div className="integration-icon absolute bottom-16 right-0 sm:right-4" style={{ animationDelay: "0.3s" }}>
                    <Image src="/aidy/logo-discord.svg" alt="Discord" width={38} height={29} />
                  </div>
                  <div className="integration-icon absolute bottom-16 left-0 sm:left-4" style={{ animationDelay: "0.6s" }}>
                    <Image src="/aidy/logo-whatsapp.svg" alt="WhatsApp" width={44} height={44} />
                  </div>
                  <div className="integration-icon absolute top-0 left-8 sm:left-16" style={{ animationDelay: "0.9s" }}>
                    <Image src="/aidy/logo-telegram.svg" alt="Telegram" width={36} height={36} />
                  </div>
                </div>
              </div>
              <div className="step-card-text">
                <h3 className="font-satoshi text-[20px] sm:text-[24px] font-bold" style={{ color: DARK }}>Run, scale, manage</h3>
                <p className="font-satoshi text-sm sm:text-base" style={{ color: MUTED }}>Deploy and manage it securely</p>
              </div>
            </div>
          </div>

          <GradientButton href="#signup">Get started for free</GradientButton>
        </div>
      </section>

      {/* ═══ FEATURES — BENTO GRID ═══ */}
      <section id="features" className="px-4 sm:px-8 lg:px-[120px] py-16 sm:py-20">
        <div className="flex flex-col items-center w-full max-w-[1488px] mx-auto gap-10 sm:gap-14">
          <SectionHeader
            pill={<span className="text-gradient-aidy font-satoshi text-sm font-medium">Features</span>}
            title="What Aidy can do for you"
            subtitle="A personal AI agent that connects to your tools and works the way you do."
          />

          <div className="bento-grid-custom w-full">
            {/* Chat card */}
            <div className="bento-pos-chat bento-card-custom bento-card-chat flex flex-col gap-3 min-h-[320px]">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Your personal AI, always ready</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Chat in real time with your own private bot. It remembers context and gets smarter over time.</p>
              </div>
              <div className="bento-chat-msgs flex-1">
                <div className="bento-chat-inner flex flex-col">
                  <div className="flex items-start gap-1.5">
                    <Image src="/aidy/aidy_purple_avatar.webp" alt="" width={24} height={24} className="h-6 w-6 rounded-sm shrink-0" />
                    <div className="rounded-2xl rounded-bl-md px-3 py-1.5 text-xs" style={{ background: "rgba(230,222,245,0.9)", color: DARK }}>
                      Good morning! You have 3 unread emails and a meeting at 2pm.
                    </div>
                  </div>
                  <div className="chat-step chat-step-0">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-6 flex justify-end">
                        <div className="rounded-2xl rounded-br-md px-3 py-1.5 text-xs text-white" style={{ background: GRADIENT }}>Summarize those emails for me</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-step chat-step-1">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-6 flex items-start gap-1.5">
                        <Image src="/aidy/aidy_purple_avatar.webp" alt="" width={24} height={24} className="h-6 w-6 rounded-sm shrink-0" />
                        <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
                          <div className="chat-dots rounded-2xl rounded-bl-md px-3 py-2" style={{ background: "rgba(230,222,245,0.9)" }}>
                            <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                          <div className="chat-reply rounded-2xl rounded-bl-md px-3 py-1.5 text-xs self-end" style={{ background: "rgba(230,222,245,0.9)", color: DARK }}>
                            Sarah sent the design review, Mark confirmed the budget, Lisa asked about Friday.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-step chat-step-2">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-6 flex justify-end">
                        <div className="rounded-2xl rounded-br-md px-3 py-1.5 text-xs text-white" style={{ background: GRADIENT }}>Reply to Sarah and accept the meeting</div>
                      </div>
                    </div>
                  </div>
                  <div className="chat-step chat-step-3">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-6 flex items-start gap-1.5">
                        <Image src="/aidy/aidy_purple_avatar.webp" alt="" width={24} height={24} className="h-6 w-6 rounded-sm shrink-0" />
                        <div className="grid [&>*]:col-start-1 [&>*]:row-start-1">
                          <div className="chat-dots rounded-2xl rounded-bl-md px-3 py-2" style={{ background: "rgba(230,222,245,0.9)" }}>
                            <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "0ms" }} />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "150ms" }} />
                              <span className="w-1.5 h-1.5 rounded-full bg-[#392566] opacity-40 animate-bounce" style={{ animationDelay: "300ms" }} />
                            </div>
                          </div>
                          <div className="chat-reply rounded-2xl rounded-bl-md px-3 py-1.5 text-xs self-end" style={{ background: "rgba(230,222,245,0.9)", color: DARK }}>
                            Done! Replied to Sarah and accepted your 2pm meeting.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center — Meet Aidy */}
            <div className="bento-center hidden lg:flex relative flex-col items-center p-5 sm:p-6 overflow-hidden">
              <img alt="" className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[150%] max-w-none object-cover animate-cloud-drift" src="/aidy/aidy_purple_clouds.webp" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(transparent 40%, rgba(255,255,255,0.7) 100%)" }} />
              <div className="relative z-10 flex flex-col items-center gap-1 text-center mt-2 sm:mt-4">
                <span className="font-satoshi text-2xl sm:text-3xl lg:text-4xl font-bold" style={{ color: DARK }}>Meet Aidy</span>
                <p className="text-xs sm:text-sm max-w-[280px]" style={{ color: "rgba(57,37,102,0.7)" }}>Your personal AI assistant in the cloud</p>
              </div>
              <img alt="Aidy character" className="relative z-10 w-[140px] sm:w-[180px] lg:w-[220px] h-auto mt-auto -mb-12 sm:-mb-16" src="/aidy/aidy-purple.webp" />
            </div>

            {/* Personality */}
            <div className="bento-pos-personality bento-card-custom bento-card-personality flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Make it yours</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Shape your bot&apos;s personality to match your style.</p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-evenly py-4 sm:py-0">
                <div className="relative h-[130px] sm:h-[140px] w-full">
                  <img alt="" className="bento-persona bento-persona-1 absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto" src="/aidy/aidy_female.webp" />
                  <img alt="" className="bento-persona bento-persona-2 absolute bottom-0 left-1/2 -translate-x-1/2 h-[92%] w-auto" src="/aidy/aidy_professional_noshadow.webp" />
                  <img alt="" className="bento-persona bento-persona-3 absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto" src="/aidy/aidy_hat.webp" />
                </div>
                <div className="flex flex-wrap gap-1.5 justify-center mt-8 sm:mt-5">
                  <span className="bento-chip bento-chip-1 rounded-full px-2.5 py-1 text-[11px] font-medium font-satoshi">Friendly</span>
                  <span className="bento-chip bento-chip-2 rounded-full px-2.5 py-1 text-[11px] font-medium font-satoshi">Professional</span>
                  <span className="bento-chip bento-chip-3 rounded-full px-2.5 py-1 text-[11px] font-medium font-satoshi">Playful</span>
                </div>
              </div>
            </div>

            {/* Teams */}
            <div className="bento-pos-team bento-card-custom flex flex-col gap-5 sm:gap-3">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Built for teams</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Everyone gets their own isolated bot.</p>
              </div>
              <div className="bento-team-slider mt-auto mb-2 sm:mb-6">
                <div className="bento-team-track">
                  {[...characters, ...characters].map((c, i) => (
                    <img key={i} alt="" className="h-auto flex-shrink-0" loading="lazy" src={c.src} style={{ height: `${Math.round(c.h * 0.65)}px` }} aria-hidden={i >= 10 ? true : undefined} />
                  ))}
                </div>
              </div>
            </div>

            {/* Model toggle */}
            <div className="bento-pos-model bento-card-custom bento-card-model flex flex-col gap-9 sm:gap-3 pb-9 sm:pb-0">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Adaptive reasoning</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Use standard reasoning for speed. Switch to advanced for complex tasks.</p>
              </div>
              <div className="flex items-center justify-center gap-4 flex-1">
                <div className="bento-toggle-label-left flex items-center gap-[5px] transition-opacity duration-300">
                  <GradientIcon d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" id="bolt-grad" />
                  <span className="text-xs font-medium font-satoshi" style={{ color: DARK }}>Standard</span>
                </div>
                <div className="bento-toggle-track relative w-[64px] h-[32px] rounded-full transition-all duration-500">
                  <div className="bento-toggle-knob absolute top-[3px] left-[3px] w-[26px] h-[26px] rounded-full bg-white transition-transform duration-500" style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.2)" }} />
                </div>
                <div className="bento-toggle-label-right flex items-center gap-[5px] transition-opacity duration-300 opacity-40">
                  <GradientIcon d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2Z" id="sparkle-grad" />
                  <span className="text-xs font-medium font-satoshi" style={{ color: DARK }}>Advanced</span>
                </div>
              </div>
            </div>

            {/* Calendar */}
            <div className="bento-pos-calendar bento-card-custom bento-card-calendar flex flex-col gap-3 min-h-[280px]">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Your schedule, sorted</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Views your calendar and helps manage events.</p>
              </div>
              <div className="flex items-start gap-1.5 mt-2">
                <Image src="/aidy/aidy_purple_avatar.webp" alt="" width={20} height={20} className="h-5 w-5 rounded-sm shrink-0" />
                <div className="rounded-2xl rounded-bl-md px-3 py-1.5 text-[11px] leading-tight" style={{ background: "rgba(230,222,245,0.9)", color: DARK }}>
                  You have 4 events today. Next up at 9am.
                </div>
              </div>
              <div className="bento-cal-msgs flex-1 mt-1.5">
                <div className="bento-cal-inner flex flex-col">
                  <div className="bento-cal-item flex items-center gap-2 px-2.5 py-1.5" style={{ background: "rgba(69,133,197,0.1)", borderLeft: "3px solid rgb(69,133,197)" }}>
                    <span className="text-[11px] font-medium" style={{ color: DARK }}>9:00</span>
                    <span className="text-[11px]" style={{ color: MUTED }}>Team standup</span>
                  </div>
                  <div className="bento-cal-item flex items-center gap-2 px-2.5 py-1.5 mt-2" style={{ background: "rgba(179,96,166,0.1)", borderLeft: "3px solid rgb(179,96,166)" }}>
                    <span className="text-[11px] font-medium" style={{ color: DARK }}>11:30</span>
                    <span className="text-[11px]" style={{ color: MUTED }}>1:1 with Sarah</span>
                  </div>
                  <div className="cal-step cal-step-1">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-2">
                        <div className="bento-cal-item flex items-center gap-2 px-2.5 py-1.5" style={{ background: "rgba(240,83,42,0.1)", borderLeft: "3px solid rgb(240,83,42)" }}>
                          <span className="text-[11px] font-medium" style={{ color: DARK }}>14:00</span>
                          <span className="text-[11px]" style={{ color: MUTED }}>Client call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cal-step cal-step-2">
                    <div className="min-h-0 overflow-hidden">
                      <div className="pt-2">
                        <div className="bento-cal-item flex items-center gap-2 px-2.5 py-1.5" style={{ background: "rgba(69,133,197,0.1)", borderLeft: "3px solid rgb(69,133,197)" }}>
                          <span className="text-[11px] font-medium" style={{ color: DARK }}>16:30</span>
                          <span className="text-[11px]" style={{ color: MUTED }}>Design review</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Messaging */}
            <div className="bento-pos-messaging bento-card-custom flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <h3 className="font-satoshi text-base sm:text-lg font-bold" style={{ color: DARK }}>Chat on the go</h3>
                <p className="text-xs sm:text-sm" style={{ color: MUTED }}>Reach your bot from your favourite messenger.</p>
              </div>
              <div className="flex flex-col gap-2.5 mt-auto">
                <div className="flex items-center gap-3 rounded-xl pl-3 pr-4 py-3 bg-white border border-[rgba(57,37,102,0.1)]">
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center">
                    <Image src="/aidy/logo-telegram.svg" alt="Telegram" width={28} height={28} className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col min-w-0 flex-1 justify-center">
                    <span className="text-[11px] font-semibold font-satoshi" style={{ color: DARK }}>Telegram</span>
                    <span className="text-[10px] whitespace-nowrap" style={{ color: "rgba(57,37,102,0.5)" }}>Aidy: Don&apos;t forget your 2pm meeting</span>
                  </div>
                  <div className="w-2 h-2 rounded-full shrink-0 bg-[#4585C5]" />
                </div>
                <div className="flex items-center gap-3 rounded-xl pl-3 pr-4 py-3 bg-white border border-[rgba(57,37,102,0.1)]">
                  <Image src="/aidy/logo-whatsapp.svg" alt="WhatsApp" width={36} height={36} className="w-9 h-9 shrink-0" />
                  <div className="flex flex-col min-w-0 flex-1 justify-center">
                    <span className="text-[11px] font-semibold font-satoshi" style={{ color: DARK }}>WhatsApp</span>
                    <span className="text-[10px]" style={{ color: "rgba(57,37,102,0.5)" }}>Coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <GradientButton href="#signup">Get started for free</GradientButton>
        </div>
      </section>

      {/* ═══ SECURITY ═══ */}
      <section id="security" className="relative px-4 sm:px-8 lg:px-[120px] py-20 sm:py-[120px] overflow-hidden">
        {/* Cloud background */}
        <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
          <img alt="" className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[160vw] max-w-none object-cover animate-cloud-drift" loading="lazy" src="/aidy/aidy-clouds.webp" />
          <div className="absolute top-0 left-0 w-full h-[240px]" style={{ background: "linear-gradient(#fff 0%, transparent 100%)" }} />
          <div className="absolute bottom-0 left-0 w-full h-[120px]" style={{ background: "linear-gradient(0deg, #fff 0%, transparent 100%)" }} />
        </div>

        <div className="relative z-10 flex flex-col items-center w-full max-w-[1488px] mx-auto gap-12 sm:gap-20">
          <SectionHeader
            pill={<>
              <Image src="/aidy/icon-shield-blue.svg" alt="" width={16} height={16} />
              <span className="text-gradient-aidy text-sm" style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>Built for security</span>
            </>}
            title="Your data stays yours"
            subtitle="Every bot runs in complete isolation. No shared resources, no data mixing, no compromises."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full">
            {[
              { icon: "/aidy/icon-cube-gradient.svg", img: "/aidy/aidy_isolated.webp", title: "Complete isolation", desc: "Each user's bot runs in its own secure sandbox. Your data never touches anyone else's infrastructure." },
              { icon: "/aidy/icon-doc-check-gradient.svg", img: "/aidy/aidy_gdpr.webp", title: "AI with standards", desc: "Aidy runs on EU infrastructure and is built with strict privacy standards in mind." },
              { icon: "/aidy/icon-shield-gradient.svg", img: "/aidy/aidy_knight.webp", title: "Encryption everywhere", desc: "All data encrypted at rest and in transit. Your API keys and secrets are protected with industry-standard encryption." },
              { icon: "/aidy/icon-globe-lock-gradient.svg", img: "/aidy/aidy_security.webp", title: "Network security", desc: "Default-deny network policies. Your bot only connects to services you explicitly allow." },
            ].map((item) => (
              <div key={item.title} className="hp-card flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-10 lg:gap-16 !p-6 sm:!p-10">
                <div className="flex flex-col gap-6 sm:max-w-[420px]">
                  <div className="icon-box">
                    <Image src={item.icon} alt="" width={32} height={32} />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="font-satoshi text-[20px] sm:text-[24px] font-bold" style={{ color: DARK }}>{item.title}</h3>
                    <p className="font-satoshi text-sm sm:text-base leading-6" style={{ color: MUTED }}>{item.desc}</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center justify-center sm:w-[220px] sm:shrink-0">
                  <img alt="" className="max-w-full h-auto sm:max-h-[200px] lg:max-h-[190px]" loading="lazy" src={item.img} />
                </div>
              </div>
            ))}
          </div>

          <GradientButton href="#signup">Get started for free</GradientButton>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="px-4 sm:px-8 lg:px-[120px] py-20 sm:py-[120px]">
        <div className="flex flex-col items-center w-full max-w-[1488px] mx-auto gap-12 sm:gap-20">
          <div className="flex flex-col items-center gap-4">
            <GradientPill>
              <span className="text-gradient-aidy font-satoshi text-sm font-medium">Pricing</span>
            </GradientPill>
            <h2 className="font-satoshi font-bold text-center" style={{ fontSize: "clamp(28px, 4.5vw, 64px)", lineHeight: 1.21, color: DARK }}>
              Plans for everyone
            </h2>
            <p className="text-center max-w-[840px]" style={{ fontSize: 16, lineHeight: 1.5, color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>
              From individuals to enterprises. Everyone gets their own private bot.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-14 mt-2">
              <div className="flex items-center gap-[6px]">
                <GradientIcon d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" id="zap-grad2" />
                <span className="text-sm" style={{ color: DARK }}><strong>Standard</strong>: Fast responses</span>
              </div>
              <div className="flex items-center gap-[6px]">
                <GradientIcon d="M12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2Z" id="sparkle-grad2" />
                <span className="text-sm" style={{ color: DARK }}><strong>Advanced</strong>: Deep reasoning</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full items-start">
            {/* Free */}
            <div className="hp-card flex flex-col justify-between !p-6 sm:!p-8 lg:mt-[69px]">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-satoshi text-2xl sm:text-[28px] font-medium" style={{ color: DARK }}>Free</h3>
                      <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>For personal projects</p>
                    </div>
                    <p className="font-satoshi text-[40px] sm:text-[56px] font-bold leading-[1.35]" style={{ color: DARK }}>$0</p>
                  </div>
                  <img alt="" className="w-[80px] sm:w-[140px] lg:w-[102px] h-auto" src="/aidy/aidy_free.webp" />
                </div>
                <div className="flex flex-col gap-4">
                  {["Personal bot", "Pay-as-you-go credits", "Community support"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="gradient-bullet"><Image src="/aidy/icon-checkmark.svg" alt="" width={10} height={10} /></span>
                      <span className="font-satoshi text-sm sm:text-base font-medium" style={{ color: DARK }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <OutlineButton href="#signup" className="w-full justify-center mt-8 sm:mt-10">Get started for free</OutlineButton>
            </div>

            {/* Pro */}
            <div className="pricing-card-pro relative flex flex-col gap-8 sm:gap-10 !p-6 sm:!p-8 mt-4 lg:mt-0">
              <div className="absolute -top-[17px] left-1/2 -translate-x-1/2 z-10 rounded-[60px] px-5 py-2 text-sm font-bold text-white font-satoshi whitespace-nowrap" style={{ background: GRADIENT }}>
                Most popular
              </div>
              <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-satoshi text-2xl sm:text-[28px] font-medium" style={{ color: DARK }}>Pro</h3>
                      <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>For growing teams</p>
                    </div>
                    <p className="font-satoshi text-[40px] sm:text-[56px] font-bold leading-[1.35]" style={{ color: DARK }}>$9</p>
                  </div>
                  <img alt="" className="w-[80px] sm:w-[140px] lg:w-[102px] h-auto" src="/aidy/aidy_pro_v2.webp" />
                </div>
                <div className="flex flex-col gap-4">
                  {["Everything in Free", "Up to 10 members", "Priority support", "Individual bots per member", "Custom domains", "Shared credits", "Team admin dashboard"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="gradient-bullet"><Image src="/aidy/icon-checkmark.svg" alt="" width={10} height={10} /></span>
                      <span className="font-satoshi text-sm sm:text-base font-medium" style={{ color: DARK }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <GradientButton href="#signup" className="w-full justify-center relative z-10">Get started for free</GradientButton>
            </div>

            {/* Enterprise */}
            <div className="hp-card flex flex-col justify-between !p-6 sm:!p-8 lg:mt-[69px]">
              <div className="flex flex-col gap-6 sm:gap-8">
                <div className="flex items-start justify-between gap-2.5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-satoshi text-2xl sm:text-[28px] font-medium" style={{ color: DARK }}>Enterprise</h3>
                      <p className="text-sm" style={{ color: MUTED, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>For large organizations</p>
                    </div>
                    <p className="font-satoshi text-[32px] sm:text-[40px] font-bold leading-[1.35]" style={{ color: DARK }}>Contact us</p>
                  </div>
                  <img alt="" className="w-[80px] sm:w-[140px] lg:w-[102px] h-auto" src="/aidy/aidy_enterprise.webp" />
                </div>
                <div className="flex flex-col gap-3">
                  {["Unlimited members", "Volume discounts", "SSO / SAML", "Dedicated support", "Custom SLA"].map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <span className="gradient-bullet"><Image src="/aidy/icon-checkmark.svg" alt="" width={10} height={10} /></span>
                      <span className="text-sm sm:text-base" style={{ color: DARK, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <OutlineButton href="mailto:sales@aidy.bot" className="w-full justify-center mt-8 sm:mt-10">Contact sales</OutlineButton>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section id="faq" className="px-4 sm:px-8 lg:px-[120px] py-20 sm:py-[120px]">
        <div className="flex flex-col items-center w-full max-w-[1488px] mx-auto gap-12 sm:gap-20">
          <SectionHeader
            pill={<span className="text-gradient-aidy font-satoshi text-sm font-medium">FAQ</span>}
            title="Got questions?"
            subtitle="Ask Aidy anything about the platform, pricing, or security."
          />
          <FAQChat />
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section id="signup" className="px-4 sm:px-8 lg:px-[120px] pt-10 sm:pt-20 pb-16 sm:pb-[120px]">
        <div className="w-full max-w-[1488px] mx-auto">
          <div className="relative w-full rounded-2xl bg-white overflow-hidden" style={{ padding: "clamp(32px, 4vw, 64px)" }}>
            {/* Cloud bg */}
            <div className="pointer-events-none absolute inset-0 select-none overflow-hidden" aria-hidden="true">
              <img alt="" className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-[160vw] max-w-none object-cover animate-cloud-drift" loading="lazy" src="/aidy/aidy-clouds.webp" />
            </div>
            <img alt="" aria-hidden="true" className="pointer-events-none absolute select-none hidden lg:block" loading="lazy" src="/aidy/aidy_group_large.webp" style={{ right: "5%", bottom: 0, width: "50%", objectFit: "contain", objectPosition: "center bottom", transform: "translateY(25%)" }} />

            <div className="relative z-10 flex flex-col items-center lg:items-stretch gap-6 lg:gap-10 sm:pt-8 lg:pt-0">
              <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-4">
                <h2 className="font-satoshi font-bold text-center lg:text-left text-[24px] sm:text-[40px] lg:text-[56px]" style={{ lineHeight: 1.21, color: DARK }}>
                  Ready to get started?
                </h2>
                <p className="font-satoshi font-medium text-center lg:text-left" style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(57,37,102,0.7)" }}>
                  Start free. Upgrade any time.
                </p>
              </div>
              <div className="max-sm:w-full lg:self-start">
                <SignupForm />
              </div>
            </div>

            <img alt="" className="lg:hidden relative z-10 w-full mt-16 sm:mt-32 -mb-[25%] sm:-mb-[16%] max-w-[500px] sm:max-w-none object-contain mx-auto" loading="lazy" src="/aidy/aidy_group_large.webp" style={{ transform: "scale(1.3)", transformOrigin: "center bottom" }} />
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="relative px-4 sm:px-8 lg:px-[120px] pb-8 sm:pb-14">
        <div className="w-full max-w-[1488px] mx-auto flex flex-col gap-8 sm:gap-14">
          <div className="h-px w-full" style={{ background: "rgba(0,26,91,0.2)" }} />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <Link href="/template1" className="flex items-center">
                <Image src="/aidy/aidy-logo.webp" alt="Aidy" width={96} height={24} className="h-6 w-auto" />
              </Link>
              <div className="hidden sm:block h-6 w-px" style={{ background: "rgba(0,26,91,0.2)" }} />
              <div className="flex items-center gap-5">
                <Link href="#" className="text-sm text-black hover:opacity-70 transition-opacity" style={{ fontSize: 14, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>Terms</Link>
                <Link href="#" className="text-sm text-black hover:opacity-70 transition-opacity" style={{ fontSize: 14, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>Privacy</Link>
                <Link href="mailto:support@aidy.bot" className="text-sm text-black hover:opacity-70 transition-opacity" style={{ fontSize: 14, fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>Support</Link>
              </div>
            </div>
            <p className="text-xs" style={{ fontSize: 12, color: "rgba(0,0,0,0.6)", fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}>
              &copy; 2026 StarApps BV
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
