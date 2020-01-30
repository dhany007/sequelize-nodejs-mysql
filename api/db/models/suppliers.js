/* eslint-disable func-names */
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('suppliers', {
    SupplierID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CompanyName: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    ContactName: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    ContactTitle: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    Address: {
      type: DataTypes.STRING(60),
      allowNull: true,
    },
    City: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Region: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    PostalCode: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    Country: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    Phone: {
      type: DataTypes.STRING(24),
      allowNull: true,
    },
    Fax: {
      type: DataTypes.STRING(24),
      allowNull: true,
    },
    HomePage: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'suppliers',
    timestamps: false,
  });
};
