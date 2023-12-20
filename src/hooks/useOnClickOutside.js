import { useEffect, useCallback, useRef } from 'react'

export function useOnClickOutside(
  handler,
) {
  const ref = useRef(null)

  const handleClick = useCallback(
    (event) => {
      const el = ref?.current
      if (!el || el.contains(event.target)) {
        return
      }
      handler(event)
    }, [ref, handler],
  )
  useEffect(() => {
    window.addEventListener("mousedown", handleClick)

    return () => {
      window.removeEventListener("mousedown", handleClick)
    }
  }, [handleClick])

  return ref;
}


