import { useEffect, useState } from "react";
import Photo from "../../atoms/photo/Photo";
import './slider.scss';

const Slider = () => {
    const images = [];
    for(let i=1; i<8; i++){
        images.push(i);
    }

    const sliderHeight = 731;
    const [activeSlide, setActiveSlide] = useState(0);
    let [slider, setSlider] = useState(null)


    const scrollToSlide = wantedSlide => {
        let position = wantedSlide*sliderHeight;
        slider.scrollTop = position;
    }


    const activeNav = () => {
        document.querySelector(`.nav-${activeSlide}`)
                .classList
                .add(`slider__nav-dot--active`);
    }


    const clearNavs = () => {
        document.querySelector(`.slider__nav-dot--active`)
                .classList
                .remove('slider__nav-dot--active');
    }

    useEffect(() => {
        slider = document.querySelector(".slider");
        setSlider(slider);
        slider.addEventListener('scroll', function ( event ) {

            let isScrolling;
            // Clear our timeout throughout the scroll
            window.clearTimeout( isScrolling );
        
            // Set a timeout to run after scrolling ends
            isScrolling = setTimeout(function() {
        
                // Run the callback
                let currentSlide = Math.ceil(slider.scrollTop / sliderHeight);
                setActiveSlide(currentSlide);
        
            }, 66);
        
        }, false);
    }, [])

    useEffect(() => {
        clearNavs();
        activeNav(activeSlide);
    }, [activeSlide])

    return ( 
        <div className="slider">
            {images.map(index => {
                return(
                    <Photo key={'key-' + index} index={index}/>
                )}
            )}
            <div className="slider__nav-container">
                {images.map(index => {
                    return(
                        <div 
                            className={`slider__nav-dot nav-${index - 1} ${index - 1 === 0 ? "slider__nav-dot--active" : ""}`}
                            key={`nav-${index}`}
                            onClick={() => scrollToSlide(index - 1)}
                        ></div>
                    )
                })}
            </div>
        </div>
    );
}

export default Slider;