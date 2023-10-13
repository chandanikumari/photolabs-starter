import React, { useState } from 'react';

import './App.scss';

import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoList from 'components/PhotoList';
import PhotoListItem from 'components/PhotoListItem';
import TopicList from 'components/TopicList';
import TopNavigation from './components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [favPhotos, setFavPhotos] = useState([]);
  // console.log("Troubleshooting favPhotos:", favPhotos);
  const [showModal, setShowModal] = useState({
    isOpen: false,
    selectedPhoto: null
  });


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

  const modalOnClick = (photo) => {
    console.log("app modalonclick", photo);
    if (photo) {
      setShowModal({
        isOpen: true,
        selectedPhoto: photo
      });
    } else {
      setShowModal({
        isOpen: false,
        selectedPhoto: photo
      });
    }
  };

  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
      <HomeRoute favPhotos={favPhotos} toggleFavorites={toggleFavorites} modalOnClick={modalOnClick} />
      {showModal.isOpen === true &&
        <PhotoDetailsModal
          onClose={modalOnClick}
          photo={showModal.selectedPhoto}
          favPhotos={favPhotos}
          toggleFavorites={toggleFavorites}
          modalOnClick={modalOnClick}
        />
      }
    </div>
  );
};

export default App;
