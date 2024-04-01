require('./db.js');
const { Schema, model } = require('mongoose');

const clientSchema = new Schema({
    name: {
        type: String,
        maxLength: 100,
        required: true,
    },
    lastName: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    email: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    phone: {
        type: Number,
        min: 1, max: 999999999999,
        required: true
    },
    typeDocument: {
        type: String,
        minLength: 1,
        maxLength: 100,
    },
    numberDocument: {
        type: Number,
        min: 1,
        max: 9999999999999,
    },
    company: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('Client', clientSchema);