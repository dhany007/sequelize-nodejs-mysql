/* eslint-disable func-names */
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('categories', {
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CategoryName: {
      type: DataTypes.STRING(15),
      allowNull: false,
      unique: true,
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Picture: {
      type: 'LONGBLOB',
      allowNull: true,
    },
  }, {
    tableName: 'categories',
    timestamps: false,
  });
};
