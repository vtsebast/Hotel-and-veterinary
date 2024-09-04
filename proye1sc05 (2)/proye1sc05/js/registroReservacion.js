const btnPagar = document.getElementById("btn-agregar")
const nombreDuenho = document.getElementById("txt-nombreDuenno")
const nombreMascota = document.getElementById("txt-nombreMascota")
const fechaEntrada = document.getElementById("fechaEntrada")
const fechaSalida = document.getElementById("fechaSalida")
const observaciones = document.getElementById("txt-observaciones")



const validacion = () => {
    let error = false;
    errorColor = [nombreDuenho, nombreMascota, fechaEntrada, fechaSalida, observaciones]
    let n;
    for (n = 0; n < errorColor.length; n++) {
        if (errorColor[n].value.length > 1) {
            errorColor[n].style.borderColor = "black";
        }
    }

    if (nombreDuenho.value == "") {
        error = true;
        nombreDuenho.classList.add('input-error');
    } else {
        nombreDuenho.classList.remove('input-error');
    }

    if (nombreMascota.value == "Seleccione la mascota registrada") {
        error = true;
        nombreMascota.classList.add('input-error');
        nombreMascota.style.borderColor = "red";
    } else {
        nombreMascota.classList.remove('input-error');
    }

    if (fechaEntrada.value == "") {
        error = true;
        fechaEntrada.classList.add('input-error');
    } else {
        fechaEntrada.classList.remove('input-error');
    }


    if (fechaSalida.value == "Seleccione la hora") {
        error = true;
        fechaSalida.classList.add('input-error');
        fechaSalida.style.borderColor = "red";
    } else {
        fechaSalida.classList.remove('input-error');
    }


    if (observaciones.value == "") {
        error = true;

        observaciones.classList.add('input-error');
    } else {
        observaciones.classList.remove('input-error');
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

    let i;
    for (i = 0; i < errorColor.length; i++) {
        if (errorColor[i].value.length < 1) {
            errorColor[i].style.borderColor = "red";
        }
    }

}
const obtenerDatos = () => {

    let reservacion = {
        'nombreMascota': nombreMascota.value,
        'nombreDuenno': nombreDuenho.value,
        'fechaEntrada': fechaEntrada.value,
        'fechaSalida': fechaSalida.value,
        'observaciones': observaciones.value
    }


    Swal.fire({
        icon: 'warning',
        title: '¿Desea registrar la cita?',
        showCancelButton: true,
        confirmButtonText: 'Continuar',
        cancelButtonText: 'Volver',
        cancelButtonColor: '#d33'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: '¡Reservacion registrada correctamente!',
                icon: 'success',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#972181',
                confirmButtonText: '¡Ver las reservaciones registradas!',
                cancelButtonText: 'Cancelar'
            }).then((result2) => {
                if (result2.isConfirmed) {
                    window.location.href = '../html/reserv.html';
                }
            })
        }
    });


}


btnPagar.addEventListener('click', validacion);