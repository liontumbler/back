require('./db.js');
const { Schema, model } = require('mongoose');

const cajaRegistradoraSchema = new Schema({
    tipoPago: {
        type: String,
        minLength: 1,
        maxLength: 1,
        required: true,
    },
    total: {
        type: Number,
        min: 0, max: 1000000,
        required: true
    },
    detalles: {
        type: Array,
        required: true
    },
    caja: {
        type: Schema.Types.ObjectId,
        required: true
    },
    cliente: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('CajaRegistradora', cajaRegistradoraSchema)