import React from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

const Sidebar = dynamic<{}>(() => import('components').then(mod => mod.Sidebar))

const Wrapper = styled("div")``

export interface LayoutProps extends React.ComponentPropsWithoutRef<"div"> { }

const Layout: React.ComponentType<LayoutProps> = (props) => {
  const { children, ...rest } = props

  return (
    <Wrapper {...rest}>
      <Sidebar />
      {children}
    </Wrapper>
  )
}

export default Layout