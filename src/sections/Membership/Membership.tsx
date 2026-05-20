"use client";

import { useEffect, useRef, useState } from "react";

const tiers = [
  {
    id: "pearl",
    eyebrow: "Pearl Membership",
    tagline: "Every player begins with a table.",
    duration: "1 Year Membership",
    price: "₹1,000",
    benefits: [
      "Weekly training sessions",
      "IMA membership certificate",
      "Community events and gatherings",
      "Beginner curriculum access",
    ],
    cta: "Buy This Tier",
    accentRgb: "198,168,122",
    panelBorder: "rgba(198,168,122,0.38)",
    dragon: { symbol: "白", label: "White Dragon" },
    tileTheme: {
      bg: "rgba(255,253,248,0.97)",
      border: "rgba(198,168,122,0.55)",
      text: "rgba(138,106,74,0.88)",
      shadow: "rgba(110,79,47,0.10)",
    },
  },
  {
    id: "ruby",
    eyebrow: "Ruby Membership",
    tagline: "For those who return to the table.",
    duration: "5 Year Membership",
    price: "₹4,000",
    benefits: [
      "All Pearl benefits",
      "Priority event registration",
      "Tournament participation rights",
      "Strategy workshops and masterclasses",
      "Ruby member recognition",
    ],
    cta: "Buy This Tier",
    accentRgb: "124,31,45",
    panelBorder: "rgba(124,31,45,0.26)",
    dragon: { symbol: "中", label: "Red Dragon" },
    tileTheme: {
      bg: "rgba(253,248,246,0.97)",
      border: "rgba(124,31,45,0.38)",
      text: "rgba(124,31,45,0.82)",
      shadow: "rgba(124,31,45,0.08)",
    },
  },
  {
    id: "jade",
    eyebrow: "Jade Membership",
    tagline: "For those helping shape the culture.",
    duration: "Lifetime Membership",
    price: "₹10,000",
    benefits: [
      "All Ruby benefits",
      "Lifetime IMA recognition",
      "Cultural heritage committee access",
      "Invitations to founding circle events",
      "Legacy member status",
    ],
    cta: "Buy This Tier",
    accentRgb: "47,93,80",
    panelBorder: "rgba(47,93,80,0.26)",
    dragon: { symbol: "發", label: "Green Dragon" },
    tileTheme: {
      bg: "rgba(247,252,250,0.97)",
      border: "rgba(47,93,80,0.38)",
      text: "rgba(47,93,80,0.82)",
      shadow: "rgba(47,93,80,0.08)",
    },
  },
];

type Tier = typeof tiers[number];

function TierPanel({ tier }: { tier: Tier }) {
  return (
    <div
      className="overflow-hidden rounded-[0.75rem]"
      style={{
        border: `1px solid ${tier.panelBorder}`,
        background:
          "linear-gradient(180deg,rgba(252,248,241,0.88) 0%,rgba(248,244,234,0.72) 100%)",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.42), 0 4px 24px rgba(110,79,47,0.08)",
      }}
    >
      {/* Tier accent cap */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg,rgba(${tier.accentRgb},0) 0%,rgba(${tier.accentRgb},0.82) 18%,rgba(${tier.accentRgb},0.82) 82%,rgba(${tier.accentRgb},0) 100%)`,
        }}
      />

      <div className="flex flex-col items-center px-7 pb-8 pt-7 text-center">

        {/* Single iconic dragon tile */}
        <div className="mb-7">
          <div
            style={{
              width: 54,
              height: 76,
              borderRadius: 7,
              background: tier.tileTheme.bg,
              border: `1.5px solid ${tier.tileTheme.border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `inset 0 0 0 3px rgba(255,255,255,0.62), 0 6px 20px ${tier.tileTheme.shadow}`,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 28,
                lineHeight: 1,
                color: tier.tileTheme.text,
                userSelect: "none",
              }}
            >
              {tier.dragon.symbol}
            </span>
          </div>
        </div>

        {/* Tier name */}
        <p
          className="text-[0.60rem] uppercase tracking-[0.34em]"
          style={{ color: `rgba(${tier.accentRgb},0.72)` }}
        >
          {tier.eyebrow}
        </p>

        {/* Tagline */}
        <p
          className="mt-3 max-w-[22ch] text-[0.98rem] leading-[1.60] text-[#2d2926]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tier.tagline}
        </p>

        {/* Divider */}
        <div
          className="my-5 h-px w-8"
          style={{ background: `rgba(${tier.accentRgb},0.24)` }}
        />

        {/* Duration */}
        <p className="text-[0.58rem] uppercase tracking-[0.28em] text-[#8a6a4a]">
          {tier.duration}
        </p>

        {/* Price */}
        <p
          className="mt-1.5 text-[1.85rem] leading-tight text-[#2d2926]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tier.price}
        </p>

        {/* Full-width rule before benefits */}
        <div className="my-5 h-px w-full bg-[rgba(198,168,122,0.14)]" />

        {/* Benefits */}
        <ul className="flex w-full flex-col gap-2.5 text-left">
          {tier.benefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2.5 text-[0.79rem] leading-[1.55] text-[#4d3a2e]"
            >
              <span
                className="mt-[0.44em] h-px w-3.5 shrink-0"
                style={{ background: `rgba(${tier.accentRgb},0.40)` }}
              />
              {benefit}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="mt-7 flex w-full items-center justify-center rounded-full border border-[#7c1f2d] bg-[linear-gradient(180deg,#8b2736,#6d1b28)] py-3 text-[0.70rem] uppercase tracking-[0.22em] text-[#f5efe4] shadow-[0_6px_18px_rgba(124,31,45,0.18)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_8px_24px_rgba(124,31,45,0.24)]"
        >
          {tier.cta}
        </a>
      </div>
    </div>
  );
}

