import React from "react";

import "../styles/TopicListItem.scss";

// const sampleDataForTopicListItem = {
//   id: "1",
//   slug: "topic-1",
//   label: "Nature",
// };

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" onClick={() => props.selectTopic(props.id)}>
      {/* Insert React */}
      <a>{props.title}</a>
    </div>
  );
};

export default TopicListItem;
