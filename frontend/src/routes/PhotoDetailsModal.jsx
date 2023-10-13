import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ onClose, photo, favPhotos, toggleFavorites }) => {
  console.log(photo);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={photo.urls.regular} className="photo-details-modal__image" />
      <div className="photo-details-modal__header">
        <h2><img src={photo.user.profile} className="photo-list__user-profile" /></h2>
        <div className="photo-list__user-info">{photo.user.name}
          <div className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </div>
        </div>
        </div>
        <div><h4>Similar Photos</h4></div>
        {/* <h4>Similar Photos</h4> */}
      
      <div className="photo-details-modal__images">
        {Object.values(photo.similar_photos).map((similarPhoto, index) => (
          <PhotoListItem
            key={similarPhoto.id}
            id={similarPhoto.id}
            location={similarPhoto.location}
            imageSource={similarPhoto.urls.regular}
            username={similarPhoto.user.username}
            profile={similarPhoto.user.profile}
            isFavorite={favPhotos.includes(similarPhoto.id)}
            toggleFavorites={toggleFavorites}
            photo={similarPhoto}
          />
        ))}
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