export default function Membership() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    // Find the card whose left edge is closest to the current scrollLeft.
    // When a snap point is settled, scrollLeft === that card's offsetLeft
    // (browser accounts for scroll-padding which mirrors padding-left CSS class).
    const updateActive = () => {
      const { scrollLeft } = container;
      const cards = Array.from(
        container.querySelectorAll("[data-card]")
      ) as HTMLElement[];
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((el, i) => {
        const dist = Math.abs(el.offsetLeft - scrollLeft);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };

    // scrollend fires after snap settles — Safari 17.4+, Chrome 114+
    // Debounced scroll is the fallback for older mobile browsers
    let debounceTimer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(updateActive, 120);
    };

    container.addEventListener("scrollend", updateActive);
    container.addEventListener("scroll", onScroll, { passive: true });

    // RAF polling fallback: some mobile browsers don't reliably fire scroll
    // events the way desktop does. Poll scrollLeft and update when it changes.
    let rafId: number | null = null
    let lastLeft = container.scrollLeft
    const poll = () => {
      const cur = container.scrollLeft
      if (cur !== lastLeft) {
        lastLeft = cur
        updateActive()
      }
      rafId = requestAnimationFrame(poll)
    }
    rafId = requestAnimationFrame(poll)

    return () => {
      clearTimeout(debounceTimer);
      container.removeEventListener("scrollend", updateActive);
      container.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId)
    };
  }, []);

  const scrollToCard = (index: number) => {
    const cards = carouselRef.current?.querySelectorAll("[data-card]");
    (cards?.[index] as HTMLElement | undefined)?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  return (
    <section id="membership" className="relative overflow-hidden bg-[#edebda]">

      {/* Soft blend from Trainers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
        style={{ background: "linear-gradient(180deg,#f5efe4 0%,transparent 100%)" }}
      />

      {/* Ambient atmosphere */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-4rem] top-[12%] h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgba(198,168,122,0.06),rgba(198,168,122,0)_60%)]" />
        <div className="absolute right-[-4rem] bottom-[10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(47,93,80,0.05),rgba(47,93,80,0)_58%)]" />
        <div className="absolute left-[38%] top-[38%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(124,31,45,0.03),rgba(124,31,45,0)_55%)]" />
      </div>

      {/* ── SECTION INTRO ── */}
      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-20 sm:px-8 lg:px-16 lg:pb-16 lg:pt-24">
        <div className="mx-auto max-w-2xl text-center">

          {/* Ornamental divider */}
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-10">
            <div className="h-px w-10 bg-[linear-gradient(90deg,rgba(198,168,122,0),rgba(198,168,122,0.7))]" />
            <div className="h-[3px] w-[3px] rounded-full bg-[#c6a87a]" />
            <div className="h-px w-10 bg-[linear-gradient(90deg,rgba(198,168,122,0.7),rgba(198,168,122,0))]" />
          </div>

          {/* Eyebrow */}
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.38em] text-[#7c1f2d] lg:text-[0.68rem] lg:tracking-[0.42em]">
            Membership
          </p>

          {/* Heading — single line on desktop */}
          <h2 className="text-[2.2rem] leading-[1.05] text-[#2d2926] sm:text-[2.8rem] sm:leading-[1.0] lg:whitespace-nowrap lg:text-[3.4rem] lg:leading-[0.95]">
            Choose Your Membership
          </h2>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-[48ch] text-[0.96rem] leading-[1.88] text-[#5d4d40] lg:mt-8 lg:text-[1.04rem] lg:leading-[1.92]">
            Three ways to gather, learn and belong within the Indian Mahjong Association.
          </p>
        </div>
      </div>

      {/* ── MOBILE: SNAP CAROUSEL ── */}
      <div className="lg:hidden pb-14 pt-2">
        <p className="mb-5 text-center text-[0.58rem] uppercase tracking-[0.28em] text-[#8a6a4a]/50">
          Swipe to explore
        </p>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory overflow-x-auto gap-4 px-6 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: "none" }}
        >
          {tiers.map((tier, i) => (
            <div
              key={tier.id}
              data-card=""
              data-index={i}
              className="flex-none w-[82vw] snap-start sm:w-[66vw]"
            >
              <TierPanel tier={tier} />
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-7 flex justify-center gap-2.5">
          {tiers.map((tier, i) => (
            <button
              key={tier.id}
              onClick={() => scrollToCard(i)}
              aria-label={tier.eyebrow}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#c6a87a]" : "w-1.5 bg-[#c6a87a]/28"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── DESKTOP: THREE PANEL GRID ── */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-16">
          <div className="grid grid-cols-3 gap-8 xl:gap-10">
            {tiers.map((tier) => (
              <TierPanel key={tier.id} tier={tier} />
            ))}
          </div>
        </div>
      </div>

      {/* ── SECTION BOTTOM TRANSITION ── */}
      <div aria-hidden="true" className="pointer-events-none pb-8 pt-2 lg:pb-10">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
          <div className="h-px bg-[linear-gradient(90deg,rgba(198,168,122,0),rgba(198,168,122,0.44)_22%,rgba(198,168,122,0.44)_78%,rgba(198,168,122,0))]" />
        </div>
      </div>

    </section>
  );
}
