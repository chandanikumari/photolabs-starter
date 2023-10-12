import React, { useState } from 'react';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import TopicList from 'components/TopicList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  // console.log("Troubleshooting favPhotos:", favPhotos);

  function toggleFavorites(photoId) {
    // console.log("Photo ID", photoId);
    const temp = photos.filter(photo => photo.id === photoId);
    console.log("temp", temp);
    if (favPhotos.includes(temp[0])) {
      setFavPhotos(favPhotos.filter(photo => photo.id !== photoId));
    } else {
      setFavPhotos([...favPhotos, temp[0]]);
    }
  }

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
      <HomeRoute favPhotos={favPhotos} toggleFavorites={toggleFavorites}/>
    </div>
  );
};

export default App;
