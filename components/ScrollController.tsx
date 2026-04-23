'use client'

import { useEffect } from 'react'

export default function ScrollController() {
  useEffect(() => {
    let armed = window.scrollY < 10
    let busy = false

    const servicesTop = () => document.getElementById('services')?.offsetTop ?? Infinity
    const atServicesEdge = () => window.scrollY <= servicesTop() + 20

    // ── Snap to hero ──────────────────────────────────────────────────────────
    const snapUp = () => {
      if (busy) return
      busy = true
      removeUpListeners()
      window.dispatchEvent(new CustomEvent('hero-join'))
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setTimeout(() => { busy = false }, 1000)
    }

    // ── Snap to services ─────────────────────────────────────────────────────
    const snapDown = () => {
      if (busy || !armed) return
      busy = true
      armed = false
      removeDownListeners()
      window.dispatchEvent(new CustomEvent('hero-split'))
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
        setTimeout(() => {
          busy = false
          addUpListeners()
        }, 600)
      }, 750)
    }

    // ── Shared touch tracking ─────────────────────────────────────────────────
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }

    // ── Down listeners ────────────────────────────────────────────────────────
    const onWheelDown = (e: WheelEvent) => {
      if (window.scrollY === 0 && e.deltaY > 0) { e.preventDefault(); snapDown() }
    }
    const onTouchMoveDown = (e: TouchEvent) => {
      if (touchStartY - e.touches[0].clientY > 10) { e.preventDefault(); snapDown() }
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (window.scrollY === 0 && ['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault(); snapDown()
      }
    }

    // ── Up listeners ──────────────────────────────────────────────────────────
    const onWheelUp = (e: WheelEvent) => {
      if (e.deltaY < 0 && atServicesEdge()) { e.preventDefault(); snapUp() }
    }
    const onTouchMoveUp = (e: TouchEvent) => {
      if (e.touches[0].clientY - touchStartY > 10 && atServicesEdge()) {
        e.preventDefault(); snapUp()
      }
    }
    const onKeyUp = (e: KeyboardEvent) => {
      if (['ArrowUp', 'PageUp'].includes(e.key) && atServicesEdge()) {
        e.preventDefault(); snapUp()
      }
    }

    const addDownListeners = () => {
      window.addEventListener('wheel', onWheelDown, { passive: false })
      window.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchmove', onTouchMoveDown, { passive: false })
      window.addEventListener('keydown', onKeyDown)
    }
    const removeDownListeners = () => {
      window.removeEventListener('wheel', onWheelDown)
      window.removeEventListener('touchmove', onTouchMoveDown)
      window.removeEventListener('keydown', onKeyDown)
    }
    const addUpListeners = () => {
      window.addEventListener('wheel', onWheelUp, { passive: false })
      window.addEventListener('touchstart', onTouchStart, { passive: true })
      window.addEventListener('touchmove', onTouchMoveUp, { passive: false })
      window.addEventListener('keydown', onKeyUp)
    }
    const removeUpListeners = () => {
      window.removeEventListener('wheel', onWheelUp)
      window.removeEventListener('touchmove', onTouchMoveUp)
      window.removeEventListener('keydown', onKeyUp)
    }

    // ── Re-arm on return to top ───────────────────────────────────────────────
    const onScroll = () => {
      if (!armed && !busy && window.scrollY < 10) {
        armed = true
        removeUpListeners()
        addDownListeners()
        // Only dispatch hero-join here for manual scroll-back (snapUp already fires it)
        window.dispatchEvent(new CustomEvent('hero-join'))
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    if (armed) addDownListeners()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchstart', onTouchStart)
      removeDownListeners()
      removeUpListeners()
    }
  }, [])

  return null
}
