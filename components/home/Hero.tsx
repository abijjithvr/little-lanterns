import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-20 md:px-8 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <span className="floating-star left-[8%] top-[18%]" />
        <span className="floating-star left-[78%] top-[22%]" />
        <span className="floating-lantern left-[14%] top-[56%]" />
        <span className="floating-lantern left-[74%] top-[62%]" />
        <span className="floating-cloud left-[3%] top-[42%]" />
        <span className="floating-cloud left-[70%] top-[40%]" />
      </div>

      <div className="relative mx-auto max-w-3xl rounded-[2rem] border border-[var(--brown)]/10 bg-[linear-gradient(145deg,var(--lavender),var(--pink))] p-8 text-center shadow-[0_24px_40px_rgba(107,79,59,0.14)] md:p-12">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--gold)] text-4xl shadow-[0_10px_24px_rgba(246,211,122,0.5)]">
          🏮
        </div>
        <h1 className="font-[var(--font-fredoka)] text-5xl text-[var(--brown)] md:text-7xl">Little Lanterns</h1>
        <p className="mt-5 text-lg text-[var(--brown)] md:text-2xl">
          Handmade crochet friends stitched with love.
        </p>
        <p className="mt-2 text-base text-[var(--brown)]/80 md:text-lg">Small plushies, big comfort.</p>
        <div className="mt-8">
          <Button href="/shop">Adopt a Friend 🏮</Button>
        </div>
      </div>
    </section>
  );
}
