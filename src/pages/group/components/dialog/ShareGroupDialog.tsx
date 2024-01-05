import { Form } from "@/components/form"
import { useAlert } from "@/providers"
import { Dialog } from "@/components/dialog"
import Button from "@/components/Button"
import GroupModel from "@/store/sensor/groups/GroupModel"
import ShareGroupForm from "@/pages/group/components/dialog/components/ShareGroupForm"

interface Props {
  group: GroupModel,
  onConfirm?: () => void,
  onCancel?: () => void
}

const DialogFooter: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => (
  <div className="flex space-x-4">
    <Button type="submit" variant="primary" label="Share"/>
    <Button variant="negative" label="Cancel" onClick={ onCancel }/>
  </div>
)

const ShareGroupDialog: React.FC<Props> = ({ group, onConfirm, onCancel }) => {
  const alert = useAlert()

  const handleConfirm = async ({ email }: { email: string }) => {
    await group.share(email)
    alert.add({
      category: "success",
      content: "The new invite has been successfully shared."
    })

    onConfirm && onConfirm()
  }

  return (
    <Form onSubmit={ handleConfirm }>
      <Dialog header="Share Group" footer={ <DialogFooter onCancel={ onCancel }/> }>
        <ShareGroupForm/>
      </Dialog>
    </Form>
  )
}

export default ShareGroupDialog