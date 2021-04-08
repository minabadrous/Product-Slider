import Photo from "../../atoms/photo/Photo";
import './slider.css';

const Slider = () => {
    const images = [];
    for(let i=1; i<8; i++){
        images.push(i)
    }
    

    return ( 
        <div className="slider">
            {images.map(index => {
                return(
                    <Photo key={'key-' + index} index={index}/>
                )}
            )}
        </div>
    );
}

export default Slider;