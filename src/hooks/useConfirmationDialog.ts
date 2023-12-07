import useDialog, { DialogOptions } from "@/hooks/useDialog"
import { ConfirmationDialog } from "@/components/dialog"

export interface ConfirmationDialogOptions extends Omit<DialogOptions, 'confirmEvent' | 'cancelEvent'> {
  title: string,
  content: string,
  confirmLabel?: string,
  cancelLabel?: string,
  confirmVariant?: string,
  className?: string
}

function useConfirmationDialog<
  RevealData = any,
  ConfirmData = any,
  CancelData = any,
>(options: ConfirmationDialogOptions) {
  const dialogProps = {
    title: options.title,
    content: options.content,
    confirmLabel: options.confirmLabel,
    cancelLabel: options.cancelLabel,
    confirmVariant: options.confirmVariant,
    className: options.className,
  }

  const dialogOptions: DialogOptions = {
    persistent: options.persistent,
    seamless: options.seamless,
  }

  return useDialog<RevealData, ConfirmData, CancelData>(
    ConfirmationDialog,
    dialogProps,
    dialogOptions
  )
}

export default useConfirmationDialog
