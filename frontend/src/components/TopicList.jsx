import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = ({topics, selectTopic}) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <TopicListItem className="topic-list__item"
            key={topic.id}
            id={topic.id}
            slug={topic.slug}
            title={topic.title}
            selectTopic={selectTopic}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
