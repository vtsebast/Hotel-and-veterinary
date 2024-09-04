const cuerpoTabla = document.querySelector('.tbl tbody');

const llenartabla = () => {
    cuerpoTabla.innerHTML = "";

    mascotasRegistradas.forEach(mascotasRegistradas => {
        let fila = cuerpoTabla.insertRow();

        fila.insertCell().textContent = mascotasRegistradas.nombre
        fila.insertCell().innerHTML = `<img src="` + mascotasRegistradas.fotografia + `" class="table-img"></img>`
        fila.insertCell().textContent = mascotasRegistradas.direccion
        fila.insertCell().textContent = mascotasRegistradas.cuidados
        fila.insertCell().textContent = mascotasRegistradas.padecimientos

        let tdAcciones = fila.insertCell();
        let btnPerfil = document.createElement('button');
        btnPerfil.textContent = 'Ver perfil';
        btnPerfil.type = 'button';
        btnPerfil.classList.add('btn-perfilMascota');


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
        tdAcciones.appendChild(btnPerfil);
        btnPerfil.addEventListener('click', () => {
            window.location.href = '../html/perfilMascota.html';
        })

    });
};

llenartabla();