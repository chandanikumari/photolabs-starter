import React from "react";
import { useReducer, useEffect } from "react";

const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    favPhotos: [],
    showModal: {
      isOpen: false,
      selectedPhoto: null
    }
  };


  const [state, dispatch] = useReducer(reducer, initialState);

  // const [favPhotos, setFavPhotos] = useState([]);
  // // console.log("Troubleshooting favPhotos:", favPhotos);
  // const [showModal, setShowModal] = useState({
  //   isOpen: false,
  //   selectedPhoto: null
  // });
  const modalOnClick = (photoId) => {
    (state.showModal.isOpen) ?
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: false, selectedPhoto: null } }) :
      dispatch({ type: ACTIONS.SELECT_PHOTO, value: { isOpen: true, selectedPhoto: photoId } });
  };


  function toggleFavorites(photoId) {
    // console.log("Photo ID", photoId);
    // const temp = photos.filter(photo => photo.id === photoId);
    // console.log("temp", temp);
    if (state.favPhotos.includes(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, value: photoId });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, value: photoId });
    }
  }

  const selectTopic = (topic) => {
    // (state.topicId === topic) ?
    //   dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: null }) :
    //   dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, value: topic });
    fetch(`http://localhost:8001/api/topics/photos/${topic}`)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data });
        })
        .catch(error => {
          console.error('Error Fetching Photos: ', error);
        });
  };

  // // Gets all photos from the server.
  // // Only runs when no topic is selected.
  useEffect(() => {
    // if (state.topicId === null) {
      fetch('http://localhost:8001/api/photos')
        .then(res => res.json())
        .then(data => {
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data });
        })
        .catch(error => {
          console.error('Error Fetching Photos: ', error);
        });
    // }
  }, []);

  // Gets all topics from the server.
  // Only runs on refresh
  useEffect(() => {
    console.log("Executing");
    fetch('http://localhost:8001/api/topics')
      .then(res => res.json())
      .then(data => {
        console.log("topics.then", data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, value: data });
      })
      .catch(error => {
        console.error('Error Fetching Topics: ', error);
      });
  }, []);

  // Gets all photos for selected topic.
  // Only runs when a topic is selected.
  // useEffect(() => {
  //   if (state.topicId !== null) {
  //     fetch(`http://localhost:8001/api/topics/photos/${state.topicId}`)
  //       .then(res => res.json())
  //       .then(data => {
  //         dispatch({ type: ACTIONS.SET_PHOTO_DATA, value: data });
  //       })
  //       .catch(error => {
  //         console.error('Error Fetching Photos: ', error);
  //       });
  //   }
  // }, [state.topicId]);


  return {
    state,
    toggleFavorites,
    // setPhotoSelected,
    modalOnClick,
    selectTopic
  };
};

// const modalOnClick = (photo) => {
//   console.log("app modalonclick", photo);
//   if (photo) {
//     setShowModal({
//       isOpen: true,
//       selectedPhoto: photo
//     });
//   } else {
//     setShowModal({
//       isOpen: false,
//       selectedPhoto: photo
//     });
//   }
// };

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      console.log("Troubleshooting:");
      return {
        ...state,
        favPhotos: [...state.favPhotos, action.value],
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favPhotos: state.favPhotos.filter(id => id !== action.value),
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.value
      };

    case ACTIONS.SET_TOPIC_DATA:
      console.log("TopicsData",action.value);
      return {
        ...state,
        topics: action.value
  
      };

    case ACTIONS.SELECT_PHOTO:
      console.log("troubleshoot", action.value);
      return {
        ...state,
        showModal: action.value
      };

    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      console.log("PhotosByTopics", action.value);
      return {
        ...state,
        topicId: action.value
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

export default useApplicationData;