const mongoose = require('mongoose');

const schemaReservacion = new mongoose.Schema({
    "nombre": { type: String, required: true },
    "mascota": { type: String, required: true },
    "fechaEntrada": { type: Date, required: true },
    "fechaSalida": { type: Date, required: true },
    "comentario": { type: String, required: true }
});

let modelo = mongoose.model('reservacion', schemaReservacion, 'reservaciones');

module.exports = modelo;