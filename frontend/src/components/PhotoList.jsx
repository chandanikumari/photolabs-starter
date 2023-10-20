import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = ({photos, favPhotos, toggleFavorites, modalOnClick}) => {
  // console.log("favphotos:::", favPhotos);
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos.map((photo) => {
        return (
          <PhotoListItem 
            className="photo-list__item"
            key={photo.id}
            id={photo.id}
            location={photo.location}
            imageSource={photo.urls.regular}
            name={photo.user.name}
            profile={photo.user.profile}
            toggleFavorites={toggleFavorites}
            isFavorite={favPhotos?.includes(photo.id)}
            modalOnClick={modalOnClick}
            photo={photo}
          />
        );
      })}

    </ul>
  );
}

export default PhotoList