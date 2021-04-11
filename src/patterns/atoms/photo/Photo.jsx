function Photo({index}) {

  return (
    <div className="slider_photo-container">
      <img  className="slider__photo" 
            src={'images/' + index + '.jpg'} 
            alt='model'
            ></img>
    </div>
  );
}

export default Photo;