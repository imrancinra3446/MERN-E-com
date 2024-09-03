import React, { useState } from 'react'
import { Collapse, Navbar, Nav, NavbarToggler, NavItem } from 'reactstrap';
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom';
const Navigation = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar {...args} expand="md" dark color='dark' sticky='top'>
      <NavLink className=' navbar-brand' to="/">
      <img src={logo} className='img-fluid' width={50} alt="logo" />
      MERN E-com
      </NavLink>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto text-center" navbar>
          <NavItem>
            <NavLink className='nav-link' to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to="/products">Products</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to="/cart">Cart</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to="/login">Login</NavLink>
          </NavItem>
          <NavItem>
            <NavLink className='nav-link' to="/dashboard">Dashboard</NavLink>
          </NavItem>
          
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Navigation;
