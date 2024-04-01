require('./db.js');
const { Schema, model } = require('mongoose');

const planSchema = new Schema({
    

}, { timestamps: true })

module.exports = model('Plan', planSchema)