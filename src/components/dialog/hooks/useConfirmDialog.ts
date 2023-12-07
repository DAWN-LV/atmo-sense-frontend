import { useState, useCallback } from 'react'

type UseConfirmDialogRevealResult<ConfirmData, CancelData> =
  | { data?: ConfirmData; isCanceled: false }
  | { data?: CancelData; isCanceled: true }

interface UseConfirmDialogReturn<RevealData, ConfirmData, CancelData> {
  isRevealed: boolean
  reveal: (data?: RevealData) => Promise<UseConfirmDialogRevealResult<ConfirmData, CancelData>>
  confirm: (data?: ConfirmData) => void
  cancel: (data?: CancelData) => void
  onReveal: (callback: (data?: RevealData) => void) => void
  onConfirm: (callback: (data?: ConfirmData) => void) => void
  onCancel: (callback: (data?: CancelData) => void) => void
}

function createEventHook<T>() {
  let handler: (data?: T) => void = () => {}

  return {
    on: (callback: (data?: T) => void) => {
      handler = callback
    },
    trigger: (data?: T) => {
      handler(data)
    },
  };
}

function useConfirmDialog<RevealData = any, ConfirmData = any, CancelData = any>(): UseConfirmDialogReturn<RevealData, ConfirmData, CancelData> {
  const [ isRevealed, setIsRevealed ] = useState(false)
  const confirmHook = createEventHook<ConfirmData>()
  const cancelHook = createEventHook<CancelData>()
  const revealHook = createEventHook<RevealData>()

  let resolve: (result: UseConfirmDialogRevealResult<ConfirmData, CancelData>) => void = () => {}

  const reveal = useCallback((data?: RevealData) => {
    revealHook.trigger(data)
    setIsRevealed(true)

    return new Promise<UseConfirmDialogRevealResult<ConfirmData, CancelData>>((res) => {
      resolve = res
    })
  }, [])

  const confirm = useCallback((data?: ConfirmData) => {
    setIsRevealed(false)
    confirmHook.trigger(data)
    resolve({ data, isCanceled: false })
  }, [])

  const cancel = useCallback((data?: CancelData) => {
    setIsRevealed(false)
    cancelHook.trigger(data)
    resolve({ data, isCanceled: true })
  }, [])

  return {
    isRevealed,
    reveal,
    confirm,
    cancel,
    onReveal: revealHook.on,
    onConfirm: confirmHook.on,
    onCancel: cancelHook.on,
  }
}

export default useConfirmDialog
