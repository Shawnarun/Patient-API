

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address']
  },
  occupation: {
    type: String,
    required: true,
    trim: true
  },
  consultant: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  age: {
    type: Number,
    min: 0,
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true
  },
  contactInformation: {
    type: String,
    required: true,
    trim: true
  },
  insuranceCompany: {
    type: String,
    trim: true
  },
  insurancePolicyNo: {
    type: String,
    trim: true
  },
  medicalCondition: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
});

const Patient = mongoose.model('Patient', patentSchema);

module.exports = Patient;
