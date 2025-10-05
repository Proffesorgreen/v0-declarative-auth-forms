import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-block">
            <span className="text-sm font-mono text-accent">Declarative Auth Forms</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Declarative Auth Forms for Better Auth
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Generate authentication UIs from JSON Schema, styled with shadcn/ui
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button asChild size="lg">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/build">Try Playground</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* JSON Schema */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-muted-foreground">schema.json</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-foreground">{`{
  "type": "login",
  "fields": [
    {
      "name": "email",
      "type": "email",
      "label": "Email",
      "required": true
    },
    {
      "name": "password",
      "type": "password",
      "label": "Password",
      "required": true
    }
  ],
  "submit": "Sign In"
}`}</code>
                </pre>
              </CardContent>
            </Card>

            {/* Rendered Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-sm font-mono text-muted-foreground">Rendered Form</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 bg-background border border-input rounded-md text-sm"
                  />
                </div>
                <Button className="w-full">Sign In</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Declarative Auth Forms?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <svg
                  className="h-8 w-8 mb-2 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <CardTitle>Declarative JSON</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Define your auth forms with simple JSON schemas. No complex component trees.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <svg
                  className="h-8 w-8 mb-2 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="13.5" cy="6.5" r=".5" />
                  <circle cx="17.5" cy="10.5" r=".5" />
                  <circle cx="8.5" cy="7.5" r=".5" />
                  <circle cx="6.5" cy="12.5" r=".5" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
                <CardTitle>shadcn/ui Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Built on top of shadcn/ui components for beautiful, accessible forms.</CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <svg
                  className="h-8 w-8 mb-2 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <CardTitle>Better Auth Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Seamlessly integrates with Better Auth for production-ready authentication.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <svg
                  className="h-8 w-8 mb-2 text-accent"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <CardTitle>Extensible</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Customize validation, styling, and behavior to match your needs.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 mt-20">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          Built with Next.js, Tailwind CSS, and shadcn/ui
        </div>
      </footer>
    </div>
  )
}
