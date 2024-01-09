import Accordion from "@/components/Accordion"
import { useAlert } from "@/providers"
import SensorCard from "@/pages/sensor/components/SensorCard"
import { Dropdown, Item } from "@/components/dropdown"
import UpdateGroupDialog from "@/pages/group/components/dialog/UpdateGroupDalog"
import GroupModel from "@/store/sensor/groups/GroupModel"
import useConfirmationDialog from "@/hooks/useConfirmationDialog"
import useDialog from "@/hooks/useDialog"
import Icon from "@/components/icon"
import SensorModel from "@/store/sensor/sensors/SensorModel"

const GroupSectionPrepend: React.FC<{ group: GroupModel }> = ({ group }) => {
  const alert = useAlert()

  const updateDialog = useDialog(UpdateGroupDialog, { group }, { persistent: true })
  const deleteDialog = useConfirmationDialog({
    title: 'Are you sure?',
    cancelLabel: "Cancel",
    confirmLabel: 'Yes, delete group',
    content: `
      Are you sure you want to delete the group <span class="text-red-600 font-bold">${group.data.name}</span>? 
      This action is irreversible and will result in the removal of all data associated with this sensor. 
      Please confirm deletion.
    `,
    persistent: true,
  })

  deleteDialog.onConfirm(async () => {
    await group.delete()
    alert.add({
      category: "success",
      content: "The sensor has been successfully removed from your system."
    })
  })

  return (
    <Dropdown parent={ <Icon name="ellipsis_vertical" className="cursor-pointer"/> }>
      <Item children="Edit" icon="gear" onClick={ updateDialog.reveal }/>
      <Item 
        children="Remove" 
        icon="trash" 
        className="text-red-600"
        onClick={ deleteDialog.reveal } 
      />
    </Dropdown>
  )
}

const GroupSection: React.FC<{ data: Array<{ group: GroupModel, sensors: SensorModel[] }> }> = ({ data }) => {
  return (
    <>
      {data.map(({ group, sensors }) => (
        <>
          { sensors.length > 0 ? (
            <Accordion 
              key={ group.id } 
              title={ group.data.name } 
              initState={ Boolean(group.sensors.length) }
              prepend={ <GroupSectionPrepend group={ group }/> }
            >
              <div className="flex flex-wrap gap-4 justify-center md:justify-normal">
                {sensors.map(sensor => (
                  <SensorCard key={ sensor.id } sensor={ sensor }/>
                ))}
              </div>
            </Accordion>
          ) : null }
        </>
      ))}
    </>
  )
}

export default GroupSection