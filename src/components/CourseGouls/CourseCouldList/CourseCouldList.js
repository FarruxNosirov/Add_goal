import React from "react";
import CoursecouldItem from "../CurseCouldItem/CourseCouldItem";
import "./CourseCouldList.css";

const CourseCouldList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goul) => {
        return (
          <CoursecouldItem
            key={goul.id}
            id={goul.id}
            onDelete={props.onDeleteItem}
          >
            {goul.text}
          </CoursecouldItem>
        );
      })}
    </ul>
  );
};

export default CourseCouldList;
