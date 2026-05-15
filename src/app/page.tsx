import {
  Activity,
  Stethoscope,
  Scale,
  Building2,
  Brain,
  Calculator,
  Smile,
  ArrowRight,
  Shield,
  Globe,
  Lock,
} from "lucide-react";
import Link from "next/link";
import { verticals, verticalOrder } from "./verticals";
import type { ReactNode } from "react";

const icons: Record<string, ReactNode> = {
  Activity: <Activity className="w-6 h-6" />,
  Stethoscope: <Stethoscope className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  Calculator: <Calculator className="w-6 h-6" />,
  Smile: <Smile className="w-6 h-6" />,
};

export default function AidyAlternativesHub() {
  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <span className="text-zinc-900 text-lg font-bold tracking-tight">
            Aidy
          </span>
          <a
            href="https://aidy.bot"
            className="text-zinc-400 text-sm hover:text-zinc-600 transition-colors"
          >
            Naar aidy.bot
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Gradient blobs */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl bg-blue-600"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.03] blur-3xl bg-violet-600"
        />

        <div className="relative max-w-5xl mx-auto px-5 pt-20 pb-14 sm:pt-28 sm:pb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-zinc-400 mb-5">
            Aidy voor vrije beroepen
          </p>
          <h1 className="text-zinc-900 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl">
            Jouw AI-assistent.
            <br />
            Gebouwd voor jouw praktijk.
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg mt-6 max-w-xl leading-relaxed">
            Elk vrij beroep heeft een specifiek administratieprobleem. Aidy lost
            het op via WhatsApp, met Europese hosting en GDPR-compliance ingebouwd.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="max-w-5xl mx-auto px-5 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {verticalOrder.map((key) => {
            const v = verticals[key];
            return (
              <Link
                key={v.id}
                href={`/${v.id}`}
                className="group relative rounded-2xl border border-zinc-200 bg-white p-7 sm:p-8 transition-all duration-200 hover:border-zinc-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${v.accentBg} ${v.accentBorder} border flex items-center justify-center ${v.accentColor} mb-5 transition-transform duration-200 group-hover:scale-110`}
                >
                  {icons[v.iconName]}
                </div>
                <h2 className="text-zinc-900 text-xl font-bold mb-2">
                  {v.label}
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {v.subheadline}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900 group-hover:gap-3 transition-all duration-200">
                  Bekijk landing page
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-zinc-100 bg-zinc-50/80">
        <div className="max-w-5xl mx-auto px-5 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 text-zinc-500">
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600">
                <Shield className="w-4 h-4" />
              </div>
              GDPR-compliant
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600">
                <Globe className="w-4 h-4" />
              </div>
              Europese hosting
            </div>
            <div className="flex items-center gap-2.5 text-sm">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-600">
                <Lock className="w-4 h-4" />
              </div>
              Data-isolatie per gebruiker
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100">
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-5">
          <span className="text-zinc-900 text-sm font-semibold">Aidy</span>
          <span className="text-zinc-400 text-xs">
            &copy; 2026 StarApps BV
          </span>
        </div>
      </footer>
    </div>
  );
}
