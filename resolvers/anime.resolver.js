module.exports = {
  Query: {
    anime: async (parent, { id }, { AnimeRepository }) => {
      return await AnimeRepository.find(id);
    },
    allAnimes: async (parent, args, { AnimeRepository }) => {
      return await AnimeRepository.getAll();
    },
    topAnimes: async (parent, { limit = 5 }, { AnimeRepository }) => {
      return await AnimeRepository.getTop(limit);
    },
    upcomingAnimes: async (parent, { limit = 5 }, { AnimeRepository }) => {
      return await AnimeRepository.getUpcoming(limit);
    },
    topAiringAnimes: async (parent, { limit = 5 }, { AnimeRepository }) => {
      return await AnimeRepository.getTopAiring(limit);
    },
  },
  Anime: {
    author: async (parent, args, { AuthorRepository }) => {
      return await AuthorRepository.find(parent.authorId);
    },
    studio: async (parent, args, { StudioRepository }) => {
      return await StudioRepository.find(parent.studioId);
    },
  },
};
