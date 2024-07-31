'use client'
import { Select } from 'react-element-forge'

type SideNavSelectPropsT = {
  className?: string
}
const SideNavSelect = ({ className = '' }: SideNavSelectPropsT) => {
  return (
    <Select
      className={className}
      name="contet"
      label="select context"
      showLabel={false}
      value={'innovation studio'}
      options={[
        {
          value: 'innovation studio',
          label: 'Innovation Studio',
        },
        {
          value: 'personal',
          label: 'Personal',
        },
      ]}
    />
  )
}

export default SideNavSelect
