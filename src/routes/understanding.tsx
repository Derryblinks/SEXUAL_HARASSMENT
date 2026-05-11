import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/understanding")({
  head: () => ({
    meta: [
      { title: "Education — Sexual Harassment & Misconduct | University of Ghana" },
      { name: "description", content: "Institutional education on sexual harassment and misconduct, consent, hostile environments, reporting and support under the University of Ghana policy." },
      { property: "og:title", content: "Education — Sexual Harassment & Misconduct | University of Ghana" },
      { property: "og:description", content: "Recognise misconduct. Understand consent. Know how to report and get support." },
    ],
  }),
  component: UnderstandingLayout,
});

function UnderstandingLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}