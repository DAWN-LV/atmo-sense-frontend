import React from "react"
import Icon from '@/components/icon/Icon.tsx'
import { NavLink } from "react-router-dom"
import { IconName } from "@/components/icon"

export interface Props {
  label: string, 
  icon: IconName,
  to: string
}

const defaultStyle = "flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"

const Link: React.FC<Props> = ({ label, icon, to }) => {
  return (
    <li>
      <NavLink 
        to={ to } 
        className={({ isActive }) => `${ isActive ? "bg-gray-100" : "" } ${ defaultStyle }` }
      >
        <Icon name={ icon }/>
        { label }
      </NavLink>
    </li>
  )
}

export default Link