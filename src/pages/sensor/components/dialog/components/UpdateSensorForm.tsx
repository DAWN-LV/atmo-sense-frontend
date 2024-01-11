import { ColorPicker, NumberField, SelectField, TextField } from "@/components/form"
import Group from "@/components/form/internal/Group"
import { useAppStore } from "@/providers"
import { useMemo } from "react"

const UpdateSensorForm: React.FC = () => {
  const { sensorContext: { configStore } } = useAppStore()

  const options = useMemo(() => {
    return configStore.templates.map(template => ({ 
      type: template.data.type,
      disabled: !template.data.enabled
    }))
  }, [ configStore.templates ])

  return (
    <div>
      <Group title="Basic Information">
        <div className="flex items-center justify-between space-x-4">
          <TextField name="name" placeholder="Gas sensor" label="Name" className="flex-1"/>
          <ColorPicker name="color" className="mt-3"/>
        </div>
      </Group>
  
      <Group title="Hardware Settings">
        <SelectField name="type" label="Type">
          {options.map(option => (
            <option 
              key={ option.type }
              value={ option.type } 
              disabled={ option.disabled }
            >
              { option.type }
            </option>
          ))}
        </SelectField>
        <NumberField name="gpioPin" placeholder="12" label="GPIO Pin"/>
      </Group>
    </div>
  )
}

export default UpdateSensorForm