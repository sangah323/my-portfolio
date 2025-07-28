interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return <main className="px-4 max-w-4xl mx-auto">{children}</main>;
}
