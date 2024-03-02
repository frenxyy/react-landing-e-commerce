import React from 'react'

import {Navbar, Container, Nav} from 'react-bootstrap'
import {useState, useEffect} from 'react';

import {navLinks} from '../data/index'
import { NavLink } from 'react-router-dom';


const navbarComponents = () => {
  const [ChangeColor, setChangeColor] = useState(false);

  const changebackgroundColor = () => {
    if (window.scrollY > 20) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  };

  useEffect(() => {
    changebackgroundColor();

    window.addEventListener("scroll", changebackgroundColor)
  });

  return (
    <div>
      <Navbar expand="lg" className={ChangeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fw-bold'>Ixora-Store.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => {
              return (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""} end >
                    {link.text}
                  </NavLink>
                </div>
              );
            })}
          </Nav>

          <div className='text-center'>
            <button className='btn btn-outline-danger rounded-1'>Contact Me</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default navbarComponents