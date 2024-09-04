const cuerpoTabla = document.querySelector('.tbl tbody');
//const inputFiltro = document.getElementById('txt-filtro');


let reservaciones = [];


const llenarArreglosReservaciones = async() => {
    reservaciones = await getDatos('listar-reservaciones');
    llenartabla();
};

const llenartabla = () => {
    cuerpoTabla.innerHTML = '';

    reservaciones.forEach(reservacion => {


        let fila = cuerpoTabla.insertRow();

        let fechaEntrada = reservacion.fechaEntrada
        let fechaSalida = reservacion.fechaSalida

        console.log(moment)

        let fechaEntradaConvertida = moment(fechaEntrada).format("YYYY-DD-MM");
        console.log(fechaEntradaConvertida)

        let fechaSalidaConvertida = moment(fechaSalida).format("YYYY-DD-MM");
        console.log(fechaSalidaConvertida)


        fila.insertCell().textContent = reservacion.nombre;
        fila.insertCell().textContent = reservacion.mascota;
        fila.insertCell().textContent = fechaEntradaConvertida;
        fila.insertCell().textContent = fechaSalidaConvertida

        // Añade los botones de acción.
        let tdAcciones = fila.insertCell();
        let btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.type = 'button';
        btnEditar.classList.add('btn-editar');

        let btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.type = 'button';
        btnEliminar.classList.add('btn-eliminar');

        tdAcciones.appendChild(btnEditar);
        tdAcciones.appendChild(btnEliminar);
        btnEditar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea editar esta mascota?',
                showCancelButton: true,
                cancelButtonColor: '#d33',
                confirmButtonText: 'Editar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    Swal.fire('¡Editado!', '', 'success')
                }
            })

        })
        btnEliminar.addEventListener('click', () => {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la información?',
                text: "Esta acción no se puede revertir",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Sí, eliminar!',
                cancelButtonText: 'Cancelar'

            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarDatos('eliminar-reservacion', reservacion._id);

                }
            })

        });

        tdAcciones.appendChild(btnEliminar);


    });
};


//inputFiltro.addEventListener('keyup', llenarTabla);
llenarArreglosReservaciones()

document.getElementById('btn-agregar').addEventListener('click', () => {
    window.location.href = 'reserv.html';
});