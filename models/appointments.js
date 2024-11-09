'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      // define association here, e.g.:
      // Appointment.belongsTo(models.User);
    }
  }

  Appointment.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneName: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });

  return Appointment;
};
