import { useEffect, useState, useRef } from 'react'

// Hover hook
export function useHover() {
  const [value, setValue] = useState(false)

  const ref = useRef(null)

  const mouseOverHandler = () => setValue(true)
  const mouseOutHandler = () => setValue(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', mouseOverHandler)
      node.addEventListener('mouseout', mouseOutHandler)

      return () => {
        node.removeEventListener('mouseover', mouseOverHandler)
        node.removeEventListener('mouseout', mouseOutHandler)
      }
    }
  }, [ref.current])
  return [ref, value]
}

// Returns a key when pressed, resets itself to null immediately.
export function useKeyEvent() {
  const [lastKey, setLastKey] = useState(null)

  useEffect(() => {
    const downHandler = ({ key, repeat }) => {
      if (!repeat) {
        setLastKey(key)
      }
    };

    window.addEventListener('keydown', downHandler)

    return () => {
      window.removeEventListener('keydown', downHandler)
    }
  }, [])

  // Doesn't work properly without useEffect.
  useEffect(() => {
    setLastKey(null)
  }, [lastKey])

  return lastKey
}

export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key)
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // If error also return initialValue
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value
      // Save state
      setStoredValue(valueToStore)
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

// TODO possible to avoid useContext?
export function useInfoStatus() {
  const [infoStatus, setInfoStatus] = useState(null)
  const setValue = value => {
    //const delay = setTimeout(() => setInfoStatus(''), 3200)
    console.log('settvalu in hook: ', value)
    setInfoStatus(value)
    //return () => clearTimeout(delay)
  }
  return [infoStatus, setValue]
}
