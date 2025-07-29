interface SectionWrapperProps {
  id: string;
  title?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  id,
  title,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 p-6 sm:p-8 md:p-10 max-w-5xl mx-auto min-h-[80vh] sm:min-h-[90vh] md:min-h-[95vh] space-y-10"
    >
      <h2 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100 border-b border-zinc-200 dark:border-zinc-700 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}
