export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="w-full flex-auto">
      {children}
    </main>
  )
}