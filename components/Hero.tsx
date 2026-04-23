import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-16 px-6 pt-24 pb-16 md:flex-row"
    >
      {/* Left — text content */}
      <div className="flex-1">
        <p className="mb-5 text-sm font-medium uppercase tracking-widest text-indigo-500 dark:text-indigo-400">
          Digital marketing agency
        </p>

        <h1 className="mb-8 text-5xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
          This is
          <span className="mt-3 block">
            <Image
              src="/optigrow-logo.png"
              alt="OptiGrow"
              width={320}
              height={100}
              className="h-auto w-64 sm:w-80 object-contain"
              priority
            />
          </span>
        </h1>

        <p className="mb-4 text-xl font-medium text-zinc-700 dark:text-zinc-300">
          We grow brands through data-driven digital strategy.
        </p>

        <p className="mb-10 max-w-lg text-base leading-relaxed text-zinc-500 dark:text-zinc-400">
          From SEO and paid ads to content and conversion — we build
          full-funnel marketing systems that turn traffic into revenue.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 rounded-2xl bg-zinc-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            See our work
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="mailto:jiri.cer999@gmail.com"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-zinc-200 px-8 py-4 text-base font-semibold text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-12 flex gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 transition-colors hover:text-zinc-700 dark:hover:text-zinc-200"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right — logo display */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative flex aspect-square w-full max-w-sm items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-50 to-violet-50 p-12 shadow-xl ring-1 ring-indigo-100 dark:from-indigo-950/40 dark:to-violet-950/40 dark:ring-indigo-900/50">
          <Image
            src="/optigrow-logo.png"
            alt="OptiGrow logo"
            width={400}
            height={400}
            className="h-auto w-full object-contain drop-shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}
