import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
// import topics from 'mocks/topics';

const TopicList = ({topics, selectTopic}) => {
  console.log("Trouble", topics);
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
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
