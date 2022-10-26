import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Images/image1.svg';
import img2 from '../Images/image2.svg';
import img3 from '../Images/image3.svg';
import '../CSS/MainBody.css'

export default function MainBody() {
  return (
    <div className="carouselContainer">
      <Carousel>
        <Carousel.Item>
            <img
                src={ img1 }
                className="carouselImages"
                alt="First slide"
              />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                src={ img2 }
                className="carouselImages"
                alt="second slide"
              />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                src={ img3 }
                className="carouselImages"
                alt="third slide"
              />
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  );
}
