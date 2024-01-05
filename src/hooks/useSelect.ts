import { useState } from "react"

const useSelect = (initialItems: number[] = []) => {
  const [ items, setItems ] = useState<number[]>(initialItems)

  const toggle = (item: number) => {
    setItems(prevItems => {
      const newItems = [ ...prevItems ]
      const index = newItems.indexOf(item)

      index === -1 ? newItems.push(item) : newItems.splice(index, 1)

      return newItems
    })
  }

  const isSelected = (item: number) => {
    return items.includes(item)
  }

  return { items, toggle, isSelected }
}

export default useSelect