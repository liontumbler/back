require('./db.js');
const { Schema, model } = require('mongoose');

const cajaSchema = new Schema({
    passBox: {
        type: Number,
        min: 4, max: 4
    },
    estado: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = model('Caja', cajaSchema);