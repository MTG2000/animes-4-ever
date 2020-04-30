module.exports = {
  Query: {
    allAnimes: async (parent, args, { AnimeRepository }) => {
      return await AnimeRepository.getAll();
    },
    topAnimes: async (parent, { limit }, { AnimeRepository }) => {
      return await AnimeRepository.getAll()
        .sort((a, b) => b.rating - a.rating)
        .slice(0, limit);
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
