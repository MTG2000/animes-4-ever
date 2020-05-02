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

const animePage = gql`
  query getAnime($id: Int!) {
    anime(id: $id) {
      title
      image
      rating
      description
      author {
        name
      }
      studio {
        name
      }
    }
  }
`;

export default {
  mainPage,
  animePage,
};
