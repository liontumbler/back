require('./db.js');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
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
    nickName: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minLength: 1,
        maxLength: 100,
        required: true
    },
    email: {
        type: String,
        minLength: 1,
        maxLength: 100,
    },
    phone: {
        type: Number,
        min: 1, max: 999999999999
    },
    passBox: {
        type: Number,
        min: 4, max: 4
    },
    xApiKey: {
        type: String,
        minLength: 1,
        maxLength: 255
    },
    active: {
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