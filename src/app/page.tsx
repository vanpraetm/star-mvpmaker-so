import {
  Mic,
  LayoutTemplate,
  MapPin,
  FileText,
  Settings,
  WifiOff,
  QrCode,
  Check,

  Clock3,
  User,
  AlertTriangle,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)]">
      {/* Header */}
      <header className="flex items-center justify-between h-[72px] px-5 sm:px-12 border-b border-[#1A1A1A]">
        <div className="flex items-center gap-2.5">
          <img src="/star-logo.png" alt="Star" className="h-8" />
          <span className="font-[family-name:var(--font-anton)] text-[22px] text-white tracking-[0.44px]">
            STAR
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="/early-access" className="text-[#A1A1AA] text-[15px] font-medium">
            Inloggen
          </a>
          <a
            href="/early-access"
            className="cta-magnetic bg-[#DC2626] text-white text-sm font-semibold h-10 px-5 sm:px-6 rounded-full flex items-center justify-center"
          >
            Start nu
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center pt-16 pb-12 px-5 sm:pt-20 sm:pb-16 sm:px-12">
        <div className="hero-stagger hero-stagger-1 flex items-center gap-2 border border-[#333333] rounded-full px-4 py-2">
          <div className="w-2 h-2 bg-[#E53E3E] rounded-full" />
          <span className="text-[#A1A1AA] text-[13px] font-medium">
            STAR — Safety Task Assessment & Review
          </span>
        </div>
        <h1 className="hero-stagger hero-stagger-2 font-[family-name:var(--font-anton)] text-5xl sm:text-[80px] text-white text-center leading-[1.05] tracking-[-1.6px] max-w-[900px] mt-6 sm:mt-8">
          Veiligheidschecks die w&#233;l worden ingevuld.
        </h1>
        <p className="hero-stagger hero-stagger-3 text-[#A1A1AA] text-base sm:text-xl leading-[1.6] text-center max-w-[680px] mt-6 sm:mt-8">
          Star laat je team snel veiligheidschecks invullen
          op de werf via QR-code en stem. Jouw inspectielogboek wordt
          automatisch opgebouwd waardoor je altijd klaar bent voor controle.
        </p>

        {/* Phone Mockup */}
        <div className="hero-stagger hero-stagger-4 flex items-center justify-center pt-10 w-full max-w-[1100px]">
          <div className="w-[280px] h-[510px] sm:w-[320px] sm:h-[580px] bg-white rounded-[32px] overflow-hidden flex flex-col p-5 gap-2.5">
            {/* Logo + Steps */}
            <div className="flex flex-col gap-2.5 w-full">
              <div className="flex items-center gap-2.5">
                <img src="/star-logoblack.png" alt="Star" className="h-7" />
                <span className="font-[family-name:var(--font-anton)] text-[22px] text-[#111111]">
                  STAR
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1.5 bg-[#111111] rounded-full px-2.5 py-1">
                  <div className="w-1.5 h-1.5 bg-[#E53E3E] rounded-full" />
                  <span className="text-white text-[10px] font-semibold">STOP</span>
                </div>
                <div className="w-1.5 h-1.5 bg-[#D4D4D8] rounded-full" />
                <span className="text-[#A1A1AA] text-[10px] font-medium">THINK</span>
                <div className="w-1.5 h-1.5 bg-[#D4D4D8] rounded-full" />
                <span className="text-[#A1A1AA] text-[10px] font-medium">ACT</span>
              </div>
            </div>
            {/* Spacer */}
            <div className="h-[67px] w-full" />
            {/* Question */}
            <div className="flex flex-col gap-2.5 w-full px-1">
              <span className="text-[#111111] text-lg font-bold leading-[1.35]">
                Heb ik alle info om mijn taak veilig uit te voeren?
              </span>
              <div className="flex gap-2.5 pt-2 w-full">
                <div className="flex items-center justify-center gap-1.5 bg-[#111111] rounded-xl py-3 flex-1">
                  <Check className="w-4 h-4 text-white" />
                  <span className="text-white text-sm font-semibold">Ja</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 bg-white border border-[#E5E7EB] rounded-xl py-3 flex-1">
                  <span className="text-[#111111] text-sm">×</span>
                  <span className="text-[#111111] text-sm font-semibold">Nee</span>
                </div>
              </div>
            </div>
            {/* Voice Bar */}
            <div className="flex items-center justify-between h-[52px] bg-white border border-[#E5E7EB] rounded-xl px-4 w-full mt-3 shadow-sm">
              <Mic className="w-[18px] h-[18px] text-[#E53E3E]" />
              <span className="text-[#A1A1AA] text-sm">Tap to speak...</span>
            </div>
            {/* Tags */}
            <div className="flex gap-2 w-full">
              <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                <MapPin className="w-3 h-3 text-[#A1A1AA]" />
                <span className="text-[#71717A] text-[10px] font-medium">GPS gelogd</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                <Clock3 className="w-3 h-3 text-[#A1A1AA]" />
                <span className="text-[#71717A] text-[10px] font-medium">14:32</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#F5F5F5] rounded-full px-2 py-1">
                <User className="w-3 h-3 text-[#A1A1AA]" />
                <span className="text-[#71717A] text-[10px] font-medium">Jan D.</span>
              </div>
            </div>
            {/* Progress */}
            <div className="w-full pt-3">
              <div className="w-full bg-[#F0F0F0] rounded-sm h-1.5">
                <div className="progress-animate bg-[#E53E3E] rounded-sm h-1.5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="flex flex-col items-center py-16 px-5 sm:py-20 sm:px-12">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          HOE HET WERKT
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white text-center leading-[1.1] max-w-[500px] mt-4">
          Drie stappen.
          <br />
          Nul papierwerk.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              num: 1,
              title: "Scan de QR code",
              visual: (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-20 h-20 bg-zinc-100 rounded-2xl flex items-center justify-center">
                    <QrCode className="w-10 h-10 text-zinc-800" />
                  </div>
                  <span className="text-sm font-medium text-zinc-700">Station A-12</span>
                  <div className="flex items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-xs font-medium text-zinc-500">
                    <MapPin className="w-3.5 h-3.5" />
                    GPS automatisch gelogd
                  </div>
                </div>
              ),
            },
            {
              num: 2,
              title: "Beantwoord de vragenlijst",
              visual: (
                <div className="flex flex-col gap-3 w-full">
                  <div className="text-sm font-semibold text-zinc-800">
                    Zijn alle uitgangen vrij?
                  </div>
                  <div className="rounded-xl bg-red-50 p-3">
                    <div className="mb-2 text-xs text-zinc-400">Spraakantwoord</div>
                    <div className="flex items-center gap-2">
                      <Mic className="w-4 h-4 text-red-500" />
                      <div className="flex items-end gap-[2px]">
                        {[12, 18, 10, 20, 14, 22, 11, 16].map((h, j) => (
                          <div
                            key={j}
                            className="wave-bar w-[3px] rounded-full bg-red-500"
                            style={{ height: `${h}px`, animationDelay: `${j * 0.15}s` }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-red-500 ml-1">Opnemen...</span>
                    </div>
                  </div>
                </div>
              ),
            },
            {
              num: 3,
              title: "Volg alles op",
              visual: (
                <div className="flex flex-col gap-2 w-full">
                  {[
                    { label: "Medewerker", value: "Jan D." },
                    { label: "Locatie", value: "Station A-12" },
                    { label: "Tijd", value: "14:32" },
                    { label: "Status", value: "Afgerond" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-1.5 border-b border-zinc-100 last:border-0">
                      <span className="text-xs text-zinc-400">{row.label}</span>
                      <span className="text-xs font-medium text-zinc-700">{row.value}</span>
                    </div>
                  ))}
                </div>
              ),
            },
            {
              num: 4,
              title: "Rapporteer bij incidenten",
              visual: (
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                    <span className="text-xs font-semibold text-red-600">Bijna-ongeval</span>
                  </div>
                  <div className="text-sm font-semibold text-zinc-800">
                    Stelling niet vastgezet
                  </div>
                  <div className="text-xs text-zinc-400 leading-[1.5]">
                    &quot;De stelling op niveau 2 was niet geborgd. Meteen gemeld en afgezet.&quot;
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-zinc-200 flex items-center justify-center">
                        <User className="w-3 h-3 text-zinc-500" />
                      </div>
                      <span className="text-[11px] font-medium text-zinc-500">Jan D.</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">Vandaag, 14:47</span>
                  </div>
                </div>
              ),
            },
          ].map((step) => (
            <div
              key={step.num}
              className="group flex flex-row rounded-2xl border border-[#222222] bg-[#111111] p-5 sm:p-7 gap-5 sm:gap-6"
            >
              <div className="flex w-1/3 shrink-0 flex-col gap-2">
                <span className="font-[family-name:var(--font-anton)] text-[32px] text-white">
                  {step.num}
                </span>
                <h3 className="text-sm font-medium text-white">{step.title}</h3>
              </div>
              <div className="flex w-2/3 items-center justify-center rounded-xl bg-white p-5 sm:p-6">
                <div className="w-full">{step.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col items-center py-16 px-5 sm:py-20 sm:px-12 bg-[#0F0F0F]">
        <span className="text-white text-xs font-semibold tracking-[1.8px]">
          FUNCTIES
        </span>
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[44px] text-white text-center leading-[1.1] max-w-[600px] mt-4">
          Gebouwd voor de werf.
          <br />
          Beheerd vanuit kantoor.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full max-w-[1100px]">
          {[
            {
              icon: <LayoutTemplate className="w-7 h-7 text-[#E53E3E]" />,
              title: "Template Bibliotheek",
              desc: "Kies uit kant-en-klare STAR-templates of maak je eigen. Zet ze in seconden live op elke locatie.",
            },
            {
              icon: <MapPin className="w-7 h-7 text-[#E53E3E]" />,
              title: "Automatische Locatie",
              desc: "GPS-co\u00F6rdinaten worden automatisch vastgelegd. Weet precies waar elke check is uitgevoerd.",
            },
            {
              icon: <FileText className="w-7 h-7 text-[#E53E3E]" />,
              title: "Directe Rapporten",
              desc: "Elke STAR wordt gelogd en is exporteerbaar. CSV, PDF — klaar voor audits en inspecties.",
            },
            {
              icon: <Mic className="w-7 h-7 text-[#E53E3E]" />,
              title: "Spraakgestuurd",
              desc: "Medewerkers spreken hun antwoorden in. Geen getik met vuile handschoenen. Speech-to-text doet de rest.",
            },
            {
              icon: <Settings className="w-7 h-7 text-[#E53E3E]" />,
              title: "Admin Dashboard",
              desc: "Beheer templates, koppel ze aan locaties en monitor naleving. Alles vanuit \u00E9\u00E9n centraal dashboard.",
            },
            {
              icon: <WifiOff className="w-7 h-7 text-[#E53E3E]" />,
              title: "Werkt Offline",
              desc: "Geen bereik op de werf? Geen probleem. Checks worden automatisch gesynchroniseerd zodra er weer verbinding is.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="card-lift flex flex-col gap-4 bg-[#111111] border border-[#222222] rounded-2xl p-6 sm:p-7"
            >
              <div className="card-lift-icon w-fit">{feat.icon}</div>
              <span className="text-white text-[17px] font-bold">
                {feat.title}
              </span>
              <p className="text-[#71717A] text-sm leading-[1.6]">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="flex flex-col items-center py-20 px-5 sm:py-24 sm:px-12 bg-[#0F0F0F]">
        <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-[48px] text-white text-center leading-[1.1] max-w-[600px]">
          Veiligheid begint voor
          <br />
          de eerste stap.
        </h2>
        <a
          href="/early-access"
          className="cta-magnetic bg-[#DC2626] text-white text-base font-semibold h-[52px] px-9 rounded-full flex items-center justify-center mt-6 sm:mt-8"
        >
          Start nu — het is gratis
        </a>
      </section>

      {/* Divider */}
      <div className="h-px bg-[#222222] w-full" />

      {/* Footer */}
      <footer className="flex items-center justify-between h-[72px] px-5 sm:px-12">
        <div className="flex items-center gap-2">
          <img src="/star-logo.png" alt="Star" className="h-6" />
          <span className="font-[family-name:var(--font-anton)] text-base text-white tracking-[0.32px]">
            STAR
          </span>
        </div>
        <span className="text-[#52525B] text-[13px]">
          © 2026 STAR. All rights reserved.
        </span>
      </footer>
    </div>
  );
}
