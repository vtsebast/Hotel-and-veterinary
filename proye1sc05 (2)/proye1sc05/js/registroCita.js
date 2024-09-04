const btnPagar = document.getElementById("btn-agregar")
const nombreDueno = document.getElementById("txt-nombreDuenno")
const nombreMascota = document.getElementById("nombreMascota")
const fechaCita = document.getElementById("fechaCita")
const horaCita = document.getElementById("horaCita")
const observaciones = document.getElementById("txt-observaciones")



const validacion = () => {
    let error = false;
    errorColor = [nombreDueno, nombreMascota, fechaCita, horaCita, observaciones]
    let n;
    for (n = 0; n < errorColor.length; n++) {
        if (errorColor[n].value.length > 1) {
            errorColor[n].style.borderColor = "black";
        }
    }


    if (nombreDueno.value == "") {
        error = true;
        nombreDueno.classList.add('input-error');
    } else {
        nombreDueno.classList.remove('input-error');
    }

    if (nombreMascota.value == "Seleccione la mascota registrada") {
        error = true;
        nombreMascota.classList.add('input-error');
        nombreMascota.style.borderColor = "red";
    } else {
        nombreMascota.classList.remove('input-error');
    }

    if (fechaCita.value == "") {
        error = true;
        fechaCita.classList.add('input-error');
    } else {
        fechaCita.classList.remove('input-error');
    }


    if (horaCita.value == "Seleccione la hora") {
        error = true;
        horaCita.classList.add('input-error');
        horaCita.style.borderColor = "red";
    } else {
        horaCita.classList.remove('input-error');
    }


    if (observaciones.value == "") {
        error = true;

        observaciones.classList.add('input-error');
    } else {
        observaciones.classList.remove('input-error');
    }
    let i;
    for (i = 0; i < errorColor.length; i++) {
        if (errorColor[i].value.length < 1) {
            errorColor[i].style.borderColor = "red";
        }
    }


    if (error == true) {
        Swal.fire({
            icon: 'warning',
            title: 'Datos ingresados incorrectamente',
            text: 'Por favor revise los campos resaltados',
            confirmButtonText: 'Entendido'
        });
    } else {
        obtenerDatos();
    }


}
const obtenerDatos = () => {

    let cita = {
        'nombreMascota': nombreMascota.value,
        'nombreDuenno': nombreDueno.value,
        'fechaCita': fechaCita.value,
        'horaCita': horaCita.value,
        'observaciones': observaciones.value
    }

    registrarDatos('registrar-cita', cita, 'citas.html');

}


btnPagar.addEventListener('click', validacion);