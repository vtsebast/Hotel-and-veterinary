const nombre = document.getElementById("txt-nombre")
const fotografia = document.getElementById("txt-fotografia")
const direccion = document.getElementById("txt-direccion")
const cuidado = document.getElementById("txt-cuidado")
const padecimiento = document.getElementById("txt-padecimiento")
const guardar = document.getElementById("btn-enviar")


const validacion = () => {
    let error = false;
    errorColor = [nombre, fotografia, direccion, cuidado, padecimiento]
    let n;
    for (n = 0; n < errorColor.length; n++) {
        if (errorColor[n].value.length > 1) {
            errorColor[n].style.borderColor = "black";
        }
    }

    const obtenerDatos = () => {

        let usuario = {
            'nombre': nombre.value,
            'cuidado': cuidado.value,
            'padecimiento': padecimiento.value,
            'direccion': direccion.value,
            'padecimiento': padecimiento.value
        }


        Swal.fire({
            icon: 'warning',
            title: '¿Desea completar el registro de la mascota?',
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Volver',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Registro completado!',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#972181',
                    confirmButtonText: '¡Administrar mis mascotas!',
                    cancelButtonText: 'Cancelar'
                }).then((result2) => {
                    if (result2.isConfirmed) {
                        window.location.href = 'mascotas.html';
                    }
                })
            }
        });


    }

    if (nombre.value == "") {
        error = true;
        nombre.classList.add('input-error');
    } else {
        nombre.classList.remove('input-error');
    }

    if (fotografia.value == "") {
        error = true;
        fotografia.classList.add('input-error');
    } else {
        fotografia.classList.remove('input-error');
    }


    if (direccion.value == "") {
        error = true;
        direccion.classList.add('input-error');
    } else {
        direccion.classList.remove('input-error');
    }


    if (cuidado.value == "") {
        error = true;

        cuidado.classList.add('input-error');
    } else {
        cuidado.classList.remove('input-error');
    }
    if (padecimiento.value == "") {
        error = true;
        padecimiento.style.borderColor = "red"
        padecimiento.classList.add('input-error');
    } else {
        padecimiento.classList.remove('input-error');
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

guardar.addEventListener('click', validacion);