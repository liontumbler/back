require('./db.js');
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        minLength: 1,
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
        minLength: 60,
        maxLength: 60,
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
    active: {
        type: Boolean,
        default: true,
    },
    admin: {// true puede ver reportes y registros de todas las empresas
        //false tendra aceso a la tienda
        type: Boolean,
        default: false,
    },
    caja: Schema.Types.ObjectId,
    rol: Schema.Types.ObjectId,
    company: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('User', userSchema);