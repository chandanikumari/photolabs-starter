import React, { useState } from 'react';

import './App.scss';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData'

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    
    toggleFavorites,
    selectTopic,
    modalOnClick,
    state
  } = useApplicationData();

  console.log("FavPhotos", state.favPhotos);
  // const hasFavPhotos = (state?.favPhotos?.length) ? true: false;
  console.log("ID", state.showModal.selectedPhoto);
  return (
    <div className="App">
      <HomeRoute 
      // hasFavPhotos={hasFavPhotos}
      favPhotos={state.favPhotos}
      toggleFavorites={toggleFavorites} 
      modalOnClick={modalOnClick}
      photos={state.photos}
      topics={state.topics}
      selectTopic={selectTopic} />

      
      {state.showModal.isOpen === true &&
        <PhotoDetailsModal
          onClose={modalOnClick}
          modalOnClick={modalOnClick}
          selectedPhoto={state.showModal.selectedPhoto}
          photos={state.photos}
          favPhotos={state.favPhotos}
          toggleFavorites={toggleFavorites}
        />
      }
    </div>
  );
};

export default App;
