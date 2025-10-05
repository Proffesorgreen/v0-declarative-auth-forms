import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <svg className="h-5 w-5 fill-foreground" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 20h20L12 2z" />
            </svg>
            <span className="font-semibold text-lg">Declarative Auth Forms</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Docs
            </Link>
            <Link href="/build" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Build
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
        <Button asChild size="sm">
          <Link href="/docs">Get Started</Link>
        </Button>
      </nav>
    </header>
  )
}
