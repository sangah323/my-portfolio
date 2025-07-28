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
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
