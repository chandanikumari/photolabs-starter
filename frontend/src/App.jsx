import React, { useState } from 'react';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    // onPhotoSelect,
    toggleFavorites,
    // onLoadTopic,
    modalOnClick,
    state: {
      photos,
      topics,
      favPhotos,
      showModal
    }
  } = useApplicationData();

  const hasFavPhotos = (state.favPhotos.length) ? true: false;
  
  return (
    <div className="App">
      <HomeRoute 
      hasFavPhotos={hasFavPhotos}
      toggleFavorites={toggleFavorites} 
      modalOnClick={modalOnClick}
      photos={state.photos}
      topics={state.topics} />

      {state.showModal.isOpen === true &&
        <PhotoDetailsModal
          modalOnClick={modalOnClick}
          id={state.showModal.selectedPhoto}
          photos={state.photos}
          toggleFavorites={toggleFavorites}
        />
      }
    </div>
  );
};

export default App;
