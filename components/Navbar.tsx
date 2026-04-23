'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[60vw] -translate-x-1/2">
      <nav
        className="flex items-center justify-between rounded-2xl px-8 py-4 transition-all duration-500"
        style={{
          fontFamily: 'var(--font-lato)',
          backgroundColor: scrolled ? 'rgba(255,255,255,0.4)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          border: scrolled ? '1px solid rgba(161,161,170,0.3)' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.10)' : 'none',
        }}
      >
        <a href="#" className="text-base font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          OG
        </a>
        <ul className="flex gap-7 text-base font-bold text-zinc-600 dark:text-zinc-300">
          <li>
            <a href="#about" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Projects
            </a>
          </li>
          <li>
            <a href="mailto:jiri.cer999@gmail.com" className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
