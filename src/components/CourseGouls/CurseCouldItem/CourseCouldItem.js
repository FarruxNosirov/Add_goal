import React from "react";
import "./CourseCouldItem.css";

const CoursecouldItem = (props) => {
  const deletHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deletHandler}>
      {props.children}
    </li>
  );
};

export default CoursecouldItem;
