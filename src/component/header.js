import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import styled from 'styled-components'

// Create a <NavbarContainer> react component that renders a <div> which
// contains the Bootstrap nav bar
const NavbarContainer = styled.div`
  padding: 0px 20% 0px 20%;
`
const StyledNavbar = styled(Navbar)`
  padding: 0px 20px;
`

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <NavbarContainer>
    <StyledNavbar inverse>
      <Nav>
        <LinkContainer to='/'>
          <NavItem eventKey={1}>Coins</NavItem>   
        </LinkContainer>         
      </Nav>
    </StyledNavbar>
  </NavbarContainer>
)

export default Header
