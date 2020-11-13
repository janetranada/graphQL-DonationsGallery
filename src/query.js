import { gql } from "apollo-boost";

const getArticles = (page) => {
  let articles = gql`
    {
      getDonationTargets (page: ${page}){
        lastPage
        nextPage
        donationTargets {
          id
          name
          descriptionContent
          charityOrganization {
            name
          }
        }
      }
    }
  `;
  return articles;
};

export default getArticles;
