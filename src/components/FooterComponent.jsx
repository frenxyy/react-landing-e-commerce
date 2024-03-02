import React from 'react'
import {navLinks, socialmedia} from '../data/index'
import { NavLink } from 'react-router-dom';

import {Container, Row, Col} from 'react-bootstrap'

const FooterComponent = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer-box w-100 d-flex justify-content-between align-items-center">
          <div className="about-me w-25">
            <h2 className="fw-bold">Ixora-Store.</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              autem!
            </p>
          </div>
          <div className="link">
            {navLinks.map((links) => {
              return (
                <NavLink to={links.path} key={links.id}>
                  {links.text}
                </NavLink>
              );
            })}
          </div>
          <div className="social">
            <Col>
              <h4>Social Media</h4>
            </Col>
            <div className='d-flex gap-2'>
              {socialmedia.map((social) => {
                return (
                  <NavLink to={social.link} key={social.id} target='_blank'>
                    <i className={social.media}></i>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <h4>© Copyright 2023 By <span>@mrdhkrnwn</span> All Right Reseve</h4>
        </div>
      </Container>
    </div>
  );
}

export default FooterComponent