'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class patients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  patients.init({
    firstName: { // First name field
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: { // Last name field
      allowNull: false,
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: { // Phone number field
      allowNull: true,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'patients',
  });
  return patients;
};