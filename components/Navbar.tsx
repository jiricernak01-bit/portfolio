export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-tight">
          JC
        </a>
        <ul className="flex gap-6 text-sm text-zinc-500 dark:text-zinc-400">
          <li>
            <a href="#about" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Projects
            </a>
          </li>
          <li>
            <a
              href="mailto:jiri.cer999@gmail.com"
              className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
