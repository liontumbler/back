require('../db/db.js');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        maxLength: 100,
        required: true,
    },
    lastName: {
        type: String,
        maxLength: 1,
        maxLength: 100,
        required: true
    },
    nickName: {
        type: String,
        maxLength: 1,
        maxLength: 100,
        required: true,
        unique: true
    },
    password: {
        type: String,
        maxLength: 1,
        maxLength: 100,
        required: true
    },
    correo: {
        type: String,
        maxLength: 1,
        maxLength: 100,
    },
    telefono: {
        type: Number,
        min: 1, max: 999999999999
    },
    claveCaja: {
        type: Number,
        min: 4, max: 4
    },
    activo: {
        type: Boolean,
        default: true,
    },
    admin: {
        type: Boolean,
        default: false,
    },
    rol: Schema.Types.ObjectId,
    company: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('User', userSchema);