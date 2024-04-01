require('./db.js');
const { Schema, model } = require('mongoose');

const cajaRegistradoraSchema = new Schema({
    
    company: Schema.Types.ObjectId,

}, { timestamps: true })

module.exports = model('CajaRegistradora', cajaRegistradoraSchema)