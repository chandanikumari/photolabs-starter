import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = ({id, location, imageSource, name, profile, isFavorite, toggleFavorites}) => {
  /* Insert React */

  // const handletoggleFavorites = () => {
  //   toggleFavorites(id);
  // }

  return (
    <div className="photo-list__item">
      <PhotoFavButton 
        photoId={id}
        isFavorite={isFavorite}
        toggleFavorites={toggleFavorites} 
      />
      <img src={imageSource}/>
      <h2><img src={profile}/></h2>
      <h2>{name}</h2>
      <h2>{location.city}, {location.country}</h2>
    </div>
  );

};

export default PhotoListItem;
