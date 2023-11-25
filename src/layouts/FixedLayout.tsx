import Separator from "@/components/Separator"

interface Props {
  header?: React.ReactNode, 
  children?: React.ReactNode, 
  footer?: React.ReactNode
}

const FixedLayout: React.FC<Props> = ({ header, children, footer }) => (
  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
    {header && (
      <>
        <div className="flex items-center justify-between p-4 md:p-5 rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            { header }
          </h3>
        </div>
        <Separator/>
      </>
    )}
    
    <div className="p-4 md:p-5 space-y-4">
      { children }
    </div>

    {footer && (
      <>
        <Separator/>
        <div className="flex items-center justify-end p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
          { footer }
        </div>
      </>
    )}
  </div>
)

export default FixedLayout