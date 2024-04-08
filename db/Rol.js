require('./db.js');
const { Schema, model } = require('mongoose');

const rolSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true,
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 255,
    },
    permiso: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('Rol', rolSchema);