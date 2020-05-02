import { gql } from "apollo-boost";

const mainPage = gql`
  {
    topAiringAnimes(limit: 4) {
      id
      title
      image
      rating
      author {
        name
      }
    }

    upcomingAnimes(limit: 4) {
      id
      title
      image
    }

    topAnimes(limit: 4) {
      id
      title
      image
      rating
    }
  }
`;

export default {
  mainPage,
};
