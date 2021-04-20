import { useEffect } from "react";
import Photo from "../../atoms/photo/Photo";
import "./slider.scss";

const Slider = () => {
  // Images array
  const images = [];
  for (let i = 1; i < 8; i++) {
    images.push(i);
  }

  // Check if slider mode is horrizontal
  const navIsHorrizontal = () => window.innerWidth > 700 ? true : false;

  // Activate new  dot and disactivate old dots
  const handleNavDots = (currentActiveSlide) => {
    // disactivate old nav dot
    document
      .querySelector(`.slider__nav-dot--active`)
      .classList.remove("slider__nav-dot--active");

    // activate new nav dot
    document
      .querySelector(`.nav-${currentActiveSlide}`)
      .classList.add(`slider__nav-dot--active`);
  };

  const handleNavImages = (event) => {
    let id = event.target.id;
    scrollToSlide(id - 1);

    // // disactivate old nav dot
    document
      .querySelector(`.slider__nav-img--active`)
      .classList.remove("slider__nav-img--active");

    // // activate new nav dot
    document
      .querySelector(`.slider__nav-img-${id - 1}`)
      .classList.add(`slider__nav-img--active`);
  };

  // Scroll to the wanted slide
  const scrollToSlide = (wantedSlide) => {
    let slider = document.querySelector(".slider__body");
    if (navIsHorrizontal()) {
      let position = wantedSlide * slider.offsetWidth;
      slider.scrollLeft = position;
    } else {
      let position = wantedSlide * slider.offsetHeight;
      slider.scrollTop = position;
    }
  };

  // listen for any scrolling to update active slide
  useEffect(() => {
    // listen for any scrolling to change active one
    let slider = document.querySelector(".slider__body");
    slider.addEventListener("scroll", () => {
      if (!navIsHorrizontal())
        handleNavDots(Math.round(slider.scrollTop / slider.offsetHeight));
    });

    window.addEventListener('resize', ()=> {
      if(navIsHorrizontal) scrollToSlide(document.querySelector(".slider__nav-img--active").classList[1].slice(-1))
    })
  });

  return (
    <div className="slider">
      <div className="slider__body">
        {images.map((index) => {
          return (
            <Photo
              id={"main-image"}
              key={"key-" + index}
              index={index}
              navClass={`slider__photo slider__photo-${index}`}
              containerClass="slider__photo-container"
            />
          );
        })}
      </div>
      <div className="slider__nav-images-container">
        {images.map((index) => {
          return (
            <Photo
              key={"key-" + index}
              index={index}
              id={index}
              containerClass="slider__nav-img-container"
              navClass={`slider__nav-img slider__nav-img-${index - 1} ${
                index === 1 ? "slider__nav-img--active" : ``
              }`}
              handleNavImages={handleNavImages}
            />
          );
        })}
        <button className="slider__previous"></button>
        <button className="slider__next"></button>
      </div>
      <div className="slider__nav-container">
        {images.map((index) => {
          return (
            <div
              className={`slider__nav-dot nav-${index - 1} ${
                index - 1 === 0 ? "slider__nav-dot--active" : ""
              }`}
              key={`nav-${index}`}
              onClick={() => scrollToSlide(index - 1)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
