import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'
import { StyledNavbar } from './styledComponents'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <StyledNavbar inverse>
    <Nav>
      <IndexLinkContainer to='/'>
        <NavItem>Coins</NavItem>   
      </IndexLinkContainer>
      <IndexLinkContainer to='/social'>
        <NavItem>Social</NavItem>   
      </IndexLinkContainer>
      <IndexLinkContainer to='/normalized'>
        <NavItem>Normalized Price</NavItem>   
      </IndexLinkContainer>
      <IndexLinkContainer to='/goodcoins'>
        <NavItem>Prospective Good-coins</NavItem>   
      </IndexLinkContainer>         
      <IndexLinkContainer to='/altcoins'>
        <NavItem>Prospective Alt-coins</NavItem>
      </IndexLinkContainer>      
    </Nav>
  </StyledNavbar>
)

export default Header
