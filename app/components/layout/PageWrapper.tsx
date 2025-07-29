interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <main className="px-4 sm:px-6 max-w-6xl mx-auto">{children}</main>;
}
