const express = require('express');
const router = express.Router();
const Cita = require('../models/citas.model')

router.post('/registrar-cita', (req, resp) => {
    let nombreMascota = req.body.nombreMascota;
    let nombreDuenno = req.body.nombreDuenno;
    let fechaCita = req.body.fechaCita;
    let horaCita = req.body.horaCita;
    let observaciones = req.body.observaciones;


    console.log('registrar cita' + nombreDuenno);

    let citaNueva = new Cita({
        "nombreMascota": req.body.nombreMascota,
        "nombreDuenno": req.body.nombreDuenno,
        "fechaCita": req.body.fechaCita,
        "horaCita": req.body.horaCita,
        "observaciones": req.body.observaciones

    });

    citaNueva.save(error => {
        if (error) {
            resp.json({
                "msj": "La cita no se pudo registrar",
                error
            });
        } else {
            resp.json({
                "msj": "Cita registrada correctamente"
            });
        }
    });



});

router.get('/listar-citas', (req, resp) => {
    Cita.find((error, lista) => {
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