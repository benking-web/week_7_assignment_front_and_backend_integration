'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    static associate(models) {
      // define association here, e.g.:
      // Admin.hasMany(models.OtherModel);
    }
  }

  Admin.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // Consider adding length or complexity validation
    }
  }, {
    sequelize,
    modelName: 'Admin',
  });

  return Admin;
};
