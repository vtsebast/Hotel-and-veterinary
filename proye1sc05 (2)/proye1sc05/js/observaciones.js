const btnGuardar = document.getElementById("btn-guardar")

const Fecha = document.getElementById("txt-fecha");
const Motivo = document.getElementById("txt-motivo");
const Comentario = document.getElementById("txt-comentario");

let successRegister = () => {

    if (Fecha.value == "" || Motivo.value == "" || Comentario.value == "") {
        Swal.fire({
            'icon': 'error',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Verifica que ningun dato este vacío',
            'confirmButtonText': '¡Adelante!'
        })
        formText.forEach(element => {
            if (element.value == "") {
                element.classList.add("txt-form_error")
            } else {
                console.log(element.value)
                element.classList.remove("txt-form_error")
            }
        })
    } else {
        Swal.fire({
            'icon': 'sucess',
            'title': 'Datos ingresados correctamente',
            'text': '¡El usuario se registró correctamente!',
            'confirmButtonText': '¡Adelante!'
        })
        formText.forEach(element => {
            element.classList.remove("txt-form_error")
        })
    }
}

btnGuardar.addEventListener('click', successRegister)