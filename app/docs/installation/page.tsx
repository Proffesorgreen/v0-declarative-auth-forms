export default function InstallationPage() {
  return (
    <div className="prose prose-invert max-w-none">
      <div className="not-prose mb-8">
        <h1 className="text-4xl font-bold mb-4">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Get started with Declarative Auth Forms in your Next.js project in just a few minutes.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-sm font-bold">
              1
            </span>
            Prerequisites
          </h2>
          <p className="text-muted-foreground mb-4">Before you begin, make sure you have the following installed:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Node.js 18.17 or later</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>A Next.js 15 project with App Router</span>
            </li>
            <li className="flex items-start gap-2">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>shadcn/ui components set up in your project</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-sm font-bold">
              2
            </span>
            Install Dependencies
          </h2>
          <p className="text-muted-foreground mb-4">Install the required packages:</p>
          <div className="relative group">
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">
                npm install declarative-auth-forms react-hook-form zod
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-sm font-bold">
              3
            </span>
            Set Up Better Auth
          </h2>
          <p className="text-muted-foreground mb-4">If you haven't already, install and configure Better Auth:</p>
          <div className="relative group mb-4">
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">npm install better-auth</code>
            </pre>
          </div>

          <p className="text-muted-foreground mb-4">
            Create a <code className="px-2 py-1 bg-muted rounded text-sm font-mono">lib/auth.ts</code> file with your
            Better Auth configuration:
          </p>
          <div className="relative group">
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">{`import { betterAuth } from "better-auth"

export const auth = betterAuth({
  database: {
    // Your database configuration
  },
  emailAndPassword: {
    enabled: true,
  },
})`}</code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500 text-sm font-bold">
              4
            </span>
            Add shadcn/ui Components
          </h2>
          <p className="text-muted-foreground mb-4">Make sure you have the required shadcn/ui components:</p>
          <div className="relative group">
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">
                npx shadcn@latest add button input label card form
              </code>
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500/10 text-green-500 text-sm font-bold">
              ✓
            </span>
            Quick Start
          </h2>
          <p className="text-muted-foreground mb-4">Create your first declarative auth form:</p>
          <div className="relative group">
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
              <code className="text-sm font-mono text-foreground">{`import { AuthForm } from "declarative-auth-forms"

const loginSchema = {
  type: "login",
  title: "Welcome back",
  fields: [
    {
      name: "email",
      type: "email",
      label: "Email",
      required: true
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      required: true
    }
  ],
  submit: "Sign In"
}

export default function LoginPage() {
  return <AuthForm schema={loginSchema} />
}`}</code>
            </pre>
          </div>
        </section>

        <div className="mt-12 p-6 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div className="flex gap-3">
            <svg
              className="h-6 w-6 text-blue-500 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4" />
              <path d="M12 8h.01" />
            </svg>
            <div>
              <h3 className="font-semibold text-foreground mb-2">You're all set!</h3>
              <p className="text-sm text-muted-foreground">
                You now have a fully functional authentication form. Check out the{" "}
                <a href="/docs/schema-format" className="text-blue-500 hover:underline">
                  Schema Format
                </a>{" "}
                documentation to learn about all available field types and validation options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
