let usuarioConectado = JSON.parse(localStorage.getItem('usuarioConectado'));
let opcionesNav = document.querySelectorAll('.header-principal nav a');
let opcionesMenu = document.querySelectorAll('.sct-servicios ul li a')

const mostrarOpciones = () => {

    switch (usuarioConectado.rol) {
        case 1:
            opcionesNav[7].classList.add('ocultar');
            break;
        case 2:
            opcionesNav[1].classList.add('ocultar');
            opcionesNav[4].classList.add('ocultar');
            opcionesNav[6].classList.add('ocultar');
            break;
        case 3:
            opcionesNav[3].classList.add('ocultar');
            opcionesNav[4].classList.add('ocultar');
            opcionesNav[5].classList.add('ocultar');
            opcionesNav[6].classList.add('ocultar');
            opcionesNav[7].classList.add('ocultar');
            break;
        case 4:
            opcionesNav[1].classList.add('ocultar');
            opcionesNav[3].classList.add('ocultar');
            opcionesNav[5].classList.add('ocultar');
            opcionesNav[6].classList.add('ocultar');
            opcionesNav[7].classList.add('ocultar');
            break;
    }

};

mostrarOpciones();