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
      className="scroll-mt-24 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto min-h-[80vh] sm:min-h-[90vh] md:min-h-[95vh] space-y-6 border border-red-500"
    >
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
