interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto space-y-32">
      {children}
    </main>
  );
}
