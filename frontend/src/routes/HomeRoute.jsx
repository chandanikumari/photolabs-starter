import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = (props) => {
  console.log("home route props:", props);
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation isFavPhotoExist={props.favPhotos.length > 0}/>
      <PhotoList favPhotos={props.favPhotos} toggleFavorites={props.toggleFavorites} modalOnClick={props.modalOnClick}/>
    </div>
  );
};

export default HomeRoute;
