import Icon from '@/components/icon/Icon.tsx'
import { NavLink } from "react-router-dom"
import { IconName } from "@/components/icon"
import React from 'react'

export interface Props {
  label: string, 
  icon: IconName,
  to: string
}

const IconWrapper: React.FC<{ isActive: boolean; icon: IconName }> = ({ isActive, icon }) => (
  <div 
    className={`
      ${ isActive ? "bg-blue-600 text-white" : "bg-white" }
      flex justify-center items-center h-8 w-8
      rounded-lg mr-2 shadow-sm
    `}
  >
    <Icon name={icon} />
  </div>
)

const LabelWrapper: React.FC<{ isActive: boolean; label: string }> = ({ isActive, label }) => (
  <span className={`${ isActive && "font-bold" } ml-1`}>{label}</span>
)

const LinkWrapper: React.FC<Props> = ({ label, icon, to }) => (
  <NavLink to={ to }>
    {({ isActive }) => (
      <div
        className={`
          ${ isActive ? "bg-white shadow-sm" : "hover:bg-gray-200" }
          py-2.5 text-sm mx-4 flex items-center
          whitespace-nowrap px-4 rounded-lg
        `}
      >
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