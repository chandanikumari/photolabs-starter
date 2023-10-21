import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import PhotoList from 'components/PhotoList';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, photos, favPhotos, toggleFavorites, selectedPhoto }) => {
  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={() => onClose(null)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          photoId={selectedPhoto.id}
          toggleFavorites={toggleFavorites}
          isFavorite={favPhotos?.includes(selectedPhoto.id)}
        />

        <img src={selectedPhoto.urls.full} className="photo-details-modal__image" />
        <div className='photo-details-modal__photographer-details'>
          <img src={selectedPhoto.user.profile} className='photo-details-modal__photographer-profile' />
          <div className="photo-details-modal__photographer-info">{selectedPhoto.user.name}
            <div className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </div>
          </div>
        </div>
        <div className='photo-details-modal__header'>Similar Photos</div>

        <div className="photo-details-modal__images">
          <PhotoList
            photos={Object.values(selectedPhoto.similar_photos)}
            favPhotos={favPhotos}
            toggleFavorites={toggleFavorites}
            modalOnClick={() => { }}
          />
        </div>

      </div>

    </div>
  )
};

export default PhotoDetailsModal;
