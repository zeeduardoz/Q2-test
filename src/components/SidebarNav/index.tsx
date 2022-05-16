import React, { ReactNode } from 'react'

import { Container, Overlay, SidebarContent } from './styles'

export type SidebarNavProps = {
  visible: boolean
  onClose: () => void
  children: ReactNode
}

const SidebarNav = ({ visible, onClose, children }: SidebarNavProps) => {
  return (
    <Container>
      <Overlay visible={visible} onClick={() => onClose()} />
      <SidebarContent visible={visible}>{children}</SidebarContent>
    </Container>
  )
}

export default SidebarNav
