module.exports = {
  Query: {
    allAuthors: async (parent, args, { AuthorRepository }) => {
      return await AuthorRepository.getAll();
    },
  },
  Author: {
    animes: async (parent, args, { AnimeRepository }) => {
      if (parent.Animes) return parent.Animes;
      return await AnimeRepository.getByAuthor(parent.id);
    },
  },
};
