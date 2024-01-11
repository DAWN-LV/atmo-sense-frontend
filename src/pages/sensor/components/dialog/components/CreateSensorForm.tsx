import { ColorPicker, NumberField, SelectField, TextField } from "@/components/form"
import Group from "@/components/form/internal/Group"



const CreateSensorForm: React.FC = () => {
  return (
    <div>
      <Group title="Basic Information">
        <div className="flex items-center justify-between space-x-4">
          <TextField name="name" placeholder="Gas sensor" label="Name" className="flex-1"/>
          <ColorPicker name="color" className="mt-3"/>
        </div>
      </Group>

      <Group title="Hardware Settings">
        <SelectField name="type" label="Type" defaultValue={ "DIGITAL" }>
          <option value="DIGITAL">DIGITAL</option>
        </SelectField>
        <TextField name="mac" placeholder="bc:ed:98:c1:44:fb" label="MAC Address"/>
        <NumberField name="gpioPin" placeholder="12" label="GPIO Pin"/>
      </Group>

      {/* <Group title="Group Settings (Optional)">
        
      </Group> */}
    </div>
  )
}

export default CreateSensorForm