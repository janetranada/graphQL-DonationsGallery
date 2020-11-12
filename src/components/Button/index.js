import React from "react";

const Button = ({ children, classes, onClick }) => {
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
