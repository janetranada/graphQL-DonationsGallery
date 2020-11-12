import React, { useState } from "react";
import "../App.css";

const Favorites = () => {
  const [faves, setFaves] = useState(
    JSON.parse(localStorage.getItem("likedDonationTargets")) || []
  );

  const handleClick = (event) => {
    const faveInfo = JSON.parse(event.target.getAttribute("data-info"));
    const id = faveInfo.id;
    deleteFromLocalStorage(id);
  };

  const deleteFromLocalStorage = (dataId) => {
    const storedFave = [...faves];
    const indexInArray = storedFave.findIndex((item) => item.id === dataId);
    storedFave.splice(indexInArray, 1);
    console.log(storedFave);
    localStorage.setItem("likedDonationTargets", JSON.stringify(storedFave));
    setFaves(storedFave);
  };

  if (!faves[0]) {
    return <div className="container">No favorites</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Favorites</h1>
      <div className="row">
        {faves.map((fave) => (
          <div className="col-sm" key={fave.id}>
            <div className="card" style={{ width: "18rem" }}>
              <div>{fave.id}</div>
              <div className="card-body">
                <h5 className="card-title">{fave.name}</h5>
                <p>Organization:</p>
                <p className="card-text">{fave.charityOrganization.name}</p>
                <p className="card-text">{fave.descriptionContent}</p>
                <div
                  data-info={JSON.stringify(fave)}
                  className="btn btn-danger"
                  onClick={handleClick}
                >
                  Remove
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
