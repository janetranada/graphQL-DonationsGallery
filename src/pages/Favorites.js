import React, { useState } from "react";

import "../App.css";
import Card from "../components/Card";

const Favorites = () => {
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("likedDonationTargets")) || []
  );

  const handleRemoval = (event) => {
    const faveInfo = JSON.parse(event.target.getAttribute("data-info"));
    const id = faveInfo.id;
    deleteFromLocalStorage(id);
  };

  const deleteFromLocalStorage = (dataId) => {
    const storedFave = [...faves];
    const indexInArray = storedFave.findIndex((item) => item.id === dataId);
    storedFave.splice(indexInArray, 1);
    localStorage.setItem("likedDonationTargets", JSON.stringify(storedFave));
    setFaves(storedFave);
  };

  if (!faves[0]) {
    return <div className="container">You don't have any favorites</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Favorites</h1>
      <div className="row">
        {faves.map((fave) => (
          <Card
            item={fave}
            btnColor="danger"
            btnLabel="Remove"
            handleClick={handleRemoval}
            key={fave.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
