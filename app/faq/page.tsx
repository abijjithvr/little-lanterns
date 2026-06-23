import SectionTitle from "@/components/ui/SectionTitle";
import FAQAccordion from "./FAQAccordion";

export default function FAQPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 md:px-8">
      <SectionTitle eyebrow="HELP" title="Frequently Asked Questions" />
      <FAQAccordion />
    </main>
  );
}
