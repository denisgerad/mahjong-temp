import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* ── 1. ATMOSPHERIC BACKGROUND ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-44 bg-[linear-gradient(180deg,rgba(255,252,246,0.94),transparent)]" />
        <div className="absolute left-[-12rem] top-[4%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(124,31,45,0.08),rgba(124,31,45,0)_64%)]" />
        <div className="absolute right-[-4rem] top-[10%] h-[50rem] w-[50rem] rounded-full bg-[radial-gradient(circle,rgba(198,168,122,0.07),rgba(198,168,122,0.02)_50%,rgba(198,168,122,0)_70%)]" />
      </div>

      {/* ── 2. PERIMETER FRAME ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-5 sm:inset-7 lg:inset-9">
        <div className="absolute inset-0 border border-[#c6a87a]/14" />
        <div className="absolute left-1/2 top-0 h-7 w-20 -translate-x-1/2 rounded-b-full border-b border-x border-[#c6a87a]/28" />
        <div className="absolute bottom-0 left-1/2 h-5 w-14 -translate-x-1/2 rounded-t-full border-t border-x border-[#c6a87a]/20" />
        <div className="absolute bottom-14 left-7 top-14 w-px bg-[linear-gradient(180deg,transparent,rgba(47,93,80,0.22)_18%,rgba(47,93,80,0.22)_82%,transparent)]" />
        <div className="absolute bottom-14 right-7 top-14 w-px bg-[linear-gradient(180deg,transparent,rgba(198,168,122,0.30)_18%,rgba(198,168,122,0.30)_82%,transparent)]" />
      </div>

      {/* ── 3. MAIN GRID ── */}
      {/*
        Mobile:   single column, content-height (no min-h)
        Desktop:  two columns, full viewport height
      */}
      <div className="relative mx-auto grid max-w-7xl items-center px-6 sm:px-8 lg:min-h-[calc(100vh-6rem)] lg:grid-cols-[1.08fr_0.92fr] lg:px-16">

        {/* LEFT — Editorial text */}
        <div className="relative z-10 flex flex-col justify-center pt-10 pb-6 sm:pt-14 sm:pb-8 lg:py-0">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.38em] text-[#7c1f2d] lg:mb-10 lg:text-[0.68rem] lg:tracking-[0.42em]">
            <span className="h-px w-8 bg-[linear-gradient(90deg,rgba(198,168,122,0.82),rgba(198,168,122,0))] lg:w-10" />
            <span>Since 1999</span>
          </div>

          {/* Headline — scaled for mobile, full size on desktop */}
          <h1 className="text-[2.5rem] leading-[1.0] text-[#2d2926] sm:text-[3.4rem] sm:leading-[0.94] lg:text-[5.5rem] lg:leading-[0.91]">
            Still<br />
            centered<br />
            around the<br />
            same table.
          </h1>

          {/* Ornamental pause */}
          <div className="mt-6 flex items-center gap-3 lg:mt-10">
            <div className="h-px w-8 bg-[#c6a87a]/48" />
            <div className="h-[3px] w-[3px] rounded-full bg-[#c6a87a]" />
            <div className="h-px w-4 bg-[#c6a87a]/26" />
          </div>

          {/* Body */}
          <p className="mt-5 text-[0.94rem] leading-[1.84] text-[#5d4d40] lg:mt-7 lg:max-w-[390px] lg:text-[1.05rem] lg:leading-[1.92]">
            Vineeta learned Mahjong during army postings, gathering
            women around the table through companionship and a cultural
            rhythm that turned unfamiliar places into community.
          </p>

          {/* CTAs — stacked full-width on mobile, inline on sm+ */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:mt-10">
            <a
              href="#membership"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#7c1f2d] bg-[linear-gradient(180deg,#8b2736,#6d1b28)] px-6 py-3 text-[0.8rem] uppercase tracking-[0.14em] text-[#f5efe4] shadow-[0_10px_22px_rgba(124,31,45,0.18)] transition duration-300 hover:-translate-y-px hover:shadow-[0_14px_28px_rgba(124,31,45,0.24)] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm sm:tracking-[0.16em] lg:shadow-[0_12px_28px_rgba(124,31,45,0.2)] lg:hover:shadow-[0_16px_34px_rgba(124,31,45,0.26)]"
            >
              Join Membership
            </a>
            <a
              href="#story"
              className="inline-flex w-full items-center justify-center rounded-full border border-[#c6a87a]/72 bg-[#fbf7ef]/75 px-6 py-3 text-[0.8rem] uppercase tracking-[0.14em] text-[#4d4037] transition duration-300 hover:border-[#8a6a4a] hover:bg-[#fff9f0] sm:w-auto sm:px-7 sm:py-3.5 sm:text-sm sm:tracking-[0.16em]"
            >
              Our Story
            </a>
          </div>

          {/* Brand pillars */}
          <div className="mt-10 flex flex-wrap items-center gap-4 text-[0.58rem] uppercase tracking-[0.28em] text-[#8a6a4a] lg:mt-16 lg:gap-5 lg:text-[0.63rem] lg:tracking-[0.3em]">
            <span>Heritage</span>
            <span className="h-px w-3 bg-[#c6a87a]/40" />
            <span>Companionship</span>
            <span className="h-px w-3 bg-[#c6a87a]/40" />
            <span>Strategy</span>
          </div>
        </div>

        {/* RIGHT — Founder portrait */}
        {/*
          Mobile:  shorter min-h, image scaled down, centred
          Desktop: full viewport height, larger image
        */}
        <div className="relative flex min-h-[20rem] items-center justify-center sm:min-h-[24rem] lg:min-h-[calc(100vh-6rem)]">

          <div
            className="relative"
            style={{ filter: "drop-shadow(0 20px 44px rgba(60,40,18,0.13)) drop-shadow(0 6px 14px rgba(60,40,18,0.07))" }}
          >
            <div
              className="relative"
              style={{
                maskImage:
                  "radial-gradient(ellipse 78% 86% at 52% 42%, black 22%, rgba(0,0,0,0.75) 46%, rgba(0,0,0,0.28) 66%, transparent 82%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 78% 86% at 52% 42%, black 22%, rgba(0,0,0,0.75) 46%, rgba(0,0,0,0.28) 66%, transparent 82%)",
              }}
            >
              <Image
                src="/assets/founder/Vineeta.jpeg"
                alt="Vineeta Sahni, founder of the Indian Mahjong Association"
                width={358}
                height={478}
                className="h-auto w-[220px] object-cover object-[center_18%] sm:w-[270px] lg:w-[358px]"
                priority
              />

              {/* Parchment warmth */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_30%,rgba(248,238,218,0.10),rgba(248,238,218,0.04)_60%,transparent_82%)]"
              />
              {/* Bottom mist */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-[linear-gradient(0deg,rgba(245,239,228,0.72),rgba(245,239,228,0.18)_55%,transparent)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── 4. SECTION TRANSITION ── */}
      <div aria-hidden="true" className="pointer-events-none pb-8 pt-2 lg:pb-10">
        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-16">
          <div className="h-px bg-[linear-gradient(90deg,rgba(198,168,122,0),rgba(198,168,122,0.44)_22%,rgba(198,168,122,0.44)_78%,rgba(198,168,122,0))]" />
        </div>
      </div>
    </section>
  );
}
