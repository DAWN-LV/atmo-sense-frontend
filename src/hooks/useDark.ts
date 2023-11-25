import LocalStorage from "@/plugin/LocalStorage"
import { useEffect, useState } from "react"

const storage = new LocalStorage(localStorage)

export function useDark() {
  const [ isDark, setDark ] = useState(false)

  useEffect(() => { 
    document.body.classList.toggle('dark', isDark) 
  }, [ isDark ])

  return { isDark, setDark }
}