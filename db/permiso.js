require('./db.js');
const { Schema, model } = require('mongoose');

const permisoSchema = new Schema({
    createUser: {
        type: Boolean,
        default: false
    },
    readUser: {
        type: Boolean,
        default: false
    },
    updateUser: {
        type: Boolean,
        default: false
    },
    deleteUser: {
        type: Boolean,
        default: false
    },
    createProduct: {
        type: Boolean,
        default: false
    },
    readProduct: {
        type: Boolean,
        default: false
    },
    updateProduct: {
        type: Boolean,
        default: false
    },
    deleteProduct: {
        type: Boolean,
        default: false
    },
    createCompany: {
        type: Boolean,
        default: false
    },
    readCompany: {
        type: Boolean,
        default: false
    },
    updateCompany: {
        type: Boolean,
        default: false
    },
    deleteCompany: {
        type: Boolean,
        default: false
    },
}, { timestamps: true })

module.exports = model('Permiso', permisoSchema);