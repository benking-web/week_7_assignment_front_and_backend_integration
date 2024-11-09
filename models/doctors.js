'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here, e.g.:
      // Doctor.hasMany(models.Appointment);
    }
  }

  Doctor.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, // Field is required
      validate: {
        len: [1, 50], // Length validation (1 to 50 characters)
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false, // Field is required
      validate: {
        len: [1, 50], // Length validation (1 to 50 characters)
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Field is required
      unique: true, // Ensure unique email
      validate: {
        isEmail: true, // Validate email format
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // Field is required
      validate: {
        len: [6, 100], // Example: password should be at least 6 characters
      }
    },
    phoneName: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 20], // Optional field, max length
      }
    },
    specialization: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100], // Optional field, max length
      }
    },
    availability: {
      type: DataTypes.JSON,
      allowNull: true // Optional field
    }
  }, {
    sequelize,
    modelName: 'Doctor', // Update to singular PascalCase
  });

  return Doctor;
};
