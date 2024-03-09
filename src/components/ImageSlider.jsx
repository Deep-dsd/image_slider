import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
const ImageSlider = ({ imagesArr }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [imagesArray, setImagesArray] = useState(imagesArr);

  const previousSlide = () => {
    if (currentImage === 0) {
      setCurrentImage((prevImg) => (prevImg = imagesArray.length - 1));
    } else {
      setCurrentImage((prevImg) => (prevImg = prevImg - 1));
    }
  };

  const nextSlide = () => {
    if (currentImage === imagesArray.length - 1) {
      setCurrentImage((prevImg) => (prevImg = 0));
    } else {
      setCurrentImage((prevImg) => (prevImg = prevImg + 1));
    }
  };

  const indicatorHandler = (currentIndex) => {
    setCurrentImage((prevImg) => (prevImg = currentIndex));
  };
  return (
    <>
      {/* Beginner Level Slider */}
      {/* <div className="image-container">
        <FaArrowCircleLeft
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        <FaArrowCircleRight className="arrow arrow-right" onClick={nextSlide} />
        <img src={imagesArray[currentImage]} alt="" />
      </div> */}

      {/* Intermediate level Slider */}
      <div className="image-container">
        <div className="img-div">
          {imagesArray.map((image, i) => {
            return (
              <img
                src={image}
                alt=""
                key={i}
                className="slider-img"
                style={{ translate: `${-100 * currentImage}%` }}
              />
            );
          })}
        </div>
        <FaArrowCircleLeft
          className="arrow arrow-left"
          onClick={previousSlide}
        />
        <FaArrowCircleRight className="arrow arrow-right" onClick={nextSlide} />
        <div className="slider-indicator">
          {imagesArray.map((_, i) => {
            return (
              <span
                key={i}
                className={`${i === currentImage && "active-span"}`}
                onClick={() => indicatorHandler(i)}
              ></span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
