import Button from "@/components/Button"
import { Form } from "@/components/form"
import { useAppStore, useAlert } from "@/providers"
import { Dialog } from "@/components/dialog"
import CreateGroupForm from "@/pages/group/components/dialog/components/CreateGroupForm"
import { CreateGroupDTO } from "@/store/sensor/groups/types"

interface Props {
  onConfirm?: () => void,
  onCancel?: () => void
}

const DialogFooter: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => (
  <div className="flex space-x-4">
    <Button type="submit"variant="primary" label="Add"/>
    <Button variant="negative" label="Cancel" onClick={ onCancel }/>
  </div>
)

const CreateGroupDialog: React.FC<Props> = ({ onConfirm, onCancel }) => {
  const { sensorContext: { groupStore } } = useAppStore()
  const alert = useAlert()

  const handleConfirm = async (dto: CreateGroupDTO) => {
    await groupStore.create(dto)
    alert.add({
      category: "success",
      content: "The new group has been successfully added to your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <Form onSubmit={ handleConfirm }>
      <Dialog header="Add New Group" footer={ <DialogFooter onCancel={ onCancel }/> }>
        <CreateGroupForm/>
      </Dialog>
    </Form>
  )
}

export default CreateGroupDialog