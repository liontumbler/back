require('../db/db.js');
const { Schema, model } = require('mongoose');

const companySchema = new Schema({
    name: {
        type: String,
        maxLength: 1,
        maxLength: 100,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    plan: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    description: {
        type: String,
        maxLength: 1,
        maxLength: 255,
    },
    activo: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true })

module.exports = model('Company', companySchema)