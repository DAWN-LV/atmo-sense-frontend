import config from "@/config"
import LocalStorage from "@/plugin/LocalStorage"
import { useEffect, useState } from "react"

const cache = new LocalStorage(localStorage, config.app.title)

export function useDark() {
  const [ isDark, setDark ] = useState(Boolean(cache.get("theme::dark")))

  useEffect(() => { 
    document.documentElement.classList.toggle("dark", isDark) 
    cache.set("theme::dark", isDark)
  }, [ isDark ])

  return { isDark, setDark }
}