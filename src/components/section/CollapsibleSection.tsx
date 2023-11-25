import React, { useState } from 'react'
import Icon from '@/components/icon/Icon'

interface Props {
  title: string,
  children: React.ReactNode,
  prepend?: React.ReactNode, 
  append?: React.ReactNode
}

const CollapsibleSection: React.FC<Props> = ({ title, children, prepend, append }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <div className="border rounded-lg overflow-hidden shadow-md">
          <div className="flex items-center bg-white px-4 py-2">
            { prepend && <div className="p-2">{ prepend }</div> }
            <button
              className="flex-grow text-left text-lg font-bold"
              onClick={ () => setIsOpen(prev => !prev) }
            >
              { title }
            </button>
            { append && <div className="p-2">{ append }</div> }
            <div className={ `flex ${ isOpen ? 'rotate-90' : 'rotate-0' }` }>
              <Icon name="chevron_right"/>
            </div>
          </div>
          {isOpen && (
            <div className="p-4">
              { children }
            </div>
          )}
      </div>
    )
}

export default CollapsibleSection