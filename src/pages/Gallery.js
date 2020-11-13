import React, { useState } from "react";
import { Query } from "react-apollo";
import getArticles from "../query";
import Button from "../components/Button";
import Loader from "../components/Loader";

import "../App.css";
import Card from "../components/Card";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [liked, setLiked] = useState(1);

  let getAllArticles = getArticles(page);

  const handleLike = (event) => {
    const donationTargetInfo = JSON.parse(
      event.target.getAttribute("data-info")
    );
    saveToLocalStorage(donationTargetInfo);
    setLiked((prevLiked) => prevLiked + 1);
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
                <Card
                  item={target}
                  btnColor="primary"
                  btnLabel="Like"
                  handleClick={handleLike}
                  key={target.id}
                />
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
