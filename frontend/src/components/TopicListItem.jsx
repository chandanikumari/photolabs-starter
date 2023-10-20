import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => props.selectTopic(props.id)}>
      <a>{props.title}</a>
    </div>
  );
};

export default TopicListItem;
