import Icon, { IconName } from "@/components/icon"

interface Props {
  icon: IconName,
  label: string,
  count: number
}

const DashboardTile: React.FC<Props> = ({ icon, label, count }) => (
  <div className="flex items-center px-6 py-4 border overflow-hidden shadow rounded-lg bg-gray-100 dark:border-gray-700 dark:text-white dark:bg-gray-800">
    <div className="flex p-4 rounded-lg text-white text-lg bg-blue-600">
      <Icon name={ icon }/>
    </div>
    <div className="px-4">
      <h3 className="text-sm tracking-wider">{ label }</h3>
      <p className="text-3xl">{ count }</p>
    </div>
  </div>
)

export default DashboardTile