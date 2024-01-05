import { Form } from "@/components/form"
import { useAlert } from "@/providers"
import { UpdateGroupDTO } from "@/store/sensor/groups/types"
import { Dialog } from "@/components/dialog"
import UpdateGroupForm from "./components/UpdateGroupForm"
import Button from "@/components/Button"
import GroupModel from "@/store/sensor/groups/GroupModel"

interface Props {
  group: GroupModel,
  onConfirm?: () => void,
  onCancel?: () => void
}

const DialogFooter: React.FC<{ onCancel?: () => void }> = ({ onCancel }) => (
  <div className="flex space-x-4">
    <Button type="submit"variant="primary" label="Update"/>
    <Button variant="negative" label="Cancel" onClick={ onCancel }/>
  </div>
)

const UpdateGroupDialog: React.FC<Props> = ({ group, onConfirm, onCancel }) => {
  const alert = useAlert()

  const initialValues: UpdateGroupDTO = {
    name: group.data.name
  }

  const handleConfirm = async (dto: UpdateGroupDTO) => {
    await group.update(dto)
    alert.add({
      category: "success",
      content: "The new group has been successfully updated from your system."
    })

    onConfirm && onConfirm()
  }

  return (
    <Form initialValues={ initialValues } onSubmit={ handleConfirm }>
      <Dialog header="Update Group" footer={ <DialogFooter onCancel={ onCancel }/> }>
        <UpdateGroupForm group={ group }/>
      </Dialog>
    </Form>
  )
}

export default UpdateGroupDialog