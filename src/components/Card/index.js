import React from "react";

const Card = ({ item, btnColor, btnLabel, handleClick }) => {
  const isFave = (id) => {
    const faves =
      JSON.parse(localStorage.getItem("likedDonationTargets")) || [];

    if (faves.find((item) => item.id === id)) return true;
    return false;
  };

  const setGalleryBtnLabel = (id, label) => {
    if (label === "Like" && isFave(id)) {
      return "Liked";
    }
    return label;
  };

  const setGalleryBtnColor = (id, color) => {
    if (color === "primary" && isFave(id)) {
      return "secondary";
    }
    return color;
  };

  return (
    <div className="col-sm card-container">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-header">
          {item.id} - {item.name}
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 mt-2 text-muted">Organization:</h6>
          <p className="card-text">{item.charityOrganization.name}</p>
          {item.descriptionContent && (
            <>
              <h6 className="card-subtitle mb-2 mt-2 text-muted">
                Description:
              </h6>
              <p className="card-text">{item.descriptionContent}</p>
            </>
          )}
          <div
            data-info={JSON.stringify(item)}
            className={`btn btn-${setGalleryBtnColor(item.id, btnColor)}`}
            onClick={handleClick}
          >
            {setGalleryBtnLabel(item.id, btnLabel)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
