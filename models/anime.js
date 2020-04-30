"use strict";
module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define(
    "Animes",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.FLOAT, allowNull: false },
    },
    {
      timestamps: false,
    }
  );
  Anime.associate = function (models) {
    // associations can be defined here
    Anime.belongsTo(models.Authors, {
      foreignKey: {
        allowNull: false,
        name: "authorId",
        field: "authorId",
      },
    });
    Anime.belongsTo(models.Studios, {
      foreignKey: {
        allowNull: false,
        name: "studioId",
        field: "studioId",
      },
    });
  };
  return Anime;
};
