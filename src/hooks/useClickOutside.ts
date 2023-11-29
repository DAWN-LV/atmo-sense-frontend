import { useLayoutEffect, useRef, useCallback, MutableRefObject, ReactEventHandler, RefObject } from 'react'

type OutsideClickCallback = (event: MouseEvent) => void

const useClickOutside = (callback: OutsideClickCallback | null) => {
  const currentRef: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const currentTimeoutId: MutableRefObject<number | undefined> = useRef<number>()

  useLayoutEffect(() => {
    if (!callback) {
        return undefined
    }

    let timeoutId: number

    const clickHandler: (event: MouseEvent) => void = (event) => {
      timeoutId = window.setTimeout(() => callback(event), 0)
      currentTimeoutId.current = timeoutId
    }

    const targetDocument = currentRef.current?.ownerDocument
    targetDocument?.addEventListener('click', clickHandler, { capture: true })

    return () => {
      clearTimeout(timeoutId)
      targetDocument?.removeEventListener('click', clickHandler, { capture: true })
    }
  }, [ callback ])

  const onClickCapture: ReactEventHandler = useCallback(() => {
    clearTimeout(currentTimeoutId.current)
  }, [])

  return { ref: currentRef, onClickCapture }
}

export default useClickOutside