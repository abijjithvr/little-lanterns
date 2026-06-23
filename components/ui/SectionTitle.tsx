type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 font-[var(--font-fredoka)] text-sm tracking-wider text-[var(--brown)]/75">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[var(--font-fredoka)] text-3xl text-[var(--brown)] md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-[var(--brown)]/80">{subtitle}</p> : null}
    </div>
  );
}
