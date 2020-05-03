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
        id
        name
      }
      studio {
        id
        name
      }
    }
  }
`;

const authorPage = gql`
  query getAuthor($id: Int!) {
    author(id: $id) {
      name
      animes {
        id
        title
        image
        rating
      }
    }
  }
`;

const studioPage = gql`
  query getStudio($id: Int!) {
    studio(id: $id) {
      name
      animes {
        id
        title
        image
        rating
      }
    }
  }
`;

export default {
  mainPage,
  animePage,
  authorPage,
  studioPage,
};
