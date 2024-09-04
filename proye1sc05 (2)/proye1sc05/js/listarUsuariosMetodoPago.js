const cuerpoTabla = document.querySelector('.tbl tbody');

const llenartabla = () => {
    cuerpoTabla.innerHTML = "";

    metodosPagoRegistrados.forEach(metodoPagoTemp => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = metodoPagoTemp.nombre
        fila.insertCell().textContent = '*' + metodoPagoTemp.ultimosNumTarjeta
        fila.insertCell().textContent = metodoPagoTemp.fechaExpiracionMes + '/' + metodoPagoTemp.fechaExpiracionAnho

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
                title: '¿Está seguro que desea editar este metodo de pago?',
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
                        'El método de pago fue borrado',
                        'success'
                    )
                }
            })

        });

    });
};

llenartabla();