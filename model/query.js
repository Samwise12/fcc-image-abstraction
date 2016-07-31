'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Query = new Schema({
    query: {type: String, required: true},
    date: {type: String}
},{versionKey: false});

module.exports = mongoose.model('Query', Query);


