import React, { useState } from "react";
import "./App.css";
import CourseCouldList from "./components/CourseGouls/CourseCouldList/CourseCouldList";
import CourseInput from "./components/CourseGouls/CourseInput/CourseInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);
  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updateGoals = [...prevGoals];
      updateGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updateGoals;
    });
  };
  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );
  if (courseGoals.length > 0) {
    content = (
      <CourseCouldList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};

export default App;