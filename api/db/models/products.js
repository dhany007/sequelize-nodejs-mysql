/* eslint-disable func-names */
/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('products', {
    ProductID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductName: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    SupplierID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    CategoryID: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
    },
    QuantityPerUnit: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    UnitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.0000',
    },
    UnitsInStock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    UnitsOnOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    ReorderLevel: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0',
    },
    Discontinued: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0',
    },
  }, {
    tableName: 'products',
    timestamps: false,
  });
};
