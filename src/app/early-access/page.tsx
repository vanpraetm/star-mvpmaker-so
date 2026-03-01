"use client";

import { KeyRound, Mail } from "lucide-react";
import { useState } from "react";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [emailError, setEmailError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [codeLoading, setCodeLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);
  const [codeSuccess, setCodeSuccess] = useState(false);

  async function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEmailError("");
    setEmailLoading(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setEmailError(data.error);
        return;
      }

      setEmailSuccess(true);
    } catch {
      setEmailError("Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setEmailLoading(false);
    }
  }

  async function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCodeError("");
    setCodeLoading(true);

    try {
      const res = await fetch("/api/early-access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setCodeError(data.error);
        return;
      }

      setCodeSuccess(true);
    } catch {
      setCodeError("Er ging iets mis. Probeer het later opnieuw.");
    } finally {
      setCodeLoading(false);
    }
  }

  if (emailSuccess) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] flex items-center justify-center px-5">
        <div className="flex flex-col items-center w-full max-w-[400px]">
          <img src="/star-logo.png" alt="Star" className="h-12" />
          <span className="font-[family-name:var(--font-anton)] text-[28px] text-white tracking-[0.56px] mt-3">
            STAR
          </span>
          <h1 className="text-white text-xl font-bold mt-8 text-center">
            Bedankt!
          </h1>
          <p className="text-[#71717A] text-[15px] mt-2 text-center">
            We nemen snel contact met je op via {email}.
          </p>
          <a
            href="/"
            className="text-[#52525B] text-sm mt-8"
          >
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  if (codeSuccess) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] flex items-center justify-center px-5">
        <div className="flex flex-col items-center w-full max-w-[400px]">
          <img src="/star-logo.png" alt="Star" className="h-12" />
          <span className="font-[family-name:var(--font-anton)] text-[28px] text-white tracking-[0.56px] mt-3">
            STAR
          </span>
          <div className="fist-pop text-5xl mt-8">&#x1F44A;</div>
          <h1 className="text-white text-xl font-bold mt-4 text-center">
            Je bent binnen!
          </h1>
          <a
            href="/"
            className="text-[#52525B] text-sm mt-8"
          >
            Terug naar home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] font-[family-name:var(--font-inter)] flex items-center justify-center px-5">
      <div className="flex flex-col items-center w-full max-w-[400px]">
        {/* Logo */}
        <img src="/star-logo.png" alt="Star" className="h-12" />
        <span className="font-[family-name:var(--font-anton)] text-[28px] text-white tracking-[0.56px] mt-3">
          STAR
        </span>

        {/* Section 1: Vraag early access aan */}
        <h1 className="text-white text-xl font-bold mt-8 text-center">
          Vraag early access aan
        </h1>
        <p className="text-[#71717A] text-[15px] mt-2 text-center">
          Laat je e-mailadres achter en we nemen contact met je op.
        </p>

        <form onSubmit={handleEmailSubmit} className="flex flex-col gap-4 w-full mt-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#A1A1AA] text-sm">E-mailadres</label>
            <div className="flex items-center gap-3 bg-[#18181B] border border-[#333333] rounded-xl h-12 px-4">
              <Mail className="w-[18px] h-[18px] text-[#52525B]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Je e-mailadres"
                className="bg-transparent text-white text-sm placeholder:text-[#52525B] outline-none flex-1"
              />
            </div>
          </div>

          {emailError && (
            <p className="text-[#DC2626] text-sm text-center">{emailError}</p>
          )}

          <button
            type="submit"
            disabled={emailLoading}
            className="w-full bg-white text-[#0A0A0A] text-base font-semibold h-12 rounded-full mt-2 cursor-pointer disabled:opacity-50"
          >
            {emailLoading ? "Even geduld..." : "Vraag toegang aan"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 w-full mt-10">
          <div className="flex-1 h-px bg-[#333333]" />
          <span className="text-[#52525B] text-sm">of</span>
          <div className="flex-1 h-px bg-[#333333]" />
        </div>

        {/* Section 2: Heb je al een code? */}
        <h2 className="text-white text-lg font-bold mt-8 text-center">
          Heb je al een code?
        </h2>

        <form onSubmit={handleCodeSubmit} className="flex flex-col gap-4 w-full mt-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#A1A1AA] text-sm">Toegangscode</label>
            <div className="flex items-center gap-3 bg-[#18181B] border border-[#333333] rounded-xl h-12 px-4">
              <KeyRound className="w-[18px] h-[18px] text-[#52525B]" />
              <input
                type="text"
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Je toegangscode"
                className="bg-transparent text-white text-sm placeholder:text-[#52525B] outline-none flex-1"
              />
            </div>
          </div>

          {codeError && (
            <p className="text-[#DC2626] text-sm text-center">{codeError}</p>
          )}

          <button
            type="submit"
            disabled={codeLoading}
            className="w-full bg-transparent text-white text-base font-semibold h-12 rounded-full border border-[#333333] cursor-pointer disabled:opacity-50"
          >
            {codeLoading ? "Even geduld..." : "Unlock STAR"}
          </button>
        </form>

        {/* Back */}
        <a
          href="/"
          className="text-[#52525B] text-sm mt-8 mb-8"
        >
          Terug naar home
        </a>
      </div>
    </div>
  );
}
