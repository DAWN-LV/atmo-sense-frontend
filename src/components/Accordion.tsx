import React, { useState } from 'react'
import Icon from '@/components/icon'

interface Props {
  title: string,
  children: React.ReactNode,
  append?: React.ReactNode,
  prepend?: React.ReactNode,
  initState?: boolean
}

const Accordion: React.FC<Props> = ({ title, children, append, prepend, initState = false }) => {
    const [ isOpen, setOpen ] = useState(false)

    return (
      <div>
        <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={ () => setOpen(prev => !prev) }>
            <Icon name="chevron_right" className={ isOpen ? "rotate-90" : "" }/>
            <div className="flex items-center space-x-2">
              { append ? (
                <div>{ append }</div>
              ) : null }
              <span>{ title }</span>
            </div>
          </div>
          { prepend ? (
            <div className="flex items-center">
              { prepend }
            </div>
          ) : null }
        </div>
        { isOpen ? (
          <div className="overflow-hidden transition-max-height">
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-2 text-gray-500 dark:text-gray-400">
                { children }
              </div>
            </div>
          </div>
        ) : null }
      </div>
    )
}

export default Accordion