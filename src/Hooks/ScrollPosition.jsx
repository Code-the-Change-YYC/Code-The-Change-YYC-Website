import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const setScollPositionCallback = () => setScrollPosition(window.scrollY)

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', setScollPositionCallback)
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', setScollPositionCallback)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollY !== 0) {
      setScrollPosition(window.scrollY)
    }
  }, [])
  return scrollPosition
}
export default useScrollPosition
