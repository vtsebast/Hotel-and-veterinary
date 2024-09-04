let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
const btnRegistrar = document.getElementById("btn-enviar")
const rol = document.getElementById("Rol")
const Nombre = document.getElementById("txt-nombre");
const Apellidos = document.getElementById("txt-apellidos");
const Cedula = document.getElementById("txt-cedula");
const Email = document.getElementById("txt-email");
const Telefono = document.getElementById("txt-telefono");
const Contrasena = document.getElementById("txt-contrasena");
const ContrasenaConfirm = document.getElementById("txt-contrasena-confirm");
const Direccion = document.getElementById("txt-direccion");

const formText = document.querySelectorAll(".txt-form")

const txtNombre = document.getElece

let successRegister = () => {
    let error = false;
    let error2 = false;

    if (Nombre.value == "" || Apellidos.value == "" || Cedula.value == "" || Email.value == "" || Telefono.value == "" || Contrasena.value == "" || ContrasenaConfirm.value == "" || Direccion.value == "") {
        error = true;
        formText.forEach(element => {
            if (element.value == "") {
                element.classList.add("txt-form_error")
            } else {
                console.log(element.value)
                element.classList.remove("txt-form_error")
            }
        })
    }

    if (Contrasena.value != ContrasenaConfirm.value) {
        error = true;
        ContrasenaConfirm.classList.add("txt-form_error")
    } else {
        ContrasenaConfirm.classList.remove("txt-form_error")
    }


    if (error == true) {
        Swal.fire({
            'icon': 'error',
            'title': 'Datos ingresados incorrectamente',
            'text': 'Verifica que ningun dato este incorrecto',
            'confirmButtonText': '¡Adelante!'
        })

    } else {
        obtenerDatos();
    }
};

const obtenerDatos = () => {

    //Variable de tipo JSON
    formText.forEach(element => {
        element.classList.remove("txt-form_error")
    })
    let usuario = {
        'rol': rol.value,
        'nombre': Nombre.value,
        'apellidos': Apellidos.value,
        'cedula': Cedula.value,
        'correo': Email.value,
        'numero': Telefono.value,
        'contrasenna': Contrasena.value,
        'confcontra': ContrasenaConfirm.value,
        'direccion': Direccion.value



    };
    if (usuarioConectado.rol == 1) {
        registrarDatos('registrar-usuario', usuario, 'usuarios.html');
    } else {
        registrarDatos('registrar-usuario', usuario, '../index.html');
    }
};

btnRegistrar.addEventListener('click', successRegister)