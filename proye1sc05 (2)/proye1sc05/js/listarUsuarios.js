const cuerpoTabla = document.querySelector('.tbl tbody');
let usuarios = [];

const llenarArregloUsuarios = async() => {
    usuarios = await getDatos('listar-usuarios');
    llenartabla();
};

const llenartabla = () => {
    cuerpoTabla.innerHTML = "";

    usuarios.forEach(metodoPagoTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = metodoPagoTemp.nombre + " " + metodoPagoTemp.apellidos
        fila.insertCell().textContent = metodoPagoTemp.correo
        fila.insertCell().textContent = metodoPagoTemp.contrasenna
        fila.insertCell().textContent = metodoPagoTemp.rol

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

        tdAcciones.appendChild(btnEliminar);
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
                    Swal.fire(
                        '¡Registro eliminado!',
                        'El usuario fue borrado',
                        'success'
                    )
                }
            })

        });

    });
};

llenarArregloUsuarios();