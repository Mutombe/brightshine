import React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react'

export function useInView(options = {}) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options.once !== false) observer.unobserve(el)
        } else if (options.once === false) {
          setIsInView(false)
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setProgress(total > 0 ? window.scrollY / total : 0)
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])
  return progress
}

export function useCounter(end, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(!startOnView)
  const ref = useRef(null)

  useEffect(() => {
    if (!startOnView) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect() }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [startOnView])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = end / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= end) { setCount(end); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [started, end, duration])

  return [ref, count]
}
