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
          endsAt
          succeededAt
          targetAmount
          donationTargetStatistic {
            donorCount
            totalMatchedAmount
          }
          category {
            name
          }
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
