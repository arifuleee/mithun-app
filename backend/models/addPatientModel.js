// models/addPatientModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AddPatient = sequelize.define('AddPatient', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  invoiceNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  receiveDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  reportingDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  patientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  consultant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  investigations: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  clinicalInfo: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = AddPatient;
