import React, { Component } from "react";
import "./Home.css";
// import ReactDOM from "react-dom";

import { Container, Carousel, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className='d-block w-100'
              src='https://images.shiksha.com/mediadata/images/1495453596phpCVhLD8.jpeg'
              alt='First slide'
              height='400'
              width='400'
            />
            <Carousel.Caption>
              <h1 style={{ color: "#0D0E0D", textTransform: 'capitalize' }}>
                Mentoring System
              </h1>

              <p>
                Centurion University Of Technology and Mangement, Paralakhemundi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className='d-block w-100'
              src='https://images.pexels.com/photos/442574/pexels-photo-442574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Second slide'
              height='400'
              width='400'
            />
            <Carousel.Caption>
              <h1 className='herotext'> Mentoring System</h1>
              <p>
                Centurion University Of Technology and Mangement, Paralakhemundi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='https://images.pexels.com/photos/877971/pexels-photo-877971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt='Third slide'
              height='400'
              width='400'
            />
            <Carousel.Caption>
              <h1 style={{ color: "#F3ED12", textTransform: "capatilize" }}>
                Mentoring System
              </h1>
              <p>
                Centurion University Of Technology and Mangement, Paralakhemundi
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <br></br>
        <Container>
          <Row>
            <Col>
              {" "}
              <Link to='/admin'>
                <div className='container1'>
                  <img
                    src='https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    class='rounded float'
                    alt='...'
                    height='200'
                    width='250'
                  ></img>
                  <div class='centered'>Admin</div>
                </div>
              </Link>
            </Col>
            <Col>
              <Link to='/student'>
                <div className='container1'>
                  <img
                    src='https://images.pexels.com/photos/7130535/pexels-photo-7130535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    class='rounded float'
                    alt='...'
                    height='200'
                    width='250'
                  ></img>
                  <div className='centered'>Student</div>
                </div>
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to='/mentor'>
                <div className='container1'>
                  <img
                    src='https://images.pexels.com/photos/7130540/pexels-photo-7130540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    class='rounded float'
                    alt='...'
                    height='200'
                    width='250'
                  ></img>
                  <div className='centered'>Mentor</div>
                </div>
              </Link>
            </Col>
            <Col>
              {" "}
              <Link to='/parent'>
                <div className='container1'>
                  <img
                    src='https://images.pexels.com/photos/7130541/pexels-photo-7130541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                    class='rounded float'
                    alt='...'
                    height='200'
                    width='250'
                  ></img>
                  <div className='centered'>Parent</div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
