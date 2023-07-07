// import { useState, useEffect } from 'react'

import { useState } from 'react'

// export function useLocalStorage<T>(item: string, initialValue: T) {
//   const [value, setValue] = useState<T>(initialValue)

//   useEffect(() => {
//     if (typeof window === 'undefined') return
//     const value = localStorage.getItem(item)
//     if (value) setValue(JSON.parse(value))
//   }, [window])

//   const updateLocalStorage = (newValue: T) => {
//     setValue(newValue)
//     localStorage.setItem(item, JSON.stringify(newValue))
//   }

//   return {
//     value,
//     updateLocalStorage,
//   }
// }

export function useLocalStorage(key: string, newValue: unknown) {
  const getLocalStorage = (key: string) => {
    const data = window.localStorage.getItem(key)
    return JSON.parse(data!)
  }

  const setLocalStorage = (key: string, newValue: unknown) => {
    const data = JSON.stringify(newValue)
    window.localStorage.setItem(key, data)
  }

  // const [value, setValue] = useState()
  // const data = window.localStorage.getItem(key)
  // setValue(JSON.parse(data!))

  // const updateLocalStorage = (newValue: unknown) => {
  //   setValue(newValue)
  //   localStorage.setItem(key, JSON.stringify(newValue))
  // }

  return {
    getLocalStorage,
    setLocalStorage,
  }
}
