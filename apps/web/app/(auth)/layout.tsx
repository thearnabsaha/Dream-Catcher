export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>
    <h1>Navbar</h1>
    {children}
  </section>
}