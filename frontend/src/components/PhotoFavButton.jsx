import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log("photofavbutton,", props.isFavorite);

  return (
    <div className="photo-list__fav-icon" onClick={() => props.toggleFavorites(props.photoId)}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={ props.isFavorite } />
      </div>
    </div>
  );
}

export default PhotoFavButton;