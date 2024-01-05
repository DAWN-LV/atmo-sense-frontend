import React, { ReactElement, ReactNode, useState } from 'react'
import Dialog from '@/components/dialog/components/Dialog' 
import ScrollArea from '@/components/ScrollArea'
import Button from '@/components/Button'

interface SelectionDialogProps {
  title: string,
  footer?: ReactNode,
  children: (items: any[], toggle: (item: unknown) => void) => ReactElement,
  onConfirm?: () => void,
  onCancel?: () => void
}

const SelectionDialog: React.FC<SelectionDialogProps> = ({ title, footer, children, onCancel }) => {
  const [ items, setItems ] = useState<any[]>([])

  const add = (item: unknown) => {
    setItems(prevItems => [ ...prevItems, item ])
  }
  
  const remove = (item: unknown) => {
    setItems(prevItems => prevItems.filter(i => i !== item))
  }
  
  const toggle = (item: unknown) => {
    setItems(prevItems => prevItems.includes(item) ? prevItems.filter(i => i !== item) : [ ...prevItems, item ])
  }

  return (
    <Dialog
      header={ <div>{ title }</div> }
      footer={ 
        <div className="flex space-x-4">
          <Button type="submit" variant="primary" label="Add"/>
          <Button variant="negative" label="Cancel" onClick={ onCancel }/>
        </div>
      }
    >
      <ScrollArea className="flex flex-wrap flex-grow content-start h-full gap-2 p-4">
        { children(items, toggle) }
      </ScrollArea>
    </Dialog>
  )
}

export default SelectionDialog
