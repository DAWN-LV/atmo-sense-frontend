import ScrollArea from "@/components/ScrollArea"
import { HiddenField, TextField } from "@/components/form"
import Group from "@/components/form/internal/Group"
import useSelect from "@/hooks/useSelect"
import BaseSensorCard from "@/pages/sensor/components/BaseSensorCard"
import { useAppStore } from "@/providers"
import { classNames } from "@/utils"

const CreateGroupForm: React.FC = () => {
  const { sensorContext: { groupStore } } = useAppStore()

  const { items, toggle, isSelected } = useSelect()

  return (
    <div>
      <Group title="Basic Information">
        <TextField name="name" placeholder="Kitchen Room" label="Name" className="flex-1"/>
      </Group>

      { groupStore.ungrouped.length ? (
        <Group title="Sensors (Optional)">
          <ScrollArea className="flex flex-wrap gap-2 max-h-96">
            {groupStore.ungrouped.map(sensor => (
              <BaseSensorCard 
                key={ sensor.id }
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

export default CreateGroupForm