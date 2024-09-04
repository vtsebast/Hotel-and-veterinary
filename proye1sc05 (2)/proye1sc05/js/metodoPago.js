const btnPagar = document.getElementById("btn-enviar")
const nombreDuenho = document.getElementById("txt-nombreHolder")
const numeroTarjeta1 = document.getElementById("int-tarjeta1")
const numeroTarjeta2 = document.getElementById("int-tarjeta2")
const numeroTarjeta3 = document.getElementById("int-tarjeta3")
const numeroTarjeta4 = document.getElementById("int-tarjeta4")
const numeroTarjetaCompleto = (numeroTarjeta1.value + numeroTarjeta2.value + numeroTarjeta3.value + numeroTarjeta4.value)
const expiracionMes = document.getElementById("seleccion-mesExpiracion")
const expiracionAnho = document.getElementById("seleccion-anhoExpiracion")
const fechaExpiracion = (expiracionMes.value + expiracionAnho.value)
const CCV = document.getElementById("int-ccv")



const validacion = () => {
    let error = false;
    errorColor = [nombreDuenho, numeroTarjeta1, numeroTarjeta2, numeroTarjeta3, numeroTarjeta4, expiracionMes, expiracionAnho, CCV]
    let n;
    for (n = 0; n < errorColor.length; n++) {
        if (errorColor[n].value.length > 1) {
            errorColor[n].style.borderColor = "black";
        }
    }


    function validacionNumeros() {
        let n = document.form.numbers.value;

        if (isNaN(n)) {
            return false;
        } else {
            return true;
        }
    }
    const obtenerDatos = () => {

        let usuario = {
            'nombre': nombreDuenho.value,
            'ultimosNumTarjeta': numeroTarjeta4.value,
            'fechaExpiracionMes': expiracionMes.value,
            'fechaExpiracionAnho': expiracionAnho.value,
            'ccv': "***"
        }


        Swal.fire({
            icon: 'warning',
            title: '¿Desea registrar el método de pago ingresado?',
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Volver',
            cancelButtonColor: '#d33'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: '¡Método de pago registrado correctamente!',
                    icon: 'success',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#972181',
                    confirmButtonText: '¡Ver métodos de pago registrados!',
                    cancelButtonText: 'Cancelar'
                }).then((result2) => {
                    if (result2.isConfirmed) {
                        window.location.href = 'listarUsuariosMetodoPago.html';
                    }
                })
            }
        });


    }

    if (nombreDuenho.value == "") {
        error = true;
        nombreDuenho.classList.add('input-error');
    } else {
        nombreDuenho.classList.remove('input-error');
    }

    if (numeroTarjeta1.value == "") {
        error = true;
        numeroTarjeta1.classList.add('input-error');
    } else {
        numeroTarjeta1.classList.remove('input-error');
    }

    if (numeroTarjeta2.value == "") {
        error = true;
        numeroTarjeta2.classList.add('input-error');
    } else {
        numeroTarjeta2.classList.remove('input-error');
    }


    if (numeroTarjeta3.value == "") {
        error = true;
        numeroTarjeta3.classList.add('input-error');
    } else {
        numeroTarjeta3.classList.remove('input-error');
    }


    if (numeroTarjeta4.value == "") {
        error = true;

        numeroTarjeta4.classList.add('input-error');
    } else {
        numeroTarjeta4.classList.remove('input-error');
    }
    if (expiracionMes.value == "MM") {
        error = true;
        expiracionMes.style.borderColor = "red"
        nombreDuenho.classList.add('input-error');
    } else {
        nombreDuenho.classList.remove('input-error');
    }

    if (expiracionAnho.value == "YYYY") {
        error = true;
        expiracionAnho.style.borderColor = "red"
        nombreDuenho.classList.add('input-error');
    } else {
        nombreDuenho.classList.remove('input-error');
    }

    if (CCV.value == "") {
        error = true;
        nombreDuenho.classList.add('input-error');
    } else {
        nombreDuenho.classList.remove('input-error');
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


btnPagar.addEventListener('click', validacion);