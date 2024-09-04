let usuarioConectados = JSON.parse(localStorage.getItem('usuarioConectado'));
const cuerpoTabla = document.querySelector('.tbl tbody');
let citas = [];

const llenarArregloCitas = async() => {
    citas = await getDatos('listar-citas');
    llenartabla();
};

let nombreCompleto = usuarioConectados.nombre + " " + usuarioConectados.apellidos;

const llenartabla = () => {
    cuerpoTabla.innerHTML = "";

    if (usuarioConectados.rol == 2) {

        citas.forEach(cita => {
            if (nombreCompleto == cita.nombreDuenno) {

                let fila = cuerpoTabla.insertRow();

                let fechaCita = cita.fechaCita
                console.log(moment)

                let fechaConvert = moment(fechaCita).format("YYYY-DD-MM");
                console.log(fechaConvert)

                fila.insertCell().textContent = cita.nombreDuenno;
                fila.insertCell().textContent = cita.nombreMascota;
                fila.insertCell().textContent = fechaConvert;
                fila.insertCell().textContent = cita.horaCita;
                fila.insertCell().textContent = cita.observaciones

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
                btnEditar.addEventListener('click', () => {
                    Swal.fire({
                        title: '¿Está seguro que desea editar este usuario?',
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
                btnEditar.addEventListener('click', () => {
                    Swal.fire({
                        title: '¿Está seguro que desea modificar esta cita?',
                        showCancelButton: true,
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Modificar',
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
                        title: '¿Está seguro que desea cancelar esta cita?',
                        text: "Esta acción no se puede revertir",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: '¡Sí, eliminar!',
                        cancelButtonText: 'Cancelar'

                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                '¡Cita cancelada!',
                                '',
                                'success'
                            )
                        }
                    })

                });


            };
        });


    } else {

        citas.forEach(cita => {

            let fila = cuerpoTabla.insertRow();

            let fechaCita = cita.fechaCita
            console.log(moment)

            let fechaConvert = moment(fechaCita).format("YYYY-DD-MM");
            console.log(fechaConvert)

            fila.insertCell().textContent = cita.nombreDuenno;
            fila.insertCell().textContent = cita.nombreMascota;
            fila.insertCell().textContent = fechaConvert;
            fila.insertCell().textContent = cita.horaCita;
            fila.insertCell().textContent = cita.observaciones

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
            btnEditar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Está seguro que desea editar este usuario?',
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
            btnEditar.addEventListener('click', () => {
                Swal.fire({
                    title: '¿Está seguro que desea modificar esta cita?',
                    showCancelButton: true,
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Modificar',
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
                    title: '¿Está seguro que desea cancelar esta cita?',
                    text: "Esta acción no se puede revertir",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '¡Sí, eliminar!',
                    cancelButtonText: 'Cancelar'

                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '¡Cita cancelada!',
                            '',
                            'success'
                        )
                    }
                })

            });

        });
    };
};
let btnEditar = document.getElementsByClassName('btn-editar')
let btnEliminar = document.getElementsByClassName('btn-eliminar')

llenarArregloCitas();