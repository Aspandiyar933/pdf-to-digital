import Link from "next/link"

export function Navbar() {
  return (
    <header className="border-b">
    <div className="container mx-auto px-4">
      <nav className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-semibold">
            D<span className="font-normal">Sat</span>
          </span>
        </Link>

        <ul className="flex items-center gap-8">
          {[
            { name: "Вход", href: "/forum" },
          ].map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  )
}