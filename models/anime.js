"use strict";
module.exports = (sequelize, DataTypes) => {
  const Anime = sequelize.define(
    "Animes",
    {
      title: { type: DataTypes.STRING, allowNull: false },
      image: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING, allowNull: false },
      rating: { type: DataTypes.FLOAT },
      state: {
        type: DataTypes.ENUM,
        values: ["airing", "completed", "upcoming"],
        defaultValue: "upcoming",
      },
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
