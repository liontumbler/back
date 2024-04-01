require('./db.js');
const { Schema, model } = require('mongoose');

const rolSchema = new Schema({
    apiKey: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: true,
    },
    token: {
        type: String,
        minLength: 1,
        maxLength: 255,
    },
}, { timestamps: true })

module.exports = model('Rol', rolSchema);