'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here if needed
    }
  }

  User.init({
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
      type: DataTypes.STRING,
      unique: true, // Optional: Ensure unique email
      validate: {
        isEmail: true, // Optional: Validate email format
      }
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    phoneNumber: { // Phone number field
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'User', // Use PascalCase for model name
  });

  return User; // Ensure correct class is returned
};
