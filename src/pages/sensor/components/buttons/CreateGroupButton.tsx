import Button from "@/components/Button"
import useDialog from "@/hooks/useDialog"
import CreateGroupDialog from "@/pages/group/components/dialog/CreateGroupDialog"

const CreateGroupButton: React.FC = () => {
  const dialog = useDialog(CreateGroupDialog, {}, { persistent: true })

  return (
    <Button variant="primary" icon="user_group" label="New Group" onClick={ dialog.reveal }/>
  )
}

export default CreateGroupButton