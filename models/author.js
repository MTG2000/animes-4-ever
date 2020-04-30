"use strict";
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "Authors",
    {
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
    }
  );
  Author.associate = function (models) {
    // associations can be defined here
    Author.hasMany(models.Animes, {
      foreignKey: {
        allowNull: false,
        name: "studioId",
        field: "studioId",
      },
    });
  };
  return Author;
};
