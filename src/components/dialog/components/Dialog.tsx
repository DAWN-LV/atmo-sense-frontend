import React from 'react'
import Separator from '@/components/Separator'

interface Props {
  header?: React.ReactNode,
  footer?: React.ReactNode,
  children?: React.ReactNode
}

const Dialog: React.FC<Props> = ({ header, children, footer }) => (
  <div className="relative mx-6 bg-white rounded-lg shadow dark:bg-gray-700">
    { header ? (
      <>
        <div className="p-4 md:p-5 rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            { header }
          </h3>
        </div>
        <Separator/>
      </>
    ) : null }
    
    <div className="p-4 md:p-5 space-y-4 text-gray-900 dark:text-white">
      { children }
    </div>

    { footer ? (
      <>
        <Separator/>
        <div className="flex items-center justify-end p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
          { footer }
        </div>
      </>
    ) : null }
  </div>
)

export default Dialog
