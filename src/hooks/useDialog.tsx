import React, { useCallback, useEffect, useRef } from "react"
import { v4 as uuidv4 } from "uuid"
import { runInAction } from "mobx" 
import { useConfirmDialog } from "@/components/dialog"
import { useDialogCollection } from "@/providers"

export interface DialogOptions {
  persistent?: boolean
  seamless?: boolean
}

function useDialog<
  RevealData = any,
  ConfirmData = any,
  CancelData = any,
  ComponentPropsType = any,
>(
  Component: React.ComponentType<ComponentPropsType>,
  props: ComponentPropsType,
  options: DialogOptions = {},
) {
  const key = uuidv4()
  const collection = useDialogCollection()
  const dialogState = useConfirmDialog<RevealData, ConfirmData, CancelData>()

  const dialogRef = useRef<HTMLDivElement>(null)

  const zIndex = 1_000 + collection.size

  const pulse = useCallback((node: HTMLElement | null) => {
    if (!node) {
      return
    }

    node.classList.add("animate-shake-horizontal")

    const handleAnimationEnd = () => {
      node.classList.remove("animate-shake-horizontal")
      node.removeEventListener("animationend", handleAnimationEnd)
    }

    node.addEventListener("animationend", handleAnimationEnd)
  }, [])

  const DialogBackdrop: React.FC<{ onCancel: () => void }> = useCallback(({ onCancel }) => {
    return (
      <>
        { dialogState.isRevealed ? (
          <div className="fixed inset-0 bg-black/50" style={{ zIndex }} onClick={ onCancel }/>
        ) : null }
      </>
    )
  }, [ dialogState.isRevealed ])


  const DialogComponent = useCallback(() => {
    return (
     <>
        { dialogState.isRevealed ? (
          <div ref={ dialogRef } className="fixed inset-0 max-w-4xl h-fit m-auto" style={{ zIndex }}>
            <Component
              { ...props as ComponentPropsType & React.HTMLAttributes<HTMLElement> }
              onCancel={ dialogState.cancel }
              onConfirm={ dialogState.confirm }
            />
          </div>
        ) : null }
     </>
    )
  }, [ props, dialogState.isRevealed, Component ])

  useEffect(() => {
    const dialogWrapper = () => {
      return (
        <>
          { !options.seamless ? (
            <DialogBackdrop onCancel={ () => options.persistent ? pulse(dialogRef.current) : dialogState.cancel() }/>
          ) : null }
          <DialogComponent/>
        </>
      )
    }

    runInAction(() => collection.set(key, dialogWrapper))

    return () => {
      runInAction(() => collection.delete(key))
    }
  }, [ key, collection, DialogBackdrop, DialogComponent, options.seamless ])

  return dialogState
}

export default useDialog
