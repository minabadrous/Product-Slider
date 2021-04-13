function Photo({ index, containerClass, navClass, handleNavImages, id }) {
  return (
    <div className={containerClass}>
      <img 
        id={id}
        className={navClass}
        src={"images/" + index + ".jpg"}
        alt="model"
        onMouseOver={handleNavImages}
      ></img>
    </div>
  );
}

export default Photo;