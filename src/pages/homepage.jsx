import React from 'react';
import HeroImage from '../assets/herosec-bg.png'

import {dataSwiper, menupopuler} from '../data/index'

import {useNavigate} from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import FaqComponents from '../components/FaqComponents';

const Homepage = () => {
  let navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="header">
        <Container>
          <Row className="row-cols-1 row-cols-lg-2">
            <Col className="mb-lg-0 mb-5">
              <h1>
                Mari Menjadi Terkenal <br /> dan Dikenali Orang
                <br /> Bersama <span>Kami.</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo vero repellendus voluptas laudantium eveniet quis
                expedita?
              </p>
              <div>
                <button className="btn btn-info rounded-2 mx-2 btn-lg fw-medium">
                  Lihat Harga
                </button>
                <button className="btn btn-outline-info rounded-2 btn-lg fw-medium">
                  Lihat Layanan
                </button>
              </div>
            </Col>
            <Col>
              <img src={HeroImage} alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="menu">
        <Container className="min-vh-100">
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Layanan Favorit</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis similique veniam laborum.
              </p>
            </Col>
          </Row>
          <Row className="mt-5">
            {menupopuler.map((menu) => {
              return (
                <Col key={menu} className="shadow rounded">
                  <img
                    src={menu.image}
                    alt="Unsplash.com"
                    className="w-100 mb-4 rounded-top"
                  />
                  <div className="star mb-2 px-3">
                    <i className={menu.star1}></i>
                    <i className={menu.star2}></i>
                    <i className={menu.star3}></i>
                    <i className={menu.star4}></i>
                    <i className={menu.star5}></i>
                  </div>
                  <h5 className="mb-5 px-3 fw-semibold fs-4">{menu.title}</h5>
                  <div className="ket d-flex justify-content-between align-items-center px-3 pb-3">
                    <p className="m-0 fw-bold">{menu.price}</p>
                    <button className="btn btn-success rounded-1">
                      {menu.buy}
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="text-center">
              <button
                className="btn btn-success rounded-5 btn-lg"
                onClick={() => navigate("/layanan")}
              >
                Lihat Semua Kelas
                <i className="fa-solid fa-chevron-right ms-1"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="testimoni">
        <Container>
          <Row>
            <Col>
              <h1 className="text-center fw-bold">Testimonial</h1>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita architecto harum laborum.
              </p>
            </Col>
          </Row>
          <Row>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                992: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {dataSwiper.map((data) => {
                return (
                  <SwiperSlide key={data.id} className="shadow-sm rounded">
                    <div className="people">
                      <img src={data.image} alt="" />
                      <h3 className="pt-3 fw-bold fs-3">{data.name}</h3>
                      <p className="fw-medium">{data.skill}</p>
                    </div>
                    <div className="desc">
                      <p className="fw-medium">{data.desc}</p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Row>
        </Container>
      </div>

      <FaqComponents />
      
    </div>
  );
};

export default Homepage;
