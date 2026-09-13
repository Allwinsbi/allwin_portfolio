import { useEffect, useRef } from 'react'

// Attaches IntersectionObserver-driven reveal animation to a container.
// Any descendant with class "reveal" gets "is-visible" added once it enters view.
export function useReveal(deps = []) {
  const ref = useRef(null)

  useEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = root.classList.contains('reveal')
      ? [root, ...root.querySelectorAll('.reveal')]
      : [...root.querySelectorAll('.reveal')]

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
