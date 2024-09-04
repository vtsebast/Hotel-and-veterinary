const btnRegistrar = document.getElementById("btn-enviar")
const cvv = document.getElementById("int-ccv");


let successPay = () => {

    if (cvv.value == "") {
        Swal.fire({
            'icon': 'error',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Verifique que el cvv este correcto ',
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
            'text': '¡El pago se realizó correctamente!',
            'confirmButtonText': '¡Adelante!'
        }).then(() => {
            window.location.href = '../html/factura.html';
        });
        formText.forEach(element => {
            element.classList.remove("txt-form_error")
        })
    }
}

btnRegistrar.addEventListener('click', successPay)