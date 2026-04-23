'use client'

import { useEffect, useRef, useState } from 'react'

const SERVICES = [
  { num: '01', title: 'SEO & Search',       desc: 'Rank higher and attract qualified organic traffic.' },
  { num: '02', title: 'Social Media',        desc: 'Build community and brand presence across platforms.' },
  { num: '03', title: 'Paid Advertising',    desc: 'Precision-targeted campaigns with measurable ROI.' },
  { num: '04', title: 'Content Marketing',   desc: 'Authority-building content that educates and converts.' },
  { num: '05', title: 'Email Marketing',     desc: 'Personalised sequences that nurture leads to buyers.' },
  { num: '06', title: 'Analytics & Data',    desc: 'Insights that turn raw numbers into clear decisions.' },
  { num: '07', title: 'Brand Identity',      desc: 'Visual language that builds instant recognition.' },
  { num: '08', title: 'Video & Creative',    desc: 'Engaging content crafted for every channel.' },
  { num: '09', title: 'CRO',                 desc: 'Systematic testing to convert more visitors into customers.' },
]

export default function Services() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [broken, setBroken] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return

    const onScroll = () => {
      const { top, height } = el.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, -top / (height - window.innerHeight)))
      setBroken(progress > 0.35)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div id="services" ref={wrapperRef} className="relative" style={{ height: '250vh' }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white dark:bg-zinc-950">

        {/* Single big box */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: broken ? 0 : 1,
            transform: broken ? 'scale(1.06)' : 'scale(1)',
            transition: 'opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)',
            pointerEvents: broken ? 'none' : 'auto',
          }}
        >
          <div className="rounded-3xl bg-zinc-900 dark:bg-zinc-100 flex flex-col items-center justify-center gap-3 shadow-2xl px-20 py-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 dark:text-indigo-600">
              What we do
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white dark:text-zinc-900 text-center leading-tight">
              Complex digital<br />services
            </h2>
          </div>
        </div>

        {/* 9 service boxes */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-2.5 p-2.5">
          {SERVICES.map(({ num, title, desc }, i) => (
            <div
              key={title}
              className="rounded-2xl bg-zinc-900 dark:bg-zinc-100 flex flex-col justify-between p-5 sm:p-6"
              style={{
                opacity: broken ? 1 : 0,
                transform: broken ? 'scale(1) translateY(0px)' : 'scale(0.88) translateY(16px)',
                transition: `opacity 0.5s ease ${i * 40}ms, transform 0.5s ease ${i * 40}ms`,
              }}
            >
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">{num}</span>
              <div>
                <h3 className="font-semibold text-white dark:text-zinc-900 mb-1">{title}</h3>
                <p className="text-xs leading-relaxed text-zinc-400 dark:text-zinc-600 hidden sm:block">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
