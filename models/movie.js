module.exports = function(sequelize, DataTypes) {
  let Movie = sequelize.define("movie", {
    title: DataTypes.STRING,
    posterURL: DataTypes.STRING
  });
  Movie.associate = function(models) {
    Movie.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };
  return Movie;
};