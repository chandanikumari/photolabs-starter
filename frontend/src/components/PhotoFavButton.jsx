import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // console.log("photofavbutton,", props.isFavorite);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <div onClick={() => props.toggleFavorites(props.photoId)}>
          {/* Insert React */}
          <FavIcon selected={props.isFavorite}/>
        </div>
      </div>
    </div>
  );
}

export default PhotoFavButton;