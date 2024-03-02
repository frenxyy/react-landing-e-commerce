import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {semuaKelas} from '../data/index'

const menuPage = () => {
  return (
    <div className='menuPage'>
      <Container>
        <Row>
          <h1 className='text-center fw-bold'>
            Layanan Tersedia
          </h1>
          <p className='text-center'>
            Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Porro vitae iste pariatur.
          </p>
        </Row>
        <Row>
          {semuaKelas.map((menuall) => {
            return (
              <Col key={menuall.id} className="shadow rounded">
                  <img
                    src={menuall.image}
                    alt="Unsplash.com"
                    className="w-100 mb-4 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={menuall.star1}></i>
                    <i className={menuall.star2}></i>
                    <i className={menuall.star3}></i>
                    <i className={menuall.star4}></i>
                    <i className={menuall.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3 fw-semibold fs-4">{menuall.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 fw-bold">{menuall.price}</p>
                    <button className="btn btn-success rounded-1">
                      {menuall.buy}
                    </button>
                  </div>
                </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}

export default menuPage