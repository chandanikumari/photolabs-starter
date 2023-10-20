import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
const HomeRoute = (props) => {
 
  return (
    <div className="home-route">
      <TopNavigation isFavPhotoExist={props.favPhotos?.length > 0} topics={props.topics} selectTopic={props.selectTopic}/>
      <PhotoList photos={props.photos} favPhotos={props.favPhotos} toggleFavorites={props.toggleFavorites} modalOnClick={props.modalOnClick}/>
    </div>
  );
};

export default HomeRoute;
