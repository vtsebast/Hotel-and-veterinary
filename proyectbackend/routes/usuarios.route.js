const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuarios.model')

router.post('/registrar-usuario', (req, resp) => {
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let cedula = req.body.cedula;
    let correo = req.body.correo;
    let numero = req.body.numero;
    let contrasenna = req.body.contrasenna;
    let confcontra = req.body.confcontra;


    console.log('registrar usuario' + nombre);

    let usuarioNuevo = new Usuario({
        "rol": req.body.rol,
        "nombre": req.body.nombre,
        "apellidos": req.body.apellidos,
        "cedula": req.body.cedula,
        "correo": req.body.correo,
        "numero": req.body.numero,
        "contrasenna": req.body.contrasenna,
        "confcontra": req.body.confcontra,
        "direccion": req.body.direccion
    });

    usuarioNuevo.save(error => {
        if (error) {
            resp.json({
                "msj": "El usuario no se pudo registrar",
                error
            });
        } else {
            resp.json({
                "msj": "Usuario registrado correctamente"
            });
        }
    });



});

router.get('/listar-usuarios', (req, resp) => {
    Usuario.find((error, lista) => {
        if (error) {
            resp.json({
                "msj": "Los usuarios no se pudieron listar",
                error
            });
        } else {
            resp.json({
                "msj": "Usuarios listados correctamente",
                lista
            });
        }
    });

});
module.exports = router;