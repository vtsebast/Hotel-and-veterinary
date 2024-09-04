const mongoose = require('mongoose');

const schemaUsuario = mongoose.Schema({
    "rol": { type: Number, required: true },
    "nombre": { type: String, required: true },
    "apellidos": { type: String, required: true },
    "cedula": { type: Number, required: true, unique: true },
    "correo": { type: String, required: true, unique: true },
    "numero": { type: Number, required: true, unique: true },
    "contrasenna": { type: String, required: true },
    "confcontra": { type: String, required: true },
    "direccion": { type: String, require: false }

});

let modelo = mongoose.model('Usuario', schemaUsuario, 'usuarios');

module.exports = modelo;