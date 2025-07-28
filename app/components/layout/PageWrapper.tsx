interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <main className="px-6 sm:px-8 max-w-6xl mx-auto">{children}</main>;
}
