import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
<<<<<<< HEAD
  useLocation,
=======
>>>>>>> cb1628592c231f56f54661977629a3248306c706
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
<<<<<<< HEAD
      { title: "University of Ghana — Sexual Harassment Awareness & Safe Reporting" },
      { name: "description", content: "Official institutional education on sexual harassment and misconduct, consent, reporting under the UG Sexual Harassment and Misconduct Policy, and confidential support." },
      { name: "author", content: "University of Ghana" },
      { property: "og:title", content: "UG Sexual Harassment Awareness & Reporting Platform" },
      { property: "og:description", content: "Education, prevention and safe reporting aligned with the University of Ghana Sexual Harassment and Misconduct Policy." },
=======
      { title: "Aegis UG — Gender Equity & Safe Reporting | University of Ghana" },
      { name: "description", content: "A safe, respectful and inclusive university community. Learn about the UG Gender Policy, understand sexual harassment, and access confidential support." },
      { name: "author", content: "University of Ghana — Equal Opportunities Board" },
      { property: "og:title", content: "Aegis UG — Creating a Safe University Community" },
      { property: "og:description", content: "Education, prevention and confidential reporting under the University of Ghana Gender Policy." },
>>>>>>> cb1628592c231f56f54661977629a3248306c706
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
<<<<<<< HEAD
  const { pathname } = useLocation();
  const isAdminPortal = pathname.toLowerCase().startsWith("/admin");
=======
>>>>>>> cb1628592c231f56f54661977629a3248306c706

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
<<<<<<< HEAD
        {!isAdminPortal && <Navbar />}
        <main className="flex-1">
          <Outlet />
        </main>
        {!isAdminPortal && <Footer />}
=======
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
>>>>>>> cb1628592c231f56f54661977629a3248306c706
      </div>
    </QueryClientProvider>
  );
}
