const Patient = require('../models/patient');
const factory = require('./handlerFactory');


exports.get = factory.getOne(Patient);
exports.getAll = factory.getAll(Patient);
exports.getPagination = factory.getAllPagination(Patient);
exports.delete = factory.deleteOne(Patient);
exports.update = factory.updateOne(Patient);
exports.create =  factory.createOne(Patient);