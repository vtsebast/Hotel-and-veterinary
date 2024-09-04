let usuarioConectados = JSON.parse(localStorage.getItem('usuarioConectado'));
const nombreDuenno = document.getElementById('txt-nombreDuenno');
const seleccionnombreMascota = document.getElementById('nombreMascota');

let mascotas = [];
let clientes = [];

const llenarArreglosClientes = async() => {
    clientes = await getDatos('listar-usuarios');
    llenartabla();
};

const llenarArreglosMascotas = async() => {
    mascotas = await getDatos('listar-usuarios');
    llenarMascotas();
};


const llenartabla = () => {



    if (usuarioConectados.rol == 2) {

        let opcion = document.createElement('option');
        opcion.value = usuarioConectados.nombre + " " + usuarioConectados.apellidos;
        opcion.innerHTML = usuarioConectados.nombre + " " + usuarioConectados.apellidos;
        nombreDuenno.appendChild(opcion);


    } else {
        clientes.forEach(cliente => {
            let opcion = document.createElement('option');
            opcion.value = cliente.nombre + " " + cliente.apellidos;
            opcion.innerHTML = cliente.nombre + " " + cliente.apellidos;
            nombreDuenno.appendChild(opcion);
        });
    }






};

const llenarMascotas = () => {




    mascotas.forEach(mascota => {
        let opcion = document.createElement('option');
        opcion.value = mascota.nombre;
        opcion.innerHTML = mascota.nombre;
        seleccionnombreMascota.appendChild(opcion);
    });






};

llenarArreglosClientes()
llenarArreglosMascotas()