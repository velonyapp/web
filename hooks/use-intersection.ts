"use client"

import { useEffect, useLayoutEffect, useRef, type RefObject } from "react"

type UseIntersectionOptions = {
  viewportRef: RefObject<Element | null>
  targetId: string | undefined
  onIntersection: (event: {
    entry: IntersectionObserverEntry
    wasIntersecting: boolean | undefined
  }) => void
  rootMargin?: string
  threshold?: number
}

export function useIntersection<T extends Element = HTMLDivElement>({
  viewportRef,
  targetId,
  onIntersection,
  rootMargin = "0px",
  threshold = 0,
}: UseIntersectionOptions) {
  const targetRef = useRef<T>(null)
  const onIntersectionRef = useRef(onIntersection)

  useLayoutEffect(() => {
    onIntersectionRef.current = onIntersection
  }, [onIntersection])

  useEffect(() => {
    const viewport = viewportRef.current
    const target = targetRef.current

    if (!viewport || !target) {
      return
    }

    let wasIntersecting: boolean | undefined

    const observer = new IntersectionObserver(
      (entries) => {
        if (targetRef.current !== target) return

        for (const entry of entries) {
          onIntersectionRef.current({ entry, wasIntersecting })
          wasIntersecting = entry.isIntersecting
        }
      },
      {
        root: viewport,
        rootMargin,
        threshold,
      }
    )

    observer.observe(target)

    return () => observer.disconnect()
  }, [viewportRef, targetId, rootMargin, threshold])

  return targetRef
}
