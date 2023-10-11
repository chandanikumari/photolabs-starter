import React from 'react';

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
  return (
    <div className="App">
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      {/* <TopicList/> */}
      {/* <PhotoList/> */}
      <HomeRoute />
    </div>
  );
};

export default App;
