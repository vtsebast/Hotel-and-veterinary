const btnIngresar = document.getElementById('iniciar-sesion-button');
const iniciarSesion = async() => {
    const { value: formValues } = await Swal.fire({
        title: 'Inicio de sesión',
        html: '<label id="txt-CorreoInicio">Correo eletrónico:</label><input id="txt-correo-inicio" class="swal2-input" type="email">' +
            '<label id="txt-Contrasenna">Contraseña:</label><input id="txt-contrasenna" class="swal2-input" type="password">',
        focusConfirm: false,
        confirmButtonText: 'Iniciar sesión',
        confirmButtonColor: '#05C793',
        preConfirm: () => {
            const correoLleno = Swal.getPopup().querySelector('#txt-correo-inicio').value
            const contrasennaLlena = Swal.getPopup().querySelector('#txt-contrasenna').value

            return [
                document.getElementById('txt-correo-inicio').value,
                document.getElementById('txt-contrasenna').value
            ]
        }
    })
    if (formValues) {
        let correo = formValues[0];
        let contrasenna = formValues[1];
        validarCredenciales(correo, contrasenna);
    }
};
const validarCredenciales = (correo, contrasenna) => {
    let usuarioValidado = false;
    usuarios.forEach(objUsuario => {
        if (objUsuario.correo == correo && objUsuario.contrasenna == contrasenna) {
            usuarioValidado = true;
            localStorage.setItem('usuarioConectado', JSON.stringify(objUsuario));
        }
    });
    if (usuarioValidado == false) {
        Swal.fire({
            'title': 'No se ha podido iniciar sesión',
            'text': 'El correo del usuario o la contraseña son incorrectos',
            'icon': 'warning',
            'confirmButtonText': 'Entendido'
        });
    } else {
        Swal.fire({
            'title': 'Inicio de sesión correcto',
            'text': 'Bienvenido',
            'icon': 'success',
            'confirmButtonText': 'Entendido'
        }).then(() => {
            let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
            if (usuarioConectado.rol == 2) {
                window.location.href = 'html/inicioUsuario.html';
            } else if (usuarioConectado.rol == 1) {
                window.location.href = 'html/inicioUsuarioAdmin.html';
            } else if (usuarioConectado.rol == 3) {
                window.location.href = 'html/inicioUsuarioDoc.html';
            } else if (usuarioConectado.rol == 4) {
                window.location.href = 'html/inicioUsuarioSecre.html';
            }
        });
    }
};


btnIngresar.addEventListener('click', iniciarSesion);