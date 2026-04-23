import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A real-time analytics dashboard for e-commerce businesses, featuring sales tracking, inventory management, and customer insights.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
    href: "#",
    repo: "#",
  },
  {
    title: "Task Management App",
    description:
      "A minimal, keyboard-first task manager with drag-and-drop boards, labels, and due-date reminders.",
    tags: ["React", "Node.js", "PostgreSQL", "Prisma"],
    href: "#",
    repo: "#",
  },
  {
    title: "AI Content Summarizer",
    description:
      "Browser extension that summarises long articles and PDFs using the Claude API — with one-click copy and adjustable length.",
    tags: ["TypeScript", "Claude API", "Chrome Extension"],
    href: "#",
    repo: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "This very site — built with Next.js App Router, Tailwind CSS, and deployed on Vercel. Open source.",
    tags: ["Next.js", "Tailwind", "Vercel"],
    href: "#",
    repo: "#",
  },
  {
    title: "Currency Converter CLI",
    description:
      "A fast command-line tool for live exchange-rate lookups and currency conversion, with offline caching.",
    tags: ["Python", "Click", "REST API"],
    href: "#",
    repo: "#",
  },
  {
    title: "Study Planner",
    description:
      "A scheduling web app that helps students allocate study time across subjects based on upcoming exam dates.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    href: "#",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
            Work
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            Selected Projects
          </h2>
          <p className="mt-3 max-w-xl text-base text-zinc-500 dark:text-zinc-400">
            A handful of things I&apos;ve built — from side projects to production apps.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
