interface Props {
  title: string;
  content: string;
}

export default function SelfIntroSection({ title, content }: Props) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-violet-600">{title}</h2>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line">
        {content}
      </p>
    </section>
  );
}
