import React from "react";
import "./styles.css";

const Loader = () => {
  return (
    <div className="spinner">
      <div className="spinner-item"></div>
      <div className="spinner-item"></div>
      <div className="spinner-item"></div>
      <div className="spinner-item"></div>
      <div className="spinner-item"></div>
    </div>
  );
};

export default Loader;
