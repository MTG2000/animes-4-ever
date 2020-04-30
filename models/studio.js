"use strict";
module.exports = (sequelize, DataTypes) => {
  const Studio = sequelize.define(
    "Studios",
    {
      name: DataTypes.STRING,
    },
    { timestamps: false }
  );
  Studio.associate = function (models) {
    // associations can be defined here
    Studio.hasMany(models.Animes, {
      foreignKey: {
        allowNull: false,
        name: "studioId",
        field: "studioId",
      },
    });
  };
  return Studio;
};
