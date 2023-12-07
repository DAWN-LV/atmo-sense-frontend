import { useDialogCollection } from '@/providers'
import { observer } from 'mobx-react-lite'
import ReactDOM from 'react-dom'

const Dialogs = () => {
  const dialogCollection = useDialogCollection()

  if (!dialogCollection) {
    console.error('DialogCollectionContext not found')
    return null
  }

  return (
    <>
      {Array.from(dialogCollection.entries()).map(([key, DialogComponent]) =>
        ReactDOM.createPortal(<DialogComponent key={ key }/>, document.body)
      )}
    </>
  )
}

export default observer(Dialogs)
