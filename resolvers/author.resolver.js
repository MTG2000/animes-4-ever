module.exports = {
  Query: {
    author: async (parent, { id }, { AuthorRepository }) => {
      return await AuthorRepository.find(id);
    },

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
