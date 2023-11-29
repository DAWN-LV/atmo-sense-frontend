import { NavLink } from "react-router-dom"
import Icon, { IconName } from "@/components/icon"
import React from 'react'
import { classNames } from "@/utils"

export interface Props {
  label: string, 
  icon: IconName,
  to: string
}

const IconWrapper: React.FC<{ isActive: boolean; icon: IconName }> = ({ isActive, icon }) => (
  <div className={ classNames("flex justify-center items-center h-8 w-8 rounded-lg mr-2 shadow-sm", isActive ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-900") }>
    <Icon name={ icon } />
  </div>
)

const LabelWrapper: React.FC<{ isActive: boolean; label: string }> = ({ isActive, label }) => (
  <span className={ classNames("ml-1", isActive ? "font-bold" : "") }>{ label }</span>
)

const LinkWrapper: React.FC<Props> = ({ label, icon, to }) => (
  <NavLink to={ to }>
    {({ isActive }) => (
      <div className="py-2.5 text-sm mx-4 flex items-center whitespace-nowrap px-4 rounded-lg bg-gray-100 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700">
        <IconWrapper isActive={ isActive } icon={ icon }/>
        <LabelWrapper isActive={ isActive } label={ label }/>
      </div>
    )}
  </NavLink>
)

const Link: React.FC<Props> = (props) => (
  <li className="mt-1 w-full">
    <LinkWrapper { ...props }/>
  </li>
)

export default Link