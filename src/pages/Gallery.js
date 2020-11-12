import React, { useState } from "react";
import { Query } from "react-apollo";
import getArticles from "../query";
import Button from "../components/Button";
import Loader from "../components/Loader";

import "../App.css";

const Gallery = () => {
  const [page, setPage] = useState(1);

  let getAllArticles = getArticles(page);

  const handleClick = (event) => {
    const donationTargetInfo = JSON.parse(
      event.target.getAttribute("data-info")
    );
    saveToLocalStorage(donationTargetInfo);
  };

  const saveToLocalStorage = (data) => {
    const storedDonationTargets =
      JSON.parse(localStorage.getItem("likedDonationTargets")) || [];

    if (storedDonationTargets.find((item) => item.id === data.id)) return;

    storedDonationTargets.push(data);
    localStorage.setItem(
      "likedDonationTargets",
      JSON.stringify(storedDonationTargets)
    );
  };

  const goToNextPage = () => setPage((prevpage) => prevpage + 1);
  const goToPrevPage = () => setPage((prevpage) => prevpage - 1);

  return (
    <Query query={getAllArticles}>
      {({ loading, error, data }) => {
        if (loading) {
          return <Loader />;
        }

        if (error) {
          console.error(error);
          return <p>Seems like there's a problem...</p>;
        }

        return (
          <div className="container">
            <h1 className="title">Donation Targets Gallery</h1>
            <div className="row">
              {data.getDonationTargets.donationTargets.map((target) => (
                <div className="col-sm card-container" key={target.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <div>{target.id}</div>
                    <div className="card-body">
                      <h5 className="card-title">{target.name}</h5>
                      <p className="text-label">Organization:</p>
                      <p className="card-text">
                        {target.charityOrganization.name}
                      </p>
                      {target.descriptionContent && (
                        <>
                          <p className="text-label">Description:</p>
                          <p className="card-text">
                            {target.descriptionContent}
                          </p>
                        </>
                      )}
                      <div
                        data-info={JSON.stringify(target)}
                        className="btn btn-primary"
                        onClick={handleClick}
                      >
                        Like
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {page !== 1 && (
              <Button classes="btn btn-warning btn-box" onClick={goToPrevPage}>
                prev page
              </Button>
            )}

            {!data.getDonationTargets.lastPage && (
              <Button classes="btn btn-warning btn-box" onClick={goToNextPage}>
                next page
              </Button>
            )}
          </div>
        );
      }}
    </Query>
  );
};

export default Gallery;
