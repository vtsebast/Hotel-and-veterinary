const express = require('express');
const router = express.Router();
const reservacion = require('../models/reservaciones.model');

router.post('/registrar-reservacion', (req, res) => {
    let reservacionNuevo = new reservacion({
        "nombre": req.body.nombre,
        "mascota": req.body.mascota,
        "fechaEntrada": req.body.fechaEntrada,
        "fechaSalida": req.body.fechaSalida,
        "comentario": req.body.comentario
    });

    reservacionNuevo.save(error => {
        if (error) {
            res.json({
                "msj": "El usuario no pude reservar",
                error
            });
        } else {
            res.json({
                "msj": "Usuario a reservado exitosamente"
            });
        }
    });
});

router.get('/listar-reservaciones', (req, res) => {
    reservacion.find((error, lista) => {
        if (error) {
            res.json({
                "msj": "El usuario no pude reservar",
                error
            });
        } else {
            res.json({
                "msj": "Reservaciones a listado correctamente",
                lista
            });
        }
    });
});

router.delete('/eliminar-reservacion', (req, res) => {
    reservacion.deleteOne({ _id: req.body._id },
        error => {
            if (error) {
                res.json({
                    "msj": "La reservacion no se pudo eliminar",
                    error
                });
            } else {
                res.json({
                    "msj": "La reservacion se pudo eliminar",
                });
            }
        });
});

module.exports = router;