import SectionTitle from "@/components/ui/SectionTitle";

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
      <SectionTitle eyebrow="OUR STORY" title="About Little Lanterns" />
      <article className="rounded-3xl border border-[var(--brown)]/10 bg-[linear-gradient(180deg,var(--cream),var(--pink))] p-6 leading-8 text-[var(--brown)]/85 shadow-[0_14px_24px_rgba(107,79,59,0.1)] md:p-10">
        <p>
          Little Lanterns began as a late-night hobby with soft yarn, tea, and a tiny lamp glowing on
          a work desk. Every plushie is hand-crocheted, stitched slowly, and finished with care so it
          feels like a tiny keepsake from a storybook.
        </p>
        <p className="mt-4">
          We do not mass produce. We create ready-made crochet friends in small batches, each with its
          own personality. The idea is simple: a little comfort object that makes your shelf, desk, or
          day feel a little warmer.
        </p>
        <p className="mt-4">
          Thank you for supporting handmade work and choosing a small cozy brand. Your adopted friend is
          packed with love from our lantern-lit studio.
        </p>
      </article>
    </main>
  );
}
