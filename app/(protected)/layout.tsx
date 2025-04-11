import React, { PropsWithChildren } from 'react'
import MobileNav from './components/MobileNav'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div>
      <MobileNav/>
      {children}
    </div>
  )
}

export default layout
