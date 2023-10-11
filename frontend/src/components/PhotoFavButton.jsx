import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favSelected, setFavSelected] = useState('')

  function handleClick() {
    setFavSelected((prev) => prev === '' ? 'liked' : '')
    favSelected === '' ? 
    props.setFavSelected((prev) => prev + 1) : 
    props.setFavSelected((prev) => prev - 1);
  }

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        {/* Insert React */}
        <FavIcon selected={ favSelected } />
      </div>
    </div>
  );
}

export default PhotoFavButton;