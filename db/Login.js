require('./db.js');
const { Schema, model } = require('mongoose');

function vecimientoApi() {
    let fecha = new Date();
    fecha.setHours(0, 0, 0, 0);
    return fecha;
}

const rolSchema = new Schema({
    apiKey: {
        type: String,
        minLength: 1,
        maxLength: 255,
        required: true,
    },
    terminar: {//tener vencimiento siempre a las 12:00  pm
        type: Date,
        default: vecimientoApi()
    },
    user: Schema.Types.ObjectId,
}, { timestamps: true })

module.exports = model('Rol', rolSchema);