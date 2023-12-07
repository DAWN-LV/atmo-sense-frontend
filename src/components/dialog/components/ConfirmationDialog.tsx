import React from 'react'
import Dialog from '@/components/dialog/components/Dialog' 
import Button, { ButtonVariant } from '@/components/Button' 

interface ConfirmationDialogProps {
  title?: string,
  content?: string,
  confirmLabel?: string,
  cancelLabel?: string,
  confirmVariant?: ButtonVariant,
  onConfirm?: () => void,
  onCancel?: () => void
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
  title,
  content,
  confirmLabel = 'Continue',
  cancelLabel,
  confirmVariant = 'primary',
  onConfirm,
  onCancel,
}) => {
  return (
    <Dialog
      header={ title && <div>{ title }</div> }
      footer={
        <div className="flex space-x-4">
          <Button variant={ confirmVariant } label={ confirmLabel } onClick={ onConfirm }/>
          <Button variant="negative" label={ cancelLabel } onClick={ onCancel }/>
        </div>
      }
    >
      <div className="flex-grow overflow-hidden p-4">
        {content ? (
          <div className="h-full">
            <div className="h-full break-words" dangerouslySetInnerHTML={{ __html: content }}/>
          </div>
        ) : (
          <div className="h-full">
            {/* Default content or children */}
          </div>
        )}
      </div>
    </Dialog>
  )
}

export default ConfirmationDialog
