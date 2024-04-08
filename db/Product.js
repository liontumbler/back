require('./db.js');
const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    img: {
        type: String,
        minLength: 1,
        maxLength: 255,
    },
    price: {
        type: Number,
        min: 0, max: 1000000,
        required: true
    },
    reference: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        min: 0, max: 500
    },
    description: {
        type: String,
        minLength: 1,
        maxLength: 255,
    },
    active: {
        type: Boolean,
        default: true,
    },
    company: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('Product', productSchema)