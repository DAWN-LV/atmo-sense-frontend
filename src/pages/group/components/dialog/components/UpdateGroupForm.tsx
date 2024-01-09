import ScrollArea from "@/components/ScrollArea"
import { HiddenField, TextField } from "@/components/form"
import Group from "@/components/form/internal/Group"
import useSelect from "@/hooks/useSelect"
import BaseSensorCard from "@/pages/sensor/components/BaseSensorCard"
import { useAppStore } from "@/providers"
import GroupModel from "@/store/sensor/groups/GroupModel"
import { classNames } from "@/utils"
import { useMemo } from "react"

const UpdateGroupForm: React.FC<{ group: GroupModel }> = ({ group }) => {
  const { sensorContext: { groupStore } } = useAppStore()

  const { items, toggle, isSelected } = useSelect(
    group.sensors.map(sensor => sensor.id)
  )

  const sensors = useMemo(() => [ 
    ...group.sensors,
    ...groupStore.ungrouped
  ], [ groupStore.ungrouped, group.sensors ])

  return (
    <div>
      <Group title="Basic Information">
        <TextField name="name" placeholder="Kitchen Room" label="Name" className="flex-1"/>
      </Group>

      { sensors.length ? (
        <Group title="Sensors (Optional)">
          <ScrollArea className="flex flex-wrap gap-2 max-h-96">
            {sensors.map(sensor => (
              <BaseSensorCard 
                sensor={ sensor } 
                className={ classNames("cursor-pointer", isSelected(sensor.id) ? "!border-blue-600" : "") }
                onClick={ () => toggle(sensor.id) } 
              />
            ))}
          </ScrollArea>
          <HiddenField name="sensorIds" value={ items }/>
        </Group>
      ) : null }
    </div>
  )
}

export default UpdateGroupForm