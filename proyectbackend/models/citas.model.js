const mongoose = require('mongoose');

const schemaCita = mongoose.Schema({
    "nombreMascota": { type: String, required: true },
    "nombreDuenno": { type: String, required: true },
    "fechaCita": { type: Date, required: true },
    "horaCita": { type: String, required: true },
    "observaciones": { type: String, required: false }

});

let modelo = mongoose.model('Cita', schemaCita, 'citas');

module.exports = modelo;