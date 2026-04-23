export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 py-8 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Jiri Cernak. All rights reserved.</p>
        <p>
          Built with{" "}
          <span className="font-medium text-zinc-600 dark:text-zinc-300">Next.js</span> &amp;{" "}
          <span className="font-medium text-zinc-600 dark:text-zinc-300">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
}
