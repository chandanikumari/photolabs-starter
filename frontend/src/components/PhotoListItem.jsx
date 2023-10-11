import React from "react";

import "../styles/PhotoListItem.scss";





const PhotoListItem = (props) => {
  /* Insert React */


  return (
    <div className="photo-list__item">
      <img src={props.imageSource}/>
      <h2><img src={props.profile}/></h2>
      <h2>{props.name}</h2>
      <h2>{props.location.city}, {props.location.country}</h2>
    </div>
  );

};

export default PhotoListItem;
