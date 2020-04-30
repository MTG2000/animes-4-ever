module.exports = {
  Query: {
    allStudios: async (parent, args, { StudioRepository }) => {
      return await StudioRepository.getAll();
    },
  },
  Studio: {
    animes: async (parent, args, { AnimeRepository }) => {
      if (parent.Animes) return parent.Animes;
      return await AnimeRepository.getByStudio(parent.id);
    },
  },
};
