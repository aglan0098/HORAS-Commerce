import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function Slider() {
  return (
    <Carousel>
      <Carousel.Item className="mySlides">
        <img
          className="d-block w-100"
          src={require("../../assets/images/slider/img1.jpg")}
          alt="First slide"
        />
        <div className="overlay"></div>

        <Carousel.Caption>
          <h3 className="text mb-4">
            <span className="slider-span">Shoping</span> with one Click
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="mySlides">
        <img
          src={require("../../assets/images/slider/img2.jpg")}
          alt="Second slide"
        />
        <div className="overlay"></div>

        <Carousel.Caption>
          <h3 className="text mb-4">
            All in one <span className="slider-span">Place</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="mySlides">
        <img
          className="d-block w-100"
          src={require("../../assets/images/slider/img3.jpg")}
          alt="Third slide"
        />
        <div className="overlay"></div>

        <Carousel.Caption>
          <h3 className="text mb-4">
            Best <span className="slider-span">Quality</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="mySlides">
        <img
          className="d-block w-100"
          src={require("../../assets/images/slider/img4.jpg")}
          alt="Third slide"
        />
        <div className="overlay"></div>

        <Carousel.Caption>
          <h3 className="text mb-4">
            Best <span className="slider-span">Price</span>
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
