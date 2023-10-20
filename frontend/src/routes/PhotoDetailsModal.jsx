import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoListItem from 'components/PhotoListItem';

const PhotoDetailsModal = ({ onClose, photo, favPhotos, toggleFavorites, selectedPhoto }) => {
  console.log("photodetailsmodal", onClose);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={selectedPhoto.urls.regular} className="photo-details-modal__image" />
      <div className="photo-details-modal__header">
        <h2><img src={selectedPhoto.user.profile} className="photo-list__user-profile" /></h2>
        <div className="photo-list__user-info">{selectedPhoto.user.name}
          <div className="photo-list__user-location">
            {selectedPhoto.location.city}, {selectedPhoto.location.country}
          </div>
        </div>
      </div>
      <div className='similar-photo'><h4>Similar Photos</h4></div>
      {/* <h4>Similar Photos</h4> */}

      <div className="photo-details-modal__images">
        <PhotoList
          photos={Object.values(selectedPhoto.similar_photos)}
          favPhotos={favPhotos}
          toggleFavorites={toggleFavorites}
          modalOnClick={() => { }}
        />
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
