import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";





const PhotoListItem = ({ id, location, imageSource, name, profile, isFavorite, toggleFavorites, modalOnClick, photo }) => {
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
        onClick={() => toggleFavorites(photo.id)}
        modalOnClick={modalOnClick}
      />
      <img src={imageSource} className="photo-list__image" onClick={() => { modalOnClick(photo) }} />
      <div className="photo-list__user-details">
        <h2><img src={profile} className="photo-list__user-profile" /></h2>
      </div>
      <div className="photo-list__user-info">{name}
        <div className="photo-list__user-location">
          {location.city}, {location.country}
        </div>
      </div>

    </div>
  );

};

export default PhotoListItem;
