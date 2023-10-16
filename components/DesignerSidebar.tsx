import React from 'react'
import { FormElements } from './FormElements'
import SidebarBtnElement from './SidebarBtnElement'

const DesignerSidebar = () => {
  return (
    <aside className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full'>
      Elements
      <SidebarBtnElement formElement={FormElements.TextField} />
    </aside>
  )
}

export default DesignerSidebar